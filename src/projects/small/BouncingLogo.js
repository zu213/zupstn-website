
import sudowoodo from './media/sudowoodo.gif';

function BouncingLogo(props) {
  return (
    <div>
      <div>
        <figure onClick={props.displayMask}>
          <img src={sudowoodo} alt="Bouncing logo gif"/>
          <figcaption>Figure: Gif of bouncing logo</figcaption>
        </figure>
      </div>
      <div className='smallRepoLink'>
        <a href="https://github.com/zu213/bouncing-logo" className="smallLink" target="_blank" rel="noreferrer">Repository</a>
      </div>
     
      <div>
        Small C# project that displays a bouncing logo when a computer sleeps, much like the old school dvd logo.
      </div>
    </div>

  );
}

export default BouncingLogo;