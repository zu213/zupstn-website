import assembly from './media/assembly.webm';
import c from './media/c.webm';
import d from './media/d.webm';
import rust from './media/rust.webm';

function Snowstorm(props) {
  return (
    <div>
      <div>
        <a href="https://github.com/zu213/snowstorm" className="small-link" target="_blank" rel="noreferrer">Repository</a>
        <br/>
      </div>

        Note: GIF's can take a while to load!
      <br />

      <div className='tight-project-inline-structure'>
        <figure className='aspect-class' onClick={props.displayMask}>
          <video autoPlay loop muted playsInline>
            <source src={c} type="video/webm" />
            Your browser does not support the video tag.
          </video>  
          <figcaption>Figure: Snow programmed in C</figcaption>
        </figure>
      </div>
      <div className='tight-project-inline-structure'>
        <figure className='aspect-class' onClick={props.displayMask}>
          <video autoPlay loop muted playsInline>
            <source src={d} type="video/webm" />
            Your browser does not support the video tag.
          </video>  
          <figcaption>Figure: Snow programmed in D</figcaption>
        </figure>
      </div>
      <div className='tight-project-inline-structure'>
        <figure className='aspect-class' onClick={props.displayMask}>
          <video autoPlay loop muted playsInline>
            <source src={rust} type="video/webm" />
            Your browser does not support the video tag.
          </video>  
          <figcaption>Figure: Snow programmed in Rust</figcaption>
        </figure>
      </div>
      <div className='tight-project-inline-structure'>
        <figure className='aspect-class'  onClick={props.displayMask}>
          <video autoPlay loop muted playsInline>
            <source src={assembly} type="video/webm" />
            Your browser does not support the video tag.
          </video>  
          <figcaption>Figure: Snow programmed in Assembly</figcaption>
        </figure>
      </div>

      <div className='snow-text'>
          Starting as an exploration of graphics in <b>Assembly</b>, where I experimented with rendering basic visuals
          at a low level. I then expanded this exploration to multiple languages, including some I had never used
          before. Each required setting up a local environment and finding the most direct way to manipulate 
          graphics.
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
            <b>D</b>: Leveraged the <i>dub package system</i> for GDI support without manual linking.
              Since D doesn’t automate system messages, I implemented a <i>manual timer</i> to trigger updates.
              It uses <code>CreateWindowExW</code>, similar to C.
          </li>

          <li>
              Additionally I have written code Snow code for <b>C++</b> and <b>ada</b>, this can be found in repo 
              but I have yet to record gifs for each .exe, both rely on GDI to produce windows.
          </li>
        </ul>
      </div>
      
    </div>

  );
}

export default Snowstorm;