import './Art.css';
import { useState } from 'react';

// Image imports
import goldenEye1 from './images/golden-eye-1.jpg'
import goldenEye2 from './images/golden-eye-2.jpg'
import goldenEye3 from './images/golden-eye-3.jpg'
import goldenEye4 from './images/golden-eye-4.jpg'
import goldenEye5 from './images/golden-eye-5.jpg'
import goldenEye6 from './images/golden-eye-6.jpg'
import eyes1 from './images/eyes.jpg'
import eyes2 from './images/eyes-2.jpg'
import redEye from './images/red-eye.jpg'

import magpies from './images/magpies.jpg'
import wagtails from './images/wagtails.jpg'
import yellowTree from './images/yellow-tree.jpg'

import mononokeMask from './images/mononoke-mask.jpg'
import newMask from './images/new-mask.jpg'
import tenguMask from './images/tengu-mask.jpg'
import goldenMask from './images/golden-mask.jpg'

import collageWall from './images/collage-wall.jpg'
import blueHair from './images/blue-hair.jpg'
import purpleHair from './images/purple-hair.jpg'
import tessaRed from './images/tessa-red.jpg'
import tessaYellow from './images/tessa-yellow.jpg'
import tessaBoth from './images/tessa-both.jpg'

document.addEventListener("click", recordMouseCoords);

var imageList = ['goldenEye1',  'goldenEye2',  'goldenEye3',  'goldenEye4' , 'goldenEye5', 'goldenEye6',
  'eyes1',  'eyes2', 'redEye', 'magpies', 'wagtails', 'yellowTree', 'mononokeMask',  'newMask', 'tenguMask',
  'goldenMask', 'collageWall',  'blueHair',  'purpleHair', 'tessaRed',  'tessaYellow', 'tessaBoth']

var onGallery = true;
var movingImage = null;
var currentOverlay = null;
var mouseX = 0;
var mouseY = 0;

var galleryPage = (
  <div>
    <hr/>
    <div class="left-align-indent">
        Eyes
    </div>
    <br />
    <div class="row">
        <div class="column">
          <img id="goldenEye1" src={goldenEye1} alt="Golden eye 1" onClick={() => overlayImage('goldenEye1')}></img>
        </div>
        <div class="column">
          <img src={goldenEye2} alt="Golden eye 2" onClick={() => overlayImage('goldenEye2')}></img>
        </div>
        <div class="column">
          <img src={goldenEye3} alt="Golden eye 3" onClick={() => overlayImage('goldenEye3')}></img>
        </div>
        <div class="column">
          <img src={goldenEye4} alt="Golden eye 4" onClick={() => overlayImage('goldenEye4')}></img>
        </div>
        <div class="column">
          <img src={goldenEye5} alt="Golden eye 5" onClick={() => overlayImage('goldenEye5')}></img>
        </div>
        <div class="column">
          <img src={goldenEye6} alt="Golden eye 6" onClick={() => overlayImage('goldenEye6')}></img>
        </div>
        <div class="column">
          <img src={eyes1} alt="Eyes 1" onClick={() => overlayImage('eyes1')}></img>
        </div>
        <div class="column">
          <img src={eyes2} alt="Eyes 1" onClick={() => overlayImage('eyes2')}></img>
        </div>
        <div class="column">
          <img src={redEye} alt="Red eye" onClick={() => overlayImage('redEye')}></img>
        </div>

        </div>
        <hr/>
        <div class="left-align-indent">
            Nature
        </div>
        <br />
        <div class="row">
          <div class="column">
            <img src={magpies} alt="Magpies" onClick={() => overlayImage('magpies')}></img>
          </div>
          <div class="column">
            <img src={wagtails} alt="Wagtails" onClick={() => overlayImage('wagtails')}></img>
          </div>
          <div class="column">
            <img src={yellowTree} alt="Yellow tree" onClick={() => overlayImage('yellowTree')}></img>
          </div>
        </div>
        <br />
        <hr/>
        <div class="left-align-indent">
            Masks
        </div>
        <br />
        <div class="row">
          <div class="column">
            <img src={mononokeMask} alt="Mononoke" onClick={() => overlayImage('mononokeMask')}></img>
          </div>
          <div class="column">
            <img src={tenguMask} alt="Tengu" onClick={() => overlayImage('tenguMask')}></img>
          </div>
          <div class="column">
            <img src={newMask} alt="New" onClick={() => overlayImage('newMask')}></img>
          </div>
          <div class="column">
            <img src={goldenMask} alt="Golden" onClick={() => overlayImage('goldenMask')}></img>
          </div>
        </div>
        <br />
        <hr/>
        <div class="left-align-indent">
            Other
        </div>
        <br />
        <div class="row">
          <div class="column">
            <img src={tessaRed} alt="Tessa red" onClick={() => overlayImage('tessaRed')}></img>
          </div>
          <div class="column">
            <img src={tessaYellow} alt="Tessa yellow" onClick={() => overlayImage('tessaYellow')}></img>
          </div>
          <div class="column">
            <img src={tessaBoth} alt="Tessa's" onClick={() => overlayImage('tessaBoth')}></img>
          </div>
          <div class="column">
            <img src={collageWall} alt="Collage wall" onClick={() => overlayImage('collageWall')}></img>
          </div>
          <div class="column">
            <img src={blueHair} alt="Blue hair" onClick={() => overlayImage('blueHair')}></img>
          </div>
          <div class="column">
            <img src={purpleHair} alt="Purple hair" onClick={() => overlayImage('purpleHair')}></img>
          </div>
        </div>
        <hr/>


        <div id="overlay" class="overlay" onClick={() => removeOverlay()}></div>

        <div id="goldenEye1-overlay" class="overlayContent">
          <img alt="" src={goldenEye1}></img>
        </div>
        <div id="goldenEye2-overlay" class="overlayContent">
          <img alt="" src={goldenEye2}></img>
        </div>
        <div id="goldenEye3-overlay" class="overlayContent">
          <img alt="" src={goldenEye3}></img>
        </div>
        <div id="goldenEye4-overlay" class="overlayContent">
          <img alt="" src={goldenEye4}></img>
        </div>
        <div id="goldenEye5-overlay" class="overlayContent">
          <img alt="" src={goldenEye5}></img>
        </div>
        <div id="goldenEye6-overlay" class="overlayContent">
          <img alt="" src={goldenEye6}></img>
        </div>
        <div id="eyes1-overlay" class="overlayContent">
          <img alt="" src={eyes1}></img>
        </div>
        <div id="eyes2-overlay" class="overlayContent">
          <img alt="" src={eyes2}></img>
        </div>
        <div id="redEye-overlay" class="overlayContent">
          <img alt="" src={redEye}></img>
        </div>

        <div id="wagtails-overlay" class="overlayContent">
          <img alt="" src={wagtails}></img>
        </div>
        <div id="magpies-overlay" class="overlayContent">
          <img alt="" src={magpies}></img>
        </div>
        <div id="yellowTree-overlay" class="overlayContent">
          <img alt="" src={yellowTree}></img>
        </div>

        <div id="mononokeMask-overlay" class="overlayContent">
          <img alt="" src={mononokeMask}></img>
        </div>
        <div id="tenguMask-overlay" class="overlayContent">
          <img alt="" src={tenguMask}></img>
        </div>
        <div id="newMask-overlay" class="overlayContent">
          <img alt="" src={newMask}></img>
        </div>
        <div id="goldenMask-overlay" class="overlayContent">
          <img alt="" src={goldenMask}></img>
        </div>

        <div id="collageWall-overlay" class="overlayContent">
          <img alt="" src={collageWall}></img>
        </div>
        <div id="tessaRed-overlay" class="overlayContent">
          <img alt="" src={tessaRed}></img>
        </div>
        <div id="tessaYellow-overlay" class="overlayContent">
          <img alt="" src={tessaYellow}></img>
        </div>
        <div id="tessaBoth-overlay" class="overlayContent">
          <img alt="" src={tessaBoth}></img>
        </div>
        <div id="blueHair-overlay" class="overlayContent">
          <img alt="" src={blueHair}></img>
        </div>
        <div id="purpleHair-overlay" class="overlayContent">
          <img alt="" src={purpleHair}></img>
        </div>

      </div>
);

var tablePage = (
  <div>
    <hr />
    <div>
      Click and image to pick it up and click again to drop it anywhere below the white line.
      <br />
      <button onClick={pagePosition}> Shuffle table </button>
    </div>
    <div class="canvas">        
      <div class="mess-format" id="purpleHair" onClick={() => movingImage === null && movePosition('purpleHair') }>
        <img src={purpleHair} alt="Purple hair"></img>
      </div>
      <div class="mess-format" id="blueHair" onClick={() => movingImage === null && movePosition('blueHair')}>
        <img src={blueHair} alt="Blue hair"></img>
      </div>
      <div class="mess-format" id="collageWall" onClick={() => movingImage === null && movePosition('collageWall')}>
        <img src={collageWall} alt="Collage wall"></img>
      </div>
      <div class="mess-format" id="goldenEye1" onClick={() => movingImage === null && movePosition('goldenEye1')}>
        <img src={goldenEye1} alt="Golden eye 1"></img>
      </div>
      <div class="mess-format" id="goldenEye2" onClick={() => movingImage === null && movePosition('goldenEye2')}>
        <img src={goldenEye2} alt="Golden eye 2"></img>
      </div>
      <div class="mess-format" id="goldenEye3" onClick={() => movingImage === null && movePosition('goldenEye3')}>
        <img src={goldenEye3} alt="Golden eye 3"></img>
      </div>
      <div class="mess-format" id="goldenEye4" onClick={() => movingImage === null && movePosition('goldenEye4')}>
        <img src={goldenEye4} alt="Golden eye 4"></img>
      </div>
      <div class="mess-format" id="goldenEye5" onClick={() => movingImage === null && movePosition('goldenEye5')}>
        <img src={goldenEye5} alt="Golden eye 5"></img>
      </div>
      <div class="mess-format" id="goldenEye6" onClick={() => movingImage === null && movePosition('goldenEye6')}>
        <img src={goldenEye6} alt="Golden eye 6"></img>
      </div>
      <div class="mess-format" id="eyes1" onClick={() => movingImage === null && movePosition('eyes1')}>
        <img src={eyes1} alt="Eyes 1"></img>
      </div>
      <div class="mess-format" id="eyes2" onClick={() => movingImage === null && movePosition('eyes2')}>
        <img src={eyes2} alt="Eyes 1"></img>
      </div>
      <div class="mess-format" id="redEye" onClick={() => movingImage === null && movePosition('redEye')}>
        <img src={redEye} alt="Red eye "></img>
      </div>
      <div class="mess-format" id="magpies" onClick={() => movingImage === null && movePosition('magpies')}>
        <img src={magpies} alt="Magpies"></img>
      </div>
      <div class="mess-format" id="wagtails" onClick={() => movingImage === null && movePosition('wagtails')}>
        <img src={wagtails} alt="Wagtails"></img>
      </div>
      <div class="mess-format" id="yellowTree" onClick={() => movingImage === null && movePosition('yellowTree')}>
        <img src={yellowTree} alt="Yellow tree"></img>
      </div>
      <div class="mess-format" id="mononokeMask" onClick={() => movingImage === null && movePosition('mononokeMask')}>
        <img src={mononokeMask} alt="Mononoke"></img>
      </div>
      <div class="mess-format" id="tenguMask" onClick={() => movingImage === null && movePosition('tenguMask')}>
        <img src={tenguMask} alt="Tengu"></img>
      </div>
      <div class="mess-format" id="newMask" onClick={() => movingImage === null && movePosition('newMask')}>
        <img src={newMask} alt="New"></img>
      </div>
      <div class="mess-format" id="goldenMask" onClick={() => movingImage === null && movePosition('goldenMask')}>
        <img src={goldenMask} alt="Golden"></img>
      </div>
      <div class="mess-format" id="tessaRed" onClick={() => movingImage === null && movePosition('tessaRed')}>
        <img src={tessaRed} alt="Tessa red"></img>
      </div>
      <div class="mess-format" id="tessaYellow" onClick={() =>movingImage === null &&  movePosition('tessaYellow')}>
        <img src={tessaYellow} alt="Tessa yellow"></img>
      </div>
      <div class="mess-format" id="tessaBoth" onClick={() => movingImage === null && movePosition('tessaBoth')}>
        <img src={tessaBoth} alt="Tessa's"></img>
      </div>
   </div> 
  </div>
)

function pagePosition() {
  for(const image of imageList){
    var randX = Math.random();
    var randY = Math.random();
    var element = document.getElementById(image);
    if(element !== null){
      element.style.top = randY * 100 + '%';
      element.style.left = randX * 100 + '%';
    }
  }
  onGallery = false;
}

// Functions related to moving iamges on table view

function recordMouseCoords(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
  if(movingImage !== null){
    movePosition();
  }
}

// bad code neess fixing !!!
function movePosition(imageToMove) {
  var element;
  setTimeout(() => {
    if(movingImage === null && imageToMove !== null){
      // they clicked an image and it is passed in.
      element = document.getElementById(imageToMove);
      element.style.border = "5px solid red";
      movingImage = imageToMove;
      // Also need to disable other dangerous buttons
      document.getElementById("galleryButton").disabled = true;
      document.getElementById("home").style.pointerEvents = "none";
      document.getElementById("cv").style.pointerEvents = "none";
      document.getElementById("dissertation").style.pointerEvents = "none";

    }

    else if(movingImage !== null){
      //image coords become mouse coords
      element = document.getElementById(movingImage);
      element.style.position = "fixed"
      element.style.top = (mouseY / window.innerHeight * 100 - 10) + '%';
      element.style.left =(mouseX / window.innerWidth * 100 - 5) + '%';
      element.style.border = "0px"
      movingImage = null;

      // renable buttons
      document.getElementById("galleryButton").disabled = false;
      document.getElementById("home").style.pointerEvents = "auto";
      document.getElementById("cv").style.pointerEvents = "auto";
      document.getElementById("dissertation").style.pointerEvents = "auto";

    }
  }, 1);
}

// function related to overlaying iamge on gallery view
function overlayImage(imageId) {
  if(currentOverlay === null){
    var overlayElement = document.getElementById(imageId+'-overlay');
    overlayElement.style.display = 'block';
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    currentOverlay = imageId;
  }
}

function removeOverlay() {
  if(currentOverlay !== null){
    var overlayElement = document.getElementById(currentOverlay+'-overlay');
    overlayElement.style.display = 'none';
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    currentOverlay = null;
  }
}

// main page
function Art() {
      var [page, setPage] = useState(galleryPage)
      onGallery = true;

      const toGallery = () => {
        setPage(galleryPage);
        onGallery = true;
      }

      const toTable = () => {
        setPage(tablePage);
        if(onGallery){
          setTimeout(() => {
              pagePosition();
          }, 1);
        }
          
      }

      return (
        <div>
          <div class="underlined">
              Art Gallery
          </div>
          <br />

          <div class="inline-button" >
            <button id="galleryButton" onClick={toGallery}> Gallery View </button>
          </div>
          <div class="inline-button">
            <button onClick={toTable}> Table View </button>
          </div>

          {page}

        </div>
      )
    }

export default Art;