import { useParams } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

// data
import projects from '../data/projects';
import images from '../data/projectImages';

// css
import './ProjectDetails.scss';

// assets
import arrowRight from '../assets/img/svgs/arrow-right.svg';

// components
import WipeDiv from '../components/WipeDiv';
import ScrollFloatDiv from '../components/ScrollFloatDiv';
import Tags from '../components/Tags';
import NotFound from '../pages/NotFound';

// hooks
import usePageTitle from '../assets/hooks/usePageTitle';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  usePageTitle(project?.title || '404');

  if (!project) {
    return <NotFound title="Project not Found." linkText="All Projects" link="/projects" />;
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
                <button className="btn-outlined">
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

            <PhotoProvider maskOpacity={0.9} bannerVisible={false}>
              <div className="img-row">
                {project.img_extras.map((img) => (
                  <PhotoView src={images[img]} key={img}>
                    <img src={images[img]} alt="Alternative image" />
                  </PhotoView>
                ))}
              </div>
            </PhotoProvider>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
