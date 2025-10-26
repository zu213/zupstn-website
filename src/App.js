
// Normal imports
import { useState } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

// Util import

// Page imports
import Art from './art/Art.js';
import Charts from './charts/Charts.js';
import CV from './cv/CV.js';
import Glossary from './glossary/Glossary.js';
import RelatedLinks from './glossary/RelatedLinks.js';
import Home from './home/Home.js';
import Me from './myself/Myself.js';
import ChromeContextControl from './projects/large/ChromeContextControl.js';
import Dissertation from './projects/large/Dissertation.js';
import DissertationTool from './projects/large/DissertationTool.js';
import ShortStorey from './projects/large/ShortStorey.js';
import Snowstorm from './projects/large/Snowstorm.js';
import SpotifyRoulette from './projects/large/SpotifyRoulette.js';
import SquarePaint from './projects/large/SquarePaint.js';
import TrafficSimulator from './projects/large/TrafficSimulator.js';
import UnicodeChess from './projects/large/UnicodeChess.js';
import ZachLang from './projects/large/ZachLang.js';
import Projects from './projects/Projects.js';
import { FruitLips, FruitLips2, Squares, LLMCompare } from './submodules/submodules.js';
import { BackButton, BackButtonProvider } from './util/BackButtons.js';
import { BreadcrumbProvider, DropBreadcrumbs } from './util/Breadcrumbs.js';
import NotFound from './util/NotFound.js';

// main app
function App() {

  const [mask, setMask] = useState(false);
  const [maskItem, setMaskItem] = useState(null);

  const noFooter = ['/', '/me', '/gallery'];

  const location = useLocation();

  const largeProjects = [
    {route: 'dissertation', page: Dissertation},
    {route: 'unicode-chess', page: UnicodeChess},
    {route: 'spotify-roulette', page: SpotifyRoulette},
    {route: 'snowstorm', page: Snowstorm},
    {route: 'chrome-context-control', page: ChromeContextControl},
    {route: 'traffic-simulator', page: TrafficSimulator},
    {route: 'square-paint', page: SquarePaint},
    {route: 'shortstorey', page: ShortStorey},
    {route: 'zach-lang', page: ZachLang}
  ];

  const hideMask =() => {
    setMask(false);
    maskItem.classList.remove('overlay-mask');
    setMaskItem(null);
  };

  function isIOS() {
    return /iP(hone|od|ad)/.test(navigator.userAgent);
  }

  const displayMask = (e) =>{
    setMask(true);
    e.target.classList.add('overlay-mask');
    setMaskItem(e.target);
  };


  return(
    <div id="all" className='app'>
      {mask && <div className='overlay' onClick={hideMask}></div>}
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
            <Route path='/related-links' element={<RelatedLinks/>} />
            {largeProjects.map(project => 
              <Route path={`/${project.route}`} element={<project.page displayMask={displayMask} isIOS={isIOS} />} />
            )}
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </BackButtonProvider>
      </BreadcrumbProvider>
      <div className={`footer ${noFooter.includes(location.pathname) ? 'none' : ''}`}>
        <hr />
        <div>
          2025 Zachary Upstone. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
