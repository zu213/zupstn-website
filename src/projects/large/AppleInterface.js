import fruitlipsPNG from './media/fruitlips.png';
import fruitlips from './media/fruitlips.webp';
import fruitlips2PNG from './media/fruit-lips2.png';
import fruitlips2 from './media/fruit-lips2.webp';
import appleInterfacePNG from './media/apple-interface.png';
import appleInterface from './media/apple-interface.webp';
import { BreadcrumbLink } from '../../util/Breadcrumbs.js';

function AppleInterface(props) {

  return (
    <div className='project-page'>
      <header className='page-header'>Apple Interface</header>
      <div>
        <a href="https://github.com/zu213/fruit-lips" className="small-link" target="_blank" rel="noreferrer">Repository</a>
        &nbsp;|&nbsp;
        <BreadcrumbLink className="small-link" to="/fruit-lips">Fruit Lips 1</BreadcrumbLink>
        &nbsp;|&nbsp;
        <BreadcrumbLink className="small-link" to="/fruit-lips2">Fruit Lips 2</BreadcrumbLink>
        &nbsp;|&nbsp;
        <BreadcrumbLink className="small-link" to="/apple-interface">Apple Interface</BreadcrumbLink>
        <br/>
      </div>

      <div className='tight-project-inline-structure'>
        <figure onClick={() => props.displayMask(fruitlips)}>
          <picture>
            <source srcSet={fruitlips} type="image/webp" />
            <img src={fruitlipsPNG} alt="Fruit Lips 1" />
          </picture>
          <figcaption>Figure: Fruit Lips 1</figcaption>
        </figure>
      </div>
      <div className='tight-project-inline-structure'>
        <figure onClick={() => props.displayMask(fruitlips2)}>
          <picture>
            <source srcSet={fruitlips2} type="image/webp" />
            <img src={fruitlips2PNG} alt="Fruit Lips 2" />
          </picture>
          <figcaption>Figure: Fruit Lips 2</figcaption>
        </figure>
      </div>
      <div className='tight-project-inline-structure'>
        <figure onClick={() => props.displayMask(appleInterface)}>
          <picture>
            <source srcSet={appleInterface} type="image/webp" />
            <img src={appleInterfacePNG} alt="Apple Interface" />
          </picture>
          <figcaption>Figure: Apple Interface</figcaption>
        </figure>
      </div>

      <div className='snow-text'>
        An interactive art experiment built with <b>Vanilla JavaScript</b> in collaboration with a local woodturner. The Apple Interface
        is the third iteration of the Fruit Lips project, each exploring different visual and
        interactive ideas through canvas-based animation and user input.
        <br />
        <br />
        The project explores animating speech in JS, I investigated how animation is performed and mapped these too frames.
        Thorughout the project how the frames were shown changed, it started off with static pngs, then css animations using coordinate grids before becoming a 
        mix between the two for the final project. The first two iterations also allow viewers to interacti with speech (only in-built for some browsers).
        <br />
        <br />
        The projects final iteration has an past input board that uses a small Vercel backend and Upstash NoSQL database.
      </div>
    </div>
  );
}

export default AppleInterface;
