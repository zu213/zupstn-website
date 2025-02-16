import Dissertation from './projects/Dissertation.js';
import UnicodeChess from './projects/UnicodeChess.js';
import SpotifyRoulette from './projects/SpotifyRoulette.js';
import Snowstorm from './projects/Snowstorm.js';
import './styleFiles/Projects.css'
import { useState } from 'react';


function Projects() {

    var [mask, setMask] = useState(false)
    var [maskItem, setMaskItem] = useState(null)

    const hideMask =() => {
      setMask(false)
      maskItem.classList.remove('overlayMask')
      setMaskItem(null)
    }

    const displayMask = (e) =>{
      setMask(true)
      e.target.classList.add('overlayMask')
      setMaskItem(e.target)
    }

    return (
      <div>
        <header className='pageHeader'>Projects</header>
        <hr/>

        <div className={`mask ${mask ? 'opaque': ''}`} onClick={hideMask}>

        </div>

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

export default Projects;