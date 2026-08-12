import '../stylesheets/Petite.css';


const PageNotFound = () => {
  return (
    <>
      <header className="theme-light text-center-desktop text-center-mobile">
        <div className="container-text">
          <h1>404 - Page Not Found 😭</h1>
        </div>
      </header>

      <section class="w-820px">
        <p>Sorry, this page does not exist.</p>
      </section>
    </>
  );
}

export default PageNotFound;