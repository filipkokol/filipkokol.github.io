import Tags from './Tags';

import projectImages from '../data/projectImages';
import { preloadImage } from '../utils';

const ProjectCard = (proj) => {
  const imgLarge = projectImages[proj.slug + '.png'];
  const imgSmall = projectImages[proj.slug + '_sm.png'];

  return (
    <div className="project-card" onMouseEnter={() => preloadImage(imgLarge)}>
      <div className="img-container" style={{ backgroundColor: proj.color }}>
        <img src={imgSmall} alt={proj.title + ' project card'} />
      </div>
      <div className="details">
        <p className="project-title">{proj.title}</p>
        <p className="project-desc">{proj.desc_short || proj.desc}</p>
        <Tags tagArr={proj.tags} />
      </div>
    </div>
  );
};

export default ProjectCard;
