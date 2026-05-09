import litterPickMap from './media/litterpickmap.png';
import litterPickMapPNG from './media/litterpickmap.webp';
import litterPickPicked from './media/litterpickmarkpicked.png';
import litterPickPickedPNG from './media/litterpickmarkpicked.webp';

function BerkoPick(props) {

  return (
    <div className='project-page'>
      <header className='page-header'>Berko Litter Pick</header>
      <div>
        <a href="https://github.com/zu213/litter-pick" className="small-link" target="_blank" rel="noreferrer">Repository</a>
        <br/>
      </div>
      <div>
        <div className='project-inline-structure'>
          <figure onClick={() => props.displayMask(litterPickMap)}>
            <picture>
              <source srcSet={litterPickMap} type="image/webp" />
              <img src={litterPickMapPNG} alt="joining screen" />
            </picture>
            <figcaption>Figure: Main map page to view/select roads</figcaption>
          </figure>
        </div>
        <div className='project-inline-structure'>
          <figure onClick={() => props.displayMask(litterPickPicked)}>
            <picture>
              <source srcSet={litterPickPicked} type="image/webp" />
              <img src={litterPickPickedPNG} alt="guessing screen"/>
            </picture>
            <figcaption>Figure: Detailed card view of a road</figcaption>
          </figure>
        </div>
      </div>
      <div className='snow-text'>
        I built a full-stack CRUD web application for a community litter-picking platform. 
        Users can register, volunteer to clean specific roads, see who else is signed up, 
        and mark roads as picked once completed. The system tracks volunteer limits and 
        records when each road was last maintained.

        <br /><br />

        The frontend is built entirely with <b>Vanilla JavaScript</b> and integrates&nbsp;
        <b>Leaflet</b>, <b>OpenStreetMap</b>, and <b>GeoJSON</b> to display interactive 
        road data on a dynamic map interface.

        <br /><br />

        The backend is built with <b>FastAPI</b> (Python), using <b>SQLite</b> for 
        persistence and <b>Tortoise ORM</b> to manage relational data. 
        Geospatial data is generated using <b>GeoPandas</b> and the <b>Overpass API</b>, 
        allowing road data to be dynamically retrieved and rendered for specific areas.
      </div>
    </div>
  );
}

export default BerkoPick;