
// Normal imports
import { Route, Routes, Link, useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import { useState, useEffect, useCallback } from 'react';

// Page imports
import Art from './art/Art.js';
import Charts from './charts/Charts.js';
import Projects from './projects/Projects.js';
import Me from './myself/Myself.js';
import CV from './cv/CV.js';
import Glossary from './glossary/Glossary.js';
import { asciiArtBig, asciiGif } from './other/asciiArt.js';

let chosenArt;
// main app
function App() {
  // declare important variables
  let navigate = useNavigate();
  const location = useLocation();

  const defaultBackButton = useCallback(() => (<button id="backButton" className="backButton" onClick={() => navigate(-1)}>Back</button>), [navigate]);
  const defaultSmallBackButton = useCallback(() => (<button id="smallBackButton" className="smallBackButton" onClick={() => navigate(-1)}> &#60; </button>), [navigate]);

  var [backButton, setBackButton] = useState(defaultBackButton);
  var [smallBackButton, setSmallBackButton] = useState(defaultSmallBackButton);

  // listeners 
  useEffect(() => {
    if(location.pathname ===  '/zach-upstone' || location.pathname ===  '/' ) {
      setBackButton(null);
      setSmallBackButton(null);
    } else {
      setBackButton(defaultBackButton);
      setSmallBackButton(defaultSmallBackButton);
    }
  }, [location.pathname, defaultBackButton, defaultSmallBackButton]);


  return(
    <div id="all" className='app'>
      <div>
        {backButton}
        {smallBackButton}
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/me' element={<Me/>} />
        <Route path='/cv' element={<CV/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/gallery' element={<Art/>} />
        <Route path='/charts' element={<Charts/>} />
        <Route path='/fruit-lips' element={<FruitLips/>} />
        <Route path='/368squares' element={<Squares/>} />
        <Route path='/glossary' element={<Glossary/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

function Home() {
  const chosenArtNumber = Math.floor(Math.random() * asciiGif.length);
  // one in a hundered chance of being tessa
  const asciiGifDisplay = Math.floor(Math.random() * 100) !== 99;

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
        <div className='tagLine'>
          - Try running "curl https://zupstn.com/hypno.sh | bash" (in bash) <br /> or "npx zachupstone" (with npm)
        </div>
      </div>

      <div className="searchLinksLeft">
        <div>
          <Link to="/cv">CV</Link>
        </div>
        <div>
          <Link to="/projects">Projects</Link>
        </div>
        <div>
          <Link to="/gallery">Gallery</Link>
        </div>
      </div>
      <div className="searchLinksRight">
        <div>
          <a href="mailto:Zac.upstone@gmail.com"  target="_blank" rel="noreferrer">Email</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/zachary-upstone-076218214/"  target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div>
          <a href="https://github.com/zu213"  target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>

      {chosenArt}

      {asciiGifDisplay ? 
        <div className='asciiArt' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
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

// Sub modules
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
  );
}

function Squares() {
  return (
    <div className='squaresContainer'>
      <iframe 
        title='368Squares'
        className='368Squares'
        src="./squares/squares.html"
        width="100%"
        height="100%"
      />
    </div>
  );
}

function NotFound() {
  return (
    <div>
      Subpage not found!
    </div>
  );
}

export default App;
