import { useEffect, useRef } from 'react';

import { useBackButton } from '../util/BackButtons';
import { useBreadcrumbs } from '../util/Breadcrumbs';

var movingImage = null;
var mouseX = 0;
var mouseY = 0;
var currentZ = 0;

function TablePage({ images, disableGalleryButton }) {
  const { setCrumbsDisabled } = useBreadcrumbs();
  const { setBackButtonDisabled } = useBackButton();
  const imageRefs = useRef([]);

  useEffect(() => {
    // Functions related to moving images on table view
    function detectMouseCoords(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if(movingImage !== null){
        movePosition();
      }
    }

    document.addEventListener('click', detectMouseCoords);

    pagePosition();

    return () => {
      document.removeEventListener('click', detectMouseCoords);
    };
  }, []);

  // function to randomly place pictures
  function pagePosition() {
    var randX;
    var randY;
    for(const image of imageRefs.current){
      randX = Math.random();
      randY = Math.random();
      image.style.top = randY * 100 + '%';
      image.style.left = randX * 100 + '%';
    }
  }

  // poor code needs fixing !
  function movePosition(imageToMove) {
    setTimeout(() => {
      if(movingImage === null && imageToMove !== null){
        // they clicked an image and it is passed in.

        movingImage = imageToMove;

        // Also need to disable other dangerous buttons
        disableGalleryButton(true);
        setBackButtonDisabled(true);
        setCrumbsDisabled(true);

        // change styles
        document.body.style.cursor = 'grabbing';
        
        imageToMove.classList.add('messFormatAnimate');

        // make sure iamge comes to top
        currentZ += 1;
        imageToMove.style.zIndex = currentZ;
      }

      else if(movingImage !== null){
        //image coords become mouse coords when they drop the image
        imageToMove = movingImage;
        imageToMove.style.position = 'fixed';
        imageToMove.style.top = (mouseY / window.innerHeight * 100 - 10) + '%';
        imageToMove.style.left =(mouseX / window.innerWidth * 100 - 5) + '%';
        movingImage = null;

        //change styles
        document.body.style.cursor = 'context-menu';
        
        imageToMove.classList.remove('messFormatAnimate');

        // renable buttons
        disableGalleryButton(false);
        setCrumbsDisabled(false);
        setBackButtonDisabled(false);

      }
    }, 1);
  }
  
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
          {images && Object.values(images).flat().map((image, index) => (
            <div ref={el => imageRefs.current[index] = el} className="messFormat" key={index} onClick={(e) => movingImage === null && movePosition(e.currentTarget)}>
              <img src={image} alt={image} ></img>
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
}

export default TablePage;