import '../styleFiles/Art.css'

document.addEventListener("click", detectMouseCoords);

var movingImage = null;
var mouseX = 0;
var mouseY = 0;
var currentZ = 0;

export function tablePage(images) {
  const flatImages = Object.values(images).flat();
  
  return (
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
          {flatImages.map((image, index) => (
            <div className="messFormat" key={index} onClick={(e) => movingImage === null && movePosition(e.currentTarget)}>
              <img src={image} alt={image} ></img>
            </div>
          ))}
        </div> 
      </div>
    </div>
  )
}
  
// function to randomly place pictures
export function pagePosition() {
  var randX;
  var randY;
  const imageList = document.querySelectorAll('.messFormat')
  for(const image of imageList){
    randX = Math.random();
    randY = Math.random();
    image.style.top = randY * 100 + '%';
    image.style.left = randX * 100 + '%';
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
  setTimeout(() => {
    if(movingImage === null && imageToMove !== null){
      // they clicked an image and it is passed in.

      movingImage = imageToMove;

      // Also need to disable other dangerous buttons
      document.getElementById("galleryButton").disabled = true;
      document.getElementById("backButton").disabled = true;
      document.getElementById("smallBackButton").disabled = true;

      // change styles
      const body = document.getElementById("all");
      body.style.cursor = "grabbing"
      
      imageToMove.classList.add("messFormatAnimate");

      // make sure iamge comes to top
      currentZ += 1;
      imageToMove.style.zIndex = currentZ;
    }

    else if(movingImage !== null){
      //image coords become mouse coords when they drop the image
      imageToMove = movingImage
      imageToMove.style.position = "fixed"
      imageToMove.style.top = (mouseY / window.innerHeight * 100 - 10) + '%';
      imageToMove.style.left =(mouseX / window.innerWidth * 100 - 5) + '%';
      movingImage = null;

      //change styles
      const body = document.getElementById("all");
      body.style.cursor = "context-menu"
      
      imageToMove.classList.remove("messFormatAnimate")

      // renable buttons
      document.getElementById("galleryButton").disabled = false;
      document.getElementById("backButton").disabled = false;
      document.getElementById("smallBackButton").disabled = false;

    }
  }, 1);
}