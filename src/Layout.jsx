import { Outlet } from 'react-router-dom';

import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import useLenis from './assets/hooks/useLenis';

function Layout() {
  useLenis();

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
