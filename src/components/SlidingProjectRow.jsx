const ProjectRow = ({ imagesArray }) => {
  return (
    <div className="project-row">
      {imagesArray.map((img, i) => (
        <div className="project-thumb" key={i}>
          <img src={img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ProjectRow;
