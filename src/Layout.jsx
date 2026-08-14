import { Outlet } from 'react-router-dom';

import Navbar from './sections/Navbar';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
