import { motion } from 'motion/react';

import './Toolbox.scss';

import highlight from '../assets/img/svgs/rect4.svg';

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
            <motion.img
              className="highlight"
              src={highlight}
              alt="Highlight"
              initial={{ clipPath: 'inset(0 0 0 100%)' }}
              whileInView={{ clipPath: 'inset(0 0 0 0)' }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.5, 0, 0, 1], delay: 0 }}
            />
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
