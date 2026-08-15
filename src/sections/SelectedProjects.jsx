import { Link } from 'react-router-dom';

import projects from '../data/projects';
import images from '../data/projectImages';

import './SelectedProjects.scss';

import ProjectCard from '../components/ProjectCard';

const SelectedProjects = () => {
  const selectedProjects = ['paper-tiger', 'busbus', 'jumping-dwarf', 'knjizarna'];

  return (
    <section id="selected-projects">
      <div className="container">
        <h1>Selected projects</h1>

        <div className="carousel">
          {selectedProjects.map((slug) => {
            const data = projects.find((p) => p.slug === slug);

            return (
              <Link to={`/project/${data.slug}`} key={slug}>
                <ProjectCard {...data} img={images[data.img]} />
              </Link>
            );
          })}
        </div>

        <p className="projects-text">
          For years I've been building passion projects, from simple <span className="underlined">games</span> and
          tools, case studies of awarded website designs to more advanced{' '}
          <span className="underlined">fullstack apps</span>.
        </p>
      </div>
    </section>
  );
};

export default SelectedProjects;
