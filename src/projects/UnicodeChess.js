import scholarsGif from './media/scholars.gif';
function UnicodeChess(props) {

  return (
    <div>
      <div>
        <a href="https://github.com/zu213/unicode-chess" className="smallLink" target="_blank" rel="noreferrer">Repository</a>
        <br/>
      </div>

      <div className='projectInlineStructure leftAlign'>
          I implemented a complete <a href="https://en.wikipedia.org/wiki/Chess" className="smallLink">Chess</a> game in <b>C</b>,
          handling everything from <b>input validation</b> to <b>checkmate detection</b>.
        <br />
        <br/>
        <ul>
          <li>First, I configured the console to display Unicode chess pieces.</li>
          <li>I then built an input loop to handle moves and validate them according to chess rules.</li>
          <li>The move validation process follows three steps:
            <ol>
              <li><b>Piece Rules</b> – Ensures each piece moves correctly (e.g., bishops move diagonally).</li>
              <li><b>Path Blocking</b> – Checks if any pieces obstruct the move.</li>
              <li><b>King Safety</b> – Detects if the move leaves the king in check or results in checkmate.</li>
            </ol>
          </li>
        </ul>

This project required efficient board representation and logic to enforce chess mechanics entirely within a text-based console environment. ♜♞♛

      </div>
      <div className='projectInlineStructure'>
        <figure onClick={props.displayMask} className='aspectClass'>
          <img src={scholarsGif} alt="scholars gif"/>
          <figcaption>Figure: Gif of Chess implemented in C</figcaption>
        </figure>
      </div>
      
    </div>

  );
}

export default UnicodeChess;