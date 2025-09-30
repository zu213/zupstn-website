import profilePagePNG from './media/profilePage.png';
import profilePage from './media/profilePage.webp';
import ratingsPagePNG from './media/ratingsPage.png';
import ratingsPage from './media/ratingsPage.webp';
import storiesPagePNG from './media/storiesPage.png';
import storiesPage from './media/storiesPage.webp';

function ShortStorey(props) {
  return (
    <div>
      <div>
        <a href="https://github.com/zu213/shortstorey-full" className="small-link" target="_blank" rel="noreferrer">Repository</a>
        <br/>
      </div>
      <br />

      <div className='tight-project-inline-structure laptop'>
        <figure onClick={props.displayMask}>
          <picture>
            <source srcSet={storiesPage} type="image/webp" />
            <img src={storiesPagePNG} alt="Stories Page" />
          </picture>
          <figcaption>Figure: Main stories navigation page</figcaption>
        </figure>
      </div>
      <div className='tight-project-inline-structure laptop'>
        <figure onClick={props.displayMask}>
          <picture>
            <source srcSet={ratingsPage} type="image/webp" />
            <img src={ratingsPagePNG} alt="Ratings page" />
          </picture>
          <figcaption>Figure: Page to review where ratings came from</figcaption>
        </figure>
      </div>
      <div className='tight-project-inline-structure laptop'>
        <figure onClick={props.displayMask}>
          <picture>
            <source srcSet={profilePage} type="image/webp" />
            <img src={profilePagePNG} alt="Profile page" />
          </picture>
          <figcaption>Figure: Profile page including stories and account details</figcaption>
        </figure>
      </div>

      <div className='storey-text'>
          A complete <b>CRUD</b> app for sharing short storeys and rating them. Includes profile creation, story creation, story viewing and a rating system which is dynamic, A user's rating is weighted based on how they are rated themselves making the backend more complex and require propagating updates.


        <br/>
        <br/>
        <div>Thet tech stack is as follows: </div>
        <div className='inline-list'>
          <h4>Frontend</h4>
          <ul className='snowList'>
            <li>
              <b>Vue</b> - Tidy, modern and easy to use framework, working with vite, also allowed me to hit the same port for the backend with <i>proxy</i> config.
            </li>
            <li>
              <b>scss</b> - Modern extension of CSS allowing nesting and mixins for easier management of style in larger projects.
            </li>
            <li>
              <b>Lint</b> - Useful automated rule checker for keeping code clean.
            </li>
            <li>
              <b>Pinia</b> - Used for session storage management, helpful with managing tokens on user side.
            </li>
          </ul>
        </div>
        <div className='inline-list'>
          <h4>Backend</h4>
          <ul className='snowList'>
            <li>
              <b>Typescript</b> - Types help make the code more secure and avoid errors occuring in larger code bases.
            </li>
            <li>
              <b>Prisma</b> - Database software that allows relations within tables to be easily defined.
            </li>
            <li>
              <b>Jest</b> - Testing software used here for checking the servers endpoints.
            </li>
            <li>
              <b>Fastify</b> - Main server software used with Short Storey. 
            </li>
            <li>
              <b>bcrypt</b> - Password encryption tool to make sure passwords aren't stored in plain text.
            </li>
            <li>
              <b>jwt</b> - Backend token management service, for generating and checking requests authentification.
            </li>
          </ul>
        </div>

      </div>
      
    </div>

  );
}

export default ShortStorey;