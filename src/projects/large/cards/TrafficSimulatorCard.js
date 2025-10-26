
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BreadcrumbLink } from '../../../util/Breadcrumbs';


function TrafficSimulatorCard() {
  return (
    <BreadcrumbLink to='/traffic-simulator'>
      <div className='project-card-title'>
        Traffic Simulator
      </div>
      <div className='card-gradient sunset'>
        <FontAwesomeIcon icon={faCar} />
      </div>
      <div>
        Simulate traffic visually in C to experiment with flow rates.
      </div>
      <div className='tag-holder'>
        <span className='tag red'>C</span><span className='tag green'>GDI</span>
      </div>
    </BreadcrumbLink>

  );
}

export default TrafficSimulatorCard;