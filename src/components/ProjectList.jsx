// import { motion } from 'motion/react';
import projectImages from '../data/projectImages';
import ProjectRow from './ProjectRow';
import ScrollFloatDiv from './ScrollFloatDiv';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, i) => (
        <ScrollFloatDiv key={project.slug} className="project-row">
          <ProjectRow {...project} img={projectImages[project.slug + '_sm.png']} isMain={i === 0} />
        </ScrollFloatDiv>
      ))}
    </div>
  );
};

export default ProjectList;
