
import fruitLips from './media/fruitlips.png';

function FruitLips(props) {
  return (
    <div>
      <div>
        <figure onClick={props.displayMask}>
          <img src={fruitLips} alt="Fruit lips webpage"/>
          <figcaption>Figure: Fruit lips webpage</figcaption>
        </figure>
      </div>
      <div className='smallRepoLink'>
        <a href="https://github.com/zu213/square-paint" className="smallLink" target="_blank" rel="noreferrer">Repository</a>&nbsp;
         | <a href="https://zupstn.com/#/fruit-lips" className="smallLink">Website</a>&nbsp;
         | <a href="https://zupstn.com/#/fruit-lips2" className="smallLink">Website 2</a>
      </div>
    
     
      <div>
        A small js project to animate speaking. Requires the browser to have <i>SpeechRecognition</i> for the microphone feature to work,
         Chrome has this by default, however, Firefox does not.
      </div>
    </div>

  );
}

export default FruitLips;