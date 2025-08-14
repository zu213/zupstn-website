import { useEffect, useRef, useState } from 'react';

function GalleryPage ({ images }) {
  const [currentOverlay, setCurrentOverlay] = useState(null);
  const rowRefs = useRef([]);
  const scrollInterval = useRef(null);

  useEffect(() => {
    rowRefs.current.forEach((row, _) => {
      if (!row) return;
      const imgs = Array.from(row.querySelectorAll('img'));
      let loadedCount = 0;

      const onLoad = () => {
        loadedCount++;
        if (loadedCount === imgs.length) {
          checkToHideButtons(row);
        }
      };

      imgs.forEach(img => {
        if (img.complete) {
          onLoad();
        } else {
          img.addEventListener('load', onLoad);
          img.addEventListener('error', onLoad);
        }
      });

      return () => {
        imgs.forEach(img => {
          img.removeEventListener('load', onLoad);
          img.removeEventListener('error', onLoad);
        });
      };
    });
  }, [images]);


  const scrollRowLeft = (e, scrollBy) => {
    e.stopPropagation();
    stopScrolling();
    const rowElement = e.currentTarget.nextSibling;
    rowElement.scrollLeft -= scrollBy;
    checkToHideButtons(rowElement);
    scrollInterval.current = setInterval(() => {
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
    scrollInterval.current = setInterval(() => {
      rowElement.scrollLeft += scrollBy;
      checkToHideButtons(rowElement);
    }, 75);
  };


  const stopScrolling = () => {
    clearInterval(scrollInterval.current);
  };

  // function related to overlaying iamge on gallery view
  function overlayImage(e) {
    const img = e.target;
    setCurrentOverlay(img.src);
  }

  function removeOverlay() {
    setCurrentOverlay(null);
  }

  return (
    <div>
        Click on images to enlarge them.
      <br />
      <br />

      {images && Object.entries(images).map(([rowName, rowImages], rowIndex) => (
        <div className='image-category' key={`folder-${rowName || rowIndex}`}>
          <div className="art-subtitle">
            {rowName}
          </div>
          <div 
            className="left-button hidden"
            onMouseDown={(e) => scrollRowLeft(e, 30)}
            onMouseUp={stopScrolling}
            onMouseLeave={stopScrolling}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19" stroke="#00000000" strokeWidth="2" fill="#ffffffee" />
              <path d="M24 12l-8 8 8 8" stroke="#606060" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="image-row" ref={el => rowRefs.current[rowIndex] = el}>
            {   
              rowImages.map((image, index) => (
                <div className="image-column" key={`image-${index}`}>
                  <img src={image} alt={image} onClick={overlayImage}></img>
                </div>
              ))
            }
          </div>
          <div 
            className="right-button hidden"
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

      {currentOverlay && (
        <div>
          <div className="overlay" onClick={removeOverlay}>
          </div>
          <img src={currentOverlay} alt="overlay" className="overlay-content" />
        </div>
      )}
    </div>
  );};

const checkToHideButtons = (el) => {
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

export default GalleryPage;