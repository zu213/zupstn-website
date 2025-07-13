
import npmcard from './media/npmcard.png';

function NPMBusiness(props) {
  return (
    <div>
      <div>
        <figure onClick={props.displayMask} className=''>
          <img src={npmcard} alt="npm business card"/>
          <figcaption>Figure: The business card in the terminal</figcaption>
        </figure>
      </div>
      <div className='smallRepoLink'>
        <a href="https://github.com/zu213/zachupstone-card" className="smallLink" target="_blank" rel="noreferrer">Repository</a>
      </div>
    
     
      <div>
        A npm package that echo's my personal business card.
        <br />
        <br />
        Utilises the <a href="https://github.com/chalk/chalk" className="smallLink" target="_blank" rel="noreferrer">Chalk</a> library to make a nice visual in the terminal, inspired by <a href="https://github.com/bnb/bitandbang" className="smallLink" target="_blank" rel="noreferrer">bitandbang</a>.
      </div>
    </div>

  );
}

export default NPMBusiness;