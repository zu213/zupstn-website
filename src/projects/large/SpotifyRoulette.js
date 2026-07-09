import { BreadcrumbLink } from '../../util/Breadcrumbs';

import guess2PNG from './media/guess2.png';
import guess2 from './media/guess2.webp';
import joinPNG from'./media/join.png';
import join from'./media/join.webp';


function SpotifyRoulette(props) {
  return (
    <div className='project-page'>
      <header className='page-header'>Spotify Roulette</header>
      <div>
        <a href="https://github.com/zu213/spotify-roulette" className="small-link" target="_blank" rel="noreferrer">Repository</a>
        <BreadcrumbLink to='/spotify-roulette-demo' className="small-link">Demo</BreadcrumbLink>
        <br/>
      </div>
      <div>
        <div className='tight-project-inline-structure'>
          <figure onClick={() => props.displayMask(join)}>
            <picture>
              <source srcSet={join} type="image/webp" />
              <img src={joinPNG} alt="joining screen" />
            </picture>
            <figcaption>Figure: Joining a game of Spotify Roulette</figcaption>
          </figure>
        </div>
        <div className='tight-project-inline-structure'>
          <figure onClick={() => props.displayMask(guess2)}>
            <picture>
              <source srcSet={guess2} type="image/webp" />
              <img src={guess2PNG} alt="guessing screen"/>
            </picture>
            <figcaption>Figure: Playing a game of Spotify Roulette</figcaption>
          </figure>
        </div>
        <div className='project-inline-structure left-align'>
          A <b>multiplayer party game</b> built with the <a href="https://developer.spotify.com/documentation/web-api" className="small-link">Spotify API</a> and <b>WebSockets</b>,
          where players try to guess whose song is whose from each other’s Spotify top tracks.

          <br /><br />

          <b>How it works:</b>
          <ul>
            <li>One player creates a game and shares the table code with others, who join from their own devices.</li>
            <li>Once everyone has joined, the host starts the game — a random player is selected and one of their top Spotify tracks is distributed to all players.</li>
            <li>The song plays while details (artist, release year, album cover) are <b>gradually revealed</b> as hints.</li>
            <li>Players race to guess who the song belongs to — the earlier the correct guess, the higher the score.</li>
            <li>After the countdown, the correct answer is revealed and the next round begins.</li>
          </ul>

          <b>Tech stack:</b>
          <ul>
            <li><b>Express.js</b> – Backend server managing active game tables and WebSocket connections.</li>
            <li><b>WebSockets</b> – Real-time communication between all players for song distribution and guess synchronisation.</li>
            <li><b>React</b> – Frontend UI handling Spotify OAuth login, game lobbies, and the guessing interface.</li>
            <li><b>Spotify API</b> – Fetches each player’s top tracks and streams audio during gameplay.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SpotifyRoulette;