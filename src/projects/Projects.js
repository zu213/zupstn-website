import './Projects.css';
import { useState, useEffect, useRef } from 'react';

import LargeProjects from './LargeProjects.js';
import SmallProjects from './SmallProjects.js';

function Projects() {
  const [PageComponent, setPageComponent] = useState(() => LargeProjects);
  const largeProjectsButton = useRef(null);
  const smallProjectsButton = useRef(null);

  useEffect(() => {
    largeProjectsButton.current.disabled = true;
    largeProjectsButton.current.style.backgroundColor = 'rgb(55 50 79);';
  }, []);

  const toLP = () => {
    setPageComponent(() => LargeProjects);
    largeProjectsButton.current.disabled = true;
    smallProjectsButton.current.disabled = false;
    smallProjectsButton.current.style.backgroundColor = 'rgb(55 50 79);';
    largeProjectsButton.current.style.removeProperty('background');  
  };

  const toSP = () => {
    setPageComponent(() => SmallProjects);
    largeProjectsButton.current.disabled = false;
    smallProjectsButton.current.disabled = true;
    smallProjectsButton.current.style.removeProperty('background');  
    largeProjectsButton.current.style.backgroundColor = 'rgb(55 50 79);';
  };

  return (
    <div>
      <header className='page-header'>Projects</header>

      <div className='switch-button-container'>
        <button className='switch-button' ref={largeProjectsButton} onClick={toLP}>Large</button>
        <button className='switch-button' ref={smallProjectsButton} onClick={toSP}>Small</button>
      </div>
      <PageComponent />
    </div>
  );
}

export default Projects;