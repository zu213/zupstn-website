import npmcardPNG from './media/npmcard.png';
import npmcard from './media/npmcard.webp';

function NPMBusiness(props) {
  return (
    <div>
      <div>
        <figure onClick={() => props.displayMask(npmcard)}>
          <picture>
            <source srcSet={npmcard} type="image/webp" />
            <img src={npmcardPNG} alt="npm business card" />
          </picture>
          <figcaption>Figure: The business card in the terminal</figcaption>
        </figure>
      </div>
      <div className='small-repo-link'>
        <a href="https://github.com/zu213/zachupstone-card" className="small-link" target="_blank" rel="noreferrer">Repository</a>
      </div>
    
     
      <div>
        A npm package that echo's my personal business card.
        <br />
        <br />
        Utilises the <a href="https://github.com/chalk/chalk" className="small-link" target="_blank" rel="noreferrer">Chalk</a> library to make a nice visual in the terminal, inspired by <a href="https://github.com/bnb/bitandbang" className="small-link" target="_blank" rel="noreferrer">bitandbang</a>.
      </div>
    </div>

  );
}

export default NPMBusiness;