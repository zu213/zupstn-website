
import './Dissertation.css';
import tick from '../../icons/tick.png';
import { useState } from 'react';

let options = [];
let sketchImg = '';
let styleImg = '';

let currentSketchFile;
let currentStyleFile;

function DissertationTool() {
  const [loading, setLoading] = useState(false);
  const [generatedSuccess, setGeneratedSuccess] = useState(false);
  const [generatedError, setGeneratedError] = useState(false);
  
  function clearOptions() {
    const option1 = document.getElementById('option1img');
    const option2 = document.getElementById('option2img');
    const option3 = document.getElementById('option3img');
    option1.src = '';
    option2.src = '';
    option3.src = '';
    option1.className='';
    option2.className='';
    option3.className='';
    setGeneratedError(false);
    setGeneratedSuccess(false);
  }

  function displayErrorMessage(e) {
    if(e) console.error(e);
    setLoading(false);
    setGeneratedError(true);
  }

  // function to let users pick an iamge from their folders and update styles accordingly
  function uploadSketch (e) {
    if (e.target.files.length) {
      var img = document.getElementById('inputSketch');
      img.onload = () => URL.revokeObjectURL(img.src);
      img.src = URL.createObjectURL(e.target.files[0]);
      currentSketchFile = e.target.files[0];
      clearOptions();
    }
  }

  // function to let users pick an iamge from their folders and update styles accordingly
  function uploadStyle (e) {
    if (e.target.files.length) {
      var img = document.getElementById('inputStyle');
      img.onload = () => URL.revokeObjectURL(img.src);
      img.src = URL.createObjectURL(e.target.files[0]);
      currentStyleFile = e.target.files[0];
      clearOptions();
    }
  }

  function base64ToFile(base64, filename, mimeType) {
    const byteString = atob(base64.split(',')[1] || base64); // Handle data URL or raw base64
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new File([ab], filename, { type: mimeType });
  }

  // function to run image generation
  async function  runDiss() {
    setLoading(true);

    if (currentSketchFile && currentStyleFile) {
      const formData = new FormData();
      formData.append('sketch', currentSketchFile);
      formData.append('style', currentStyleFile);

      try {
        const response = await fetch('http://127.0.0.1:8000/generate/', {
          method: 'POST',
          body: formData,
          signal: AbortSignal.timeout(300000)
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          if(result.images?.length !== 3) {
            displayErrorMessage(response);
            alert('Invalid number of results returned.');
            return;
          }

          //await delay(5000); // Optional delay if needed
          document.getElementById('imagesContainer').className = '';
          const option1Element = document.getElementById('option1img');
          const option2Element = document.getElementById('option2img');
          const option3Element = document.getElementById('option3img');
          options = result.images.map(i => `data:image/png;base64, ${i}`);

          option1Element.src = options[0];
          option2Element.src = options[1];
          option3Element.src = options[2];

          option1Element.className = 'imageChoiceImage';
          option2Element.className = 'imageChoiceImage';
          option3Element.className = 'imageChoiceImage';

          setGeneratedSuccess(true);

        } else {
          alert(`Something went wrong trying to send your image choice. Status code: ${response.status}`);
          displayErrorMessage(response);
        }
      } catch (err) {
        console.error('Request failed:', err);
        alert('Failed to run image generation. Check your connection or try again later.');
        displayErrorMessage(err);
      }
    } else {
      alert('Either input sketch or input style has not been properly uploaded!');
    }

    setLoading(false);
  }

  // function to run image generation again if they make a choice
  async function makeDissChoice (choice) {
    var img = document.getElementById('inputStyle');
    img.src = `data:image/png;base64,${options[choice]}`;
    currentStyleFile = base64ToFile(options[choice]);
    clearOptions();
    runDiss();
  }

  return (
    <div>
      <div className='dissContainer'>
        <h3 className="underlined">
          Dissertation tool <br />  
        </h3>
        <div className='dissToolText'>
          To use: <br />
          <ol>
            <li>Choose a sketch and style input then submit them to upload them into the program.</li>
            <li>Next click generate images and wait, (this takes about 20 seconds).</li>
            <li>You'll be served with three options that you can choose from by clicking.</li>
            <li>Once clicked the generation will run again, this can be repeated infinitely.</li>
          </ol>
        </div>
        <div id='imagesContainer' className='imagesContainer'>
          <div>
            <div className='inlineInput'>
              <h4>Sketch Input</h4>
              <img className='inputImage' src={sketchImg} alt='' id="inputSketch" ></img>
              <input className='inputBrowse' type="file" id="uploadSketch" onChange={uploadSketch} />
            </div>
            <div className='inlineInput'>
              <h4>Style Input</h4>
              <img className='inputImage' src={styleImg} alt='' id="inputStyle"></img>
              <input className='inputBrowse' type="file" id="uploadStyle" onChange={uploadStyle} />
            </div>
          </div>
          {loading ? <div id="loader" className='loader'></div> : <button className='submitButton' id="runButton" onClick={runDiss}> Generate images </button>}
          {generatedSuccess && <img className='tick' src={tick} alt='' id='genTick'></img>}
          {generatedError &&  <div>Error: something went wrong during the generation process please check the console.</div>}
          <div>
            <div className='imageChoice'>
              <h4>Option 1</h4>
              <img  src={options[0] ?? ''} alt='' id="option1img" onClick={() => makeDissChoice(1)}></img>
            </div>
            <div className='imageChoice'>
              <h4>Option 2</h4>
              <img src={options[1] ?? ''} alt='' id="option2img" onClick={() => makeDissChoice(2)}></img>
            </div>
            <div className='imageChoice'>
              <h4>Option 3</h4> 
              <img src={options[2] ?? ''} alt='' id="option3img" onClick={() => makeDissChoice(3)}></img>
            </div>
          </div>
          <div className='smallText'>
            This is currently unstable as it is experimental, if it fails to load, refresh the page and try again
          </div>
        </div>
      </div>
      <div className='dissTooSmall'>
        Screen is too small to display dissertation tool.
      </div>
      <div className='workInProgress'>
        Work in progress
      </div>
    </div>
  );
}

export default DissertationTool;