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

var imageList = ['goldenEye1',  'goldenEye2',  'goldenEye3',  'goldenEye4' , 'goldenEye5', 'goldenEye6',
  'eyes1',  'eyes2', 'redEye', 'magpies', 'wagtails', 'yellowTree', 'mononokeMask',  'newMask', 'tenguMask',
  'goldenMask', 'collageWall',  'blueHair',  'purpleHair', 'tessaRed',  'tessaYellow', 'tessaBoth']


var page1 = (
  <div class="1">
            <div class="left-align-indent">
                Eyes
            </div>
            <hr/>
            <br />
            <div class="row">
                <div class="column">
                  <img src={goldenEye1} alt="Golden eye 1"></img>
                </div>
                <div class="column">
                  <img src={goldenEye2} alt="Golden eye 2"></img>
                </div>
                <div class="column">
                  <img src={goldenEye3} alt="Golden eye 3"></img>
                </div>
                <div class="column">
                  <img src={goldenEye4} alt="Golden eye 4"></img>
                </div>
                <div class="column">
                  <img src={goldenEye5} alt="Golden eye 5"></img>
                </div>
                <div class="column">
                  <img src={goldenEye6} alt="Golden eye 6"></img>
                </div>
                <div class="column">
                  <img src={eyes1} alt="Eyes 1"></img>
                </div>
                <div class="column">
                  <img src={eyes2} alt="Eyes 1"></img>
                </div>
                <div class="column">
                  <img src={redEye} alt="Red eye "></img>
                </div>

            </div>
            <hr/>
            <div class="left-align-indent">
                Nature
            </div>
            <hr/>
            <br />
            <div class="row">
              <div class="column">
                <img src={magpies} alt="Magpies"></img>
              </div>
              <div class="column">
                <img src={wagtails} alt="Wagtails"></img>
              </div>
              <div class="column">
                <img src={yellowTree} alt="Yellow tree"></img>
              </div>
            </div>
            <br />
            <hr/>
            <div class="left-align-indent">
                Masks
            </div>
            <hr/>
            <br />
            <div class="row">
              <div class="column">
                <img src={mononokeMask} alt="Mononoke"></img>
              </div>
              <div class="column">
                <img src={tenguMask} alt="Tengu"></img>
              </div>
              <div class="column">
                <img src={newMask} alt="New"></img>
              </div>
              <div class="column">
                <img src={goldenMask} alt="Golden"></img>
              </div>
            </div>
            <br />
            <hr/>
            <div class="left-align-indent">
                Other
            </div>
            <hr/>
            <br />
            <div class="row">
              <div class="column">
                <img src={tessaRed} alt="Tessa red"></img>
              </div>
              <div class="column">
                <img src={tessaYellow} alt="Tessa yellow"></img>
              </div>
              <div class="column">
                <img src={tessaBoth} alt="Tessa's"></img>
              </div>
              <div class="column">
                <img src={collageWall} alt="Collage wall"></img>
              </div>
              <div class="column">
                <img src={blueHair} alt="Blue hair"></img>
              </div>
              <div class="column">
                <img src={purpleHair} alt="Purple hair"></img>
              </div>
            </div>
            <hr/>
          </div>
);

var page2 = (
  <div>hiiii
    <div>
      <button onClick={pagePosition}> Click Me </button>
    </div>
    <div class="canvas">        
      <div class="mess-format" id="purpleHair">
        <img src={purpleHair} alt="Purple hair"></img>
      </div>
      <div class="mess-format" id="blueHair">
        <img src={blueHair} alt="Blue hair"></img>
      </div>
      <div class="mess-format" id="collageWall">
        <img src={collageWall} alt="Collage wall"></img>
      </div>
      <div class="mess-format" id="goldenEye1">
        <img src={goldenEye1} alt="Golden eye 1"></img>
      </div>
      <div class="mess-format" id="goldenEye2">
        <img src={goldenEye2} alt="Golden eye 2"></img>
      </div>
      <div class="mess-format" id="goldenEye3">
        <img src={goldenEye3} alt="Golden eye 3"></img>
      </div>
      <div class="mess-format" id="goldenEye4">
        <img src={goldenEye4} alt="Golden eye 4"></img>
      </div>
      <div class="mess-format" id="goldenEye5">
        <img src={goldenEye5} alt="Golden eye 5"></img>
      </div>
      <div class="mess-format" id="goldenEye6">
        <img src={goldenEye6} alt="Golden eye 6"></img>
      </div>
      <div class="mess-format" id="eyes1">
        <img src={eyes1} alt="Eyes 1"></img>
      </div>
      <div class="mess-format" id="eyes2">
        <img src={eyes2} alt="Eyes 1"></img>
      </div>
      <div class="mess-format" id="redEye">
        <img src={redEye} alt="Red eye "></img>
      </div>
      <div class="mess-format" id="magpies">
        <img src={magpies} alt="Magpies"></img>
      </div>
      <div class="mess-format" id="wagtails">
        <img src={wagtails} alt="Wagtails"></img>
      </div>
      <div class="mess-format" id="yellowTree">
        <img src={yellowTree} alt="Yellow tree"></img>
      </div>
      <div class="mess-format" id="mononokeMask">
        <img src={mononokeMask} alt="Mononoke"></img>
      </div>
      <div class="mess-format" id="tenguMask">
        <img src={tenguMask} alt="Tengu"></img>
      </div>
      <div class="mess-format" id="newMask">
        <img src={newMask} alt="New"></img>
      </div>
      <div class="mess-format" id="goldenMask">
        <img src={goldenMask} alt="Golden"></img>
      </div>
      <div class="mess-format" id="tessaRed">
        <img src={tessaRed} alt="Tessa red"></img>
      </div>
      <div class="mess-format" id="tessaYellow">
        <img src={tessaYellow} alt="Tessa yellow"></img>
      </div>
      <div class="mess-format" id="tessaBoth">
        <img src={tessaBoth} alt="Tessa's"></img>
      </div>
   </div> 
  </div>
)

var pageNumber = true;

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
}

function Art() {
      var [page, setPage] = useState(page1)
      const doFunction = () => {
        if(pageNumber){
          setPage(page2);
          pageNumber = false;
        }else{
          setPage(page1);
          pageNumber = true;
        }
      }

      return (
        <div>
          <div class="underlined">
              Art Gallery
          </div>
          <br />

          <div>
            <button onClick={doFunction}> Click Me </button>
          </div>
          <br />

          {page}

        </div>
      )
    }

export default Art;