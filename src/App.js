import './App.css';

import { Route, Navigate, Routes, Link} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

function App() {
  return(
  <HashRouter>

    <div>
      <header>
        <div class="title">
          Zach Upstone's Website
        </div>

        <div class="search-links">
          <Link to="/zach-upstone"> Home </Link> /
          <Link to="/cv"> CV </Link> /
          <Link to="/dissertation"> Dissertation </Link> /
          <Link to="/art"> Art </Link>
        </div>
      </header>

    </div>
    <Routes>
      <Route exact path='/' element={<Navigate to='/zach-upstone' />} />

      <Route path='/zach-upstone' element={<Home/>} />

      <Route path='/cv' element={<CV/>} />

      <Route path='/dissertation' element={<Dissertation/>} />

      <Route path='/art' element={<Art/>} />

      <Route path='*' element={<NotFound/>} />
    </Routes>
  </HashRouter>
  )
}



function Home() {
  return (
    <div class="body">
        Stuff about zach upstone
    </div>
  );
}

function CV() {
  return (
    <div class="body">
        zach upstone's CV
    </div>
  );
}

function Dissertation() {
  return (
    <div class="body">
        zach upstone's dissertation
    </div>
  );
}

function Art() {
  return (
    <div class="body">
        zach upstone's art
    </div>
  );
}

function NotFound() {
  return (
    <div class="body">
      Subpage not found!
    </div>
  )
}

export default App;
