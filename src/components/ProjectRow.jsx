import { Link } from 'react-router-dom';
import Tags from './Tags';

const ProjectRow = ({ slug, title, desc, tags, img, color }) => {
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

      <Link to={'/project/' + slug} className="project-image" style={{ backgroundColor: color || 'red' }}>
        <img src={img} alt="" />
      </Link>
    </>
  );
};

export default ProjectRow;
