
import hotkeyHelp from './media/hotkeyhelp.webp';

function HotkeyHelp(props) {
  return (
    <div>
      <div>
        <figure onClick={props.displayMask}>
          <img className='top-tracks-image' src={hotkeyHelp} alt="hotkey help printout"/>
          <figcaption>Figure: Graphic to display user's top tracks</figcaption>
        </figure>
      </div>
      <div className='small-repo-link'>
        <a href="https://github.com/zu213/key-help" className="small-link" target="_blank" rel="noreferrer">Repository</a>
      </div>
     
      <div>
        A shell script that prints out terminal hot keys.
        <br />
        <br />
        This can be triggered with the commaned <code>key-help</code> or <code>ctrl + x + h</code> once installed. It retains the input buffer allowing it to be called mid command.
        It can also be installed via <code>npx hotkey-help</code>.
      </div>
    </div>

  );
}

export default HotkeyHelp;