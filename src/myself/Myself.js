import { Link } from 'react-router-dom';
import './Myself.css';

function Me() {
  return (
    <div>
      <div className="linkHolder">
        <a href="mailto:Zac.upstone@gmail.com" target="_blank" rel="noreferrer">Email</a> &nbsp; | &nbsp;
        <a href="https://www.linkedin.com/in/zachary-upstone-076218214/" target="_blank" rel="noreferrer">LinkedIn</a> &nbsp; | &nbsp;
        <a href="https://github.com/zu213" target="_blank" rel="noreferrer">Github</a>
      </div>
  
      <div  className="textHolder">
        <div className='subTitle'>
            Who am I?
        </div>
  
        <br/>
        <div className='subSubTitle'>
            Programmer:
        </div>
          Find my GitHub <a className="smallLink" href="https://github.com/zu213" target="_blank" rel="noreferrer">here</a>, 
          showcasing various personal projects on the &nbsp;  
        <Link className="smallLink" to="/projects">Projects page</Link>.
        <br/>
        <br/>
    
          I am a <b>Product developer</b> for&nbsp;   
        <a className="smallLink" href="https://www.pugpig.com/" >Pugpig</a> a media publishing platform powering 
          apps and web readers for brands like <i>The Spectator</i>, <i>The Independent</i> and <i>The Boston Globe</i>.
          My work spans <b>Native</b> (SwiftUI, Swift, ObjC, Java, Kotlin) and <b>Web</b> (Vue, PHP, Sass) development.
        <br/>
        <br/>
          Previously, I completed a year-long placement at &nbsp;
        <a className="smallLink" href="https://www.kontron-americas.com/" >BSQUARE</a>, an IoT solutions company, 
          where I worked in <b>Software Development</b> and <b>QA</b>, gaining experience in <b>Angular</b> (TS, HTML, CSS),
          Gherkin and Selenium.
        <br/>
        <br/>
          This website is fully built by me using <b>React</b> and <b>Cloudflare</b>(Hosting). 
        <div className='subSubTitle'>
          <br/>
            Graduate:
        </div>
          I’m a recently graduated student from the University of Bath, Achieving a First class degree.
          My degree focused mainly on AI and the Mathematics around Computer Science, however, it also 
          involved Graphics processing and Moder software developmenet methodologies.
          From within my degree I have experience coding with <b>Python, Java</b> and <b>C++</b>. During my 
          final year I completed a dissertation on image synthesis utilising human feedback this can be found on 
          the <Link className="smallLink" to="/projects">Projects page</Link>.
        <br/>
        <br/>
  
        <div className='subSubTitle'>
            Artist:
        </div>
          All my art can be seen on the <Link className="smallLink" to="/gallery">Gallery page</Link>.
  
        <br/>
        <br/>
        <div className='subSubTitle'>
          More:
        </div>
          Navigate the rest of my website by visiting the <Link className="smallLink" to="/glossary">Glossary page</Link>.
      </div>
    </div>
  );
}

export default Me;