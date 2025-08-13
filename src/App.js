
// Normal imports
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Util import
import { BreadcrumbProvider, DropBreadcrumbs } from './util/Breadcrumbs.js';
import { BackButton } from './util/BackButtons.js';
import { FruitLips, FruitLips2, Squares, LLMCompare } from './submodules/submodules.js';

// Page imports
import Art from './art/Art.js';
import Charts from './charts/Charts.js';
import Projects from './projects/Projects.js';
import Me from './myself/Myself.js';
import CV from './cv/CV.js';
import Glossary from './glossary/Glossary.js';
import DissertationTool from './projects/large/DissertationTool.js';
import Home from './home/Home.js';
import NotFound from './util/NotFound.js';

// main app
function App() {

  return(
    <div id="all" className='app'>
      <BreadcrumbProvider>
        <div className='crumbHolder'>
          <BackButton />
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
      </BreadcrumbProvider>
    </div>
  );
}

export default App;
