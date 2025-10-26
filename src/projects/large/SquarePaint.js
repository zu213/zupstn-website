
import squarePaintMP4 from './media/square-paint-tree.mp4';
import squarePaintWebm from './media/square-paint-tree.webm';

function SquarePaint(props) {
  return (
    <div>
      <header className='page-header'>Square Paint</header>
      <div>
        <a href="https://github.com/zu213/square-paint" className="small-link" target="_blank" rel="noreferrer">Repo</a> |&nbsp;
        <a href="/exes/SquarePaint.exe" className="small-link" download>Windows Download</a>
        <br/>
      </div>
    
      <div className='large-project-inline-structure'>
        <figure onClick={props.displayMask} className='aspect-class'>
          <video autoPlay loop muted playsInline>
            {!props.isIOS() &&
              <source src={squarePaintWebm} type="video/webm" />
            }
            <source src={squarePaintMP4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>          
          <figcaption>Figure: Gif of the SquarePaint in use</figcaption>
        </figure>
      </div>
      <div className='tight-project-inline-structure top-padding left-align indent-mask'>
        A painting tool implemented in C++, you can paint by dividing a grid into colours to create a cool and blocky artistic effect.
        <br />
        <br />
        The grid starts divided into 3x3 but can be divided infinitely further by use of scrolling. This tool includes the ability to change the colour you're painting, the colour of the grid, zoom in and out, pan the camera and hide the grid entirely.
        Is programmed utilising <a className="small-link" href="https://github.com/markkilgard/glut">GLUT</a>, the grids redraw recursively upon user actions. 
        <br />
        <br />
        <b>Note:</b> the gif distorts the cursor's position
      </div>
    </div>

  );
}

export default SquarePaint;