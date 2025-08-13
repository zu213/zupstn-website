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
    maskItem.classList.remove('overlayMask');
    setMaskItem(null);
  };

  const displayMask = (e) =>{
    setMask(true);
    e.target.classList.add('overlayMask');
    setMaskItem(e.target);
  };

  return (
    <div>
      <hr/>
      <div className={`mask ${mask ? 'opaque': ''}`} onClick={hideMask}></div>

      <div>
        <div className='projectTitle'>
            ShortStorey
        </div>
        <hr className='limitedHr'/>
        <ShortStorey displayMask={displayMask}/>
      </div>

      <div>
        <div className='projectTitle'>
            SquarePaint
        </div>
        <hr className='limitedHr'/>
        <SquarePaint displayMask={displayMask}/>
      </div>

      <hr/>
      <div className={`mask ${mask ? 'opaque': ''}`} onClick={hideMask}></div>
      <div>
        <div className='projectTitle'>
            Traffic Simulator
        </div>
        <hr className='limitedHr'/>
        <TrafficSimulator displayMask={displayMask}/>
      </div>

      <hr/>
      <div>
        <div className='projectTitle'>
            Chrome Context Control
        </div>
        <hr className='limitedHr'/>
        <ChromeContextControl displayMask={displayMask}/>
      </div>

      <hr/>
      <div>
        <div className='projectTitle'>
            Snowstorm
        </div>
        <hr className='limitedHr'/>
        <Snowstorm displayMask={displayMask}/>
      </div>

      <hr/>
      <div>
        <div className='projectTitle'>
            Spotify Roulette
        </div>
        <hr className='limitedHr'/>
        <SpotifyRoulette displayMask={displayMask} />
      </div>

      <hr/>
      <div>
        <div className='projectTitle'>
            Unicode Chess
        </div>
        <hr className='limitedHr'/>
        <UnicodeChess displayMask={displayMask}/>
      </div>

      <hr/>
      <div>
        <div className='projectTitle'>
            My Dissertation
        </div>
        <hr className='limitedHr'/>
        <Dissertation displayMask={displayMask}/>
      </div>
      
    </div>

  );
}

export default LargeProjects;