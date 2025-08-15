import './Projects.css';
import { useState } from 'react';

import ChromeContextControl from './large/ChromeContextControl.js';
import Dissertation from './large/Dissertation.js';
import ShortStorey from './large/ShortStorey.js';
import Snowstorm from './large/Snowstorm.js';
import SpotifyRoulette from './large/SpotifyRoulette.js';
import SquarePaint from './large/SquarePaint.js';
import TrafficSimulator from './large/TrafficSimulator.js';
import UnicodeChess from './large/UnicodeChess.js';

function LargeProjects() {

  var [mask, setMask] = useState(false);
  var [maskItem, setMaskItem] = useState(null);

  const hideMask =() => {
    setMask(false);
    maskItem.classList.remove('overlay-mask');
    setMaskItem(null);
  };

  const displayMask = (e) =>{
    setMask(true);
    e.target.classList.add('overlay-mask');
    setMaskItem(e.target);
  };

  return (
    <div>
      <hr/>
      {mask && <div className='overlay' onClick={hideMask}></div>}
      <div>
        <div className='project-title'>
            ShortStorey
        </div>
        <hr className='limited-hr'/>
        <ShortStorey displayMask={displayMask}/>
      </div>

      <div>
        <div className='project-title'>
            SquarePaint
        </div>
        <hr className='limited-hr'/>
        <SquarePaint displayMask={displayMask}/>
      </div>

      <hr/>
      <div className={`mask ${mask ? 'opaque': ''}`} onClick={hideMask}></div>
      <div>
        <div className='project-title'>
            Traffic Simulator
        </div>
        <hr className='limited-hr'/>
        <TrafficSimulator displayMask={displayMask}/>
      </div>

      <hr/>
      <div>
        <div className='project-title'>
            Chrome Context Control
        </div>
        <hr className='limited-hr'/>
        <ChromeContextControl displayMask={displayMask}/>
      </div>

      <hr/>
      <div>
        <div className='project-title'>
            Snowstorm
        </div>
        <hr className='limited-hr'/>
        <Snowstorm displayMask={displayMask}/>
      </div>

      <hr/>
      <div>
        <div className='project-title'>
            Spotify Roulette
        </div>
        <hr className='limited-hr'/>
        <SpotifyRoulette displayMask={displayMask} />
      </div>

      <hr/>
      <div>
        <div className='project-title'>
            Unicode Chess
        </div>
        <hr className='limited-hr'/>
        <UnicodeChess displayMask={displayMask}/>
      </div>

      <hr/>
      <div>
        <div className='project-title'>
            My Dissertation
        </div>
        <hr className='limited-hr'/>
        <Dissertation displayMask={displayMask}/>
      </div>
      
    </div>

  );
}

export default LargeProjects;