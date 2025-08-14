import trafficGif from './media/traffic.gif';
function TrafficSimulator(props) {

  return (
    <div>
      <div>
        <a href="https://github.com/zu213/traffic-sim" className="small-link" target="_blank" rel="noreferrer">Repo</a> |&nbsp;
        <a href="/exes/traffic.exe" className="small-link" download>Windows Download</a>
        <br/>
      </div>
      <div className='tightProjectInlineStructure left-align topPadding indentMobile'>
          A traffic simulator implemented in C utilising GDI for graphics display.
        <br />
        <br/>
          Users can input the number of entrances/exits the cars use, the rate of arrival at each entrance 
          and how many cars are let through with each light phase. As the simulator runs you can see if cars build
          up at one particular entrance and adjust how many cars should be let through accordingly.
        <br />
        <br />
          It utilises linking with <b>libwinpthread-1.dll</b> and management of C files by use of header files, 
          road length is fixed by default but can be modified manually and then the code re compiled using&nbsp;  
        <b>gcc</b>.
      </div>
      <div className='largeProjectInlineStructure'>
        <figure onClick={props.displayMask} className='aspectClass'>
          <img src={trafficGif} alt="traffic gif"/>
          <figcaption>Figure: Gif of the Traffic Simulator running</figcaption>
        </figure>
      </div>
    </div>

  );
}

export default TrafficSimulator;