#!/usr/bin/env node
/**
 * update-cv.mjs
 *
 * Reads public/documents/CV_short.pdf, extracts its text, then calls the
 * Groq API to regenerate CV.js so its content mirrors the PDF while
 * preserving all existing JSX structure, CSS class names, and formatting.
 *
 * Usage:
 *   node scripts/update-cv.mjs
 *
 * Requires:
 *   GROQ_API_KEY env var (or in .env.local)  — free at console.groq.com
 *   pdftotext (poppler-utils) — installed automatically in the GitHub Action.
 *   For local use: brew install poppler
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ---------------------------------------------------------------------------
// 1. Load API key
// ---------------------------------------------------------------------------
let apiKey = process.env.GROQ_API_KEY;
if (!apiKey) {
  const envFile = path.join(ROOT, '.env.local');
  if (fs.existsSync(envFile)) {
    for (const line of fs.readFileSync(envFile, 'utf8').split('\n')) {
      const m = line.match(/^GROQ_API_KEY=(.+)$/);
      if (m) { apiKey = m[1].trim(); break; }
    }
  }
}
if (!apiKey) {
  console.error('GROQ_API_KEY not set. Add it to your environment or .env.local');
  console.error('Get a free key at: https://console.groq.com');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 2. Extract text from the PDF
// ---------------------------------------------------------------------------
const pdfPath = path.join(ROOT, 'public/documents/CV_short.pdf');
if (!fs.existsSync(pdfPath)) {
  console.error(`PDF not found: ${pdfPath}`);
  process.exit(1);
}

let pdfText;
try {
  pdfText = execSync(`pdftotext "${pdfPath}" -`, { encoding: 'utf8' });
  console.log(`Extracted PDF text via pdftotext (${pdfText.length} chars)`);
} catch {
  console.error('pdftotext not found. Install it with: brew install poppler');
  console.error('On Ubuntu/Debian: apt-get install poppler-utils');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 3. Read current CV.js and snapshot the education block
// ---------------------------------------------------------------------------
const cvJsPath  = path.join(ROOT, 'src/cv/CV.js');
const currentCv = fs.readFileSync(cvJsPath, 'utf8');

// Extract the full <div className='cv-education'>...</div> block by counting
// JSX opening/closing tags so nested divs are handled correctly.
function extractJsxBlock(source, openingTag) {
  const start = source.indexOf(openingTag);
  if (start === -1) return null;

  let depth = 0;
  let i = start;
  while (i < source.length) {
    if (source[i] === '<') {
      if (source[i + 1] === '/') {
        depth--;
        if (depth === 0) {
          const closeEnd = source.indexOf('>', i) + 1;
          return source.slice(start, closeEnd);
        }
      } else if (source[i + 1] !== '!' && source[i + 1] !== '?') {
        // Self-closing tags don't increase depth
        const tagEnd = source.indexOf('>', i);
        if (source[tagEnd - 1] !== '/') depth++;
      }
    }
    i++;
  }
  return null;
}

const educationBlock = extractJsxBlock(currentCv, "<div className='cv-education'>");
if (educationBlock) {
  console.log(`Snapshotted education block (${educationBlock.length} chars) — will restore after API call`);
} else {
  console.warn('Could not snapshot education block — proceeding without protection');
}

// ---------------------------------------------------------------------------
// 4. Call Groq API
// ---------------------------------------------------------------------------
console.log('Calling Groq API...');

const systemInstruction = `You are a code generator. You will be given the text content of a PDF CV and the current React CV.js component that renders it on a portfolio website. Your job is to regenerate CV.js so its content exactly matches the PDF, while keeping all existing JSX structure, CSS class names, imports, and formatting patterns identical.

Rules:
- Don't add the skills section
- Keep ALL imports exactly as-is ( CSS, BreadcrumbLink, FadeInSection)
- Keep the outer structure: cv-page > cv-page-links > cv (with the PDF download link)
- Keep all section wrappers: FadeInSection, hr, h2 headings, class names
- Keep the projects section at the bottom exactly as-is (it links to /projects, not pulled from the PDF)
- For each job/education entry, preserve the exact JSX pattern: title row, subtitle row, tag-holder, ul
- Use the same tag colour conventions already in the file (green=Vue, orange=Swift/SwiftUI/Objective-C, blue=Kotlin/Java, purple=PHP/Prisma, red=Angular, yellow=Selenium, etc.)
- Use link-coloured span for grades and scores
- If the PDF adds new sections not currently in the file, add them using the same patterns
- If the PDF removes content that was in the old file, remove it
- Keep as many skills as you can remember, always include Swift, SwiftUI, Objective-C, Kotlin, Vue,  TypeScript
- Don't add or edit the Projects section at the bottom — it should remain unchanged and is not sourced from the PDF
- Don't remove detail only add new details, move details or you can remove sectiosn / points if they are fully removed / not mnetioend in the pdf at all
- Ignore any content in the PDF that is not relevant to the CV (e.g. page numbers, headers/footers, etc.)
- Ignore headers like "Email | GitHub | LinkedIn | Website
- Output ONLY the complete CV.js file content — no explanation, no markdown fences, just the raw JS`;

const prompt = `Here is the extracted text from CV_short.pdf — this is the source of truth for what the CV page should contain:

<pdf_content>
${pdfText}
</pdf_content>

Here is the current CV.js to use as a style and structure reference:

<current_cv_js>
${currentCv}
</current_cv_js>

Please regenerate CV.js so the content matches the PDF exactly, preserving all existing JSX structure, class names, and formatting.`;

const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'authorization': `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    model: 'llama-3.3-70b-versatile',
    temperature: 0.1,
    max_tokens: 8192,
    messages: [
      { role: 'system', content: systemInstruction },
      { role: 'user',   content: prompt },
    ],
  }),
});

if (!response.ok) {
  const err = await response.text();
  console.error('Groq API error:', err);
  process.exit(1);
}

const data = await response.json();
let newCv = data.choices?.[0]?.message?.content;

if (!newCv) {
  console.error('Empty response from Groq:', JSON.stringify(data, null, 2));
  process.exit(1);
}

newCv = newCv.trim();

// ---------------------------------------------------------------------------
// 5. Strip accidental markdown fences
// ---------------------------------------------------------------------------
newCv = newCv.replace(/^```(?:jsx?|javascript)?\n/, '').replace(/\n```$/, '').trim();

// ---------------------------------------------------------------------------
// 6. Restore education block if the model trimmed it
// ---------------------------------------------------------------------------
if (educationBlock) {
  const newEducationBlock = extractJsxBlock(newCv, "<div className='cv-education'>");
  if (!newEducationBlock) {
    console.warn('Education block missing from output — skipping restore (structure may have changed)');
  } else if (newEducationBlock.length < educationBlock.length * 0.9) {
    console.log('Education block was trimmed by model — restoring original');
    newCv = newCv.replace(newEducationBlock, educationBlock);
  } else {
    console.log('Education block intact — no restore needed');
  }
}

// ---------------------------------------------------------------------------
// 8. Sanity checks before writing
// ---------------------------------------------------------------------------
const required = [
  "import './CV.css'",
  'function CV()',
  'export default CV',
  'cv-page',
  'FadeInSection',
  'BreadcrumbLink',
];

const missing = required.filter(r => !newCv.includes(r));
if (missing.length > 0) {
  console.error('Output failed sanity checks. Missing:');
  missing.forEach(m => console.error(' -', m));
  console.error('\nRaw output saved to scripts/cv-update-debug.js');
  fs.writeFileSync(path.join(ROOT, 'scripts/cv-update-debug.js'), newCv);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 9. Write the file
// ---------------------------------------------------------------------------
fs.writeFileSync(cvJsPath, newCv + '\n');
console.log('Updated: src/cv/CV.js');
