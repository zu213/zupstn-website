
import sudowoodo from './media/sudowoodo.webm';

function BouncingLogo(props) {
  return (
    <div>
      <div>
        <figure onClick={props.displayMask}>
          <video className='sudowoodo' autoPlay loop muted playsInline>
            <source src={sudowoodo} type="video/webm" />
            Your browser does not support the video tag.
          </video> 
          <figcaption>Figure: Gif of bouncing logo</figcaption>
        </figure>
      </div>
      <div className='small-repo-link'>
        <a href="https://github.com/zu213/bouncing-logo" className="small-link" target="_blank" rel="noreferrer">Repo</a> |&nbsp;
        <a href="/exes/BouncingLogo.exe" className="small-link" download>Windows Download</a>
      </div>
     
      <div>
        Small C# project that displays a bouncing logo when a computer sleeps, much like the old school dvd logo.
      </div>
    </div>

  );
}

export default BouncingLogo;