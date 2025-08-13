import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BackButtons.css';

export function BackButton() {
  let navigate = useNavigate();
  const location = useLocation();

  const defaultBackButton = useCallback(() => (
    <button id="backButton" className="backButton" onClick={() => navigate(-1)}>Back</button>
  ), [navigate]);
  const defaultSmallBackButton = useCallback(() => (
    <button id="smallBackButton" className="smallBackButton" onClick={() => navigate(-1)}> &#60; </button>
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
  }, [location.pathname, defaultBackButton, defaultSmallBackButton]);

  return (
    <div>
      {backButton}
      {smallBackButton}
    </div>
  );

}

