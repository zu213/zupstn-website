
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BreadcrumbLink } from '../../../util/Breadcrumbs';


function ZachLangCard() {
  return (
    <BreadcrumbLink to='/zach-lang'>
      <div className='project-card-title'>
        Zach Lang
      </div>
      <div className='card-gradient green'>
        <FontAwesomeIcon icon={faGlobe} />
      </div>
      <div>
        My own web language which utilises types that are only strict when you declare them to be.
      </div>
      <div className='tag-holder'>
        <span className='tag green'>Compiler</span><span className='tag yellow'>Vanilla JS</span>
      </div>
    </BreadcrumbLink>

  );
}

export default ZachLangCard;