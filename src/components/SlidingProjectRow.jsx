const ProjectRow = ({ imagesArray }) => {
  return (
    <div className="project-row">
      {imagesArray.map((img) => (
        <div className="project-thumb" key={img}>
          <img src={img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ProjectRow;
