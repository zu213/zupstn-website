
import listview from './media/srank_listview.png';

function SRank(props) {
  return (
    <div>
      <div className='small-phone-img large' onClick={() => props.displayMask(listview)}>
        <figure>
          <picture>
            <img src={listview} alt="S Rank list view" />
          </picture>
          <figcaption>Figure: Ranked list view</figcaption>
        </figure>
      </div>

      <div className='small-repo-link' onClick={e => e.stopPropagation()}>
        <a href="https://github.com/zu213/s-rank" className="small-link" target="_blank" rel="noreferrer">Repository</a>&nbsp;
      </div>

      <div>
        A <i>Swift</i> iOS app for building ranked lists of anything — games, movies, restaurants.
        Items can be organised into nested folders like a file system.
      </div>

      <div className='tag-holder'>
        <span className='tag orange'>Swift</span><span className='tag blue'>SwiftUI</span>
      </div>
    </div>
  );
}

export default SRank;
