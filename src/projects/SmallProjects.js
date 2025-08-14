import './Projects.css';
import { useState } from 'react';

import BouncingLogo from './small/BouncingLogo.js';
import FruitLips from './small/FruitLips.js';
import LLMCompare from './small/LLMCompare.js';
import NPMBusiness from './small/NPMBusiness.js';
import Peer2Peer from './small/Peer2Peer.js';
import Squares from './small/Squares.js';
import TemperatureGlass from './small/TemperatureGlass.js';
import TopTracks from './small/TopTracks.js';

function SmallProjects() {

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
      {mask && <div className='overlay' onClick={hideMask}></div>}
      <div className='projectGrid'>
        <div className='projectGridElement'>
          <div className='projectTitle'>
            LLM Compare
          </div>
          <LLMCompare displayMask={displayMask}/>
        </div>

        <div className='projectGridElement'>
          <div className='projectTitle'>
            Top tracks
          </div>
          <TopTracks displayMask={displayMask}/>
        </div>

        <div className='projectGridElement'>
          <div className='projectTitle'>
            NPM business card
          </div>
          <NPMBusiness displayMask={displayMask}/>
        </div>

        <div className='projectGridElement'>
          <div className='projectTitle'>
            368 Squares
          </div>
          <Squares displayMask={displayMask}/>
        </div>

        <div className='projectGridElement'>
          <div className='projectTitle'>
            Bouncing logo
          </div>
          <BouncingLogo displayMask={displayMask}/>
        </div>


        <div className='projectGridElement'>
          <div className='projectTitle'>
            Tempreature glass
          </div>
          <TemperatureGlass displayMask={displayMask}/>
        </div>

        <div className='projectGridElement'>
          <div className='projectTitle'>
            FruitLips
          </div>
          <FruitLips displayMask={displayMask}/>
        </div>

        <div className='projectGridElement'>
          <div className='projectTitle'>
            Peer 2 Peer messaging
          </div>
          <Peer2Peer displayMask={displayMask}/>
        </div>

      </div>      
    </div>
  );
}

export default SmallProjects;