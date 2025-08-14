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
  };

  const toSP = () => {
    setPageComponent(() => SmallProjects);
    largeProjectsButton.current.disabled = false;
    smallProjectsButton.current.disabled = true;
          
  };

  return (
    <div>
      <header className='pageHeader'>Projects</header>

      <div>
        <button className='projectSwitchButton' ref={largeProjectsButton} onClick={toLP}>Large</button>
        <button className='projectSwitchButton' ref={smallProjectsButton} onClick={toSP}>Small</button>
      </div>
      <PageComponent />
    </div>
  );
}

export default Projects;