
// Normal imports
import { Route, Navigate, Routes, Link, HashRouter} from 'react-router-dom';
import './App.css';

// Page imports
import Art from './Art.js'
import Charts from './Charts.js';

// document imports
import cv from './documents/CV.pdf'
import dissertation from  './documents/Dissertation.pdf'

// Image imports
import dissertationUI from './images/di-ui.png'

// main app
function App() {
  return(
    <HashRouter>

      <div>
        <br/>
        <header>
          <div class="header">
            <div class="title">
              Zach Upstone
            </div>

            <div class="search-links">
              <Link id="home" to="/zach-upstone"> Home </Link> /
              <Link id="cv" to="/cv"> CV </Link> /
              <Link id="dissertation" to="/dissertation"> Dissertation </Link> /
              <Link id="gallery" to="/gallery"> Gallery </Link>
            </div>
          </div>
        </header>

        <br/>
        <hr class="top-hr"/>

      </div>
      <body>

        <Routes>
          <Route exact path='/' element={<Navigate to='/zach-upstone' />} />

          <Route path='/zach-upstone' element={<Home/>} />

          <Route path='/cv' element={<CV/>} />

          <Route path='/dissertation' element={<Dissertation/>} />

          <Route path='/gallery' element={<Art/>} />

          <Route path='/charts' element={<Charts/>} />

          <Route path='*' element={<NotFound/>} />
        </Routes>
      </body>
      </HashRouter>

  )
}


// subpages
function Home() {
  return (
    <div>
      <a href="mailto:Zac.upstone@gmail.com">Email</a> &nbsp; | &nbsp;
      <a href="https://www.linkedin.com/in/zachary-upstone-076218214/">LinkedIn</a> &nbsp; | &nbsp;
      <a href="https://github.com/zu213">Github</a>

      <div  class="text-holder">
        <u>Graduate:</u>
        <br/>
        I’m a recently graduated student from the University of Bath, Achieving a First class degree.
        From my degree I mainly have experience coding with <b>Python, Java and C++</b>. During my 
        final year I completed a dissertation on image synthesis with RLHF this can be found <Link to="/dissertation">here</Link>. As can be seen I have experience with AI
        specifically Reinforcement Learning and Image synthesis.
        <br/>
        During my degree units I completed include:
        <br/>
        Sem 2 year 3:
        Logic and semantics of programming languages, Graphs and Networks: Theory and Applications and
        Entrepreneurship.
        <br/>
        Sem 1 year 3:
        Reinforcement Learning,  Advanced computer graphics and Safety-critical systems.
        <br/>
        Sem 2 year 2:
        Comparitive programming, Functional programming, Human Computer interaction, Machine Learning II 
        and Experimental systems project II.
        <br/>
        Sem 1 year 2:
        Visual computing, Mathematics of computation, Data structures and algorithms , Machine Learning I 
        and Experimental systems project I.

        <br/>
        <br/>
        <u>Programmer:</u>
        <br/>
        During my university degree I completed a year long placement at BSquare a company which produces IoT solutions 
        working both in software development and QA. While working at BSquare I gained experience in <b>Angular(TS, HTML CSS)</b> as
        well as <b>Gherkin, Selenium and Lua</b>.

        This website is all made by me :), it runs using Github pages and a React framework.

        <br/>
        <br/>
        <u>Artist:</u>
        <br/>
        All my art stuff can be seen on the <Link to="/gallery">gallery</Link> page.

        <br/>
        <br/>
        <u>Fitness enthusiast:</u>
        <br/>
        Gym charts for fun can be seen on the <Link to="/charts">charts</Link> page.
      </div>
    </div>
  );
}

function CV() {
  return (
      <div>
        <a href={cv} download="Zachary Upstone CV">Zachary Upstone's CV Download</a>
        <br/>
        <br/>
        <embed src={cv} class="pdf-viewer" />
      </div>
  );
}

function Dissertation() {
  return (
    <div>
      <div class="subtitle" >
        Human Involvement Can Improve Current Image Synthesis Methods within the Domain of Art
        <br />
      </div>
      <div>
        <a href={dissertation} download="Zachary Upstone Dissertation">PDF</a>
        &nbsp; | &nbsp;
        <a href="https://github.bath.ac.uk/zu213/Dissertation-code" target="_blank" rel="noreferrer">Repo</a>
        <br/>
      </div>
      <div>
        <div  class="inline-block">
          <figure>
            <img class="ui-image" src={dissertationUI} alt="Dissertation UI"></img>
            <figcaption>The UI I created to allow the utlisation of RLHF</figcaption>
          </figure>
        </div>
        <div  class="inline-block">
          <div class="subtitle">
            Abstract
          </div>
          <br />
          <div class="left-align">
            Image Synthesis within the domain of art remains a difficult task due to its complex and human
            nature. Many current models either suffer from insufficient user control or inadequate output
            quality. This dissertation employs Reinforcement Learning Human Feedback (RLHF) as a
            solution to resolve both these problems simultaneously. A "feedback loop" model is presented
            that overlays an existing model. This allows for the refinement of output images by a user,
            thus improving control. This method also allows for the collection of losses from the user’s
            choices to allow for further updates to the underlying network. This effectively enables the
            model to learn from a user. The results produced by this dissertation show a quantitative
            improvement in user control over baseline models. They also show the qualitative success of
            the RLHF implementation. However, further analysis is required to confirm whether this RLHF
            implementation improves output quality.
          </div>
        </div>
      </div>
    </div>
  );
}


function NotFound() {
  return (
    <div>
      Subpage not found!
    </div>
  )
}

export default App;
