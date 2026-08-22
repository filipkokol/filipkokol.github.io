import { Link } from 'react-router-dom';
import Tags from './Tags';

import projectImages from '../data/projectImages';
import { preloadImage } from '../utils';

const ProjectRow = ({ slug, title, desc, tags, color }) => {
  const imgLarge = projectImages[slug].lg;
  const imgSmall = projectImages[slug].sm;

  return (
    <>
      <div className="text">
        <Link to={'/project/' + slug}>
          <h3 className="project-title" onMouseEnter={() => preloadImage(imgLarge)}>
            {title}
          </h3>
        </Link>
        <div className="project-desc">
          <p>{desc}</p>
          {tags && <Tags tagArr={tags} />}
        </div>
      </div>

      <Link to={'/project/' + slug} className="project-image" style={{ backgroundColor: color || 'lightblue' }}>
        <img src={imgSmall} alt={title + ' project thumbnail'} onMouseEnter={() => preloadImage(imgLarge)} />
      </Link>
    </>
  );
};

export default ProjectRow;
