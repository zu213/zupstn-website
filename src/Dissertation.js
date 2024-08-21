

import { Link } from 'react-router-dom';

import dissertationUI from './images/di-ui.png'

const dissertation = 'https://s3-eu-north-1.amazonaws.com/zudissertationbucket/Dissertation.pdf'

function Dissertation() {
    return (
      <div>
        <div className="dissSubtitle" >
          Human Involvement Can Improve Current Image Synthesis Methods within the Domain of Art
          <br />
        </div>
        <div>
          <a href={dissertation} className="smallLink" download="Zachary Upstone Dissertation">PDF</a>
          &nbsp; | &nbsp;
          <a href="https://github.bath.ac.uk/zu213/Dissertation-code" className="smallLink" target="_blank" rel="noreferrer">Repo</a>
          <br/>
        </div>
        
        <div>
          <div  className="dissInlineStructure">
            <figure>
              <img src={dissertationUI} alt="Dissertation UI"></img>
              <figcaption>Figure: The UI I created to allow the utlisation of RLHF</figcaption>
            </figure>
          </div>
          <div  className="dissInlineStructure">
            <div className="underlined">
              Summary
            </div>
            <br />
            <div className="leftAlign">
              My <a href={dissertation} className="smallLink" download="Zachary Upstone Dissertation">Dissertation</a>&nbsp;
              focused on  Image Synthesis within the domain of art. It employed Reinforcement 
              Learning Human Feedback (RLHF) as a potential improvement to current generative models quality 
              and control. As can be seen by the <Link className="smallLink" to="/gallery"> Gallery page</Link> I have a keen interest in art, this
              model presents a "feedback loop" to allow user control in hopes that artists could use this tool.
              From this loop of user inputs the underlying model is able to improve the quality of its outputs; 
              how this data is collected and used is explained  in dept in my dissertation. My results shwoed the 
              quantitiative success of improved control. More details about me including contact information can be
              found on the <Link  className="smallLink" to="/me">About Me page</Link>.
              <br />
              <br />
              The tool produced by my dissertation can be found in this&nbsp;
              <a href="https://github.bath.ac.uk/zu213/Dissertation-code" className="smallLink" target="_blank" rel="noreferrer">repository</a>.
            </div>
          </div>
        </div>

        <div>

        </div>
      </div>
    );
  }

export default Dissertation;