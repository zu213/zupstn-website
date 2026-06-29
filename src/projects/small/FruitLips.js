import fruitLipsPNG from './media/fruitlips.png';
import fruitLips from './media/fruitlips.webp';
import { BreadcrumbLink } from '../../util/Breadcrumbs';

function FruitLips(props) {
  return (
    <div onClick={() => props.displayMask(fruitLips)}>
      <div>
        <figure>
          <picture>
            <source srcSet={fruitLips} type="image/webp" />
            <img src={fruitLipsPNG} alt="Fruit lips webpage" />
          </picture>
          <figcaption>Figure: Fruit lips webpage</figcaption>
        </figure>
      </div>
      <div className='small-repo-link' onClick={e => e.stopPropagation()}>
        <a href="https://github.com/zu213/square-paint" className="small-link" target="_blank" rel="noreferrer">Repository</a>&nbsp;
         | <BreadcrumbLink to="/fruit-lips" className="small-link">Website</BreadcrumbLink>&nbsp;
         | <BreadcrumbLink to="/fruit-lips2" className="small-link">Website 2</BreadcrumbLink>
      </div>
    
      <div>
        A small js project to animate speaking. Requires the browser to have <i>SpeechRecognition</i> for the microphone feature to work,
         Chrome has this by default, however, Firefox does not.
      </div>

      <div className='tag-holder'>
        <span className='tag yellow'>Vanilla JS</span>
      </div>
    </div>

  );
}

export default FruitLips;