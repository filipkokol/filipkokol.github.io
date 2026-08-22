import SlidingProjectRow from '../components/SlidingProjectRow';
import WipeDiv from '../components/WipeDiv';

import './MoreProjects.scss';
import Rect3 from '../assets/img/svgs/rect3.svg';

import projects from '../data/projects';

import { shuffled, arraySlice, arrTwice } from '../utils';

const MoreProjects = () => {
  const sliceLength = projects.length / 3;

  const projectsWithImages = shuffled(projects);

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

            <WipeDiv className="highlight-container" style={{ transform: 'rotate(-3deg) scale(1.05)' }}>
              <img className="highlight" src={Rect3} alt="Highlight" />
            </WipeDiv>
          </mark>
        </span>
        <SlidingProjectRow projectArr={arrTwice(slice3)} />
      </div>
    </section>
  );
};

export default MoreProjects;
