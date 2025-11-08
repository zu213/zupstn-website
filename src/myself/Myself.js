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
              Programmer
            <hr />
          </div>
          
            Find my GitHub <a className="small-link" href="https://github.com/zu213" target="_blank" rel="noreferrer">here</a> -  it includes many of my personal projects, which can also be seen on the&nbsp;
          <BreadcrumbLink className="small-link" to="/projects">Projects page</BreadcrumbLink>. I am particularly interested in graphics, alongside my work in native and web development.
          <br/>
          <br/>
      
            I am a <b>Product developer</b> for&nbsp;   
          <a className="small-link" href="https://www.pugpig.com/" target='_blank' rel='noreferrer'>Pugpig</a> a media publishing platform powering 
            apps and web readers. My work here spans <b>Native</b><i>(SwiftUI, Swift, Objective-C, Java, Kotlin)</i> and <b>Web</b><i>(Vue, PHP)</i> development.
            Previously, I completed a year-long placement at &nbsp;
          <a className="small-link" href="https://www.kontron-americas.com/" target='_blank' rel='noreferrer'>BSQUARE</a>, an IoT solutions company, 
            where I worked in <b>Software Development</b> and <b>QA</b>, gaining experience with <b>Angular</b><i>(TS, HTML, SASS)</i>,
            Gherkin and Selenium.
        </FadeInSection>
        <FadeInSection>
          <div className='subsub-title'>
            <hr />
              Graduate
            <hr />
          </div>
            I graduated from the University of Bath with a <b>First Class honours degree in Computer Science(BSc Hons)</b>.
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
            If you are interested professionally add me on <a className='small-link' href='https://www.linkedin.com/in/zachary-upstone-076218214/' target='_blank' rel='noreferrer'>LinkedIn</a>. Feel free to navigate the rest of my website by visiting the <BreadcrumbLink className="small-link" to="/glossary">Glossary page</BreadcrumbLink> - many of the pages are hidden otherwise!
        </FadeInSection>
      </div>
    </div>
  );
}

export default Me;