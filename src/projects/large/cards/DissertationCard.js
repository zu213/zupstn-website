
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BreadcrumbLink } from '../../../util/Breadcrumbs';


function DissertationCard() {
  return (
    <BreadcrumbLink to='/dissertation'>
      <div className='project-card-title'>
        Dissertation
      </div>
      <div className='card-gradient turquoise'>
        <FontAwesomeIcon icon={faPalette} />
      </div>
      <div>
        Human Involvement Can Improve Current Image Synthesis Methods within the Domain of Art.
      </div>
      <div className='tag-holder'>
        <span className='tag blue'>Python</span><span className='tag red'>AI</span><span className='tag green'>RLHF</span><span className='tag purple'>pytorch</span>
      </div>
    </BreadcrumbLink>

  );
}

export default DissertationCard;