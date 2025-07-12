import contextMenu from '../media/ccc_contextmenu.png';
import dragScreen from '../media/ccc_dragscreen.png';

function ChromeContextControl(props) {

  return (
    <div>
      <div>
        <a href="https://github.com/zu213/chrome-context-control" className="smallLink" target="_blank" rel="noreferrer">Repository</a>
        <br/>
      </div>

      <div className='wideProjectInlineStructure'>
        <figure onClick={props.displayMask}>
          <img src={dragScreen} alt="ccc home page"/>
          <figcaption>Figure: Chrome Context Control home page</figcaption>
        </figure>
      </div>

      <div className='tightProjectInlineStructure topPadding indentMobile'>
          I implemented a Chrome Extension that allows users more control over the right 
          click menu.
        <br />
        <br />
          This allows users to add, remove and generally customise their context menu by using the Chrome 
          extensions landing apge shown here. This is built using JS and utlises service workers to run 
          background scripts to intercept the right click event. 
      </div>

      <div className='tightProjectInlineStructure topPadding indentMobile'>
          You also have the ability add custom code that is run by a Chrome worker, this is also down on 
          the landing page and can be added to the right click menu to allow quick running of custom code. 
          An example fo this can be found within the README in the linked repository.
      </div>

      <div className='wideProjectInlineStructure'>
        <figure onClick={props.displayMask}>
          <img src={contextMenu} className='whiteBorder' alt="new context menu"/>
          <figcaption>Figure: New modified context menu</figcaption>
        </figure>
      </div>
    </div>

  );
}

export default ChromeContextControl;