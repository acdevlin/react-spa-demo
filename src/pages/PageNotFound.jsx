import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <header className="theme-light text-center-desktop text-center-mobile">
        <div className="container-text">
          <h1>Page Not Found 😭</h1>
        </div>
      </header>

      <section class="w-820px">
        <h3>Sorry, this page does not exist.</h3>
      </section>
    </>
  );
}

export default PageNotFound;