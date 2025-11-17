
import topTracksPNG from './media/toptracks.png';
import topTracks from './media/toptracks.webp';


function TopTracks(props) {
  return (
    <div onClick={() => props.displayMask(topTracks)}>
      <div>
        <figure>
          <picture className='top-tracks-image'>
            <source srcSet={topTracks} type="image/webp" />
            <img src={topTracksPNG} alt="top tracks graphic" />
          </picture>
          <figcaption>Figure: Graphic to display user's top tracks</figcaption>
        </figure>
      </div>
      <div className='small-repo-link'>
        <a href="https://github.com/zu213/top-tracks" className="small-link" target="_blank" rel="noreferrer">Repository</a>
      </div>
    
     
      <div>
        A Vercel deployed enpoint to display my Spotify top tracks as an SVG.
        <br />
        <br />
        This allows me to display them in markdown files easily such as on my Github profile page. It utilises the Spotify API and Vercel.
      </div>

      <div className='tag-holder'>
        <span className='tag orange'>Vercel</span><span className='tag yellow'>Vanilla JS</span>
      </div>
    </div>

  );
}

export default TopTracks;