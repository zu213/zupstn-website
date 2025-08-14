import './Art.css';
import { useState, useEffect, useRef } from 'react';

import GalleryPage from './Gallery.js';
import TablePage from './Table.js';

function importAll(r) {
  const images = {};

  r.keys().forEach((key) => {
    const folder = key.split('/')[1];
    if (!images[folder]) images[folder] = [];
    images[folder].push(r(key));
  });

  return images;
}

const imagesInit = importAll(
  require.context('./images', true, /\.(png|jpe?g|svg)$/)
);

// main page
function Art() {
  var [images, setImages] = useState(imagesInit);
  var [artPage, setPage] = useState(<GalleryPage images={images} />);
  const galleryButton = useRef(null);
  const tableButton = useRef(null);

  useEffect(() => {
    if(galleryButton) {
      galleryButton.current.disabled = true;
    }
    setImages(importAll(
      require.context('./images', true, /\.(png|jpe?g|svg)$/)
    ));
  }, []);

  // the colouring is a work around for disable the buttons not working properly
  const toGallery = () => {
    setPage(<GalleryPage images={images} />);
    disableGalleryButton(true);
    tableButton.current.disabled = false;
    tableButton.current.style.color = 'rgb(4,4,4)';
  };

  const disableGalleryButton = (disabled) => {
    galleryButton.current.disabled = disabled;
    galleryButton.current.style.color = disabled ? 'rgb(110,110,110)' : galleryButton.current.style.color = 'rgb(4,4,4)';;
  };

  const toTable = () => {
    setPage(<TablePage images={images} disableGalleryButton={disableGalleryButton}/>);
    disableGalleryButton(false);
    tableButton.current.disabled = true;
    tableButton.current.style.color = 'rgb(110,110,110)';  
  };

  return (
    <div>
      <div className="pageHeader">
        Gallery <br />
      </div>              

      <div className="inlineButton" >
        <button id='galleryButton' ref={galleryButton} className='galleryButton' onClick={toGallery}> Gallery View </button>
      </div>
      <div className="inlineButton">
        <div className='border'>
          <button id='tableButton' ref={tableButton} className="tableButton" onClick={toTable}> Table View </button>
        </div>
      </div>

      {artPage}

    </div>
  );
}

export default Art;