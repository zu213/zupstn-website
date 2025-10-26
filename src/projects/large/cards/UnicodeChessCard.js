
import { faChessPawn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BreadcrumbLink } from '../../../util/Breadcrumbs';


function UnicodeChessCard() {
  return (
    <BreadcrumbLink to='/unicode-chess'>
      <div className='project-card-title'>
        Unicode Chess
      </div>
      <div className='card-gradient grey'>
        <FontAwesomeIcon icon={faChessPawn} />
      </div>
      <div>
        Chess coded in C utilising Unicode characters.
      </div>
      <div className='tag-holder'>
        <span className='tag red'>C</span>
      </div>
    </BreadcrumbLink>

  );
}

export default UnicodeChessCard;