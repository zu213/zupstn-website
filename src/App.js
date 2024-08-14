
// Normal imports
import { Route, Navigate, Routes, Link, HashRouter} from 'react-router-dom';
import './App.css';

// Page imports
import Art from './Art.js'

// document imports
import cv from './documents/CV.pdf'
import dissertation from  './documents/Dissertation.pdf'

// Image imports
import dissertationUI from './images/di-ui.png'

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
              <Link to="/gallery"> Gallery </Link>
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

          <Route path='/gallery' element={<Art/>} />

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
        I’m a recently graduated student from the University of Bath, Achieving a First class degree.
        I mainly have experience coding with ....

        During my university degree I completed a year long palcement at BSquare an IoT solution company 
        working both in software development and QA. While working at BSquare i gaine dexperience in..

        I also have expereicne in working as  abartender, mcdonalds and gardener. I also partook in cyber security camps.
        I am interested in art (expecially collage and spray painting) and gym
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
        <a href={dissertation} download="Zachary Upstone Dissertation">Download</a>
        &nbsp; | &nbsp;
        <a href="https://github.bath.ac.uk/zu213/Dissertation-code" target="_blank">Repo</a>
        <br/>
        <div>
          <div  class="inline-block">                  
            <img class="ui-image" src={dissertationUI} alt="Dissertation UI"></img>
          </div>
          <div  class="inline-block">
            Image Synthesis within the domain of art remains a difficult task due to its complex and human
            nature. Many current models either suffer from insufficient user control or inadequate output
            quality. This dissertation employs Reinforcement Learning Human Feedback (RLHF) as a
            solution to resolve both these problems simultaneously. A "feedback loop" model is presented
            that overlays an existing model. This allows for the refinement of output images by a user,
            thus improving control. This method also allows for the collection of losses from the user’s
            choices to allow for further updates to the underlying network. This effectively enables the
            model to learn from a user. The results produced by this dissertation show a quantitative
            improvement in user control over baseline models. They also show the qualitative success of
            the RLHF implementation. However, further analysis is required to confirm whether this RLHF
            implementation improves output quality.
          </div>
        </div>
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
