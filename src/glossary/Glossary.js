import { BreadcrumbLink } from '../util/Breadcrumbs.js';
import './Glossary.css';

function Glossary() {
  return (
    <div>
      <div className='pageHeader'>Page links</div>
      <div className='linksListContainer'>
        <div className='linksContainer'>
          <div className='link'> <BreadcrumbLink to="/">/home</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/me">/me</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/cv">/cv</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/projects">/projects</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/gallery">/gallery</BreadcrumbLink></div>
        </div>
        <div className='linksContainer'>
          <div className='link'> <BreadcrumbLink to="/charts">/charts</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/dissertation-tool">/dissertation-tool (inactive)</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/fruit-lips">/fruit-lips</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/fruit-lips2">/fruit-lips2 (in-progress)</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/368squares">/368squares</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/llm-compare">/llm-compare</BreadcrumbLink></div>
        </div>
      </div>
    </div>
  );
}

export default Glossary;