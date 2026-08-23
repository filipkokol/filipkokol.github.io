import { Link } from 'react-router-dom';

import { isMobile } from '../utils';

import projects from '../data/projects';

import './SelectedProjects.scss';

import ProjectCard from '../components/ProjectCard';
import FloatUpDiv from '../components/FloatUpDiv';
import ScrollFloatDiv from '../components/ScrollFloatDiv';

const SelectedProjects = () => {
  const selectedProjects = ['paper-tiger', 'busbus', 'jumping-dwarf', 'knjizarna'];

  return (
    <section id="selected-projects">
      <div className="container">
        <ScrollFloatDiv>
          <h1>Selected projects</h1>
        </ScrollFloatDiv>

        <div className="carousel">
          {selectedProjects.map((slug, i) => {
            const data = projects.find((p) => p.slug === slug);

            return (
              <Link to={`/project/${data.slug}`} key={slug}>
                <FloatUpDiv delay={isMobile ? 0 : 0.2 * i}>
                  <ProjectCard {...data} />
                </FloatUpDiv>
              </Link>
            );
          })}
        </div>

        <ScrollFloatDiv>
          <p className="projects-text">
            For years I've been building passion projects, from simple <span className="underlined">games</span> and tools, case studies of
            awarded website designs to more advanced <span className="underlined">fullstack apps</span>.
          </p>
        </ScrollFloatDiv>
      </div>
    </section>
  );
};

export default SelectedProjects;
