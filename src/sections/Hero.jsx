import './Hero.scss';

import HeroCanvas from '../components/HeroCanvas';
import FloatUpDiv from '../components/FloatUpDiv';

import { motion } from 'motion/react';

import ScrollArrow from '../../public/scroll-triangle.svg';
import Rect1 from '../../public/rect1.svg';
import Rect2 from '../../public/rect2.svg';

const Hero = () => {
  return (
    <section id="hero">
      <HeroCanvas />

      <div className="hero-text">
        <FloatUpDiv>
          <div className="hero-row bordered align-left">
            <h1>
              Hi, I'm{' '}
              <mark>
                <span>Filip</span>

                <motion.img
                  className="highlight"
                  src={Rect1}
                  alt=""
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, ease: [0.5, 0, 0, 1], delay: 0.5 }}
                />
              </mark>
            </h1>
          </div>
        </FloatUpDiv>

        <FloatUpDiv delay={0.2}>
          <div className="hero-row hero-row-smaller align-right">
            <h1>& I create things for</h1>
          </div>
        </FloatUpDiv>

        <FloatUpDiv delay={0.4}>
          <div className="hero-row bordered align-center">
            <h1>
              the WW
              <mark>
                <span>WEB</span>
                <motion.img
                  className="highlight"
                  src={Rect2}
                  alt=""
                  initial={{ clipPath: 'inset(0 0 0 100%)' }}
                  whileInView={{ clipPath: 'inset(0 0 0 0)' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, ease: [0.5, 0, 0, 1], delay: 0.8 }}
                />
              </mark>
            </h1>
          </div>
        </FloatUpDiv>
      </div>

      <div className="scroll-hint upper">
        <span>
          Scroll <img src={ScrollArrow} alt="" /> down
        </span>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
