import { useState } from 'react';

// Custom hook for mask logic
export function useMask() {
  const [maskItem, setMaskItem] = useState(null);

  const hideMask = () => {
    setMaskItem(null);
  };

  const displayMask = (item) => {
    setMaskItem(item);
  };

  const maskFormat = () => {
    if (typeof maskItem !== 'string') return null;
    if (maskItem.endsWith('.webp') || maskItem.endsWith('.png') || maskItem.endsWith('.jpg')) return 'picture';
    if (maskItem.endsWith('.webm') || maskItem.endsWith('.mp4')) return 'video';
    return null;
  };

  function MaskOverlay() {
    if (!maskItem) return null;

    const format = maskFormat();

    return (
      <div className="overlay-container">
        <div className="overlay" onClick={hideMask}>
          <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#c8c8c8ff"/>
          </svg>
        </div>

        {format === 'picture' && (
          <img src={maskItem} alt="overlay" className="overlay-content" />
        )}

        {format === 'video' && (
          <video
            className="overlay-content"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={maskItem} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    );
  }

  return {
    displayMask,
    MaskOverlay
  };
}
