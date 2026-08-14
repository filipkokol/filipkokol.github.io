import { Link } from 'react-router-dom';
import Tags from './Tags';

const ProjectRow = ({ slug, title, desc, tags, img, isMain = false }) => {
  return (
    <div className={'project-row ' + (isMain ? 'project-row-main' : '')}>
      <div className="text">
        <Link to={'/project/' + slug}>
          <h3 className="project-title">{title}</h3>
        </Link>
        <div className="project-desc">
          <p>{desc}</p>
          {tags && <Tags tagArr={tags} />}
        </div>
      </div>

      <Link to={'/project/' + slug}>
        <div className="project-image">
          <img src={img} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default ProjectRow;
