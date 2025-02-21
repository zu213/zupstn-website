import './styleFiles/Resume.css';

// document imports
import cv from './documents/CV.pdf'

// Image imports
import download from './images/white-download.png'

function Resume () {return(

<div>
  <br/>
  <a className="smallLink" href={cv} download="Zachary Upstone CV">
    CV Download <img className="downloadImage" src={download} alt="CV Download"></img>
  </a>
  <br/>
  <br/>
  <div className='tooSmallCV'> Screen size is too small to display pdf, download to view.</div>
  <div className='safariCV'> Safari doesn't allow proper display of pdfs.</div>
  <div className='cvContainer'>
    Resume <br/>
    Zachary Upstone <br/>
    <a className="smallLink" href="mailto:Zac.upstone@gmail.com"  target="_blank" rel="noreferrer">Email</a>
   <br/>
    
    <a className="smallLink" href="https://www.linkedin.com/in/zachary-upstone-076218214/"  target="_blank" rel="noreferrer">LinkedIn</a>
    <a className="smallLink" href="https://www.zupstn.com">Website</a>
    <br/>

    <div className='resumeSubtitle'>
      Education
    </div>
    2020 - 2024 University of Bath<br/>
     Computer Science BSc – First Class Honours - Overall grade – 74.51% <br/>
    2013 - 2020 Chesham Grammar School <br/>
    A level: Further Mathematics (A), Mathematics (A*), Computer Science (A), Physics (A). <br/> 
    GCSE’s: 4 grades 9’s, 2 grade 8’s, 3 grades 6’s, 1 grade 5, 1 grade A. <br/>
    <br/>
    <div className='resumeSubtitle'>
      Work Experience  <br/>
    </div>
    July 2022 - June 2023 - Student software developer at BSQUARE, <br />
    Nov 2021 - June 2022 - Bar staff at the Students Union at the University of Bath, <br/>
    July 2021 - Oct 2021 - Crew member at McDonalds,  <br/>
    July 2020 - Sept 2020 - Assistant Gardener at RM Gardening <br/>
    <br/>
    <div className='resumeSubtitle'>
      Other Experience <br/>
    </div>
    Nov 2018 -  Mar 2020 - Volunteered at WorkAid a tool repair shop <br/>
    July 2019 - 1 Week work experience at the Audit Bureau of Circulations <br/>
    June 2018 - 2 Weeks at the IT help desk at Close Brother Asset Management <br/>
    <br/>
    <div className='resumeSubtitle'>
      Technical skills<br/>
    </div>
    Experience with C++, Java and Python, Angular (TS, HTML, CSS), Selenium, and Gherkin <br/>
    Experience working in an agile environment and using Jira <br/>
    Experience with React  <br/>
    Experience working in a team 
    Customer service skills  <br/>
    Full UK driver’s license <br/>
    <br/>
    <div className='resumeSubtitle'>
      Achievements  <br/>
    </div>
    Gold DofE. <br/>
    Competed in BathHack 2021 and 2024 <br/>
    Employee of the month August 2021 at McDonalds <br/> 
    <br/>
    <div className='resumeSubtitle'>
      References<br />
    </div>
    <div>
    Hannah Stainer 
    Operations manager at BSQUARE 
    HannahS@bsquare.com 
    </div>
    <div>
    Alan Hayes 
    Personal tutor at the University 
    of Bath 
    AH347@bath.ac.uk
    </div>
  </div>
  <br />
</div>
)}

export default Resume;

function CV2() {
  return (
      <div>
        <br/>
        <a className="smallLink" href={cv} download="Zachary Upstone CV">
          Download <img className="downloadImage" src={download} alt="Download"></img>
        </a>
        <br/>
        <br/>
        <div className='tooSmallCV'> Screen size is too small to display pdf, download to view.</div>
        <div className='cvContainer'></div>
        <embed src={cv+'#view=FitH'} className="pdf-viewer" />
      </div>
  );
}