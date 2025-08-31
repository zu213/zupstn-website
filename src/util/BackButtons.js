import { useState, useEffect, useCallback, useContext, createContext } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import './BackButtons.css';

const BackButtonContext = createContext();

export function BackButtonProvider({ children }) {
  const [backButtonDisabled, setBackButtonDisabled] = useState(false);
  return (
    <BackButtonContext.Provider value={{ backButtonDisabled, setBackButtonDisabled }}>
      {children}
    </BackButtonContext.Provider>
  );
}

export function useBackButton() {
  return useContext(BackButtonContext);
}

export function BackButton() {
  let navigate = useNavigate();
  const location = useLocation();
  const { backButtonDisabled } = useBackButton();

  const defaultBackButton = useCallback(() => (
    <button id="backButton" className="back-button" onClick={() => navigate(-1)}>Back</button>
  ), [navigate]);
  const defaultSmallBackButton = useCallback(() => (
    <div className='small-button-container'>
      {document.referrer.startsWith(window.location.origin) ? 
        <button id="smallBackButton" className="small-back-button" onClick={() => navigate(-1)}> &#60; </button>
        :<a className='home-link small-link' href='/'>Home</a>
      }
    </div>
  ), [navigate]);

  var [backButton, setBackButton] = useState(defaultBackButton);
  var [smallBackButton, setSmallBackButton] = useState(defaultSmallBackButton);

  // listeners 
  useEffect(() => {
    if(location.pathname ===  '/zach-upstone' || location.pathname ===  '/' ) {
      setBackButton(null);
      setSmallBackButton(null);
    } else {
      setBackButton(defaultBackButton);
      setSmallBackButton(defaultSmallBackButton);
    }
  }, [location.pathname, defaultBackButton, defaultSmallBackButton, backButtonDisabled]);

  return !backButtonDisabled ?
    (<div>
      {backButton}
      {smallBackButton}
    </div>)
    : null;

}

