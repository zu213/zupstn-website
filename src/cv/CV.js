import download from '../icons/white-download.png';
import './CV.css';
import { BreadcrumbLink } from '../util/Breadcrumbs';
import FadeInSection from '../util/FadeIn'; 

function CV() {

  return (
    <div className='cv-page'>
      <div className='cv-page-links'>
        <a className="small-link" href="/documents/CV_short.pdf" download="Zachary Upstone CV">
          Download <img className="download-image" src={download} alt="Download"></img>
        </a>
      </div>

      <div className='cv'>
        <h1 className='cv-title'>
          Zachary Upstone
        </h1>

        <FadeInSection>
          <hr />
          <div className='cv-skills'>
            <h2>Skills</h2>
            <hr />

            <div className='cv-skills-lists'>
              <ul className='cv-skills-list'>
                <li><b>Frontend</b>: Vue, Angular, React, TypeScript</li>
                <li><b>Backend</b>: REST API’s, PHP, Express, Fastify</li>
                <li><b>Other languages</b>: Python, C++, C, C#</li>
              </ul>
              <ul className='cv-skills-list'>
                <li><b>Native</b>: Swift, SwiftUI, Objective-C, Java, Kotlin</li>
                <li><b>Testing</b>: Pest, Gherkin, Selenium</li>
                <li><b>Tools</b>: Docker, Git, Jira, Bitbucket, CI/CD, AWS</li>
              </ul>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <hr />
          <div className='cv-experience'>
            <h2>
              Experience
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
                  <span>Nov 2024 - Present</span>
                </div>
                <ul>
                  <li>Modernised front-end code with <b>Vue</b>, eliminating legacy tech debt between native and web, fixing
                    bugs, improving maintainability, and collaborating with designers to refine UI/UX.
                  </li>
                  <li>Enhanced native applications by integrating new SDKs and leading feature development from concept
                    to delivery, including user-facing improvements such as app Toasts to improve feature discovery.
                  </li>
                  <li>Managed theming, localisation, and content for 100+ newspapers and magazines to reduce the need
                    for custom code, while maintaining an automated test suite to ensure consistent, high-quality releases
                  </li>
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
                  <span>Student Software Developer</span>
                  <span>Jul 2022 - Jun 2023</span>
                </div>
                <ul>
                  <li>Developed new product features using <b>Angular</b>, including an OS updates page and inter-
                    active product tour, while debugging and supporting QA sprints in an Agile environment.
                  </li>
                  <li>Contributed to the QA team by writing automated unit, API, and UI tests with <b>Gherkin</b> and <b>Selenium</b>,
                    reducing manual testing effort while automating test upload via Zephyr with Python.
                  </li>
                  <li>Performed manual testing and coordinated QA sprint tasks, collaborating across teams to meet release
                    deadlines and maintain quality standards.
                  </li>
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
                  <span>2020 - 2024</span>
                </div>
                <div className='cv-education-instance-info'>
                  Computer Science BSc - First Class Honours - Overall grade – 74.51%
                  <ul>
                    <li>Units including: Final year project (Dissertation), Logic and semantics of programming languages,
                      Entrepreneurship, Reinforcement learning, Advanced graphics processing.</li>
                    <li>For my final year dissertation, I explored whether Reinforcement learning Human Feed improved
                      established image synthesis methods utilising Python, Pytorch and Numpy.</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className='cv-education-instance'>
                <div className='cv-education-instance-title'>
                  <span><b>Chesham Grammar School</b></span>
                  <span>2013 - 2020</span>
                </div>
                <div className='cv-education-instance-info'>
                  <div>
                    <b>A level</b>: Further Mathematics (A), Mathematics (A*), Computer Science (A), Physics (A).
                  </div>
                  <div>
                    <b>GCSEs</b>: 4 grade 9’s, 2 grade 8’s, 3 grade 6’s, 1 grade 5, 1 grade A
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>


        </FadeInSection>

        <FadeInSection>
          <hr />
          <div className='cv-achievements'>
            <h2>Achievements</h2>
            <hr />
            <ul>
              <li>AWS Cloud practioner</li>
              <li>Gold DofE</li>
              <li>Volunteered at WorkAid for 18 months</li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection>
          <hr />
          <div className='cv-projects'>
            <h2> Projects</h2>
            <hr />
            <div className='cv-projects-info'>Find my projects <BreadcrumbLink className='small-link'>here</BreadcrumbLink>.</div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

export default CV;