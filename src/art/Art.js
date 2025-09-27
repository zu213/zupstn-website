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
  require.context('./images', true, /\.(png|jpe?g|svg|webp)$/)
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
      galleryButton.current.style.backgroundColor = 'rgb(55 50 79);';
    }
    setImages(importAll(
      require.context('./images', true, /\.(png|jpe?g|svg|webp)$/)
    ));
  }, []);

  // the colouring is a work around for disable the buttons not working properly
  const toGallery = () => {
    setPage(<GalleryPage images={images} />);
    disableGalleryButton(true);
    tableButton.current.disabled = false;
    tableButton.current.style.removeProperty('background');  
  };

  const disableGalleryButton = (disabled) => {
    galleryButton.current.disabled = disabled;
    if(disabled) {
      galleryButton.current.style.background = 'rgb(55 50 79);';
    } else {
      galleryButton.current.style.removeProperty('background');  
    }
  };

  const toTable = () => {
    setPage(<TablePage images={images} disableGalleryButton={disableGalleryButton}/>);
    disableGalleryButton(false);
    tableButton.current.disabled = true;
    tableButton.current.style.background = 'rgb(55 50 79);';
  };

  return (
    <div>
      <div className="page-header">
        Gallery <br />
      </div>              

      <div className='switch-button-container'>
        <button ref={galleryButton} className='switch-button' onClick={toGallery}> Gallery View </button>
        <button ref={tableButton} className="switch-button" onClick={toTable}> Table View </button>
      </div>

      {artPage}

    </div>
  );
}

export default Art;