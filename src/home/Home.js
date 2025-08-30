import { useState, useEffect, useRef } from 'react';
import './Home.css';

import { asciiArtBig, asciiGif } from '../util/asciiArt.js';
import { BreadcrumbLink } from '../util/Breadcrumbs.js';

//static consts
const validRoutes = ['/me', '/projects', '/gallery','/charts','/fruit-lips','/368squares','/llm-compare','/glossary'];
const taglineTextOptions = ['- Try "curl https://zupstn.com/hypno.sh | bash"', '- Try "npx zachupstone"'];
const taglineChoice = Math.floor(Math.random() * taglineTextOptions.length);
// one in a hundered chance of being tessa
const asciiGifDisplay = Math.floor(Math.random() * 100) !== 99;
const chosenArtNumber = Math.floor(Math.random() * asciiGif.length);

function Home() {
  const taglineText = taglineTextOptions[taglineChoice];
  const [currentImageIndex, setCurrentImageIndex] = useState(chosenArtNumber);
  const [isHovered, setIsHovered] = useState(false);
  const [chosenLink, setChosenLink] = useState(null);
  const roadContainer = useRef(null);
  const [roadFrames, setRoadFrames] = useState(false);

  useEffect(() => {
    async function getRoadFrames() { 
      try {
        const res = await fetch('https://road-animation.vercel.app/api/road-animation-html');
        const data = await res.json();
        setRoadFrames(data);
      } catch (e) {
        console.error(e);
      }
    }

    setChosenLink(validRoutes[Math.floor(Math.random() * validRoutes.length)]);

    getRoadFrames();
  }, []);
  
  // Animate the gif if mouse is hovered
  useEffect(() => {
    let interval;
    if(isHovered) setChosenLink(validRoutes[Math.floor(Math.random() * validRoutes.length)]);
    
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % asciiGif.length); // Loop back to the first image when at the end
      }, 200);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    let interval;
    var frame = 0;

    interval = setInterval(() => {
      if(!roadContainer.current) return;
      roadContainer.current.innerHTML = roadFrames[frame];
      frame = (frame + 1) % roadFrames.length;
    }, 200);

    return () => clearInterval(interval);
  }, [roadFrames]);

  return (
    <div>
      <div className="title-container">
        <div className="title">
          <BreadcrumbLink to="/me">
              Zach Upstone             
          </BreadcrumbLink>
        </div>
        <div className='tag-line'>
          {taglineText}
        </div>
      </div>

      <div className="search-links-left">
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
      <div className="search-links-right">
        <div>
          <a href="https://github.com/zu213"  target="_blank" rel="noreferrer">Github</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/zachary-upstone-076218214/"  target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className='feeling-lucky-inline'>
          <BreadcrumbLink className='small-link' to={chosenLink}>I'm feeling lucky</BreadcrumbLink>
        </div>
      </div>

      {asciiGifDisplay ?
        <div className='art-holder'>
          <div className="speech-bubble">
            <div className='upright'>
              <BreadcrumbLink 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                to={chosenLink}
                className='small-link'
              >I'm feeling lucky</BreadcrumbLink>
            </div>
          </div>
          <div className='ascii-art' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {asciiGif[currentImageIndex]}
          </div>
        </div>
        :    
        <div className='big-ascii-art'>
          {asciiArtBig}
        </div>
      }

      {roadFrames &&
        <div className='road-container'>
          <pre ref={roadContainer} className='road-animation'>
          </pre>
        </div>
      }
    </div>
  );
}

export default Home;