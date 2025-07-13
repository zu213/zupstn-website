
import squares from './media/squares.png';

function Squares(props) {
  return (
    <div>
      <div>
        <figure onClick={props.displayMask}>
          <img src={squares} alt="Squares photo"/>
          <figcaption>Figure: Screenshot of the 368 Squares game</figcaption>
        </figure>
      </div>
      <div className='smallRepoLink'>
        <a href="https://github.com/zu213/square-paint" className="smallLink" target="_blank" rel="noreferrer">Repository</a>&nbsp;
         | <a href="https://zupstn.com/#/368squares" className="smallLink">Website</a>
      </div>
    
     
      <div>
        Small js game based on <a href="https://368chickens.com/" className='smallLink'>368 Chickens</a>.
        <br />
        <br />
        The premise of the game is to get rid of all 368 squares. Squares are removed by having three or more in a row.
        However, if you are no longer able to place squares in the grid you lose.
      </div>
    </div>

  );
}

export default Squares;