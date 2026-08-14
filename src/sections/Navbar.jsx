import { Link } from 'react-router-dom';
import SkratekLogo from '../../public/skratek.svg';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div className="container header-inner">
        <Link to="/">
          <div className="nav-left">
            <h3>Filip K</h3>
            <img src={SkratekLogo} alt="" />
          </div>
        </Link>

        <div className="nav-right">
          <Link to="/about">
            <h3>About</h3>
          </Link>
          <Link to="/projects">
            <h3>Projects</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
