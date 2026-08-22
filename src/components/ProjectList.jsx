import ProjectRow from './ProjectRow';
import ScrollFloatDiv from './ScrollFloatDiv';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ScrollFloatDiv key={project.slug} className="project-row">
          <ProjectRow {...project} />
        </ScrollFloatDiv>
      ))}
    </div>
  );
};

export default ProjectList;
