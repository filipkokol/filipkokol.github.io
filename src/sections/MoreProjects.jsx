import SlidingProjectRow from '../components/SlidingProjectRow';
import './MoreProjects.scss';
import Rect3 from '../../public/rect3.svg';

const MoreProjects = () => {
  const imageModules = import.meta.glob('../assets/img/thumbs/*.png', { eager: true });
  const imagesArray = Object.values(imageModules).map((mod) => mod.default);

  return (
    <section id="more-projects">
      <div className="container">
        {/* TODO: zdaj so trije identični arrayi. morajo bit različni in podvojeni, da skleneš loop */}
        <SlidingProjectRow imagesArray={imagesArray} />
        <SlidingProjectRow imagesArray={imagesArray} />
        <span className="more-text">
          more of my personal{' '}
          <mark>
            <span>projects...</span>
            <img className="highlight" src={Rect3} alt="" />
          </mark>
        </span>
        <SlidingProjectRow imagesArray={imagesArray} />
      </div>
    </section>
  );
};

export default MoreProjects;
