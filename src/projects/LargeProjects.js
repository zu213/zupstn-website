import './Projects.css';
import './ProjectCards.css';

import FadeInSection from '../util/FadeIn';
 
import ChromeContextControlCard from './large/cards/ChromeContextControlCard.js';
import DissertationCard from './large/cards/DissertationCard.js';
import ShortStoreyCard from './large/cards/ShortStoreyCard.js';
import SnowstormCard from './large/cards/SnowstormCard.js';
import SpotifyRouletteCard from './large/cards/SpotifyRouletteCard.js';
import SquarePaintCard from './large/cards/SquarePaintCard.js';
import TrafficSimulatorCard from './large/cards/TrafficSimulatorCard.js';
import UnicodeChessCard from './large/cards/UnicodeChessCard.js';
import ZachLangCard from './large/cards/ZachLangCard.js';


function LargeProjects() {

  return (
    <div className="large-projects-subpage">
      <hr/>
      <div className='project-grid'>
        <FadeInSection>
          <div className='project-grid-element'>
            <ZachLangCard/>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className='project-grid-element'>
            <ShortStoreyCard />
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className='project-grid-element'>
            <SquarePaintCard />
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className='project-grid-element'>
            <TrafficSimulatorCard />
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className='project-grid-element'>
            <ChromeContextControlCard />
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className='project-grid-element'>
            <SnowstormCard />
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className='project-grid-element'>
            <SpotifyRouletteCard />
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className='project-grid-element'>
            <UnicodeChessCard />
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className='project-grid-element'>
            <DissertationCard />
          </div>
        </FadeInSection>

      </div>      
    </div>
  );
}

export default LargeProjects;