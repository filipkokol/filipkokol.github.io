import { NavLink } from 'react-router-dom';

import './Navbar.scss';
import SkratekLogo from '../assets/img/svgs/skratek.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="container header-inner upper">
        <NavLink to="/">
          <div className="nav-left jump-hover">
            <h3>Filip</h3>
            <img className="skratek" src={SkratekLogo} alt="Tiny dwarf" />
            <h3>K.</h3>
          </div>
        </NavLink>

        <div className="nav-right">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'underlined' : 'underlined-hover')}>
            <h3 className="">About</h3>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'underlined' : 'underlined-hover')}>
            <h3 className="">Projects</h3>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
