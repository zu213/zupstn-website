import './WalkAnywhereApp.css';
import androidCreateroute from '../projects/large/media/walkanywhere_android_createroute.png';
import androidMainroute from '../projects/large/media/walkanywhere_android_mainroute.png';
import androidRoutes from '../projects/large/media/walkanywhere_android_routes.png';
import androidSteps from '../projects/large/media/walkanywhere_android_steps.png';
import createroute from '../projects/large/media/walkanywhere_createroute.png';
import mainroute from '../projects/large/media/walkanywhere_mainroute.png';
import routes from '../projects/large/media/walkanywhere_routes.png';
import steps from '../projects/large/media/walkanywhere_steps.png';

// TODO: replace with a real contact address before submitting to Play
const CONTACT_EMAIL = 'hcazenotspu+walkanywhere@gmail.com';
const LAST_UPDATED = '16 October 2026';

const screens = [
  { caption: 'Current journey', ios: mainroute, android: androidMainroute },
  { caption: 'Saved routes', ios: routes, android: androidRoutes },
  { caption: 'Create a route', ios: createroute, android: androidCreateroute },
  { caption: 'Step history', ios: steps, android: androidSteps },
];

function WalkAnywhereApp() {
  return (
    <div className='wa-app'>
      <nav className='wa-nav'>
        <span className='wa-logo'>WalkAnywhere</span>
        <div className='wa-nav-links'>
          <a href='#/walkanywhere-app#features' onClick={scrollTo('features')}>Features</a>
          <a href='#/walkanywhere-app#privacy' onClick={scrollTo('privacy')}>Privacy</a>
          <a href='#/walkanywhere-app#contact' onClick={scrollTo('contact')}>Contact</a>
        </div>
      </nav>

      <header className='wa-hero'>
        <h1>Walk anywhere, from wherever you are.</h1>
        <p>
          Plan a walking route between any two places, then let your everyday steps carry you along it.
          Walk Land&apos;s End to John o&apos; Groats without leaving town.
        </p>
      </header>

      <section id='features' className='wa-section'>
        <h2>Screenshots</h2>
        <h3 className='wa-platform'>iOS</h3>
        <div className='wa-screens'>
          {screens.map(s => (
            <figure key={s.caption}>
              <img src={s.ios} alt={`iOS – ${s.caption}`} />
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
        <h3 className='wa-platform'>Android</h3>
        <div className='wa-screens'>
          {screens.map(s => (
            <figure key={s.caption}>
              <img src={s.android} alt={`Android – ${s.caption}`} />
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className='wa-features'>
          <div className='wa-card'>
            <h4>Plan any route</h4>
            <p>Search for a place or tap the map to set a start and end point. Walking directions are calculated for you.</p>
          </div>
          <div className='wa-card'>
            <h4>Steps move you forward</h4>
            <p>Your daily step count advances your position along the route, so every walk counts towards the journey.</p>
          </div>
          <div className='wa-card'>
            <h4>Track your history</h4>
            <p>See daily step totals, broken down by route, and how close you are to finishing each one.</p>
          </div>
        </div>
      </section>

      <section id='privacy' className='wa-section wa-policy'>
        <h2>Privacy Policy</h2>
        <p className='wa-muted'>Last updated: {LAST_UPDATED}</p>

        <p>
          This policy explains what data the WalkAnywhere app for Android and iOS (&quot;the app&quot;) uses, why, and where it goes.
          The short version: your step data stays on your device, there are no accounts, no ads and no analytics.
        </p>

        <h3>Step and activity data</h3>
        <p>
          On Android, the app uses <b>Health Connect</b> and the device&apos;s activity recognition sensor. With your
          permission it:
        </p>
        <ul>
          <li><b>Reads steps</b> (READ_STEPS) from Health Connect to calculate your progress along your routes and to show your daily step history.</li>
          <li><b>Writes steps</b> (WRITE_STEPS) counted by your phone&apos;s step sensor into Health Connect, so your walking is recorded even if you don&apos;t use another fitness app.</li>
          <li>Uses <b>activity recognition</b> (ACTIVITY_RECOGNITION) to count steps on the device.</li>
        </ul>
        <p>
          On iOS, the app reads your step count from <b>Apple HealthKit</b> for the same purpose. It does not write any
          data to HealthKit.
        </p>
        <p>
          Step data is processed only on your device. It is never sent to us or to any third party, never used for
          advertising, and never sold. Data obtained from Health Connect or HealthKit is used only to provide the
          route-progress and step-history features described above.
        </p>

        <h3>Location and route data</h3>
        <p>
          The app does not access your device&apos;s GPS location. When you create a route, the place names you search
          for and the coordinates of the start and end points you choose are sent to <b>Google Maps Platform</b> (Places
          and Directions services) on Android, or to <b>Apple Maps</b> on iOS, in order to find places and calculate
          a walking route. These requests are handled under&nbsp;
          <a href='https://policies.google.com/privacy' target='_blank' rel='noreferrer'>Google&apos;s Privacy Policy</a> and&nbsp;
          <a href='https://www.apple.com/legal/privacy/' target='_blank' rel='noreferrer'>Apple&apos;s Privacy Policy</a> respectively.
        </p>
        <p>Your saved routes and walking progress are stored locally on your device.</p>

        <h3>Notifications</h3>
        <p>
          On iOS, the app asks for permission to show notifications so it can congratulate you when you complete a route.
          These notifications are generated on your device and contain only the route&apos;s name and step count.
        </p>

        <h3>What we don&apos;t collect</h3>
        <ul>
          <li>No accounts, names, email addresses or other personal identifiers.</li>
          <li>No analytics, tracking or advertising SDKs.</li>
          <li>No servers of our own. We have no copy of your data.</li>
        </ul>

        <h3>Backups</h3>
        <p>
          If you have device backup turned on (Google backup on Android, iCloud on iOS), your operating system may include
          the app&apos;s saved routes in that backup. Your platform provider manages this, not us, and you can turn it off in your
          device settings.
        </p>

        <h3>Your control over your data</h3>
        <ul>
          <li>You can grant or revoke step permissions at any time in Health Connect (Android) or the Health app (iOS).</li>
          <li>You can turn off notifications at any time in your device settings.</li>
          <li>You can delete individual routes inside the app.</li>
          <li>Uninstalling the app removes all of its locally stored data. Steps the app wrote to Health Connect can be deleted from the Health Connect app.</li>
        </ul>
        <p>
          Because we don&apos;t receive or store any of your data, there is nothing for us to access or delete on your behalf.
          All app data lives on your device and is removed when you delete it or uninstall the app.
        </p>

        <h3>Children</h3>
        <p>The app is not directed at children under 13 and does not knowingly collect data from them.</p>

        <h3>Changes</h3>
        <p>If this policy changes, the updated version will be posted on this page with a new &quot;last updated&quot; date.</p>
      </section>

      <section id='contact' className='wa-section'>
        <h2>Contact &amp; support</h2>
        <p>
          Questions or bug reports: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p>
          <a href='https://github.com/zu213/walkanywhere-android' target='_blank' rel='noreferrer'>Android source</a> ·&nbsp;
          <a href='https://github.com/zu213/walkanywhere-ios' target='_blank' rel='noreferrer'>iOS source</a>
        </p>
      </section>

      <footer className='wa-footer'>© 2026 Zachary Upstone</footer>
    </div>
  );
}

// HashRouter owns the URL hash, so in-page anchors scroll manually
function scrollTo(id) {
  return e => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
}

export default WalkAnywhereApp;
