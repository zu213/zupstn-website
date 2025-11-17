
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BreadcrumbLink } from '../../../util/Breadcrumbs';


function ChromeContextControlCard() {
  return (
    <BreadcrumbLink to='/chrome-context-control'>
      <div className='project-card-title'>
        Chrome Context Control
      </div>
      <div className='card-gradient chrome'>
        <FontAwesomeIcon icon={faWindowMaximize} />
      </div>
      <div>
        Control Chrome's right-click menu, rearranging existing items and adding custom worker options.
      </div>
      <div className='tag-holder'>
        <span className='tag purple'>Chrome</span><span className='tag yellow'>Vanilla JS</span>
      </div>
    </BreadcrumbLink>

  );
}

export default ChromeContextControlCard;