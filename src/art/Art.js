import './Art.css';
import { useState } from 'react';

import {galleryPage} from './gallery.js';
import {tablePage, pagePosition} from './table.js';

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
  var [page, setPage] = useState(galleryPage(images));
  onGallery = true;

  // the colouring is a work around for disable the buttons not working properly
  const toGallery = () => {
    setPage(galleryPage(images));
    const galleryButton = document.getElementById('galleryButton');
    galleryButton.disabled = true;
    galleryButton.style.color = 'rgb(110,110,110)';
    document.getElementById('tableButton').disabled = false;

    onGallery = true;
  };

  const toTable = () => {
    setPage(tablePage(images));
    const galleryButton = document.getElementById('galleryButton');
    galleryButton.disabled = false;
    galleryButton.style.color = 'rgb(4,4,4)';
    document.getElementById('tableButton').disabled = true;
        
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
        <button id="galleryButton" className='galleryButton' onClick={toGallery}> Gallery View </button>
      </div>
      <div className="inlineButton">
        <div className='border'>
          <button id="tableButton" className="imgContainer" onClick={toTable}> Table View </button>
        </div>
      </div>

      {page}

    </div>
  );
}

export default Art;