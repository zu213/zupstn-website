import tempGlassPNG from './media/tempglass.png';
import tempGlass from './media/tempglass.webp';

function TemperatureGlass(props) {
  return (
    <div onClick={() => props.displayMask(tempGlass)}>
      <div>
        <figure>
          <picture>
            <source srcSet={tempGlass} type="image/webp" />
            <img src={tempGlassPNG} alt="Temperature glass overlay" />
          </picture>
          <figcaption>Figure: Picture of the overlay</figcaption>
        </figure>
      </div>
      <div className='small-repo-link'>
        <a href="https://github.com/zu213/temperature-glass" className="small-link" target="_blank" rel="noreferrer">Repository</a>
      </div>
    
      <div>
        Small C# project that on startup adds an overlay that reports the CPU tempreature live. It fetches this data via <i>OpenHardwareMonitorLib.dll</i>.
      </div>
    </div>

  );
}

export default TemperatureGlass;