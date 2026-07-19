
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
        A multi-player React game that utilises Websockets and the Spotify API.
      </div>
      <div className='tag-holder'>
        <span className='tag blue'>React</span><span className='tag blue'>TypeScript</span><span className='tag blue'>Express</span><span className='tag purple'>Websockets</span><span className='tag green'>Spotify API</span>
      </div>
    </BreadcrumbLink>

  );
}

export default SpotifyRouletteCard;