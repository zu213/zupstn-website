
import squarePaintGif from './media/square-paint-tree.gif';

function SquarePaint(props) {
  return (
    <div>
      <div>
        <a href="https://github.com/zu213/square-paint" className="small-link" target="_blank" rel="noreferrer">Repo</a> |&nbsp;
        <a href="/exes/SquarePaint.exe" className="small-link" download>Windows Download</a>
        <br/>
      </div>
    
      <div className='largeProjectInlineStructure'>
        <figure onClick={props.displayMask} className='aspectClass'>
          <img src={squarePaintGif} alt="squarepaint gif"/>
          <figcaption>Figure: Gif of the SquarePaint in use</figcaption>
        </figure>
      </div>
      <div className='tightProjectInlineStructure topPadding left-align indentMobile'>
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