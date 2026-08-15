import { Link } from 'react-router-dom';
import Tags from './Tags';

const ProjectRow = ({ slug, title, desc, tags, img, color, isMain = false }) => {
  return (
    <div className={'project-row ' + (isMain ? 'main' : '')}>
      <div className="text">
        <Link to={'/project/' + slug}>
          <h3 className="project-title">{title}</h3>
        </Link>
        <div className="project-desc">
          <p>{desc}</p>
          {tags && <Tags tagArr={tags} />}
        </div>
      </div>

      <Link to={'/project/' + slug} className="project-image" style={{ backgroundColor: color || 'red' }}>
        <img src={img} alt="" />
      </Link>
    </div>
  );
};

export default ProjectRow;
