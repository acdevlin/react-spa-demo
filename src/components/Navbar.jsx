import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <div className="navbar-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sample-input">Input</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* This broken link is included to test PageNotFound */}
          <li><Link to="/contact">Contact</Link></li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;