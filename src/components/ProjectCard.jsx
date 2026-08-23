import Tags from './Tags';

import projectImages from '../data/projectImages';

const ProjectCard = (proj) => {
  const imgSmall = projectImages[proj.slug].sm;

  return (
    <div className="project-card">
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
