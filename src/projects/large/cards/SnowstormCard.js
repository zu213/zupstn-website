
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BreadcrumbLink } from '../../../util/Breadcrumbs';


function SnowstormCard() {
  return (
    <BreadcrumbLink to='/snowstorm'>
      <div className='project-card-title'>
        Snowstorm
      </div>
      <div className='card-gradient grey'>
        <FontAwesomeIcon icon={faSnowflake} />
      </div>
      <div>
        Snow coded in multiple languages as a graphics experimentation project.
      </div>
      <div className='tag-holder'>
        <span className='tag red'>C</span><span className='tag green'>C++</span><span className='tag blue'>Ada</span><span className='tag purple'>D</span><span className='tag yellow'>Rust</span>
      </div>
    </BreadcrumbLink>

  );
}

export default SnowstormCard;