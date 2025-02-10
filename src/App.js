
// Normal imports
import { Route, Routes, Link, useLocation, useNavigate} from 'react-router-dom';
import './styleFiles/App.css';
import { useState, useEffect, useCallback } from 'react';

// Page imports
import Art from './Art.js'
import Charts from './Charts.js';
import Projects from './Projects.js';
import { asciiArtBig, asciiGif } from './asciiArt.js';

// document imports
import cv from './documents/CV.pdf'

// Image imports
import download from './images/white-download.png'

let chosenArt;
// main app
function App() {
  // declare important variables
  let navigate = useNavigate();
  const location = useLocation()

  const defaultBackButton = useCallback(() => {
    return(<button id="backButton" className="backButton" onClick={() => navigate(-1)}>Back</button>)},
     [navigate]);
  const defaultSmallBackButton = useCallback(() => {
    return(<button id="smallBackButton" className="smallBackButton" onClick={() => navigate(-1)}> &#60; </button>)},
     [navigate]);


  var [backButton, setBackButton] = useState(defaultBackButton)
  var [smallBackButton, setSmallBackButton] = useState(defaultSmallBackButton)

  // listeners 
  useEffect(() => {
    if(location.pathname ===  "/zach-upstone" || location.pathname ===  "/" ) {
      setBackButton(null);
      setSmallBackButton(null);

    }else{
      setBackButton(defaultBackButton);
      setSmallBackButton(defaultSmallBackButton);
    }
  }, [location.pathname, defaultBackButton, defaultSmallBackButton]);


  return(
      <div id="all">
        <br />
        {backButton}
        {smallBackButton}
        <br />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          
          <Route path='/me' element={<Me/>} />

          <Route path='/cv' element={<CV/>} />

          <Route path='/projects' element={<Projects/>} />

          <Route path='/gallery' element={<Art/>} />

          <Route path='/charts' element={<Charts/>} />

          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
  )
}


// subpages that are small enough to not justify their own page
function Home() {
  const chosenArtNumber = Math.floor(Math.random() * asciiGif.length)
  var asciiGifDisplay = true
  // one in a hundered chance of being tessa
  if(Math.floor(Math.random() * 100) === 99){
    asciiGifDisplay = false
  }
  const [currentImageIndex, setCurrentImageIndex] = useState(chosenArtNumber);
  const [isHovered, setIsHovered] = useState(false);

  // Animate the gif if mouse is hovered
  useEffect(() => {
    let interval;
    
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % asciiGif.length); // Loop back to the first image when at the end
      }, 200);
    } else {
      // Clear the interval if not hovered
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div>
          <div className="titleContainer">
            <div className="title">
              <Link to="/me">
                  Zach Upstone             
              </Link>
            </div>
          </div>
        <br/>


      <div className="searchLinksLeft">
        <Link to="/cv">CV</Link><br/><br/>
        <Link to="/projects">Projects</Link><br/><br/>
        <Link to="/gallery">Gallery</Link>
      </div>
      <div className="searchLinksRight">
        <a href="mailto:Zac.upstone@gmail.com"  target="_blank" rel="noreferrer">Email</a><br/><br/>
        <a href="https://www.linkedin.com/in/zachary-upstone-076218214/"  target="_blank" rel="noreferrer">LinkedIn</a><br/><br/>
        <a href="https://github.com/zu213"  target="_blank" rel="noreferrer">Github</a>
      </div>

      {chosenArt}

      {asciiGifDisplay ? 
        <div 
          className='asciiArt'
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          {asciiGif[currentImageIndex]}
        </div>
      :    
        <div className='bigAsciiArt'>
        {asciiArtBig}
        </div>
      }

    </div>
  );
}

function Me() {
  return (
    <div>
      <div className="linkHolder">
        <a href="mailto:Zac.upstone@gmail.com" target="_blank" rel="noreferrer">Email</a> &nbsp; | &nbsp;
        <a href="https://www.linkedin.com/in/zachary-upstone-076218214/" target="_blank" rel="noreferrer">LinkedIn</a> &nbsp; | &nbsp;
        <a href="https://github.com/zu213" target="_blank" rel="noreferrer">Github</a>
      </div>

      <div  className="textHolder">
        <br/>
        <div className='subTitle'>
        Who am I?
        </div>
        <br/>
        <div className='subSubTitle'>
        Graduate:
        </div>
        I’m a recently graduated student from the University of Bath, Achieving a First class degree.
        From my degree I mainly have experience coding with <b>Python, Java</b> and <b>C++</b>. During my 
        final year I completed a dissertation on image synthesis with RLHF this can be found on 
        the <Link className="smallLink" to="/projects">Projects page</Link>. As can be 
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
        <div className='subSubTitle'>
        Programmer:
        </div>
        During my university degree I completed a year long placement at&nbsp;
        <a className="smallLink" href="https://www.kontron-americas.com/" >BSQUARE</a> a 
        company which produces IoT solutions working both in software development and QA. 
        While working at BSQUARE I gained experience in <b>Angular(TS, HTML CSS)</b> as
        well as <b>Gherkin, Selenium</b> and <b>Lua</b>.

        This website is all made by me :), it runs using Github pages and a React framework. 
        My CV can be found <Link className="smallLink" to="/cv">here</Link>.

        <br/>
        <br/>
        <div className='subSubTitle'>
        Artist:
        </div>
        All my art can be seen on the <Link className="smallLink" to="/gallery">Gallery page</Link>.

        <br/>
        <br/>
        <div className='subSubTitle'>
        Fitness enthusiast:
        </div>
        Gym charts for fun can be seen on the <Link className="smallLink" to="/charts">Charts page</Link>.
      </div>
    </div>
  );
}

function CV() {
  return (
      <div>
        <br/>
        <a className="smallLink" href={cv} download="Zachary Upstone CV">
          Download <img className="downloadImage" src={download} alt="Download"></img>
        </a>
        <br/>
        <br/>
        <div className='tooSmallCV'> Screen size is too small to display pdf, download to view.</div>
        <div className='safariCV'> Safari doesn't allow proper display of pdfs.</div>

        <object data="/documents/CV.pdf" className="pdf-viewer" type="application/pdf">
          <div>No online PDF viewer installed</div>
        </object>
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
