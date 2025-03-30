
// Normal imports
import { Route, Routes, Link, useLocation, useNavigate} from 'react-router-dom';
import './styleFiles/App.css';
import { useState, useEffect, useCallback } from 'react';

// Page imports
import Art from './Art.js'
import Charts from './Charts.js';
import Projects from './Projects.js';
import { asciiArtBig, asciiGif } from './asciiArt.js';


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

          <Route path='/fruit-lips' element={<FruitLips/>} />

          <Route path='/368squares' element={<Squares/>} />

          <Route path='/index' element={<Index/>} />

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
        <br/>
        <div className='subTitle'>
        Who am I?
        </div>

        <br/>
        <div className='subSubTitle'>
        Programmer:
        </div>
        Find my GitHub <a className="smallLink" href="https://github.com/zu213" target="_blank" rel="noreferrer">here</a>, 
        showcasing various personal projects on the &nbsp;  
        <Link className="smallLink" to="/projects">Projects page</Link>.
        <br/>
        <br/>

        I am a <b>Product developer</b> for&nbsp;   
        <a className="smallLink" href="https://www.pugpig.com/" >Pugpig</a> a media publishing platform powering 
        apps and web readers for brands like <i>The Spectator</i>, <i>The Independent</i> and <i>The Boston Globe</i>.
        My work spans <b>Native</b> (SwiftUI, Java, Kotlin) and <b>Web</b> (Vue.js, HTML, PHP, Sass) development.
        <br/>
        <br/>
        Previously, I completed a year-long placement at &nbsp;
        <a className="smallLink" href="https://www.kontron-americas.com/" >BSQUARE</a>, an IoT solutions company, 
        where I worked in <b>Software Development</b> and <b>QA</b>, gaining experience in <b>Angular</b> (TS, HTML, CSS),
        Gherkin and Selenium.
        <br/>
        <br/>
        This website is fully built by me using <b>React</b>, <b>Cloudflare</b>(Frontend) and <b>GoogleCloud</b>(Backend). 
        <div className='subSubTitle'>
        <br/>
        Graduate:
        </div>
        I’m a recently graduated student from the University of Bath, Achieving a First class degree.
        My degree focused mainly on AI and the Mathematics around Computer Science, however, it also 
        involved Graphics processing and Moder software developmenet methodologies.
        From within my degree I have experience coding with <b>Python, Java</b> and <b>C++</b>. During my 
        final year I completed a dissertation on image synthesis utilising human feedback this can be found on 
        the <Link className="smallLink" to="/projects">Projects page</Link>.
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
        <a className="smallLink" href="/documents/CV.pdf" download="Zachary Upstone CV">
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

function FruitLips() {
  return (
  <div className='fruitLipsContainer'>
    <iframe 
    title='fruit-lips'
    className='fruitLips'
    src="./fruit-lips/fruit-lips.html"
    width="100%"
    height="100%"
    />
  </div>
  )
}

function Squares() {
  return (
  <div className='squaresContainer'>
    <iframe 
    title='368Squares'
    className='368Squares'
    src="./368squares/index.html"
    width="100%"
    height="100%"
    />
  </div>
  )
}

function Index() {
  return (
  <div>
    <div className='linkTitle'>Page links</div>
    <div className='linksContainer'>
      <div className='link'> <Link to="/">/home</Link></div>
      <div className='link'> <Link to="/me">/me</Link></div>
      <div className='link'> <Link to="/cv">/cv</Link></div>
      <div className='link'> <Link to="/projects">/projects</Link></div>
      <div className='link'> <Link to="/gallery">/gallery</Link></div>
      <div className='link'> <Link to="/charts">/charts</Link></div>
      <div className='link'> <Link to="/fruit-lips">/fruit-lips</Link></div>
      <div className='link'> <Link to="/368squares">/368squares</Link></div>

    </div>
  </div>
  )
}

function NotFound() {
  return (
    <div>
      Subpage not found!
    </div>
  )
}

export default App;
