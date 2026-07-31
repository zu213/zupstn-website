import { useEffect, useRef } from 'react';
import './Disco.css';


function Disco() {

  const discoContainer = useRef(null);

  useEffect(() => {

    var colour = 0;
    const discoColours = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];


    setInterval(() => {
      if(!discoContainer.current) return;
      discoContainer.current.style.backgroundColor = discoColours[colour];
      colour = (colour + 1) % discoColours.length;
    }, 200);
  }, []);

  return (
    <div className='disco-page'>
      <div ref={discoContainer} className='disco-container'>
      </div>

    </div>
  );
}

export default Disco;
