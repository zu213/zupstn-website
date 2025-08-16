import { BreadcrumbLink } from '../util/Breadcrumbs.js';
import './Myself.css';

function Me() {
  return (
    <div className='myself'>
      <div className="page-header">
        Zach Upstone
      </div>   
      <div className="link-holder">
        <a href="https://www.linkedin.com/in/zachary-upstone-076218214/" target="_blank" rel="noreferrer">LinkedIn</a> &nbsp; | &nbsp;
        <a href="https://github.com/zu213" target="_blank" rel="noreferrer">Github</a>
      </div>
  
      <div  className="text-holder">
        <div className='sub-title'>
            Who am I?
        </div>
  
        <br/>
        <div className='subsub-title'>
            Programmer:
        </div>
          Find my GitHub <a className="small-link" href="https://github.com/zu213" target="_blank" rel="noreferrer">here</a> -  it includes many of my personal projects, which can also be seen on the&nbsp;
        <BreadcrumbLink className="small-link" to="/projects">Projects page</BreadcrumbLink>. I am particularly interested in graphics, alongside my work in native and web development.
        <br/>
        <br/>
    
          I am a <b>Product developer</b> for&nbsp;   
        <a className="small-link" href="https://www.pugpig.com/" target='_blank' rel='noreferrer'>Pugpig</a> a media publishing platform powering 
          apps and web readers for brands like <i>The Spectator</i>, <i>The Independent</i> and <i>The Boston Globe</i>.
          My work here spans <b>Native</b> (SwiftUI, Swift, Objective-C, Java, Kotlin) and <b>Web</b> (Vue, PHP, Sass) development.
          Previously, I completed a year-long placement at &nbsp;
        <a className="small-link" href="https://www.kontron-americas.com/" target='_blank' rel='noreferrer'>BSQUARE</a>, an IoT solutions company, 
          where I worked in <b>Software Development</b> and <b>QA</b>, gaining experience in <b>Angular</b> (TS, HTML, CSS),
          Gherkin and Selenium.
        <br/>
        <br/>
          This website is fully built by me using <b>React</b>, <b>Cloudflare</b> and <b>GitHub Actions</b>. 
        <div className='subsub-title'>
          <br/>
            Graduate:
        </div>
          I graduated from the University of Bath with a <b>First Class honours degree in Computer Science(BSc)</b>.
          My degree focused on AI, the mathematics underpinning computer science, graphics processing and modern software development methodologies.
          From within my degree I have experience coding with <b>Python, Java</b> and <b>C++</b>.
          During my final year I completed a dissertation titled <i>Human Involvement Can Improve Current Image Synthesis Methods within the Domain of Art</i>. This can be found on 
          the <BreadcrumbLink className="small-link" to="/projects">Projects page</BreadcrumbLink>.
        <br/>
        <br/>
  
        <div className='subsub-title'>
            Artist:
        </div>
          All my art can be seen on the <BreadcrumbLink className='small-link' to='/gallery'>Gallery page</BreadcrumbLink>, I mainly work with <b>Collage</b> and <b>Spray Paint</b>.
  
        <br/>
        <br/>
        <div className='subsub-title'>
          More:
        </div>
          If you are interested professionally add me on <a className='small-link' href='https://www.linkedin.com/in/zachary-upstone-076218214/' target='_blank' rel='noreferrer'>LinkedIn</a>. Feel free to navigate the rest of my website by visiting the <BreadcrumbLink className="small-link" to="/glossary">Glossary page</BreadcrumbLink> - many of the pages are hidden otherwise!
      </div>
    </div>
  );
}

export default Me;