import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <header className="theme-light text-center-desktop text-center-mobile">
        <div className="container-text">
          <h1>About Page</h1>
        </div>
      </header>
      <section className="w-820px">
        <p>This app is awesome!</p>
        <br/>
        <p>This is a link to the <Link to="/">Home</Link> page.</p>
      </section>
    </>
  );
}

export default About;