import './Toolbox.scss';

import highlight from '../assets/img/svgs/rect4.svg';
import WipeDiv from '../components/WipeDiv';

const Toolbox = () => {
  const imageModules = import.meta.glob('../assets/img/svgs/svg-logos/*.svg', { eager: true });
  const imagesArray = Object.values(imageModules).map((mod) => mod.default);

  return (
    <section id="toolbox">
      <div className="container">
        <h1>
          My{' '}
          <mark>
            <span>Toolbox</span>

            <WipeDiv className="highlight-container" start="right" style={{ transform: 'rotate(3deg) scale(1.05)' }}>
              <img src={highlight} alt="Highlight" className="highlight" />
            </WipeDiv>
          </mark>
        </h1>

        <span className="subtitle upper">Tech I've used in the past</span>
        <div className="tools-grid">
          {imagesArray.map((img, i) => (
            <div className="tools-grid-cell" key={i}>
              <img src={img} alt="Tool icon" className="icon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
