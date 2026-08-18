import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import 'react-photo-view/dist/react-photo-view.css';

import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.race([document.fonts.ready, new Promise((resolve) => setTimeout(resolve, 2000))]).then(() =>
      setIsLoading(false),
    );
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

      {!isLoading && (
        <BrowserRouter>
          <AnimatePresence>{isLoading && <Loader key="loader" />}</AnimatePresence>

          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:slug" element={<ProjectDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
