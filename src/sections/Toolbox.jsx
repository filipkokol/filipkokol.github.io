import './Toolbox.scss';

const Toolbox = () => {
  const imageModules = import.meta.glob('../../public/svg-logos/*.svg', { eager: true });
  const imagesArray = Object.values(imageModules).map((mod) => mod.default);

  // TODO: moram nardit custom seznam, ker je kar random in zaradi errorjev

  return (
    <section id="toolbox">
      <div className="container">
        <h1>
          My <mark>Toolbox</mark>
        </h1>

        <span>Tech I've used in the past</span>
        <div className="tools-grid">
          {imagesArray.map((img, i) => (
            <div className="tools-grid-cell" key={i}>
              <img src={img} alt="" className="icon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
