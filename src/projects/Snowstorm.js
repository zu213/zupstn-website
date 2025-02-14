import c from './media/c.gif'
import d from './media/d.gif'
import rust from './media/rust.gif'
import assembly from './media/assembly.gif'

function Snowstorm() {
    return (
      <div>
       <div>
          <a href="https://github.com/zu213/snowstorm" className="smallLink" target="_blank" rel="noreferrer">Repository</a>
          <br/>
        </div>

        <div className='tightProjectInlineStructure'>
          <figure>
            <img src={c} alt="scholars gif"/>
            <figcaption>Figure: The UI I created to allow the utlisation of RLHF</figcaption>
          </figure>
        </div>
        <div className='tightProjectInlineStructure'>
          <figure>
            <img src={d} alt="scholars gif"/>
            <figcaption>Figure: The UI I created to allow the utlisation of RLHF</figcaption>
          </figure>
        </div>
        <div className='tightProjectInlineStructure'>
          <figure>
            <img src={rust} alt="scholars gif"/>
            <figcaption>Figure: The UI I created to allow the utlisation of RLHF</figcaption>
          </figure>
        </div>
        <div className='tightProjectInlineStructure'>
          <figure>
            <img src={assembly} alt="scholars gif"/>
            <figcaption>Figure: The UI I created to allow the utlisation of RLHF</figcaption>
          </figure>
        </div>

        <div>
          I implemented the game of <a href="https://en.wikipedia.org/wiki/Chess">Chess</a> entirely within C.
          
          To do this...

          A gif of the game playing can be seen below.
        </div>
      
      </div>

    );
  }

export default Snowstorm;