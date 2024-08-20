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
var currentZ = 0;

var galleryPage = (
  <div>
    Click to enlarge images
    <div className="left-align-indent">
        Eyes
    </div>
    <div className="row">
        <div className="column">
          <img id="goldenEye1" src={goldenEye1} alt="Golden eye 1" onClick={() => overlayImage('goldenEye1')}></img>
        </div>
        <div className="column">
          <img src={goldenEye2} alt="Golden eye 2" onClick={() => overlayImage('goldenEye2')}></img>
        </div>
        <div className="column">
          <img src={goldenEye3} alt="Golden eye 3" onClick={() => overlayImage('goldenEye3')}></img>
        </div>
        <div className="column">
          <img src={goldenEye4} alt="Golden eye 4" onClick={() => overlayImage('goldenEye4')}></img>
        </div>
        <div className="column">
          <img src={goldenEye5} alt="Golden eye 5" onClick={() => overlayImage('goldenEye5')}></img>
        </div>
        <div className="column">
          <img src={goldenEye6} alt="Golden eye 6" onClick={() => overlayImage('goldenEye6')}></img>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={eyes1} alt="Eyes 1" onClick={() => overlayImage('eyes1')}></img>
        </div>
        <div className="column">
          <img src={eyes2} alt="Eyes 1" onClick={() => overlayImage('eyes2')}></img>
        </div>
        <div className="column">
          <img src={redEye} alt="Red eye" onClick={() => overlayImage('redEye')}></img>
        </div>

      </div>
      
      <div className="left-align-indent">
          Masks
      </div>
        <div className="row">
          <div className="column">
            <img src={mononokeMask} alt="Mononoke" onClick={() => overlayImage('mononokeMask')}></img>
          </div>
          <div className="column">
            <img src={tenguMask} alt="Tengu" onClick={() => overlayImage('tenguMask')}></img>
          </div>
          <div className="column">
            <img src={newMask} alt="New" onClick={() => overlayImage('newMask')}></img>
          </div>
          <div className="column">
            <img src={goldenMask} alt="Golden" onClick={() => overlayImage('goldenMask')}></img>
          </div>
        </div>
        <br />
        
        <div className="left-align-indent">
            Other
        </div>
        <div className="row">
          <div className="column">
            <img src={tessaRed} alt="Tessa red" onClick={() => overlayImage('tessaRed')}></img>
          </div>
          <div className="column">
            <img src={tessaYellow} alt="Tessa yellow" onClick={() => overlayImage('tessaYellow')}></img>
          </div>
          <div className="column">
            <img src={tessaBoth} alt="Tessa's" onClick={() => overlayImage('tessaBoth')}></img>
          </div>
          <div className="column">
            <img src={collageWall} alt="Collage wall" onClick={() => overlayImage('collageWall')}></img>
          </div>
          <div className="column">
            <img src={blueHair} alt="Blue hair" onClick={() => overlayImage('blueHair')}></img>
          </div>
          <div className="column">
            <img src={purpleHair} alt="Purple hair" onClick={() => overlayImage('purpleHair')}></img>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <img src={magpies} alt="Magpies" onClick={() => overlayImage('magpies')}></img>
          </div>
          <div className="column">
            <img src={wagtails} alt="Wagtails" onClick={() => overlayImage('wagtails')}></img>
          </div>
          <div className="column">
            <img src={yellowTree} alt="Yellow tree" onClick={() => overlayImage('yellowTree')}></img>
          </div>
      </div>
        


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

var tablePage = (
  <div>
    <div className='too-short'>
      Page is too short please adjust !
    </div>
    <div className='tablePage'>
      <div>
        Click and image to pick it up and click again to put it back down where the cursor is.
        <br />
        <button onClick={pagePosition}> Shuffle table </button>
      </div>
      <div className="canvas">        
        <div className="mess-format" id="purpleHair" onClick={() => movingImage === null && movePosition('purpleHair') }>
          <img src={purpleHair} alt="Purple hair"></img>
        </div>
        <div className="mess-format" id="blueHair" onClick={() => movingImage === null && movePosition('blueHair')}>
          <img src={blueHair} alt="Blue hair"></img>
        </div>
        <div className="mess-format" id="collageWall" onClick={() => movingImage === null && movePosition('collageWall')}>
          <img src={collageWall} alt="Collage wall"></img>
        </div>
        <div className="mess-format" id="goldenEye1" onClick={() => movingImage === null && movePosition('goldenEye1')}>
          <img src={goldenEye1} alt="Golden eye 1"></img>
        </div>
        <div className="mess-format" id="goldenEye2" onClick={() => movingImage === null && movePosition('goldenEye2')}>
          <img src={goldenEye2} alt="Golden eye 2"></img>
        </div>
        <div className="mess-format" id="goldenEye3" onClick={() => movingImage === null && movePosition('goldenEye3')}>
          <img src={goldenEye3} alt="Golden eye 3"></img>
        </div>
        <div className="mess-format" id="goldenEye4" onClick={() => movingImage === null && movePosition('goldenEye4')}>
          <img src={goldenEye4} alt="Golden eye 4"></img>
        </div>
        <div className="mess-format" id="goldenEye5" onClick={() => movingImage === null && movePosition('goldenEye5')}>
          <img src={goldenEye5} alt="Golden eye 5"></img>
        </div>
        <div className="mess-format" id="goldenEye6" onClick={() => movingImage === null && movePosition('goldenEye6')}>
          <img src={goldenEye6} alt="Golden eye 6"></img>
        </div>
        <div className="mess-format" id="eyes1" onClick={() => movingImage === null && movePosition('eyes1')}>
          <img src={eyes1} alt="Eyes 1"></img>
        </div>
        <div className="mess-format" id="eyes2" onClick={() => movingImage === null && movePosition('eyes2')}>
          <img src={eyes2} alt="Eyes 1"></img>
        </div>
        <div className="mess-format" id="redEye" onClick={() => movingImage === null && movePosition('redEye')}>
          <img src={redEye} alt="Red eye "></img>
        </div>
        <div className="mess-format" id="magpies" onClick={() => movingImage === null && movePosition('magpies')}>
          <img src={magpies} alt="Magpies"></img>
        </div>
        <div className="mess-format" id="wagtails" onClick={() => movingImage === null && movePosition('wagtails')}>
          <img src={wagtails} alt="Wagtails"></img>
        </div>
        <div className="mess-format" id="yellowTree" onClick={() => movingImage === null && movePosition('yellowTree')}>
          <img src={yellowTree} alt="Yellow tree"></img>
        </div>
        <div className="mess-format" id="mononokeMask" onClick={() => movingImage === null && movePosition('mononokeMask')}>
          <img src={mononokeMask} alt="Mononoke"></img>
        </div>
        <div className="mess-format" id="tenguMask" onClick={() => movingImage === null && movePosition('tenguMask')}>
          <img src={tenguMask} alt="Tengu"></img>
        </div>
        <div className="mess-format" id="newMask" onClick={() => movingImage === null && movePosition('newMask')}>
          <img src={newMask} alt="New"></img>
        </div>
        <div className="mess-format" id="goldenMask" onClick={() => movingImage === null && movePosition('goldenMask')}>
          <img src={goldenMask} alt="Golden"></img>
        </div>
        <div className="mess-format" id="tessaRed" onClick={() => movingImage === null && movePosition('tessaRed')}>
          <img src={tessaRed} alt="Tessa red"></img>
        </div>
        <div className="mess-format" id="tessaYellow" onClick={() =>movingImage === null &&  movePosition('tessaYellow')}>
          <img src={tessaYellow} alt="Tessa yellow"></img>
        </div>
        <div className="mess-format" id="tessaBoth" onClick={() => movingImage === null && movePosition('tessaBoth')}>
          <img src={tessaBoth} alt="Tessa's"></img>
        </div>
    </div> 
    </div>
  </div>
)

// function to randomly place pictures
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
      movingImage = imageToMove;
      // Also need to disable other dangerous buttons
      document.getElementById("galleryButton").disabled = true;
      document.getElementById("back-button").disabled = true;

      // cahnge styles
      const body = document.getElementById("all");
      body.style.cursor = "grabbing"
      const img = element.getElementsByTagName("img")[0]
      img.style.border = "3px solid rgb(290, 14, 61)";
      currentZ += 1;
      element.style.zIndex = currentZ;


    }

    else if(movingImage !== null){
      //image coords become mouse coords
      element = document.getElementById(movingImage);
      element.style.position = "fixed"
      element.style.top = (mouseY / window.innerHeight * 100 - 10) + '%';
      element.style.left =(mouseX / window.innerWidth * 100 - 5) + '%';
      movingImage = null;

      //change styles
      const body = document.getElementById("all");
      body.style.cursor = "context-menu"
      const img = element.getElementsByTagName("img")[0]
      img.style.border = "3px solid transparent";

      // renable buttons
      document.getElementById("galleryButton").disabled = false;
      document.getElementById("back-button").disabled = false;


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

    // the colouring is a work around for disable the buttons not working properly
      const toGallery = () => {
        setPage(galleryPage);
        const galleryButton = document.getElementById("galleryButton")
        galleryButton.disabled = true;
        galleryButton.style.color = "rgb(110,110,110)"
        document.getElementById("tableButton").disabled = false;

        onGallery = true;
      }

      const toTable = () => {
        setPage(tablePage);
        const galleryButton = document.getElementById("galleryButton")
        galleryButton.disabled = false;
        galleryButton.style.color = "rgb(4,4,4)"
        document.getElementById("tableButton").disabled = true;
        if(onGallery){
          setTimeout(() => {
              pagePosition();
          }, 1);
        }
          
      }

      return (
        <div>
          <div className="underlined">
              Art Gallery
          </div>

          <div className="inline-button" >
            <button id="galleryButton" className='galleryButton' onClick={toGallery}> Gallery View </button>
          </div>
          <div className="inline-button">
            <button id="tableButton" onClick={toTable}> Table View </button>
          </div>

          {page}

        </div>
      )
    }

export default Art;