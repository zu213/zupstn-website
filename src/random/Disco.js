import { useEffect, useRef, useState } from 'react';
import './Disco.css';


function Disco() {

  const discoContainer = useRef(null);
  const [discoStarted, setDiscoStarted] = useState(false);


  useEffect(() => {

    var colour = 0;
    const discoColours = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];


    setInterval(() => {
      if(!discoContainer.current) return;
      discoContainer.current.style.backgroundColor = discoColours[colour];
      colour = (colour + 1) % discoColours.length;
    }, 50);
  }, []);

  return (
    <div className={`disco-page ${discoStarted ? 'started' : ''}`}>
      {discoStarted ?
        <div ref={discoContainer} className='disco-container'></div>
        : <div className='disco-start-container'>
          <button className='disco-start-button' onClick={() => setDiscoStarted(true)}>Start Disco</button>
        </div>
      }

    </div>
  );
}

export default Disco;
