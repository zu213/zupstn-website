import { useState, useEffect } from 'react';
import './Home.css';

import { BreadcrumbLink } from '../util/Breadcrumbs.js';
import { asciiArtBig, asciiGif } from '../util/asciiArt.js';

//static consts
const validRoutes = [ '/me', '/cv', '/projects', '/gallery','/charts','/fruit-lips','/368squares','/llm-compare','/glossary'];
const taglineTextOptions = ['- Try "curl https://zupstn.com/hypno.sh | bash"', '- Try "npx zachupstone"'];
const taglineChoice = Math.floor(Math.random() * taglineTextOptions.length);
// one in a hundered chance of being tessa
const asciiGifDisplay = Math.floor(Math.random() * 100) !== 99;
const chosenArtNumber = Math.floor(Math.random() * asciiGif.length);
const chosenLink = validRoutes[Math.floor(Math.random() * validRoutes.length)];

function Home() {
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

      {asciiGifDisplay ?
        <div className='artHolder'>
          <div className="speechBubble">

            <BreadcrumbLink 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              to={chosenLink}
              className='smallLink'
            >I'm feeling lucky</BreadcrumbLink>
          </div>
          <div className='asciiArt' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {asciiGif[currentImageIndex]}
          </div>
        </div>
        :    
        <div className='bigAsciiArt'>
          {asciiArtBig}
        </div>
      }
    </div>
  );
}

export default Home;