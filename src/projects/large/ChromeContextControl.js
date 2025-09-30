import contextMenuPNG from './media/ccc_contextmenu.png';
import contextMenu from './media/ccc_contextmenu.webp';
import dragScreenPNG from './media/ccc_dragscreen.png';
import dragScreen from './media/ccc_dragscreen.webp';

function ChromeContextControl(props) {

  return (
    <div>
      <div>
        <a href="https://github.com/zu213/chrome-context-control" className="small-link" target="_blank" rel="noreferrer">Repository</a>
        <br/>
      </div>

      <div className='wide-project-inline-structure'>
        <figure onClick={props.displayMask}>
          <picture>
            <source srcSet={dragScreen} type="image/webp" />
            <img src={dragScreenPNG} alt="home page" />
          </picture>
          <figcaption>Figure: Chrome Context Control home page</figcaption>
        </figure>
      </div>

      <div className='tight-project-inline-structure top-padding indent-mask'>
          I implemented a Chrome Extension that allows users more control over the right 
          click menu.
        <br />
        <br />
          This allows users to add, remove and generally customise their context menu by using the Chrome 
          extensions landing apge shown here. This is built using JS and utlises service workers to run 
          background scripts to intercept the right click event. 
      </div>

      <div className='tight-project-inline-structure top-padding indent-mask'>
          You also have the ability add custom code that is run by a Chrome worker, this is also down on 
          the landing page and can be added to the right click menu to allow quick running of custom code. 
          An example fo this can be found within the README in the linked repository.
      </div>

      <div className='wide-project-inline-structure'>
        <figure onClick={props.displayMask}>
          <picture>
            <source srcSet={contextMenu} type="image/webp" className='white-border' />
            <img src={contextMenuPNG} alt="new context menu" className='white-border' />
          </picture>
          <figcaption>Figure: New modified context menu</figcaption>
        </figure>
      </div>
    </div>

  );
}

export default ChromeContextControl;