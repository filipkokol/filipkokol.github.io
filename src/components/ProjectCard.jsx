import Tags from './Tags';

const ProjectCard = (proj) => {
  return (
    <div className="project-card">
      <div className="img-container">
        <img src={proj.img} alt="" />
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
