
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BreadcrumbLink } from '../../../util/Breadcrumbs';


function SquarePaintCard() {
  return (
    <BreadcrumbLink to='/square-paint'>
      <div className='project-card-title'>
        Square Paint
      </div>
      <div className='card-gradient pink'>
        <FontAwesomeIcon icon={faSquare} />
      </div>
      <div>
        A unique painting tool based around squares that can be split into sub-squares.
      </div>
      <div className='tag-holder'>
        <span className='tag green'>C++</span><span className='tag red'>GLUT</span>
      </div>
    </BreadcrumbLink>

  );
}

export default SquarePaintCard;