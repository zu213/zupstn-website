
import swiperight from './media/swipedelete_right.png';

function SwipeDelete(props) {
  return (
    <div>
      <div className='small-repo-link'>
        <a href="https://github.com/zu213/swipe-delete-app" className="small-link" target="_blank" rel="noreferrer">Repository</a>&nbsp;
      </div>

      <div className='small-phone-img small' onClick={() => props.displayMask(swiperight)}>
        <figure>
          <picture>
            <img src={swiperight} alt="Swipe left to delete" />
          </picture>
          <figcaption>Figure: Swipe left to delete</figcaption>
        </figure>
      </div>

      <div>
        A <i>SwiftUI</i> app for quickly clearing out your photo library. Swipe right to keep a photo,
        swipe left to mark it for deletion. Photos are batched and removed in one go on confirmation.
      </div>

      <div className='tag-holder'>
        <span className='tag orange'>Swift</span><span className='tag blue'>SwiftUI</span>
      </div>
    </div>
  );
}

export default SwipeDelete;
