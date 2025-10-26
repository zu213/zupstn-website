
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BreadcrumbLink } from '../../../util/Breadcrumbs';


function SpotifyRouletteCard() {
  return (
    <BreadcrumbLink to='/spotify-roulette'>
      <div className='project-card-title'>
        SpotifyRoulette
      </div>
      <div className='card-gradient green'>
        <FontAwesomeIcon icon={faMusic} />
      </div>
      <div>
        A multiple player react game that utilises Websockets and the Spotify API.
      </div>
      <div className='tag-holder'>
        <span className='tag green'>React</span><span className='tag purple'>Websockets</span><span className='tag blue'>TypeScript</span>
      </div>
    </BreadcrumbLink>

  );
}

export default SpotifyRouletteCard;