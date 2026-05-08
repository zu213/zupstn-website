
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BreadcrumbLink } from '../../../util/Breadcrumbs';


function WalkAnywhereCard() {
  return (
    <BreadcrumbLink to='/walkanywhere'>
      <div className='project-card-title'>
        WalkAnywhere
      </div>
      <div className='card-gradient turquoise'>
        <FontAwesomeIcon icon={faPersonWalking} />
      </div>
      <div>
        An iOS walking route tracker. Plan custom routes on a map, then use your HealthKit steps to progress along them.
      </div>
      <div className='tag-holder'>
        <span className='tag orange'>Swift</span><span className='tag blue'>SwiftUI</span><span className='tag purple'>HealthKit</span><span className='tag green'>MapKit</span>
      </div>
    </BreadcrumbLink>
  );
}

export default WalkAnywhereCard;
