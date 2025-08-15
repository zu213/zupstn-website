import { useState, useRef, useEffect } from 'react';

// Image imports
import download from '../icons/white-download.png';
import './CV.css';

function CV() {
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);

  const pdfContainer = useRef(null);

  const isChrome = /Chrome/.test(navigator.userAgent);

  useEffect(() => {
    // fallback in case never loaded
    const timer = setTimeout(() => {
      if(loading) {
        setLoading(false);
        setErrored(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className='cv-page'>
      <br/>
      <a className="small-link" href="/documents/CV_short.pdf" download="Zachary Upstone CV">
        Download <img className="download-image" src={download} alt="Download"></img>
      </a>
          &nbsp; | &nbsp;
      <a className="small-link" href="/documents/CV.pdf" download="Zachary Upstone CV">
        Extended CV <img className="download-image" src={download} alt="Download"></img>
      </a>
      <br/>
      <br/>
      <div className='too-small-cv'> Screen size is too small to display pdf, download to view.</div>
      <div className='safari-cv'> Safari doesn't allow proper display of pdfs.</div>
  
      {loading && (
        <span className="loader"></span>
      )}

      {errored  ? (
        <div className='error-message'>
          Something went wrong, please try <a className="small-link" href="/documents/CV_short.pdf" download="Zachary Upstone CV">downloading</a> manually
        </div>
      ) :
        (isChrome ?
          <iframe
            ref={pdfContainer}
            src="/documents/CV_short.pdf"
            className={loading ? 'pdf-viewer to-load' : 'pdf-viewer'}
            title="PDF Viewer"
            onLoad={() => setLoading(false)}
          />
          :
          <object ref={pdfContainer} data="/documents/CV_short.pdf" className={loading ? 'pdf-viewer to-load' : 'pdf-viewer'} type="application/pdf" onLoad={() => setLoading(false)}>
            <div>No online PDF viewer installed</div>
          </object>)
      }
    </div>
  );
}

export default CV;