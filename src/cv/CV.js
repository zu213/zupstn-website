// Image imports
import download from '../icons/white-download.png'

function CV() {
    return (
        <div className='cvPage'>
          <br/>
          <a className="smallLink" href="/documents/CV_short.pdf" download="Zachary Upstone CV">
            Download <img className="downloadImage" src={download} alt="Download"></img>
          </a>
          &nbsp; | &nbsp;
          <a className="smallLink" href="/documents/CV.pdf" download="Zachary Upstone CV">
            CV long <img className="downloadImage" src={download} alt="Download"></img>
          </a>
          <br/>
          <br/>
          <div className='tooSmallCV'> Screen size is too small to display pdf, download to view.</div>
          <div className='safariCV'> Safari doesn't allow proper display of pdfs.</div>
  
          <object data="/documents/CV_short.pdf" className="pdf-viewer" type="application/pdf">
            <div>No online PDF viewer installed</div>
          </object>
        </div>
    );
}

export default CV;