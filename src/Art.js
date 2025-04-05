import './styleFiles/Art.css';
import { useState } from 'react';

import {galleryPage} from './subJS/gallery.js'
import {tablePage, pagePosition} from './subJS/table.js'

var onGallery = true;

// main page
function Art() {
      var [page, setPage] = useState(galleryPage)
      onGallery = true;

    // the colouring is a work around for disable the buttons not working properly
      const toGallery = () => {
        setPage(galleryPage);
        const galleryButton = document.getElementById("galleryButton")
        galleryButton.disabled = true;
        galleryButton.style.color = "rgb(110,110,110)"
        document.getElementById("tableButton").disabled = false;

        onGallery = true;
      }

      const toTable = () => {
        setPage(tablePage);
        const galleryButton = document.getElementById("galleryButton")
        galleryButton.disabled = false;
        galleryButton.style.color = "rgb(4,4,4)"
        document.getElementById("tableButton").disabled = true;
        if(onGallery){
          setTimeout(() => {
              pagePosition();
              onGallery = false;
          }, 1);
        }
          
      }

      return (
        <div>
          <div className="subTitle">
              Gallery <br />
          </div>              
          <div>
              All art is made by me <br />
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
      )
    }

export default Art;