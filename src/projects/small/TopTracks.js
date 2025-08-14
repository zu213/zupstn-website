
import topTracks from './media/toptracks.png';

function TopTracks(props) {
  return (
    <div>
      <div>
        <figure onClick={props.displayMask}>
          <img className='topTracksImage' src={topTracks} alt="top tracks graphic"/>
          <figcaption>Figure: Graphic to display user's top tracks</figcaption>
        </figure>
      </div>
      <div className='smallRepoLink'>
        <a href="https://github.com/zu213/top-tracks" className="small-link" target="_blank" rel="noreferrer">Repository</a>
      </div>
    
     
      <div>
        A Vercel deployed enpoint to display my Spotify top tracks as an SVG.
        <br />
        <br />
        This allows me to display them in markdown files easily such as on my Github profile page. It utilises the Spotify API and Vercel.
      </div>
    </div>

  );
}

export default TopTracks;