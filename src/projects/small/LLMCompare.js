import comparePNG from './media/compare.png';
import compare from './media/compare.webp';

function LLMCompare(props) {
  return (
    <div>
      <div>
        <figure onClick={() => props.displayMask(compare)}>
          <picture>
            <source srcSet={compare} type="image/webp" />
            <img src={comparePNG} alt="llm compare tabs" />
          </picture>
          <figcaption>Figure: Tab system of LLM compare</figcaption>
        </figure>
      </div>
      <div className='small-repo-link'>
        <a href="https://github.com/zu213/llm-compare" className="small-link" target="_blank" rel="noreferrer">Repository</a>&nbsp;
         | <a href="https://zupstn.com/#/llm-compare" className="small-link">Website</a>
      </div>
    
     
      <div>
        Project to allow comparison of different popular LLM's side by side easily, utilises tabs and the relevant API's.
        <br />
        <br />
        Currently stalled due to all of the API's (except Claude) requiring paid tier for any use.
      </div>
    </div>

  );
}

export default LLMCompare;