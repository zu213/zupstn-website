import { useEffect, useRef, useState } from 'react';
import './Disco.css';


function Disco() {

  const discoContainer = useRef(null);
  const [discoStarted, setDiscoStarted] = useState(false);

  function generateColour() {
    // we want a colour in a specific range i.e. the total is at least ff but lower than like dd + dd + dd
    const topValue = 230 * 3;
    const bottomValue = 256;
    const totalRGB = Math.floor(Math.random() * (topValue - bottomValue + 1) + bottomValue);

    const rRational = Math.random();
    const gRational = Math.random();
    const bRational = Math.random();

    const totalRational = rRational + gRational + bRational;

    const r = Math.floor((rRational / totalRational) * totalRGB);
    const g = Math.floor((gRational / totalRational) * totalRGB);
    const b = Math.floor((bRational / totalRational) * totalRGB);
    return `rgb(${r}, ${g}, ${b})`;
  }


  useEffect(() => {

    var colour = 0;
    const discoColours = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    const generatedDiscoColours = [];
    for (var i = 0; i < 100; i++) {
      generatedDiscoColours.push(generateColour());
    }

    setInterval(() => {
      if(!discoContainer.current) return;
      discoContainer.current.style.backgroundColor = generatedDiscoColours[colour];
      colour = (colour + 1) % generatedDiscoColours.length;
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
