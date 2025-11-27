import './SmallProjects.css';

import FadeInSection from '../util/FadeIn';
import { useMask } from '../util/Mask.js';

import BouncingLogo from './small/BouncingLogo.js';
import FruitLips from './small/FruitLips.js';
import HotkeyHelp from './small/HotkeyHelp.js';
import LLMCompare from './small/LLMCompare.js';
import NPMBusiness from './small/NPMBusiness.js';
import Peer2Peer from './small/Peer2Peer.js';
import SongShare from './small/SongShare.js';
import Squares from './small/Squares.js';
import TemperatureGlass from './small/TemperatureGlass.js';
import TopTracks from './small/TopTracks.js';

function SmallProjects() {

  const { displayMask, MaskOverlay } = useMask();

  function isIOS() {
    return /iP(hone|od|ad)/.test(navigator.userAgent);
  }

  return (
    <div>
      {MaskOverlay()}
      <div className="small-projects-subpage">
        <hr/>
        <div className='project-grid'>
          <FadeInSection>
            <div className='project-grid-element'>
              <div className='project-title'>
                Songshare
              </div>
              <SongShare displayMask={displayMask}/>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className='project-grid-element'>
              <div className='project-title'>
                Hotkey Help
              </div>
              <HotkeyHelp displayMask={displayMask}/>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className='project-grid-element'>
              <div className='project-title'>
                LLM Compare
              </div>
              <LLMCompare displayMask={displayMask}/>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className='project-grid-element'>
              <div className='project-title'>
                Top tracks
              </div>
              <TopTracks displayMask={displayMask}/>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className='project-grid-element'>
              <div className='project-title'>
                NPM business card
              </div>
              <NPMBusiness displayMask={displayMask}/>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className='project-grid-element'>
              <div className='project-title'>
                368 Squares
              </div>
              <Squares displayMask={displayMask}/>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className='project-grid-element'>
              <div className='project-title'>
                Bouncing logo
              </div>
              <BouncingLogo displayMask={displayMask} isIOS={isIOS}/>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className='project-grid-element'>
              <div className='project-title'>
                Tempreature glass
              </div>
              <TemperatureGlass displayMask={displayMask}/>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className='project-grid-element'>
              <div className='project-title'>
                FruitLips
              </div>
              <FruitLips displayMask={displayMask}/>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className='project-grid-element'>
              <div className='project-title'>
                Peer 2 Peer messaging
              </div>
              <Peer2Peer displayMask={displayMask}/>
            </div>
          </FadeInSection>

        </div>      
      </div>
    </div>
  );
}

export default SmallProjects;