import './App.css';

import { Route, Navigate, Routes, Link} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { pdfjs } from 'react-pdf';
import cv from './documents/CV.pdf'
import dissertation from  './documents/Dissertation.pdf'
import dissertationUI from './images/di-ui.png'

// preprocess
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


// main app
function App() {
  return(
    <HashRouter>

      <div>
        
        <br/>
        <header>
          <div class="header">
            <div class="title">
              Zach Upstone's Website
            </div>

            <div class="search-links">
              <Link to="/zach-upstone"> Home </Link> /
              <Link to="/cv"> CV </Link> /
              <Link to="/dissertation"> Dissertation </Link> /
              <Link to="/art"> Art </Link>
            </div>
          </div>
        </header>

        <br/>
        <hr/>

      </div>
      <body>

        <Routes>
          <Route exact path='/' element={<Navigate to='/zach-upstone' />} />

          <Route path='/zach-upstone' element={<Home/>} />

          <Route path='/cv' element={<CV/>} />

          <Route path='/dissertation' element={<Dissertation/>} />

          <Route path='/art' element={<Art/>} />

          <Route path='*' element={<NotFound/>} />
        </Routes>
      </body>
      </HashRouter>

  )
}


// subpages
function Home() {
  return (
    <div>
        Who is Zachary Upstone?
    </div>
  );
}

function CV() {
  return (
      <div>
        <a href={cv} download="Zachary Upstone CV">Zachary Upstone's CV Download</a>
        <br/>
        <br/>
        <embed src={cv} class="pdf-viewer" />
      </div>
  );
}

function Dissertation() {
  return (
    <div>
        <a href={dissertation} download="Zachary Upstone Dissertation">Zachary Upstone's Dissertation Download</a>
        <br/>
        <a href="https://github.bath.ac.uk/zu213/Dissertation-code" target="_blank">Zachary Upstone's Dissertation Repo</a>
        <br/>
        <div>
          MODIFIED ABSTRACT HERE
          <br />
          <img src={dissertationUI} alt="Dissertation UI"></img>
        </div>
    </div>
  );
}

function Art() {
  return (
    <div>
        zach upstone's art
    </div>
  );
}

function NotFound() {
  return (
    <div>
      Subpage not found!
    </div>
  )
}

export default App;
