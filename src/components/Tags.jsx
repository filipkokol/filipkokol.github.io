const Tags = ({ tagArr }) => {
  return (
    <div className="tags">
      {tagArr.map((tag, j) => (
        <div className="tag" key={j}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
