
import { faFaceLaugh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BreadcrumbLink } from '../../../util/Breadcrumbs';


function AppleInterfaceCard() {
  return (
    <BreadcrumbLink to='/appleinterface'>
      <div className='project-card-title'>
        Apple Interface
      </div>
      <div className='card-gradient turquoise'>
        <FontAwesomeIcon icon={faFaceLaugh} />
      </div>
      <div>
        An collabarative interactive art piece made in JS, with several iterations leading to a small Vercel and Upstash backend.
      </div>
      <div className='tag-holder'>
        <span className='tag yellow'>Vanilla JS</span>
      </div>
    </BreadcrumbLink>

  );
}

export default AppleInterfaceCard;