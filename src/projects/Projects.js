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
  }, []);

  const toLP = () => {
    setPageComponent(() => LargeProjects);
    largeProjectsButton.current.disabled = true;
    smallProjectsButton.current.disabled = false;
    largeProjectsButton.current.style.backgroundColor = '#b7b7b7';
    smallProjectsButton.current.style.removeProperty('background');  
  };

  const toSP = () => {
    setPageComponent(() => SmallProjects);
    largeProjectsButton.current.disabled = false;
    smallProjectsButton.current.disabled = true;
    largeProjectsButton.current.style.removeProperty('background');  
    smallProjectsButton.current.style.backgroundColor = '#b7b7b7';
  };

  return (
    <div>
      <header className='page-header'>Projects</header>

      <div>
        <button className='project-switch-button' ref={largeProjectsButton} onClick={toLP}>Large</button>
        <button className='project-switch-button' ref={smallProjectsButton} onClick={toSP}>Small</button>
      </div>
      <PageComponent />
    </div>
  );
}

export default Projects;