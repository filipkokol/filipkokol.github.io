import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import useLenis from './hooks/useLenis';

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
