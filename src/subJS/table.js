import '../styleFiles/Art.css'

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


document.addEventListener("click", detectMouseCoords);

var imageList = ['goldenEye1',  'goldenEye2',  'goldenEye3',  'goldenEye4' , 'goldenEye5', 'goldenEye6',
  'eyes1',  'eyes2', 'redEye', 'magpies', 'wagtails', 'yellowTree', 'mononokeMask',  'newMask', 'tenguMask',
  'goldenMask', 'collageWall',  'blueHair',  'purpleHair', 'tessaRed',  'tessaYellow', 'tessaBoth']
var movingImage = null;
var mouseX = 0;
var mouseY = 0;
var currentZ = 0;

export const tablePage = (
    <div>
      <div className='artTableTooShort'>
        Page is too short please adjust !
      </div>
      <div className='tablePage'>
        <div>
          Click and image to pick it up and click again to put it back down where the cursor is.
          <br />
          <button onClick={pagePosition}> Shuffle table </button>
        </div>
        <div className="canvas">        
          <div className="messFormat" id="purpleHair" onClick={() => movingImage === null && movePosition('purpleHair') }>
            <img src={purpleHair} alt="Purple hair"></img>
          </div>
          <div className="messFormat" id="blueHair" onClick={() => movingImage === null && movePosition('blueHair')}>
            <img src={blueHair} alt="Blue hair"></img>
          </div>
          <div className="messFormat" id="collageWall" onClick={() => movingImage === null && movePosition('collageWall')}>
            <img src={collageWall} alt="Collage wall"></img>
          </div>
          <div className="messFormat" id="goldenEye1" onClick={() => movingImage === null && movePosition('goldenEye1')}>
            <img src={goldenEye1} alt="Golden eye 1"></img>
          </div>
          <div className="messFormat" id="goldenEye2" onClick={() => movingImage === null && movePosition('goldenEye2')}>
            <img src={goldenEye2} alt="Golden eye 2"></img>
          </div>
          <div className="messFormat" id="goldenEye3" onClick={() => movingImage === null && movePosition('goldenEye3')}>
            <img src={goldenEye3} alt="Golden eye 3"></img>
          </div>
          <div className="messFormat" id="goldenEye4" onClick={() => movingImage === null && movePosition('goldenEye4')}>
            <img src={goldenEye4} alt="Golden eye 4"></img>
          </div>
          <div className="messFormat" id="goldenEye5" onClick={() => movingImage === null && movePosition('goldenEye5')}>
            <img src={goldenEye5} alt="Golden eye 5"></img>
          </div>
          <div className="messFormat" id="goldenEye6" onClick={() => movingImage === null && movePosition('goldenEye6')}>
            <img src={goldenEye6} alt="Golden eye 6"></img>
          </div>
          <div className="messFormat" id="eyes1" onClick={() => movingImage === null && movePosition('eyes1')}>
            <img src={eyes1} alt="Eyes 1"></img>
          </div>
          <div className="messFormat" id="eyes2" onClick={() => movingImage === null && movePosition('eyes2')}>
            <img src={eyes2} alt="Eyes 1"></img>
          </div>
          <div className="messFormat" id="redEye" onClick={() => movingImage === null && movePosition('redEye')}>
            <img src={redEye} alt="Red eye "></img>
          </div>
          <div className="messFormat" id="magpies" onClick={() => movingImage === null && movePosition('magpies')}>
            <img src={magpies} alt="Magpies"></img>
          </div>
          <div className="messFormat" id="wagtails" onClick={() => movingImage === null && movePosition('wagtails')}>
            <img src={wagtails} alt="Wagtails"></img>
          </div>
          <div className="messFormat" id="yellowTree" onClick={() => movingImage === null && movePosition('yellowTree')}>
            <img src={yellowTree} alt="Yellow tree"></img>
          </div>
          <div className="messFormat" id="mononokeMask" onClick={() => movingImage === null && movePosition('mononokeMask')}>
            <img src={mononokeMask} alt="Mononoke"></img>
          </div>
          <div className="messFormat" id="tenguMask" onClick={() => movingImage === null && movePosition('tenguMask')}>
            <img src={tenguMask} alt="Tengu"></img>
          </div>
          <div className="messFormat" id="newMask" onClick={() => movingImage === null && movePosition('newMask')}>
            <img src={newMask} alt="New"></img>
          </div>
          <div className="messFormat" id="goldenMask" onClick={() => movingImage === null && movePosition('goldenMask')}>
            <img src={goldenMask} alt="Golden"></img>
          </div>
          <div className="messFormat" id="tessaRed" onClick={() => movingImage === null && movePosition('tessaRed')}>
            <img src={tessaRed} alt="Tessa red"></img>
          </div>
          <div className="messFormat" id="tessaYellow" onClick={() =>movingImage === null &&  movePosition('tessaYellow')}>
            <img src={tessaYellow} alt="Tessa yellow"></img>
          </div>
          <div className="messFormat" id="tessaBoth" onClick={() => movingImage === null && movePosition('tessaBoth')}>
            <img src={tessaBoth} alt="Tessa's"></img>
          </div>
      </div> 
      </div>
    </div>
  )
  
  // function to randomly place pictures
  export function pagePosition() {
    var randX;
    var randY;
    for(const image of imageList){
      randX = Math.random();
      randY = Math.random();
      const element = document.getElementById(image);
      if(element !== null){
        element.style.top = randY * 100 + '%';
        element.style.left = randX * 100 + '%';
      }
    }
  }
  
  // Functions related to moving images on table view
  
  function detectMouseCoords(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    if(movingImage !== null){
      movePosition();
    }
  }
  
  // poor code needs fixing !
  function movePosition(imageToMove) {
    var element;
    setTimeout(() => {
      if(movingImage === null && imageToMove !== null){
        // they clicked an image and it is passed in.

        element = document.getElementById(imageToMove);
        movingImage = imageToMove;

        // Also need to disable other dangerous buttons
        document.getElementById("galleryButton").disabled = true;
        document.getElementById("backButton").disabled = true;
        document.getElementById("smallBackButton").disabled = true;
  
        // change styles
        const body = document.getElementById("all");
        body.style.cursor = "grabbing"
        
        element.className = "messFormatAnimate";

        // make sure iamge comes to top
        currentZ += 1;
        element.style.zIndex = currentZ;
      }
  
      else if(movingImage !== null){
        //image coords become mouse coords when they drop the image
        element = document.getElementById(movingImage);
        element.style.position = "fixed"
        element.style.top = (mouseY / window.innerHeight * 100 - 10) + '%';
        element.style.left =(mouseX / window.innerWidth * 100 - 5) + '%';
        movingImage = null;
  
        //change styles
        const body = document.getElementById("all");
        body.style.cursor = "context-menu"
        
        element.className = "messFormat";
  
        // renable buttons
        document.getElementById("galleryButton").disabled = false;
        document.getElementById("backButton").disabled = false;
        document.getElementById("smallBackButton").disabled = false;

      }
    }, 1);
  }