
var currentOverlay = null;

function galleryPage (images) {

  var scrollInterval;

  const scrollRowLeft = (e, scrollBy) => {
    e.stopPropagation();
    stopScrolling();
    const rowElement = e.currentTarget.nextSibling;
    rowElement.scrollLeft -= scrollBy;
    checkToHideButtons(rowElement);
    scrollInterval = setInterval(() => {
      rowElement.scrollLeft -= scrollBy;
      checkToHideButtons(rowElement);
    }, 75);
  };

  const scrollRowRight = (e, scrollBy) => {
    e.stopPropagation();
    stopScrolling();
    const rowElement = e.currentTarget.previousSibling;
    rowElement.scrollLeft += scrollBy;
    checkToHideButtons(rowElement);
    scrollInterval = setInterval(() => {
      rowElement.scrollLeft += scrollBy;
      checkToHideButtons(rowElement);
    }, 75);
  };


  const stopScrolling = () => {
    clearInterval(scrollInterval);

  };

  // function related to overlaying iamge on gallery view
  function overlayImage(e) {
    if(currentOverlay === null){
      console.log(e.target);
      e.target.classList.add('overlayContent');
      currentOverlay = e.target;
      document.querySelector('.overlay').style.display = 'block';
    }
  }
    
  function removeOverlay() {
    if(currentOverlay !== null){
      currentOverlay.classList.remove('overlayContent');
      currentOverlay = null;
      document.querySelector('.overlay').style.display = 'none';
    }
  }

  return (
    <div>
        Click on images to enlarge them.
      <br />
      <br />

      {Object.entries(images).map(([rowName, rowImages], rowIndex) => (
        <div className='image-category' key={`folder-${rowName || rowIndex}`}>
          <div className="artSubtitle">
            {rowName}
          </div>
          <div 
            className="leftButton"
            onMouseDown={(e) => scrollRowLeft(e, 30)}
            onMouseUp={stopScrolling}
            onMouseLeave={stopScrolling}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19" stroke="#00000000" strokeWidth="2" fill="#ffffffee" />
              <path d="M24 12l-8 8 8 8" stroke="#606060" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
          <div 
            className="rightButton"
            onMouseDown={(e) => scrollRowRight(e, 30)}
            onMouseUp={stopScrolling}
            onMouseLeave={stopScrolling}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19" stroke="#00000000" strokeWidth="2" fill="#ffffffee" />
              <path d="M16 12l8 8-8 8" stroke="#606060" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      )
      )}
      <br />

      <div id="overlay" className="overlay" onClick={removeOverlay}></div>
    </div>
  );};

export const checkToHideButtons = (el) => {
  console.log(el, el.previousSibling, el.nextSibling, el.scrollLeft, el.scrollLeft + el.clientWidth, el.scrollWidth);

  if(el.nextSibling){
    if(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1){
      el.nextSibling.classList.add('hidden');
    }else if(el.nextSibling.classList.contains('hidden')){
      el.nextSibling.classList.remove('hidden');
    }
  }
  if(el.previousSibling){
    if(el.scrollLeft  < 1) {
      el.previousSibling.classList.add('hidden');
    }else if(el.previousSibling.classList.contains('hidden')){
      el.previousSibling.classList.remove('hidden');
    }
  }
};

export default galleryPage;