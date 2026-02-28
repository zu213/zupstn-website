
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BreadcrumbLink } from '../../../util/Breadcrumbs';


function BerkoPickCard() {
  return (
    <BreadcrumbLink to='/berko-pick'>
      <div className='project-card-title'>
        Berko Litter Pick
      </div>
      <div className='card-gradient grey'>
        <FontAwesomeIcon icon={faTrash} />
      </div>
      <div>
        A complete CRUD app with the frontend fully in Vanilla JS and a Python backend using FastAPI.
      </div>
      <div className='tag-holder'>
        <span className='tag yellow'>Vanilla JS</span><span className='tag blue'>Python</span><span className='tag green'>FastAPI</span>
      </div>
    </BreadcrumbLink>
  );
}

export default BerkoPickCard;