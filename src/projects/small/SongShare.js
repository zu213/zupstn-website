import songsharePNG from './media/songshare2.png';
import songshare from './media/songshare2.webp';

function SongShare(props) {
  return (
    <div onClick={() => props.displayMask(songshare)}>
      <div>
        <figure>
          <picture>
            <source srcSet={songshare} type="image/webp" />
            <img src={songsharePNG} alt="Fruit lips webpage" />
          </picture>
          <figcaption>Figure: Songshare App</figcaption>
        </figure>
      </div>
      <div className='small-repo-link'>
        <a href="https://github.com/zu213/square-paint" className="small-link" target="_blank" rel="noreferrer">Repository</a>&nbsp;
      </div>
    
      <div>
        A <i>Swift</i> based app project for sharing Spotify songs to other nearby app users. It uses <i>Multipeer Connectivity</i> to detect other users, then 
        uses the songs URI to send a deeplinking push notification. Also integrates into Spotify's share menu.
      </div>

      <div className='tag-holder'>
        <span className='tag orange'>Swift</span><span className='tag blue'>Multipeer Connectivity</span>
      </div>
    </div>

  );
}

export default SongShare;