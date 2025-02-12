
import { Link } from 'react-router-dom';
import './styleFiles/Dissertation.css';

import dissertationUI from './images/di-ui.png'
import tick from './images/tick.png'

const dissertation = 'https://s3-eu-north-1.amazonaws.com/zudissertationbucket/Dissertation.pdf'

let option1 = ''
let option2 = ''
let option3 = ''
let sketchImg = ''
let styleImg = ''
let sketchUploaded = false;
let styleUploaded = false;
let errorResponse = ''

let currentSketchFile;
let currentStyleFile;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// function to disable button on startup
function disableButtons() {
  const sketchButton= document.getElementById('sketchButton');
  sketchButton.disabled = true;
  const styleButton= document.getElementById('styleButton');
  styleButton.disabled = true;
  const runButton= document.getElementById('runButton');
  runButton.disabled = true;
}

function clearOptions() {
  const option1 = document.getElementById("option1img")
  const option2 = document.getElementById("option2img")
  const option3 = document.getElementById("option3img")
  option1.src = '';
  option2.src = '';
  option3.src = '';
  option1.className=''
  option2.className=''
  option3.className=''
  const errorMsg = document.getElementById("errorMsg");
  errorMsg.className = 'errorMsg'
}

function changeButton(buttonId, disable){
  const sketchButton= document.getElementById(buttonId);
  sketchButton.disabled = disable;
}

function hideDiv(divId, hide, button=null){
  if(hide){
  const genTick= document.getElementById(divId);
  genTick.style.display = 'none';
  }else{
    const genTick= document.getElementById(divId);
    genTick.style.display = 'inline-block';
  }

  if(button){
    
    if(hide){
      const genTick= document.getElementById(button);
      genTick.style.left = '0vw'
      }else{
        const genTick= document.getElementById(button);
        genTick.style.left = '0.8vw'
      }
  }
}

function displayErrorMessage(e) {
  if(e !== ''){
    errorResponse = e;
    const errorMsg = document.getElementById("errorMsg");
    errorMsg.className = ''
  }
}

// function to let users pick an iamge from their folders and update styles accordingly
function uploadSketch (e) {
  if (e.target.files.length) {
    var img = document.getElementById('inputSketch');
    img.onload = () => {
        URL.revokeObjectURL(img.src);
    }
    img.src = URL.createObjectURL(e.target.files[0]);
    currentSketchFile = e.target.files[0];
    changeButton('sketchButton', false)
    hideDiv('genTick', true, 'runButton')
    hideDiv('sketchTick', true, 'sketchButton')

    clearOptions();
  }
}

// function to let users post there uploaded iamge to python program
async function submitSketch() {
  if(currentStyleFile !== null){
    const formData = new FormData();
    formData.append('uploadedInput', currentSketchFile);
    const options = {
      method: 'POST',
      body: formData,
    };
    const response = await fetch('https://zu-api-97613761704.europe-north1.run.app/upload/sketch', options);
    if(response.status === 200){
      sketchUploaded = true;
      changeButton('sketchButton', true)
      hideDiv('sketchTick', false, 'sketchButton')
      if(styleUploaded){
        changeButton('runButton', false)
      }
    }else if(response.status === 450){
      alert(`Image file format is incorrect, only .png, .jpg or .jpeg are accepted`);
    }else{
      alert("Sketch input has not been properly uploaded !");
    }
  }
}

// function to let users pick an iamge from their folders and update styles accordingly
function uploadStyle (e) {
  if (e.target.files.length) {
    var img = document.getElementById('inputStyle');
    img.onload = () => {
        URL.revokeObjectURL(img.src);
    }
    img.src = URL.createObjectURL(e.target.files[0]);
    currentStyleFile = e.target.files[0];
    changeButton('styleButton', false)
    hideDiv('genTick', true, 'runButton')
    hideDiv('styleTick', true, 'styleButton')
    clearOptions();
  }
}

// function to let users post there uploaded iamge to python program
async function submitStyle () {
  if(currentStyleFile !== null){
    const formData = new FormData();
    formData.append('uploadedInput', currentStyleFile);
    const options = {
      method: 'POST',
      body: formData,
    };
    const response = await fetch('https://zu-api-97613761704.europe-north1.run.app/upload/style', options);
    if(response.status === 200){
      styleUploaded = true;
      changeButton('styleButton', true)
      hideDiv('styleTick', false, 'styleButton')
      if(sketchUploaded){
        changeButton('runButton', false)
      }
    }else if(response.status === 450){
      alert(`Image file format is incorrect, only .png, .jpg or .jpeg are accepted`);
    }else{
      alert("Style input has not been properly uploaded !");
    }
  }

}

// function to run image generation
async function runDiss () {
  changeButton('runButton', true)
  hideDiv('loader', false, 'runButton')
  if(sketchUploaded && styleUploaded){
    const response = await fetch("https://zu-api-97613761704.europe-north1.run.app/", { signal: AbortSignal.timeout(300000) });
    console.log(response);

    if(response.status === 200){
      await delay(5000) 
      const element = document.getElementById('imagesContainer');
      const option1 = document.getElementById("option1img")
      const option2 = document.getElementById("option2img")
      const option3 = document.getElementById("option3img")
      try{
        // try catch in case user exits page
        
        element.className = "";
        option1.src = 'https://zu-api-97613761704.europe-north1.run.app/option/1';
        option2.src = 'https://zu-api-97613761704.europe-north1.run.app/option/2';
        option3.src = 'https://zu-api-97613761704.europe-north1.run.app/option/3';
        option1.className='imageChoiceImage';
        option2.className='imageChoiceImage';
        option3.className='imageChoiceImage';
        
        sketchUploaded = false;
        styleUploaded = false;
        hideDiv('genTick', false, 'runButton')
        hideDiv('sketchTick', true, 'sketchButton')
        hideDiv('styleTick', true, 'styleButton')
      }catch(_){}

    }else{
      alert(`Something went wrong trying to send your image choice. Status code: ${response.status}`);
      displayErrorMessage(response)
    }
  }else{
    alert("Either input sketch or input style has not been properly uploaded !");
  }
  try{
    hideDiv('loader', true)
  }catch(_){}
}

// function to run image generation again if they make a choice
async function makeDissChoice (choice) {
  clearOptions();
  hideDiv('genTick', true, 'runButton')
  hideDiv('loader', false, 'runButton')

  document.getElementById('inputStyle').src = `https://zu-api-97613761704.europe-north1.run.app/option/${choice}`;
  const response = await fetch(`https://zu-api-97613761704.europe-north1.run.app/choice/${choice}`, { signal: AbortSignal.timeout(40000) });
  if(response.status === 200){
    await delay(5000) 
    const option1 = document.getElementById("option1img")
    const option2 = document.getElementById("option2img")
    const option3 = document.getElementById("option3img")
    try{
      // try catch in case user exits page

      option1.src = 'https://zu-api-97613761704.europe-north1.run.app/option/1';
      option2.src = 'https://zu-api-97613761704.europe-north1.run.app/option/2';
      option3.src = 'https://zu-api-97613761704.europe-north1.run.app/option/3';
      option1.className='imageChoiceImage'
      option2.className='imageChoiceImage'
      option3.className='imageChoiceImage'
      
      hideDiv('genTick', false)
            
    }catch(_){}


  }else{
    alert(`Something went wrong trying to send your image choice. Status code: ${response.status}`);
    displayErrorMessage(response)

  }
  try{
    hideDiv('loader', true)
  }catch(_){}

}

window.onload = function() {
  if (window.location.hash === '#/dissertation') {
    disableButtons();
  }
}


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
          <a href="https://github.com/zu213/zupstn-website-api" className="smallLink" target="_blank" rel="noreferrer">Repo</a>
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
              <a href="https://github.com/zu213/zupstn-website-api" className="smallLink" target="_blank" rel="noreferrer">repository</a>, 
              it is important to note that this is just the finished model and doesn't include the learning features that my research focused on.
            </div>
          </div>
        </div>
        <br />
        <hr />

        <div className='dissContainer'>
          <br />
        <div className="underlined">
              Dissertation tool <br />
              
          </div>
        <div className='dissToolText'>
          <br />
          To use: <br />
          1. Choose a sketch and style input then submit them to upload them into the program. <br />
          2. Next click generate images and wait, (this takes about 20 seconds). <br />
          3. You'll be served with three options that you can choose from by clicking.<br />
          4. Once clicked the generation will run again, this can be repeated infinitely.
        </div>
        <div id='imagesContainer' className='imagesContainer'>
          <div>
            <div className='inlineInput'>
                Sketch Input 
                <br/>
                <img className='inputImage' src={sketchImg} alt='' id="inputSketch" ></img>
                <input className='inputBrowse' type="file" id="uploadSketch" onChange={uploadSketch} />
                <br />
                <button className='submitButton' id='sketchButton' onClick={submitSketch}>
                  Submit sketch
                </button>
                <img className='tick' src={tick} alt='' id="sketchTick"></img>
            </div>
            <div className='inlineInput'>
                Style Input 
                <br/>
                <img className='inputImage' src={styleImg} alt='' id="inputStyle"></img>
                <input className='inputBrowse' type="file" id="uploadStyle" onChange={uploadStyle} />
                <br />
                <div>
                  <button className='submitButton' id='styleButton' onClick={submitStyle}>
                    Submit style 
                  </button>
                  <img className='tick' src={tick} alt='' id="styleTick"></img>
                </div>
            </div>
          </div>
          <button className='submitButton' id="runButton" onClick={runDiss}> Generate images </button>
          <div className='errorMsg' id='errorMsg'>
            Error: something went wrong during the generation process api response is {errorResponse}.
          </div>
          <div className='inline'>
            <div id="loader" className='loader'></div>
            <img className='tick' src={tick} alt='' id="genTick"></img>
          </div>
          <div>
            <div className='imageChoice'>
                Option 1
                <br/>
                <img  src={option1} alt='' id="option1img" onClick={() => makeDissChoice(1)}></img>
            </div>
            <div className='imageChoice'>
                Option 2
                <br/>
                <img src={option2} alt='' id="option2img" onClick={() => makeDissChoice(2)}></img>
            </div>
            <div className='imageChoice'>
                Option 3 
                <br/>
                <img src={option3} alt='' id="option3img" onClick={() => makeDissChoice(3)}></img>
            </div>
          </div>
          <div className='smallText'>
            This is currently unstable as it is experimental, if it fails to load, refresh the page and try again
          </div>
        <br />
        </div>
        </div>
        <div className='dissTooSmall'>
          Screen is too small to display dissertation tool.
        </div>
      
      </div>

    );
  }

export default Dissertation;