
// Normal imports
import { Route, Navigate, Routes, Link, useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

// Page imports
import Art from './Art.js'
import Charts from './Charts.js';

// document imports
import cv from './documents/CV.pdf'
import dissertation from  './documents/Dissertation.pdf'

// Image imports
import dissertationUI from './images/di-ui.png'
import download from './images/white-download.png'


// main app
function App() {
  let navigate = useNavigate();
  const location = useLocation()
  const defaultBackButton = <button id="back-button" className="back-button" onClick={() => navigate(-1)}>Back</button>;
  const defaultSmallBackButton = <button id="back-button" className="small-back-button" onClick={() => navigate(-1)}> &#60; </button>;

  var [backButton, setBackButton] = useState(defaultBackButton)
  var [smallBackButton, setSmallBackButton] = useState(defaultSmallBackButton)


  useEffect(() => {
    if(location.pathname ===  "/zach-upstone" || location.pathname ===  "/" ) {
      setBackButton(null);
      setSmallBackButton(null);

    }else{
      setBackButton(defaultBackButton);
      setSmallBackButton(defaultSmallBackButton);
    }
  }, [location.pathname, defaultBackButton, defaultSmallBackButton]);

  const onresize = ((event) => {});

  window.addEventListener("resize", onresize);




  return(
      <div id="all">
        <br />
        {backButton}
        {smallBackButton}
        <br />
        <Routes>
          <Route exact path='/' element={<Navigate to='/zach-upstone' />} />

          <Route path='/zach-upstone' element={<Home/>} />
          
          <Route path='/me' element={<Me/>} />

          <Route path='/cv' element={<CV/>} />

          <Route path='/dissertation' element={<Dissertation/>} />

          <Route path='/gallery' element={<Art/>} />

          <Route path='/charts' element={<Charts/>} />

          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
  )
}


// subpages
function Home() {
  return (
    <div>
        <header>
          <div className="header">
            <Link className="title" to="/me">
              <div id="title" className="title">
                 Zach Upstone             
              </div>
            </Link>
          </div>
        </header>
        <br/>


      <div className="search-links-left">
        <Link id="cv" to="/cv">CV</Link><br/><br/>
        <Link id="dissertation" to="/dissertation">Dissertation</Link><br/><br/>
        <Link id="gallery" to="/gallery">Gallery</Link>
      </div>
      <div className="search-links-right">
        <a href="mailto:Zac.upstone@gmail.com"  target="_blank" rel="noreferrer">Email</a><br/><br/>
        <a href="https://www.linkedin.com/in/zachary-upstone-076218214/"  target="_blank" rel="noreferrer">LinkedIn</a><br/><br/>
        <a href="https://github.com/zu213"  target="_blank" rel="noreferrer">Github</a>
      </div>

      <div className='ascii-art'>
      <pre>
            ------ <br />
            | 0 0 |  <br />
            |  _  |  <br />
            ------ <br />
            /      \ <br />
           |       | <br />
        </pre>
      </div>
    </div>
  );
}

function Me() {
  return (
    <div>
      <div class="link-holder">
        <a href="mailto:Zac.upstone@gmail.com" target="_blank" rel="noreferrer">Email</a> &nbsp; | &nbsp;
        <a href="https://www.linkedin.com/in/zachary-upstone-076218214/" target="_blank" rel="noreferrer">LinkedIn</a> &nbsp; | &nbsp;
        <a href="https://github.com/zu213" target="_blank" rel="noreferrer">Github</a>
      </div>

      <div  className="text-holder">
        <br/>
        Graduate:
        <br/>
        I’m a recently graduated student from the University of Bath, Achieving a First class degree.
        From my degree I mainly have experience coding with <b>Python, Java</b> and <b>C++</b>. During my 
        final year I completed a dissertation on image synthesis with RLHF this can be found on 
        the <Link className="small-link" to="/dissertation">Dissertation page</Link>. As can be 
        seen I have experience with AI specifically Reinforcement Learning and Image synthesis.
        <br/>
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
        Programmer:
        <br/>
        During my university degree I completed a year long placement at BSquare a company which produces IoT solutions 
        working both in software development and QA. While working at BSquare I gained experience in <b>Angular(TS, HTML CSS)</b> as
        well as <b>Gherkin, Selenium</b> and <b>Lua</b>.

        This website is all made by me :), it runs using Github pages and a React framework.

        <br/>
        <br/>
        Artist:
        <br/>
        All my art stuff can be seen on the <Link className="small-link" to="/gallery">Gallery page</Link>.

        <br/>
        <br/>
        Fitness enthusiast:
        <br/>
        Gym charts for fun can be seen on the <Link className="small-link" to="/charts">Charts page</Link>.
      </div>
    </div>
  );
}

function CV() {
  return (
      <div>
        <br/>
        <a className="small-link" href={cv} download="Zachary Upstone CV">
          Download <img className="download-image" src={download} alt="Download"></img>
        </a>
        <br/>
        <br/>
        <div className='too-small'> Screen size is too small to display pdf, download to view.</div>
        <embed src={cv+'#view=FitH'} className="pdf-viewer" />
      </div>
  );
}

function Dissertation() {
  return (
    <div>
      <div className="subtitle" >
        Human Involvement Can Improve Current Image Synthesis Methods within the Domain of Art
        <br />
      </div>
      <div>
        <a href={dissertation} className="small-link" download="Zachary Upstone Dissertation">PDF</a>
        &nbsp; | &nbsp;
        <a href="https://github.bath.ac.uk/zu213/Dissertation-code" className="small-link" target="_blank" rel="noreferrer">Repo</a>
        <br/>
      </div>
      <div>
        <div  className="inline-structure">
          <figure>
            <img className="ui-image" src={dissertationUI} alt="Dissertation UI"></img>
            <figcaption>Figure: The UI I created to allow the utlisation of RLHF</figcaption>
          </figure>
        </div>
        <div  className="inline-structure">
          <div className="underlined">
            Abstract
          </div>
          <br />
          <div className="left-align">
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
