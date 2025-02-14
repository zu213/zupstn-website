import join from'./media/join.png'
import guess2 from './media/guess2.png'


function SpotifyRoulette() {
    return (
      <div>
        <div>
          <a href="https://github.com/zu213/spotify-roulette" className="smallLink" target="_blank" rel="noreferrer">Repository</a>
          <br/>
        </div>
        <div>
          <div className='tightProjectInlineStructure'>
            <figure>
              <img src={join} alt="scholars gif"/>
              <figcaption>Figure: The UI I created to allow the utlisation of RLHF</figcaption>
            </figure>
          </div>
          <div className='tightProjectInlineStructure'>
            <figure>
              <img src={guess2} alt="scholars gif"/>
              <figcaption>Figure: The UI I created to allow the utlisation of RLHF</figcaption>
            </figure>
          </div>
          <div className='projectInlineStructure'>
            I implemented the game of <a href="https://en.wikipedia.org/wiki/Chess">Chess</a> entirely within C.

            To do this...

            A gif of the game playing can be seen below.

          </div>
        </div>

      </div>

    );
  }

export default SpotifyRoulette;