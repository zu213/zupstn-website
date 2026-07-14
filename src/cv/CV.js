import './CV.css';
import { BreadcrumbLink } from '../util/Breadcrumbs';
import FadeInSection from '../util/FadeIn'; 

function CV() {

  return (
    <div className='cv-page'>
      <div className='cv-page-links'>
        <a className="small-link" href="/documents/CV_short.pdf" download="Zachary Upstone CV">
          PDF Download
        </a> &nbsp;| &nbsp;
        <a className="small-link" href="https://www.linkedin.com/in/zachary-upstone-076218214/" target="_blank" rel="noreferrer">LinkedIn</a> &nbsp; | &nbsp;
        <a className="small-link" href="https://github.com/zu213" target="_blank" rel="noreferrer">Github</a> 
      </div>

      <div className='cv'>
        <h1 className='cv-title'>
          Zachary Upstone
        </h1>

        <FadeInSection>
          <hr />
          <div className='cv-skills'>
            <h2>SKILLS</h2>
            <hr />

            <div className='cv-skills-lists'>
              <ul className='cv-skills-list'>
                <li><b>Frontend</b>: Vue, React, Angular, HTML, CSS</li>
              </ul>
              <ul className='cv-skills-list'>
                <li><b>Backend</b>: Node.js, Express, Fastify</li>
              </ul>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <hr />
          <div className='cv-experience'>
            <h2>
              EXPERIENCE
            </h2>
            <hr />
            <FadeInSection>
              <div className='cv-experience-job'>
                <div className='cv-experience-job-title'>
                  <span><b>Pugpig</b></span>
                  <span>London, UK</span>
                </div>
                <div className='cv-experience-job-subtitle'>
                  <span>Product Developer</span>
                  <span className='date'>Oct 2024 - Present</span>
                </div>
                <div className='tag-holder'>
                  <span className='tag green'>Vue</span>
                  <span className='tag blue'>TypeScript</span>
                  <span className='tag blue'>React</span>
                  <span className='tag blue'>Angular</span>
                </div>
                <ul>
                  <li>Led migration of multiple production codebases from JavaScript to TypeScript, improving type safety, reducing future maintenance costs and enabling safer feature development.</li>
                  <li>Improved the platform’s theming and localisation architecture to support 100+ publications with minimal custom code, while maintaining a robust automated test suite for safe, repeatable releases.</li>
                  <li>Delivered customer-facing features from discovery to post-release analysis, including personalised Followed Topics timelines and toast notifications that increased feature discovery by X%.</li>
                  <li>Implemented a redesigned subscription journey alongside designers and QA, increasing subscription conversions by X%.</li>
                  <li>Modernised the iOS application to support Apple’s new Liquid Glass design system across legacy devices and highly customised publication themes.</li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className='cv-experience-job'>
                <div className='cv-experience-job-title'>
                  <span><b>Bsquare</b></span>
                  <span>Trowbridge, UK</span>
                </div>
                <div className='cv-experience-job-subtitle'>
                  <span>Software Developer</span>
                  <span className='date'>Jul 2022 - Jun 2023</span>
                </div>
                <div className='tag-holder'>
                  <span className='tag yellow'>Selenium</span>
                  <span className='tag blue'>Python</span>
                  <span className='tag green'>Gherkin</span>
                </div>
                <ul>
                  <li>Delivered new product features, including an OS updates dashboard and interactive onboarding experience, while supporting debugging and QA throughout Agile development cycles.</li>
                  <li>Expanded the automated testing suite with unit, API and UI tests using Gherkin and Selenium, and automated Zephyr test uploads with Python.</li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </FadeInSection>

        <FadeInSection>
          <hr />
          <div className='cv-education'>
            <h2>
              Education
            </h2>
            <hr />
            <FadeInSection>
              <div className='cv-education-instance'>
                <div className='cv-education-instance-title'>
                  <span><b>University of Bath</b></span>
                  <span><i>2020 - 2024</i></span>
                </div>
                <div className='cv-education-instance-subtitle'>
                  <span>Computer Science BSc(Hons)</span><span> First Class Honours - 74.51%</span>
                </div>
                <div className='tag-holder'>
                  <span className='tag blue'>Python</span>
                  <span className='tag yellow'>C</span>
                  <span className='tag green'>C++</span>
                </div>
                <div className='cv-education-instance-info'>
                  Units including:
                  <ul>
                    <li>
                      <b>Final year project (Dissertation)</b> - <span className='link-coloured'>71%</span> - titled <i>"Human Involvement Can Improve Current Image
                      Synthesis Methods within the Domain of Art"</i> explored using human feedback to improve current
                      AI image generation techniques in a manner similar to ChatGPT.
                    </li>
                    <li>
                      <b>Reinforcement learning</b> - <span className='link-coloured'>71%</span> - Working as a group, we implemented DQN, RAINBOW and PPO
                      using PyTorch to solve the lunar lander environment in OpenAI’s gym.
                    </li>
                    <li>
                      <b>Advanced graphics processing</b> - <span className='link-coloured'>89%</span> - From scratch I developed a ray tracer, implementing
                      reflection, refraction and other lighting effects, to create a realistic generated image.
                    </li>
                    <li>
                      <b>Entrepreneurship</b> - <span className='link-coloured'>72%</span> - Working as a team we started a company and developed a business plan
                      based around selling services within a student community.
                    </li>
                    <li>
                      <b>Logic and semantics of programming languages</b> - <span className='link-coloured'>81%</span> - I studied how Category Theory relates to
                      the underlying logic of programming languages, including the lambda calculus and Closed Cartesian
                      Categories.
                    </li>
                    <li>
                      <b>Graphs and Networks: Theory and Applications</b> - <span className='link-coloured'>73%</span> - I studied Graph Theory and its applications, including Katz Centrality, Spanning trees and Contagions.
                    </li>
                    <li>
                      <b>Safety-critical systems</b> - <span className='link-coloured'>79%</span> - I studied case studies of system’s shortcomings in relation to safety
                      in the past and how to mitigate or prevent such problems in the future.
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className='cv-education-instance'>
                <div className='cv-education-instance-title'>
                  <span><b>Chesham Grammar School</b></span>
                  <span><i>2013 - 2020</i></span>
                </div>
                <div className='cv-education-instance-info'>
                  <div>
                    <b>A level</b>:
                    Mathematics (<span className='link-coloured'>A*</span>),
                    Further Mathematics (<span className='link-coloured'>A</span>),
                    Computer Science (<span className='link-coloured'>A</span>),
                    Physics (<span className='link-coloured'>A</span>).
                  </div>
                  <div>
                    <b>GCSE</b>: 4 grade 9’s, 2 grade 8’s, 3 grade 6’s, 1 grade 5, 1 grade A
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </FadeInSection>

        <FadeInSection>
          <hr />
          <div className='cv-achievements'>
            <h2>ACHIEVEMENTS</h2>
            <hr />
            <ul>
              <li>AWS Certified Cloud Practitioner</li>
              <li>Volunteered at WorkAid for 18 months</li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection>
          <hr />
          <div className='cv-projects'>
            <h2> PROJECTS</h2>
            <hr />
            <div className='cv-projects-info'>Find my projects <BreadcrumbLink className='small-link' to='/projects'>here</BreadcrumbLink>.</div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

export default CV;
