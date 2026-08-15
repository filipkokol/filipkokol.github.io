import { NavLink } from 'react-router-dom';

import './Navbar.scss';

import SkratekLogo from '../../public/skratek.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="container header-inner">
        <NavLink to="/">
          <div className="nav-left">
            <h3>Filip K</h3>
            <img src={SkratekLogo} alt="" />
          </div>
        </NavLink>

        <div className="nav-right">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'underlined' : '')}>
            <h3 className="underlined-hover">About</h3>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'underlined' : '')}>
            <h3 className="underlined-hover">Projects</h3>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
