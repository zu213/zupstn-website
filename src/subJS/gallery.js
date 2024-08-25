// Image imports
import goldenEye1 from '../images/golden-eye-1.jpg'
import goldenEye2 from '../images/golden-eye-2.jpg'
import goldenEye3 from '../images/golden-eye-3.jpg'
import goldenEye4 from '../images/golden-eye-4.jpg'
import goldenEye5 from '../images/golden-eye-5.jpg'
import goldenEye6 from '../images/golden-eye-6.jpg'
import eyes1 from '../images/eyes.jpg'
import eyes2 from '../images/eyes-2.jpg'
import redEye from '../images/red-eye.jpg'
import magpies from '../images/magpies.jpg'
import wagtails from '../images/wagtails.jpg'
import yellowTree from '../images/yellow-tree.jpg'
import mononokeMask from '../images/mononoke-mask.jpg'
import newMask from '../images/new-mask.jpg'
import tenguMask from '../images/tengu-mask.jpg'
import goldenMask from '../images/golden-mask.jpg'
import collageWall from '../images/collage-wall.jpg'
import blueHair from '../images/blue-hair.jpg'
import purpleHair from '../images/purple-hair.jpg'
import tessaRed from '../images/tessa-red.jpg'
import tessaYellow from '../images/tessa-yellow.jpg'
import tessaBoth from '../images/tessa-both.jpg'

var currentOverlay = null;

export const galleryPage = (
    <div>
      Click on images to enlarge them.
      <br />
      <br />
      <div className="artSubtitle">
          Eyes
      </div>
      <div className="imageRow">
          <div className="imageColumn">
            <img id="goldenEye1" src={goldenEye1} alt="Golden eye 1" onClick={() => overlayImage('goldenEye1')}></img>
          </div>
          <div className="imageColumn">
            <img src={goldenEye2} alt="Golden eye 2" onClick={() => overlayImage('goldenEye2')}></img>
          </div>
          <div className="imageColumn">
            <img src={goldenEye3} alt="Golden eye 3" onClick={() => overlayImage('goldenEye3')}></img>
          </div>
          <div className="imageColumn">
            <img src={goldenEye4} alt="Golden eye 4" onClick={() => overlayImage('goldenEye4')}></img>
          </div>
          <div className="imageColumn">
            <img src={goldenEye5} alt="Golden eye 5" onClick={() => overlayImage('goldenEye5')}></img>
          </div>
          <div className="imageColumn">
            <img src={goldenEye6} alt="Golden eye 6" onClick={() => overlayImage('goldenEye6')}></img>
          </div>
          <div className="imageColumn">
            <img src={eyes1} alt="Eyes 1" onClick={() => overlayImage('eyes1')}></img>
          </div>
          <div className="imageColumn">
            <img src={eyes2} alt="Eyes 1" onClick={() => overlayImage('eyes2')}></img>
          </div>
          <div className="imageColumn">
            <img src={redEye} alt="Red eye" onClick={() => overlayImage('redEye')}></img>
          </div>
  
        </div>
        
        <div className="artSubtitle">
            Masks
        </div>
          <div className="imageRow">
            <div className="imageColumn">
              <img src={mononokeMask} alt="Mononoke" onClick={() => overlayImage('mononokeMask')}></img>
            </div>
            <div className="imageColumn">
              <img src={tenguMask} alt="Tengu" onClick={() => overlayImage('tenguMask')}></img>
            </div>
            <div className="imageColumn">
              <img src={newMask} alt="New" onClick={() => overlayImage('newMask')}></img>
            </div>
            <div className="imageColumn">
              <img src={goldenMask} alt="Golden" onClick={() => overlayImage('goldenMask')}></img>
            </div>
          </div>
          <br />
          
          <div className="artSubtitle">
              Other
          </div>
          <div className="imageRow">
            <div className="imageColumn">
              <img src={tessaRed} alt="Tessa red" onClick={() => overlayImage('tessaRed')}></img>
            </div>
            <div className="imageColumn">
              <img src={tessaYellow} alt="Tessa yellow" onClick={() => overlayImage('tessaYellow')}></img>
            </div>
            <div className="imageColumn">
              <img src={tessaBoth} alt="Tessa's" onClick={() => overlayImage('tessaBoth')}></img>
            </div>
            <div className="imageColumn">
              <img src={collageWall} alt="Collage wall" onClick={() => overlayImage('collageWall')}></img>
            </div>
            <div className="imageColumn">
              <img src={blueHair} alt="Blue hair" onClick={() => overlayImage('blueHair')}></img>
            </div>
            <div className="imageColumn">
              <img src={purpleHair} alt="Purple hair" onClick={() => overlayImage('purpleHair')}></img>
            </div>
            <div className="imageColumn">
              <img src={magpies} alt="Magpies" onClick={() => overlayImage('magpies')}></img>
            </div>
            <div className="imageColumn">
              <img src={wagtails} alt="Wagtails" onClick={() => overlayImage('wagtails')}></img>
            </div>
            <div className="imageColumn">
              <img src={yellowTree} alt="Yellow tree" onClick={() => overlayImage('yellowTree')}></img>
            </div>
        </div>
        <br />
          
  
  
          <div id="overlay" className="overlay" onClick={() => removeOverlay()}></div>
  
          <div id="goldenEye1-overlay" className="overlayContent">
            <img alt="" src={goldenEye1}></img>
          </div>
          <div id="goldenEye2-overlay" className="overlayContent">
            <img alt="" src={goldenEye2}></img>
          </div>
          <div id="goldenEye3-overlay" className="overlayContent">
            <img alt="" src={goldenEye3}></img>
          </div>
          <div id="goldenEye4-overlay" className="overlayContent">
            <img alt="" src={goldenEye4}></img>
          </div>
          <div id="goldenEye5-overlay" className="overlayContent">
            <img alt="" src={goldenEye5}></img>
          </div>
          <div id="goldenEye6-overlay" className="overlayContent">
            <img alt="" src={goldenEye6}></img>
          </div>
          <div id="eyes1-overlay" className="overlayContent">
            <img alt="" src={eyes1}></img>
          </div>
          <div id="eyes2-overlay" className="overlayContent">
            <img alt="" src={eyes2}></img>
          </div>
          <div id="redEye-overlay" className="overlayContent">
            <img alt="" src={redEye}></img>
          </div>
  
          <div id="wagtails-overlay" className="overlayContent">
            <img alt="" src={wagtails}></img>
          </div>
          <div id="magpies-overlay" className="overlayContent">
            <img alt="" src={magpies}></img>
          </div>
          <div id="yellowTree-overlay" className="overlayContent">
            <img alt="" src={yellowTree}></img>
          </div>
  
          <div id="mononokeMask-overlay" className="overlayContent">
            <img alt="" src={mononokeMask}></img>
          </div>
          <div id="tenguMask-overlay" className="overlayContent">
            <img alt="" src={tenguMask}></img>
          </div>
          <div id="newMask-overlay" className="overlayContent">
            <img alt="" src={newMask}></img>
          </div>
          <div id="goldenMask-overlay" className="overlayContent">
            <img alt="" src={goldenMask}></img>
          </div>
  
          <div id="collageWall-overlay" className="overlayContent">
            <img alt="" src={collageWall}></img>
          </div>
          <div id="tessaRed-overlay" className="overlayContent">
            <img alt="" src={tessaRed}></img>
          </div>
          <div id="tessaYellow-overlay" className="overlayContent">
            <img alt="" src={tessaYellow}></img>
          </div>
          <div id="tessaBoth-overlay" className="overlayContent">
            <img alt="" src={tessaBoth}></img>
          </div>
          <div id="blueHair-overlay" className="overlayContent">
            <img alt="" src={blueHair}></img>
          </div>
          <div id="purpleHair-overlay" className="overlayContent">
            <img alt="" src={purpleHair}></img>
          </div>
  
        </div>
  );

// function related to overlaying iamge on gallery view
function overlayImage(imageId) {
    if(currentOverlay === null){
      const overlayElement = document.getElementById(imageId+'-overlay');
      overlayElement.style.display = 'block';
      const overlay = document.getElementById("overlay");
      overlay.style.display = 'block';
      currentOverlay = imageId;
    }
  }
  
function removeOverlay() {
    if(currentOverlay !== null){
      const overlayElement = document.getElementById(currentOverlay+'-overlay');
      overlayElement.style.display = 'none';
      const overlay = document.getElementById("overlay");
      overlay.style.display = 'none';
      currentOverlay = null;
    }
  }