import SlidingProjectRow from '../components/SlidingProjectRow';
import './MoreProjects.scss';
import Rect3 from '../../public/rect3.svg';

import images from '../data/projectImages';

const MoreProjects = () => {
  // TODO: dodaj krizemko ipd.
  const arr1 = [
    'crtica.png',
    'zastavice.png',
    'papertiger.png',
    'skratek.png',
    'besedle.png',
    'busbus.png',
    'knjizarna.png',
    'vreme.png',
    'todo.png',
    'piknik.png',
  ];
  const arr2 = [
    'morse.png',
    'todo.png',
    'piknik.png',
    'zlozek.png',
    'crtica.png',
    'slikar.png',
    'windex.png',
    'skratek.png',
    'papertiger.png',
    'ucenje.png',
  ];
  const arr3 = [
    'busbus.png',
    'ucenje.png',
    'piknik.png',
    'kacica.png',
    'vreme.png',
    'morse.png',
    'zlozek.png',
    'papertiger.png',
    'crtica.png',
    'piknik.png',
  ];

  return (
    <section id="more-projects">
      <div className="container">
        <SlidingProjectRow imagesArray={namesToFiles(arr1)} />
        <SlidingProjectRow imagesArray={namesToFiles(arr2)} />
        <span className="more-text">
          more of my personal{' '}
          <mark>
            <span>projects...</span>
            <img className="highlight" src={Rect3} alt="" />
          </mark>
        </span>
        <SlidingProjectRow imagesArray={namesToFiles(arr3)} />
      </div>
    </section>
  );
};

const namesToFiles = (arr) => arrTwice(arr.map((name) => images[name]));
const arrTwice = (arr) => [...arr, ...arr];

export default MoreProjects;
