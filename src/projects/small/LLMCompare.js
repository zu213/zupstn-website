import comparePNG from './media/compare.png';
import compare from './media/compare.webp';
import { BreadcrumbLink } from '../../util/Breadcrumbs';

function LLMCompare(props) {
  return (
    <div  onClick={() => props.displayMask(compare)}>
      <div>
        <figure>
          <picture>
            <source srcSet={compare} type="image/webp" />
            <img src={comparePNG} alt="llm compare tabs" />
          </picture>
          <figcaption>Figure: Tab system of LLM compare</figcaption>
        </figure>
      </div>
      <div className='small-repo-link' onClick={e => e.stopPropagation()}>
        <a href="https://github.com/zu213/llm-compare" className="small-link" target="_blank" rel="noreferrer">Repository</a>&nbsp;
         | <BreadcrumbLink to="/llm-compare" className="small-link">Website</BreadcrumbLink>
      </div>
    
     
      <div>
        Project to allow comparison of different popular LLM's side by side easily, utilises tabs and the relevant API's.
        <br />
        <br />
        Currently stalled due to all of the API's (except Claude) requiring paid tier for any use.
      </div>

      <div className='tag-holder'>
        <span className='tag yellow'>Vanilla JS</span><span className='tag purple'>LLM</span>
      </div>
    </div>

  );
}

export default LLMCompare;