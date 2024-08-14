import './Art.css';

// Image imports
import collageWall from './images/collage_wall.jpg'
import dissertationUI from './images/di-ui.png'
import goldenEye from './images/golden_eye.jpg'
import magpies from './images/magpies.jpg'
import mononokeMask from './images/mononoke_mask.jpg'
import newMask from './images/new_mask.jpg'
import wagtails from './images/wagtails.jpg'


function Art() {
    return (
      <div>
        <div class="underlined">
            Art Gallery
        </div>
        <br />
        <div class="left-align">
            Eyes
        </div>
        <br />
        <div class="row">
            <div class="column">
              <img src={goldenEye} alt="Golden eye"></img>
            </div>
            <div class="column">
              <img src={collageWall} alt="Wall collage"></img>
            </div>
        </div>
        <div class="left-align">
            Birds
        </div>
        <br />
        <div class="row">
          <div class="column">
            <img src={magpies} alt="Magpies"></img>
          </div>
          <div class="column">
            <img src={wagtails} alt="Wagtails"></img>
          </div>
        </div>
        <br />
        <div class="row">
        </div>
        <div class="left-align">
            Other
        </div>
        <br />
        <div class="row">
          <div class="column">
            <img src={mononokeMask} alt="Princess Mononoke's mask"></img>
          </div>
          <div class="column">
            <img src={newMask} alt="New mask"></img>
          </div>
          <div class="column">
            <img src={newMask} alt="New mask"></img>
          </div>
          <div class="column">
            <img src={newMask} alt="New mask"></img>
          </div>
        </div>
      </div>
    );
  }

export default Art;