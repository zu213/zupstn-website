import './Art.css';
import { useState, useEffect } from 'react';

import Gallery from './gallery.js';
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
  var [page, setPage] = useState(Gallery(images));
  onGallery = true;

  useEffect(() => {
    document.getElementById('galleryButton').disabled = true;
  }, []);

  // the colouring is a work around for disable the buttons not working properly
  const toGallery = () => {
    setPage(Gallery(images));
    const galleryButton = document.getElementById('galleryButton');
    galleryButton.disabled = true;
    galleryButton.style.color = 'rgb(110,110,110)';
    const tableButton = document.getElementById('tableButton');
    tableButton.disabled = false;
    tableButton.style.color = 'rgb(4,4,4)';

    onGallery = true;
  };

  const toTable = () => {
    setPage(tablePage(images));
    const galleryButton = document.getElementById('galleryButton');
    galleryButton.disabled = false;
    galleryButton.style.color = 'rgb(4,4,4)';
    const tableButton = document.getElementById('tableButton');
    tableButton.disabled = true;
    tableButton.style.color = 'rgb(110,110,110)';
        
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
          <button id="tableButton" className="tableButton" onClick={toTable}> Table View </button>
        </div>
      </div>

      {page}

    </div>
  );
}

export default Art;