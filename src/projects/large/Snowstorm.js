import assemblyMP4 from './media/assembly.mp4';
import assembly from './media/assembly.webm';
import cMP4 from './media/c.mp4';
import c from './media/c.webm';
import dMP4 from './media/d.mp4';
import d from './media/d.webm';
import rustMP4 from './media/rust.mp4';
import rust from './media/rust.webm';

function Snowstorm(props) {
  return (
    <div>
      <header className='page-header'>Snowstorm</header>
      <div>
        <a href="https://github.com/zu213/snowstorm" className="small-link" target="_blank" rel="noreferrer">Repository</a>
        <br/>
      </div>

      <div className='tight-project-inline-structure'>
        <figure className='aspect-class' onClick={() => props.displayMask(c)}>
          <video autoPlay loop muted playsInline>
            {!props.isIOS() &&
              <source src={c} type="video/webm" />
            }
            <source src={cMP4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>  
          <figcaption>Figure: Snow programmed in C</figcaption>
        </figure>
      </div>
      <div className='tight-project-inline-structure'>
        <figure className='aspect-class' onClick={() => props.displayMask(d)}>
          <video autoPlay loop muted playsInline>
            {!props.isIOS() &&
              <source src={d} type="video/webm" />
            }
            <source src={dMP4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>  
          <figcaption>Figure: Snow programmed in D</figcaption>
        </figure>
      </div>
      <div className='tight-project-inline-structure'>
        <figure className='aspect-class' onClick={() => props.displayMask(rust)}>
          <video autoPlay loop muted playsInline>
            {!props.isIOS() &&
              <source src={rust} type="video/webm" />
            }
            <source src={rustMP4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>  
          <figcaption>Figure: Snow programmed in Rust</figcaption>
        </figure>
      </div>
      <div className='tight-project-inline-structure'>
        <figure className='aspect-class'  onClick={() => props.displayMask(assembly)}>
          <video autoPlay loop muted playsInline>
            {!props.isIOS() &&
              <source src={assembly} type="video/webm" />
            }
            <source src={assemblyMP4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>  
          <figcaption>Figure: Snow programmed in Assembly</figcaption>
        </figure>
      </div>

      <div className='snow-text'>
          Starting as an exploration of graphics in <b>Assembly</b>, where I experimented with rendering basic visuals
          at a low level. I then expanded this exploration to multiple languages, including some I had never used
          before.
        <br/>
        <ul className='snowList'>
          <li>
            <b>Assembly</b>: Graphics are drawn by modifying registers, such as&nbsp; <code>mov ax, 0xA000</code>,
              which directly interacts with color values. Since registers are limited, I had 
              to optimize loops to place and move snowflakes without using the <code>.data</code> section.
              I also incorporated the system clock to introduce pseudo-random snowfall.
          </li>

          <li>
            <b>C</b>: Uses the Windows message loop to trigger re-renders. Every time a message is sent,&nbsp;
            <code>CreateWindowEx</code> updates the screen, with direct <i>Bitmap manipulation</i> improving performance.
          </li>

          <li>
            <b>Rust</b>: Instead of GDI, I used the <i>minifb</i> library to achieve a minimal yet effective implementation.
              This resulted in Rust having the <i>smallest source code</i> among all the languages.
          </li>

          <li>
              Additionally I have written code Snow code for <b>D</b>, <b>C++</b> and <b>ada</b>, this can be found in repo 
              but I have yet to record gifs for each .exe, both rely on GDI to produce windows.
          </li>
        </ul>
      </div>
      
    </div>

  );
}

export default Snowstorm;