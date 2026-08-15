import './Projects.scss';

import ProjectRow from '../components/ProjectRow';

import projectImages from '../data/projectImages';
import projects from '../data/projects';

const Projects = () => {
  const categories = ['Frontend', 'Fullstack', 'Games & Visuals'];

  return (
    <section id="projects">
      <div className="container">
        <h1>Projects</h1>

        {categories.map((category) => (
          <div className="category" key={category}>
            <h2>{category}</h2>

            <div className="project-list">
              {projects
                .filter((project) => project.category === category)
                .map((project, i) => (
                  <ProjectRow
                    key={project.slug}
                    slug={project.slug}
                    title={project.title}
                    desc={project.desc}
                    tags={project.tags}
                    img={projectImages[project.img]}
                    isMain={i === 0}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
