import scholarsGif from './media/scholars.gif'
function UnicodeChess() {

  const toggleClass = (e) => {
    e.target.setFilter.bind(this, '')
  }

    return (
      <div>
        <div>
          <a href="https://github.com/zu213/unicode-chess" className="smallLink" target="_blank" rel="noreferrer">Repository</a>
          <br/>
        </div>

        <div className='projectInlineStructure'>
          I implemented the game of <a href="https://en.wikipedia.org/wiki/Chess">Chess</a> entirely within C.

          To do this...

          A gif of the game playing can be seen below.

        </div>
        <div className='projectInlineStructure'>
          <figure onClick="toggleClass">
            <img src={scholarsGif} alt="scholars gif"/>
            <figcaption>Figure: The UI I created to allow the utlisation of RLHF</figcaption>
          </figure>
        </div>
      
      </div>

    );
  }

export default UnicodeChess;