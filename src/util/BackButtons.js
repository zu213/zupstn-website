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
    <button id="backButton" className="backButton" disabled={backButtonDisabled} onClick={() => navigate(-1)}>Back</button>
  ), [navigate]);
  const defaultSmallBackButton = useCallback(() => (
    <button id="smallBackButton" className="smallBackButton" disabled={backButtonDisabled} onClick={() => navigate(-1)}> &#60; </button>
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

