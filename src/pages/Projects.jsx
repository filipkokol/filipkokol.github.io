import ProjectList from '../components/ProjectList';

import './Projects.scss';

import projects from '../data/projects';
import WipeDiv from '../components/WipeDiv';
import ScrollFloatDiv from '../components/ScrollFloatDiv';

import usePageTitle from '../assets/hooks/usePageTitle';

const Projects = () => {
  usePageTitle('Projects');

  const categories = ['Fullstack', 'Frontend', 'Games & Visuals'];

  return (
    <section id="projects">
      <div className="container">
        <WipeDiv start="top">
          <h1>Projects</h1>
        </WipeDiv>

        {categories.map((category) => (
          <div className="category" key={category}>
            <ScrollFloatDiv>
              <h2>{category}</h2>
            </ScrollFloatDiv>

            <ProjectList projects={projects.filter((project) => project.category === category)} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
