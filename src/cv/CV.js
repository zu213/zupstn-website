// Image imports
import download from '../icons/white-download.png';
import './CV.css';
import { useState, useRef } from 'react';

function CV() {
  const [loading, setLoading] = useState(true);
  const pdfContainer = useRef(null);

  return (
    <div className='cvPage'>
      <br/>
      <a className="smallLink" href="/documents/CV_short.pdf" download="Zachary Upstone CV">
            Download <img className="downloadImage" src={download} alt="Download"></img>
      </a>
          &nbsp; | &nbsp;
      <a className="smallLink" href="/documents/CV.pdf" download="Zachary Upstone CV">
            Extended CV <img className="downloadImage" src={download} alt="Download"></img>
      </a>
      <br/>
      <br/>
      <div className='tooSmallCV'> Screen size is too small to display pdf, download to view.</div>
      <div className='safariCV'> Safari doesn't allow proper display of pdfs.</div>
  
      {loading && (
        <span className="loader"></span>
      )}
      <object ref={pdfContainer} data="/documents/CV_short.pdf" className={loading ? 'pdf-viewer toLoad' : 'pdf-viewer'} type="application/pdf" onLoad={() => setLoading(false)}>
        <div>No online PDF viewer installed</div>
      </object>
    </div>
  );
}

export default CV;