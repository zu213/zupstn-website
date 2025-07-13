import './Projects.css';
import { useState, useEffect } from 'react';

import LargeProjects from './LargeProjects.js';
import SmallProjects from './SmallProjects.js';

function Projects() {

  const [PageComponent, setPageComponent] = useState(() => LargeProjects);

  useEffect(() => {
    document.getElementById('lpButton').disabled = true;
  }, []);

  const toLP = () => {
    setPageComponent(() => LargeProjects);
    const galleryButton = document.getElementById('lpButton');
    galleryButton.disabled = true;
    const tableButton = document.getElementById('spButton');
    tableButton.disabled = false;
  };

  const toSP = () => {
    setPageComponent(() => SmallProjects);
    const galleryButton = document.getElementById('lpButton');
    galleryButton.disabled = false;
    const tableButton = document.getElementById('spButton');
    tableButton.disabled = true;
          
  };

  return (
    <div>
      <header className='pageHeader'>Projects</header>

      <hr/>
      <div>
        <button className='projectSwitchButton' id='lpButton' onClick={toLP}>Large</button>
        <button className='projectSwitchButton' id='spButton' onClick={toSP}>Small</button>
      </div>
      <PageComponent />
    </div>
  );
}

export default Projects;