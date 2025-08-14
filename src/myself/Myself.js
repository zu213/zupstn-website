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
          Find my GitHub <a className="small-link" href="https://github.com/zu213" target="_blank" rel="noreferrer">here</a>, 
          showcasing various personal projects on the &nbsp;  
        <BreadcrumbLink className="small-link" to="/projects">Projects page</BreadcrumbLink>.
        <br/>
        <br/>
    
          I am a <b>Product developer</b> for&nbsp;   
        <a className="small-link" href="https://www.pugpig.com/" >Pugpig</a> a media publishing platform powering 
          apps and web readers for brands like <i>The Spectator</i>, <i>The Independent</i> and <i>The Boston Globe</i>.
          My work spans <b>Native</b> (SwiftUI, Swift, ObjC, Java, Kotlin) and <b>Web</b> (Vue, PHP, Sass) development.
        <br/>
        <br/>
          Previously, I completed a year-long placement at &nbsp;
        <a className="small-link" href="https://www.kontron-americas.com/" >BSQUARE</a>, an IoT solutions company, 
          where I worked in <b>Software Development</b> and <b>QA</b>, gaining experience in <b>Angular</b> (TS, HTML, CSS),
          Gherkin and Selenium.
        <br/>
        <br/>
          This website is fully built by me using <b>React</b> and <b>Cloudflare</b>(Hosting). 
        <div className='subsub-title'>
          <br/>
            Graduate:
        </div>
          I’m a recently graduated student from the University of Bath, Achieving a First class degree.
          My degree focused mainly on AI and the Mathematics around Computer Science, however, it also 
          involved Graphics processing and Moder software developmenet methodologies.
          From within my degree I have experience coding with <b>Python, Java</b> and <b>C++</b>. During my 
          final year I completed a dissertation on image synthesis utilising human feedback this can be found on 
          the <BreadcrumbLink className="small-link" to="/projects">Projects page</BreadcrumbLink>.
        <br/>
        <br/>
  
        <div className='subsub-title'>
            Artist:
        </div>
          All my art can be seen on the <BreadcrumbLink className="small-link" to="/gallery">Gallery page</BreadcrumbLink>.
  
        <br/>
        <br/>
        <div className='subsub-title'>
          More:
        </div>
          Navigate the rest of my website by visiting the <BreadcrumbLink className="small-link" to="/glossary">Glossary page</BreadcrumbLink>.
      </div>
    </div>
  );
}

export default Me;