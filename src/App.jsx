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

// import projectImages from './data/projectImages';
// import { preloadImagePromise } from './utils';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // const loadImages = () => Promise.all(Object.entries(projectImages).map(([, { lg: largeImgUrl }]) => preloadImagePromise(largeImgUrl)));

  useEffect(() => {
    const minimumLoadingTime = 1000;
    const maximumLoadingTime = 3000;

    Promise.all([Promise.race([document.fonts.ready, timeout(maximumLoadingTime)]), timeout(minimumLoadingTime)]).then(() => {
      setIsLoading(false);
      // setTimeout(loadImages, 3000);
    });
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
