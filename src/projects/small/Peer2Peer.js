
import peer2peerPNG from './media/peer.png';
import peer2peer from './media/peer.webp';

function Peer2Peer(props) {
  return (
    <div>
      <div>
        <figure onClick={props.displayMask}>
          <picture>
            <source srcSet={peer2peer} type="image/webp" />
            <img src={peer2peerPNG} alt="Peer in action" />
          </picture>
          <figcaption>Figure: Messaging via a setup peer connection</figcaption>
        </figure>
      </div>
      <div className='small-repo-link'>
        <a href="https://github.com/zu213/peer" className="small-link" target="_blank" rel="noreferrer">Repository</a>
      </div>
    
     
      <div>
        A js project that utilises <b>Electron</b> apps that setup there own server so they can be message directly.
        <br />
        <br />
        Each user can setup there server and is given a port number. This port can then be accessed by other user's to send them messages bypassing the main server.
      </div>
    </div>

  );
}

export default Peer2Peer;