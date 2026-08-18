import { useParams, Link } from 'react-router-dom';

import projects from '../data/projects';
import images from '../data/projectImages';

import './ProjectDetails.scss';
import Tags from '../components/Tags';

import arrowRight from '../assets/img/svgs/arrow-right.svg';

import WipeDiv from '../components/WipeDiv';
import ScrollFloatDiv from '../components/ScrollFloatDiv';

import usePageTitle from '../assets/hooks/usePageTitle';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  usePageTitle(project?.title || '404');

  if (!project) {
    return (
      <section id="project-details">
        <div className="container 404">
          <h1>Project not found</h1>
          <p>I have a bad feeling about this...</p>
          <br />
          <Link to="/projects" className="underlined">
            <h3 className="upper">Back to projects</h3>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="project-details">
      <div className="container">
        <WipeDiv>
          <h1>{project.title}</h1>
        </WipeDiv>

        <WipeDiv>
          <h2 className="upper">Project in depth</h2>
        </WipeDiv>

        {project.tags && (
          <ScrollFloatDiv>
            <Tags tagArr={project.tags} />
          </ScrollFloatDiv>
        )}

        <ScrollFloatDiv delay={0.2}>
          <div className="cover-image" style={{ backgroundColor: project.color }}>
            <img src={images[project.slug + '.png']} alt="Project hero image" />
          </div>
        </ScrollFloatDiv>

        <div className="text-container">
          <div className="description">
            {(project.desc_long || [project.desc]).map((paragraph, i) => (
              <ScrollFloatDiv key={i}>
                <p>{paragraph}</p>
              </ScrollFloatDiv>
            ))}
          </div>

          {project.link_outer && (
            <ScrollFloatDiv>
              <a href={project.link_outer} target="_blank" className="link-wrapper">
                <button className="btn-outlined demo-btn">
                  <span>Try it out</span>
                  <img src={arrowRight} alt="Right arrow" />
                </button>
              </a>
            </ScrollFloatDiv>
          )}
        </div>

        {project.img_extras && (
          <div className="img-extras">
            <h2 className="upper">Additional photos</h2>

            <div className="img-row">
              {project.img_extras.map((img) => (
                <div className="img-container" key={img}>
                  <img src={images[img]} alt="Alternative image" />
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
