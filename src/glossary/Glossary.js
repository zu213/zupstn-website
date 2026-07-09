import { BreadcrumbLink } from '../util/Breadcrumbs.js';
import './Glossary.css';

function Glossary() {
  return (
    <div className='glossary'>
      <div className='page-header'>Page links</div>
      <div className='links-list-container'>
        <div className='links-container'>
          <div className='link'> <BreadcrumbLink to="/">/home</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/me">/me</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/cv">/cv</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/projects">/projects</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/gallery">/gallery</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/related-links">/related-links</BreadcrumbLink></div>
        </div>
        <div className='links-container'>
          <div className='link'> <BreadcrumbLink to="/charts">/charts</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/dissertation-tool">/dissertation-tool (inactive)</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/fruit-lips">/fruit-lips</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/fruit-lips2">/apple-interface (fruit-lips2)</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/apple-interface">/apple-interface (fruit-lips3)</BreadcrumbLink></div>
        </div>
        <div className='links-container'>
          <div className='link'> <BreadcrumbLink to="/368squares">/368squares</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/llm-compare">/llm-compare</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/berko-litter-pick">/berko-litter-pick</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to="/shortstorey">/shortstorey</BreadcrumbLink></div>
          <div className='link'> <BreadcrumbLink to='/spotify-roulette-demo'>/spotify-roulette-demo</BreadcrumbLink></div>
        </div>
      </div>
    </div>
  );
}

export default Glossary;