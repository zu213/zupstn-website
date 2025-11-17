import squaresPNG from './media/squares.png';
import squares from './media/squares.webp';

function Squares(props) {
  return (
    <div onClick={() => props.displayMask(squares)}>
      <div>
        <figure>
          <picture>
            <source srcSet={squares} type="image/webp" />
            <img src={squaresPNG} alt="368 Squares game" />
          </picture>
          <figcaption>Figure: Screenshot of the 368 Squares game</figcaption>
        </figure>
      </div>
      <div className='small-repo-link'>
        <a href="https://github.com/zu213/square-paint" className="small-link" target="_blank" rel="noreferrer">Repository</a>&nbsp;
         | <a href="https://zupstn.com/#/368squares" className="small-link">Website</a>
      </div>
    
     
      <div>
        Small js game based on <a href="https://368chickens.com/" className='small-link'>368 Chickens</a>.
        <br />
        <br />
        The premise of the game is to get rid of all 368 squares. Squares are removed by having three or more in a row.
        However, if you are no longer able to place squares in the grid you lose.
      </div>

      <div className='tag-holder'>
        <span className='tag yellow'>Vanilla JS</span>
      </div>
    </div>

  );
}

export default Squares;