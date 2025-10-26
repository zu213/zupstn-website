import fruitLipsPNG from './media/fruitlips.png';
import fruitLips from './media/fruitlips.webp';

function FruitLips(props) {
  return (
    <div>
      <div>
        <figure onClick={() => props.displayMask(fruitLips)}>
          <picture>
            <source srcSet={fruitLips} type="image/webp" />
            <img src={fruitLipsPNG} alt="Fruit lips webpage" />
          </picture>
          <figcaption>Figure: Fruit lips webpage</figcaption>
        </figure>
      </div>
      <div className='small-repo-link'>
        <a href="https://github.com/zu213/square-paint" className="small-link" target="_blank" rel="noreferrer">Repository</a>&nbsp;
         | <a href="https://zupstn.com/#/fruit-lips" className="small-link">Website</a>&nbsp;
         | <a href="https://zupstn.com/#/fruit-lips2" className="small-link">Website 2</a>
      </div>
    
     
      <div>
        A small js project to animate speaking. Requires the browser to have <i>SpeechRecognition</i> for the microphone feature to work,
         Chrome has this by default, however, Firefox does not.
      </div>
    </div>

  );
}

export default FruitLips;