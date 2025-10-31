import { useMask } from '../util/Mask';

function GalleryPage ({ images }) {
  const { displayMask, MaskOverlay } = useMask();

  return (
    <div className='gallery-page'>
        Click on images to enlarge them.
      <br />
      <br />

      {images && Object.entries(images).map(([rowName, rowImages], rowIndex) => (
        <div className='image-category' key={`folder-${rowName || rowIndex}`}>
          <div className="art-subtitle">
            {rowName}
          </div>
          <hr />
          <div className="image-row">
            {   
              rowImages.map((image, index) => (
                <div className="image-column" key={`image-${index}`}>
                  <img src={image} alt={image} onClick={() => displayMask(image)}></img>
                </div>
              ))
            }
          </div>
        </div>
      )
      )}
      
      {MaskOverlay()}
    </div>
  );
};

export default GalleryPage;