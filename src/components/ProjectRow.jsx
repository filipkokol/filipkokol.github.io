import { Link } from 'react-router-dom';
import Tags from './Tags';

import projectImages from '../data/projectImages';

const ProjectRow = ({ slug, title, desc, tags, color }) => {
  const imgSmall = projectImages[slug].sm;

  return (
    <>
      <div className="text">
        <Link to={'/project/' + slug}>
          <h3 className="project-title">{title}</h3>
        </Link>
        <div className="project-desc">
          <p>{desc}</p>
          {tags && <Tags tagArr={tags} />}
        </div>
      </div>

      <Link to={'/project/' + slug} className="project-image" style={{ backgroundColor: color || 'lightblue' }}>
        <img src={imgSmall} alt={title + ' project thumbnail'} />
      </Link>
    </>
  );
};

export default ProjectRow;
