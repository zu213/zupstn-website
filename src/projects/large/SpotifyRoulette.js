import guess2PNG from './media/guess2.png';
import guess2 from './media/guess2.webp';
import joinPNG from'./media/join.png';
import join from'./media/join.webp';


function SpotifyRoulette(props) {
  return (
    <div>
      <header className='page-header'>Spotify Roulette</header>
      <div>
        <a href="https://github.com/zu213/spotify-roulette" className="small-link" target="_blank" rel="noreferrer">Repository</a>
        <br/>
      </div>
      <div>
        <div className='tight-project-inline-structure'>
          <figure onClick={props.displayMask}>
            <picture>
              <source srcSet={join} type="image/webp" />
              <img src={joinPNG} alt="joining screen" />
            </picture>
            <figcaption>Figure: Joining a game fo Spotify Roulette</figcaption>
          </figure>
        </div>
        <div className='tight-project-inline-structure'>
          <figure onClick={props.displayMask}>
            <picture>
              <source srcSet={guess2} type="image/webp" />
              <img src={guess2PNG} alt="guessing screen"/>
            </picture>
            <figcaption>Figure: Playing a game of Spotify Roulette</figcaption>
          </figure>
        </div>
        <div className='project-inline-structure left-align'>
            I developed a <b>multiplayer game</b> using the  <a href="https://developer.spotify.com/documentation/web-api" className="small-link">Spotify API</a>, where players guess each other’s favorite songs.

          <ul>
            <li>One player creates a table, and others join.</li>
            <li>The game fetches each player’s top 50 songs from Spotify.</li>
            <li>A song is chosen at random, and players must guess who it belongs to before time runs out.</li>
            <li>As the song plays in the background, hints (like artist, release year, or album cover) are gradually revealed.</li>
          </ul>

            The game is built with:
          <ul>
            <li><b>Express.js</b> – Handles the backend, managing active tables with heartbeat signals.</li>
            <li><b>React</b> – Powers the frontend providing a UI for user to interact with.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SpotifyRoulette;