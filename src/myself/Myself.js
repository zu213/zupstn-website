import { BreadcrumbLink } from '../util/Breadcrumbs.js';
import './Myself.css';
import FadeInSection from '../util/FadeIn'; 


function Me() {
  return (
    <div className='myself'>
      <div className="page-header">
        Zach Upstone
      </div>   
      <div className="link-holder">
        <a href="https://www.linkedin.com/in/zachary-upstone-076218214/" target="_blank" rel="noreferrer">LinkedIn</a> &nbsp; | &nbsp;
        <a href="https://github.com/zu213" target="_blank" rel="noreferrer">Github</a> &nbsp; | &nbsp;
        <BreadcrumbLink to="/glossary">Glossary</BreadcrumbLink> 
      </div>
    
      <div  className="text-holder">
        <FadeInSection>
          <div className='subsub-title'>
            <hr />
              Product Developer
            <hr />
          </div>
            My <a className="small-link" href="https://github.com/zu213" target="_blank" rel="noreferrer">GitHub</a> contains many of my personal projects, several of which are featured on the&nbsp;
            <BreadcrumbLink className="small-link" to="/projects">Projects page</BreadcrumbLink>. I am particularly interested in graphics, alongside my work in native and web development.
          <br/>
          <br/>
      
            I am a <b>Product Developer</b> for&nbsp;   
          <a className="small-link" href="https://www.pugpig.com/" target='_blank' rel='noreferrer'>Pugpig</a> a media publishing platform powering 
            apps and web readers. My work here spans <b>Native</b><i>(iOS/Android)</i> and <b>Web</b><i>(Vue, PHP)</i> development, where I have introduced new features, modernised legacy code, contributed to TypeScript migration efforts, and helped improve the experience for both developers and end users.

            <br />
            <br />
            Previously, I completed a year-long placement at &nbsp;
          <a className="small-link" href="https://www.kontron-americas.com/" target='_blank' rel='noreferrer'>BSQUARE</a>, an IoT solutions company, 
            where I worked in <b>Software Development</b> and <b>QA</b>, gaining experience with <b>Angular</b><i>(TS, HTML, SASS)</i>,
            Gherkin and Selenium.
          
          <br />
          <br />
            I graduated from the University of Bath with a <b>First Class honours degree in Computer Science (BSc Hons)</b>.
            My degree focused on AI, the mathematics underpinning computer science, graphics processing and modern software development methodologies.
        </FadeInSection>
        <FadeInSection>
          <div className='subsub-title'>
            <hr />
            Artist
            <hr />
          </div>
          All my art can be seen on the <BreadcrumbLink className='small-link' to='/gallery'>Gallery page</BreadcrumbLink>, I mainly work with <b>Collage</b> and <b>Spray Paint</b>.
        </FadeInSection>
        <FadeInSection>
          <div className='subsub-title'>
            <hr />
            Additionally
            <hr />
          </div>
            If you are interested professionally connect with me on <a className='small-link' href='https://www.linkedin.com/in/zachary-upstone-076218214/' target='_blank' rel='noreferrer'>LinkedIn</a>, 
            or feel free to browse my <BreadcrumbLink className='small-link' to='/cv'>CV</BreadcrumbLink> page which is powered by AI to automatically update alongside the pdf.
            <br />
            <br />
            Feel free to navigate the rest of my website by visiting the <BreadcrumbLink className="small-link" to="/glossary">Glossary page</BreadcrumbLink> - many of the pages are hidden otherwise!
        </FadeInSection>
      </div>
    </div>
  );
}

export default Me;