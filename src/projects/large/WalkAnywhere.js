
import mainroute from './media/walkanywhere_mainroute.png';
import routes from './media/walkanywhere_routes.png';
import createroute from './media/walkanywhere_createroute.png';
import steps from './media/walkanywhere_steps.png';

function WalkAnywhere(props) {

  return (
    <div className='project-page'>
      <header className='page-header'>WalkAnywhere</header>
      <div>
        <a href="https://github.com/zu213/walkanywhere" className="small-link" target="_blank" rel="noreferrer">Repository</a>
        <br/>
      </div>

      <div>
        <div className='quarter-inline-structure'>
          <figure onClick={() => props.displayMask(mainroute)}>
            <img src={mainroute} alt="Main route progress screen" />
            <figcaption>Figure: Current journey progress</figcaption>
          </figure>
        </div>
        <div className='quarter-inline-structure'>
          <figure onClick={() => props.displayMask(routes)}>
            <img src={routes} alt="Saved routes list" />
            <figcaption>Figure: Saved routes list</figcaption>
          </figure>
        </div>
        <div className='quarter-inline-structure'>
          <figure onClick={() => props.displayMask(createroute)}>
            <img src={createroute} alt="Create route map view" />
            <figcaption>Figure: Creating a new route</figcaption>
          </figure>
        </div>
        <div className='quarter-inline-structure'>
          <figure onClick={() => props.displayMask(steps)}>
            <img src={steps} alt="Step history view" />
            <figcaption>Figure: 30-day step history</figcaption>
          </figure>
        </div>
      </div>

      <div className='snow-text'>
        An iOS app for creating custom walking routes and tracking your real-world progress using your daily step count.
        You plan a route by tapping start and end points on a map. next, Apple Maps calculates the walking path, falling back
        to a straight-line connection where directions aren't available. Your daily steps from&nbsp;
        <b>HealthKit</b> then automatically advance your position along the route.

        <br /><br />

        The UI is built entirely in <b>SwiftUI</b> with an interactive <b>MapKit</b> map at its centre.
        Route data and walking progress are persisted locally with <b>SwiftData</b>. You can save multiple routes,
        star one as your main route for quick access on the home screen, and review your step history over the past 30 days.

        <br /><br />

        Key features include automatic route calculation with hybrid fallback routing, real-time progress bars,
        a collapsible drawer showing distance and step estimates, and a full route management system for editing,
        deleting, and reordering saved routes.
      </div>
    </div>
  );
}

export default WalkAnywhere;
