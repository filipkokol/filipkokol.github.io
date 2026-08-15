import { useParams } from 'react-router-dom';

import projects from '../data/projects';
import images from '../data/projectImages';

import './ProjectDetails.scss';
import Tags from '../components/Tags';

import arrowRight from '../../public/arrow-right.svg';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // TODO: if !project => 404 page

  return (
    <section id="project-details">
      <div className="container">
        <h1>{project.title}</h1>
        <h2>Project in depth</h2>
        {project.tags && <Tags tagArr={project.tags} />}

        <div className="cover-image" style={{ backgroundColor: project.color }}>
          <img src={images[project.slug + '.png']} alt="" />
        </div>

        <div className="text-container">
          <div className="description">
            {project.desc_long ? (
              project.desc_long.map((paragraph, i) => <p key={i}>{paragraph}</p>)
            ) : (
              <p>{project.desc}</p>
            )}
          </div>

          {project.link_outer && (
            <a href={project.link_outer} className="link-wrapper">
              <button className="btn-outlined demo-btn">
                <span>Demo</span>
                <img src={arrowRight} alt="" />
              </button>
            </a>
          )}
        </div>

        {project.img_extras && (
          <div className="img-extras">
            <h2>Additional photos</h2>

            <div className="img-row">
              {project.img_extras.map((img) => (
                <div className="img-container" key={img}>
                  <img src={images[img]} alt="" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
