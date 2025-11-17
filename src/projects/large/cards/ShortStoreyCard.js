
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BreadcrumbLink } from '../../../util/Breadcrumbs';


function ShortStoreyCard() {
  return (
    <BreadcrumbLink to='/shortstorey'>
      <div className='project-card-title'>
        ShortStorey
      </div>
      <div className='card-gradient turquoise'>
        <FontAwesomeIcon icon={faHouse} />
      </div>
      <div>
        A complete Vue CRUD app for sharing and rating short storys.
      </div>
      <div className='tag-holder'>
        <span className='tag green'>Vue</span><span className='tag blue'>Fastify</span><span className='tag purple'>Prisma</span>
      </div>
    </BreadcrumbLink>

  );
}

export default ShortStoreyCard;