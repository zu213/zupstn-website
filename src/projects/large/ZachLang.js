import compilerDiagramPNG from './media/zachlang.png';
import compilerDiagram from './media/zachlang.webp';

function ZachLang(props) {

  return (
    <div>
      <div>
        <a href="https://github.com/zu213/zach-lang" className="small-link" target="_blank" rel="noreferrer">Repository</a>
        <br/>
      </div>
      <div className='large-project-inline-structure left-align top-padding indent-mask'>
          A compiler for my new language "<b>Zach Lang</b>".
        <br />
        <br />
        Zach Lang is very similar to JavaScript but introduces one key concept: <b>tags</b>.
        <br />
        <br />
        Tags are like lightweight types. Unlike TypeScript or other typed supersets of JS:
        <ul>
          <li>There are no built-in tags; all tags are user-defined.</li>
          <li>Tags are only enforced when passed into <b>tagged functions</b>.</li>
          <li>Tagged functions declare tags on their parameters. At compile time the compiler checks if the provided variable carries the expected tag.</li>
        </ul>
        <br />
        Zach Lang’s compiler processes the input <code>.zl</code> file as a string.
        This keeps the compiler lightweight and easy to extend.
        This allows me to process the code without the compiler actually understanding it keeping the compiler small.
        <br />
        <br />
          The process works as follows:
        <ol>
          <li><b>Tokenisation</b> - The compiler reads the source file and recursively splits it into nested arrays (one array per block). This is handled by <code>tokeniseRecursive</code> and <code>extractBlock</code>.</li>
          <li><b>Stripping</b> - The tagged portions of code (variables and function signatures) are extracted and converted down to pure JavaScript using <code>stripToJS</code>.</li>
          <li><b>Rule Processing</b> - Tags are validated. Functions like <code>processVariables</code>, <code>collectRules</code>, and <code>applyRules</code> ensure that tags are only used in valid contexts.</li>
          <li><b>Reconstruction</b> - Once tags are validated and removed, the stripped tokens are rejoined recursively (via <code>recursiveJoin</code>) into valid JavaScript. This can be as simple as joining with newline characters.</li>
        </ol>
      </div>
      <div className='medium-project-inline-structure'>
        <figure onClick={props.displayMask}>
          <picture>
            <source srcSet={compilerDiagram} type="image/webp" />
            <img src={compilerDiagramPNG} alt="Zach Lang compiler diagram" />
          </picture>
          <figcaption>Figure: How the compiler in Zach Lang works under the hood.</figcaption>
        </figure>
      </div>
    </div>

  );
}

export default ZachLang;