
// Normal imports
import { Route, Routes, Link, useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import './App.css';
import { BreadcrumbContext, BreadcrumbLink } from './BreadcrumbContext.js';
import { useState, useEffect, useCallback,  } from 'react';

// Page imports
import Art from './art/Art.js';
import Charts from './charts/Charts.js';
import Projects from './projects/Projects.js';
import Me from './myself/Myself.js';
import CV from './cv/CV.js';
import Glossary from './glossary/Glossary.js';
import DissertationTool from './projects/large/DissertationTool.js';
import { asciiArtBig, asciiGif } from './other/asciiArt.js';

// Declare static tagline
const taglineTextOptions = ['- Try "curl https://zupstn.com/hypno.sh | bash"', '- Try running "npx zachupstone"'];
const taglineChoice = Math.floor(Math.random() * taglineTextOptions.length);
// one in a hundered chance of being tessa
const asciiGifDisplay = Math.floor(Math.random() * 100) !== 99;

let chosenArt;
// main app
function App() {
  // declare important variables
  let navigate = useNavigate();
  const location = useLocation();

  const defaultBackButton = useCallback(() => (<button id="backButton" className="backButton" onClick={() => navigate(-1)}>Back</button>), [navigate]);
  const defaultSmallBackButton = useCallback(() => (<button id="smallBackButton" className="smallBackButton" onClick={() => navigate(-1)}> &#60; </button>), [navigate]);

  var [backButton, setBackButton] = useState(defaultBackButton);
  var [breadcrumbsList, setBreadcrumbsList] = useState(['/']);
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

  function useBackButton() {
    const navigationType = useNavigationType(); // 'POP', 'PUSH', or 'REPLACE'

    useEffect(() => {
      if (navigationType === 'POP' && breadcrumbsList.length > 1) {
        removeBreadcrumbsAfter(breadcrumbsList.length - 2);
      }
    }, [navigationType]);
  }

  useBackButton();
  

  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const onResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, []);
    return width;
  }

  const DropBreadcrumbs = () => {

    const width = 0.4 * useWindowWidth();
    const allowedCrumbs = Math.floor(width / 60);

    const processedCrumbs = breadcrumbsList.length > allowedCrumbs ? [breadcrumbsList[0], '...', ...breadcrumbsList.slice(-allowedCrumbs + 1)] : breadcrumbsList;

    return (
      <div className='breadcrumbs'>
        {processedCrumbs.map((crumb, index) => (
          <span>
            {crumb === '...' ? '/...' :
              <Link className='smallLink breadcrumb' to={crumb} onClick={() => removeBreadcrumbsAfter(index)}>
                {crumb === '/' ? index === 0 ? 'Home' : '/Home' : processCrumbString(crumb)}
              </Link>
            } 
          </span>
        ))}
      </div>
    );
  };

  function addBreadcrumb(newCrumb) {
    setBreadcrumbsList(prevList => [...prevList, newCrumb]);
  }

  function removeBreadcrumbsAfter(index) {
    setBreadcrumbsList(prevList => prevList.slice(0, index + 1));
  }

  function processCrumbString(crumb) {
    if (!crumb) return '';

    return crumb.replace(
      /([a-zA-Z])/,
      (match) => match.toUpperCase()
    );
  }


  return(
    <div id="all" className='app'>
      <BreadcrumbContext.Provider value={{ breadcrumbsList, addBreadcrumb }}>
        <div>
          {backButton}
          {smallBackButton}
          {DropBreadcrumbs()}
        </div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/me' element={<Me/>} />
          <Route path='/cv' element={<CV/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/gallery' element={<Art/>} />
          <Route path='/charts' element={<Charts/>} />
          <Route path='/dissertation-tool' element={<DissertationTool/>} />
          <Route path='/fruit-lips' element={<FruitLips/>} />
          <Route path='/fruit-lips2' element={<FruitLips2/>} />
          <Route path='/368squares' element={<Squares/>} />
          <Route path='/llm-compare' element={<LLMCompare/>} />
          <Route path='/glossary' element={<Glossary/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BreadcrumbContext.Provider>
    </div>
  );
}

function Home() {
  const chosenArtNumber = Math.floor(Math.random() * asciiGif.length);

  const taglineText = taglineTextOptions[taglineChoice];
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
          <BreadcrumbLink to="/me">
              Zach Upstone             
          </BreadcrumbLink>
        </div>
        <div className='tagLine'>
          {taglineText}
        </div>
      </div>

      <div className="searchLinksLeft">
        <div>
          <BreadcrumbLink to="/projects">Projects</BreadcrumbLink>
        </div>
        <div>
          <BreadcrumbLink to="/cv">CV</BreadcrumbLink>
        </div>
        <div>
          <BreadcrumbLink to="/gallery">Gallery</BreadcrumbLink>
        </div>
      </div>
      <div className="searchLinksRight">
        <div>
          <a href="https://github.com/zu213"  target="_blank" rel="noreferrer">Github</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/zachary-upstone-076218214/"  target="_blank" rel="noreferrer">LinkedIn</a>
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

function FruitLips2() {
  return (
    <div className='fruitLipsContainer'>
      <iframe 
        title='fruit-lips'
        className='fruitLips'
        src="./fruit-lips/fruit-lips2.html"
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

function LLMCompare() {
  return (
    <div className='llmCompareContainer'>
      <iframe 
        title='LLMCompare'
        data-class='llmCompare'
        className='llmCompare'
        src="./llm-compare/src/index.html"
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

// Helper functions 



export default App;
