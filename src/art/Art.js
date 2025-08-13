import './Art.css';
import { useState, useEffect, useRef } from 'react';

import GalleryPage from './Gallery.js';
import {tablePage, pagePosition} from './Table.js';

var onGallery = true;

function importAll(r) {
  const images = {};

  r.keys().forEach((key) => {
    const folder = key.split('/')[1];
    if (!images[folder]) images[folder] = [];
    images[folder].push(r(key));
  });

  return images;
}

const images = importAll(
  require.context('./images', true, /\.(png|jpe?g|svg)$/)
);

// main page
function Art() {
  var [artPage, setPage] = useState(GalleryPage(images));
  onGallery = true;
  const galleryButton = useRef(null);
  const tableButton = useRef(null);

  useEffect(() => {
    if(galleryButton) {
      galleryButton.current.disabled = true;
    }
  }, []);

  // the colouring is a work around for disable the buttons not working properly
  const toGallery = () => {
    setPage(GalleryPage(images));
    galleryButton.current.disabled = true;
    galleryButton.current.style.color = 'rgb(110,110,110)';
    tableButton.current.disabled = false;
    tableButton.current.style.color = 'rgb(4,4,4)';

    onGallery = true;
  };

  const toTable = () => {
    setPage(tablePage(images));
    galleryButton.current.disabled = false;
    galleryButton.current.style.color = 'rgb(4,4,4)';
    tableButton.current.disabled = true;
    tableButton.current.style.color = 'rgb(110,110,110)';
        
    if(onGallery){
      setTimeout(() => {
        onGallery = false;
        pagePosition();
      }, 1);
    }
          
  };

  return (
    <div>
      <div className="pageHeader">
        Gallery <br />
      </div>              

      <div className="inlineButton" >
        <button ref={galleryButton} className='galleryButton' onClick={toGallery}> Gallery View </button>
      </div>
      <div className="inlineButton">
        <div className='border'>
          <button id={tableButton} className="tableButton" onClick={toTable}> Table View </button>
        </div>
      </div>

      {artPage}

    </div>
  );
}

export default Art;