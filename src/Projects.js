import Dissertation from './projects/Dissertation.js';
import UnicodeChess from './projects/UnicodeChess.js';
import SpotifyRoulette from './projects/SpotifyRoulette.js';
import Snowstorm from './projects/Snowstorm.js';
import './styleFiles/Projects.css'


function Projects() {
    return (
      <div>
        <header className='pageHeader'>Projects</header>
        <hr/>
        <div>
          <div className='projectTitle'>
            Snowstorm
          </div>
          <hr className='limitedHr'/>
          <Snowstorm/>
        </div>

        <hr/>
        <div>
          <div className='projectTitle'>
            Spotify Roulette
          </div>
          <hr className='limitedHr'/>
          <SpotifyRoulette />
        </div>

        <hr/>
        <div>
          <div className='projectTitle'>
            Unicode Chess
          </div>
          <hr className='limitedHr'/>
          <UnicodeChess/>
        </div>

        <hr/>
        <div>
          <div className='projectTitle'>
            My Dissertation
          </div>
          <hr className='limitedHr'/>
          <Dissertation/>
        </div>
      
      </div>

    );
  }

export default Projects;