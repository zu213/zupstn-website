import join from'./media/join.png';
import guess2 from './media/guess2.png';


function SpotifyRoulette(props) {
  return (
    <div>
      <div>
        <a href="https://github.com/zu213/spotify-roulette" className="smallLink" target="_blank" rel="noreferrer">Repository</a>
        <br/>
      </div>
      <div>
        <div className='tightProjectInlineStructure'>
          <figure>
            <img src={join} onClick={props.displayMask} alt="joining screen"/>
            <figcaption>Figure: Joining a game fo Spotify Roulette</figcaption>
          </figure>
        </div>
        <div className='tightProjectInlineStructure'>
          <figure>
            <img src={guess2}onClick={props.displayMask} alt="guessing screen"/>
            <figcaption>Figure: Playing a game of Spotify Roulette</figcaption>
          </figure>
        </div>
        <div className='projectInlineStructure leftAlign'>
            I developed a <b>multiplayer game</b> using the  <a href="https://developer.spotify.com/documentation/web-api" className="smallLink">Spotify API</a>, where players guess each other’s favorite songs.

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