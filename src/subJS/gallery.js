
var currentOverlay = null;

export const galleryPage = (images) => (
    <div>
      Click on images to enlarge them.
      <br />
      <br />

      {Object.entries(images).map(([rowName, rowImages], rowIndex) => (
        <div key={`folder-${rowName || rowIndex}`}>
          <div className="artSubtitle">
            {rowName}
          </div>
          <div className="imageRow">
            {   
              rowImages.map((image, index) => (
                <div className="imageColumn" key={`image-${index}`}>
                <img src={image} alt={image} onClick={overlayImage}></img>
              </div>
              ))
            }
          </div>
        </div>
        )
      )}
      <br />

      <div id="overlay" className="overlay" onClick={removeOverlay}></div>
    </div>
  );

// function related to overlaying iamge on gallery view
function overlayImage(e) {
    if(currentOverlay === null){
      console.log(e.target)
      e.target.classList.add('overlayContent')
      currentOverlay = e.target
      document.querySelector('.overlay').style.display = 'block'
    }
  }
  
function removeOverlay() {
    if(currentOverlay !== null){
      currentOverlay.classList.remove('overlayContent')
      currentOverlay = null;
      document.querySelector('.overlay').style.display = 'none'
    }
  }