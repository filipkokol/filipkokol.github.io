import { motion } from 'motion/react';

import SlidingProjectRow from '../components/SlidingProjectRow';
import './MoreProjects.scss';
import Rect3 from '../assets/img/svgs/rect3.svg';

import projects from '../data/projects';
import images from '../data/projectImages';

const MoreProjects = () => {
  const sliceLength = projects.length / 3;

  const projectsWithImages = shuffle(
    projects.map((p) => {
      const img = images[p.slug + '_sm.png'];
      return { ...p, img };
    }),
  );

  const slice1 = arraySlice(projectsWithImages, 0, sliceLength);
  const slice2 = arraySlice(projectsWithImages, 0.333, sliceLength);
  const slice3 = arraySlice(projectsWithImages, 0.666, sliceLength);

  return (
    <section id="more-projects">
      <div className="container">
        <SlidingProjectRow projectArr={arrTwice(slice1)} />
        <SlidingProjectRow projectArr={arrTwice(slice2)} reverse />
        <span className="more-text">
          more of my personal{' '}
          <mark>
            <span>projects...</span>

            <motion.img
              className="highlight"
              src={Rect3}
              alt="Highlight"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0 0 0)' }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.5, 0, 0, 1], delay: 0 }}
            />
          </mark>
        </span>
        <SlidingProjectRow projectArr={arrTwice(slice3)} />
      </div>
    </section>
  );
};

// utility functions

const arrTwice = (arr) => [...arr, ...arr];
const shuffle = (array) => {
  for (let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const arraySlice = (array, startPercentage, length) => {
  const startIndex = Math.floor(array.length * startPercentage);
  const endIndex = Math.min(array.length - 1, startIndex + length);
  return array.slice(startIndex, endIndex);
};

export default MoreProjects;
