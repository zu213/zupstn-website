
// Normal imports
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Util import

// Page imports
import Art from './art/Art.js';
import Charts from './charts/Charts.js';
import CV from './cv/CV.js';
import Glossary from './glossary/Glossary.js';
import Home from './home/Home.js';
import Me from './myself/Myself.js';
import DissertationTool from './projects/large/DissertationTool.js';
import Projects from './projects/Projects.js';
import { FruitLips, FruitLips2, Squares, LLMCompare } from './submodules/submodules.js';
import { BackButton, BackButtonProvider } from './util/BackButtons.js';
import { BreadcrumbProvider, DropBreadcrumbs } from './util/Breadcrumbs.js';
import NotFound from './util/NotFound.js';

// main app
function App() {

  return(
    <div id="all" className='app'>
      <BreadcrumbProvider>
        <BackButtonProvider>
          <BackButton />
          <div className='crumb-holder'>
            <DropBreadcrumbs />
          </div>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/me' element={<Me/>} />
            <Route path='/cv' element={<CV/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/gallery' element={<Art/>} />
            <Route path='/charts' element={<Charts/>} />
            <Route path='/dissertation-tool' element={<DissertationTool/>} />
            <Route path='/fruit-lips' element={<FruitLips/>} />
            <Route path='/fruit-lips2' element={<FruitLips2/>} />
            <Route path='/368squares' element={<Squares/>} />
            <Route path='/llm-compare' element={<LLMCompare/>} />
            <Route path='/glossary' element={<Glossary/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </BackButtonProvider>
      </BreadcrumbProvider>
    </div>
  );
}

export default App;
