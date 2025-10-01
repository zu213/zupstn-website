import './Projects.css';
import { useState } from 'react';

import BouncingLogo from './small/BouncingLogo.js';
import FruitLips from './small/FruitLips.js';
import HotkeyHelp from './small/HotkeyHelp.js';
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
    maskItem.classList.remove('overlay-mask');
    setMaskItem(null);
  };

  function isIOS() {
    return /iP(hone|od|ad)/.test(navigator.userAgent);
  }

  const displayMask = (e) =>{
    setMask(true);
    e.target.classList.add('overlay-mask');
    setMaskItem(e.target);
  };

  return (
    <div>
      {mask && <div className='overlay' onClick={hideMask}></div>}
      <div className="small-projects-subpage">
        <hr/>
        <div className='project-grid'>
          <div className='project-grid-element'>
            <div className='project-title'>
              Hotkey Help
            </div>
            <HotkeyHelp displayMask={displayMask}/>
          </div>

          <div className='project-grid-element'>
            <div className='project-title'>
              LLM Compare
            </div>
            <LLMCompare displayMask={displayMask}/>
          </div>

          <div className='project-grid-element'>
            <div className='project-title'>
              Top tracks
            </div>
            <TopTracks displayMask={displayMask}/>
          </div>

          <div className='project-grid-element'>
            <div className='project-title'>
              NPM business card
            </div>
            <NPMBusiness displayMask={displayMask}/>
          </div>

          <div className='project-grid-element'>
            <div className='project-title'>
              368 Squares
            </div>
            <Squares displayMask={displayMask}/>
          </div>

          <div className='project-grid-element'>
            <div className='project-title'>
              Bouncing logo
            </div>
            <BouncingLogo displayMask={displayMask} isIOS={isIOS}/>
          </div>


          <div className='project-grid-element'>
            <div className='project-title'>
              Tempreature glass
            </div>
            <TemperatureGlass displayMask={displayMask}/>
          </div>

          <div className='project-grid-element'>
            <div className='project-title'>
              FruitLips
            </div>
            <FruitLips displayMask={displayMask}/>
          </div>

          <div className='project-grid-element'>
            <div className='project-title'>
              Peer 2 Peer messaging
            </div>
            <Peer2Peer displayMask={displayMask}/>
          </div>

        </div>      
      </div>
    </div>
  );
}

export default SmallProjects;