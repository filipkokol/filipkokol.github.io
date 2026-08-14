import './Hero.scss';

import ScrollArrow from '../../public/scroll-triangle.svg';
import Rect1 from '../../public/rect1.svg';
import Rect2 from '../../public/rect2.svg';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-text">
          <div className="hero-row bordered align-left">
            <h1>
              Hi, I'm{' '}
              <mark>
                <span>Filip</span>
                <img className="highlight" src={Rect1} alt="" />
              </mark>
            </h1>
          </div>

          <div className="hero-row hero-row-smaller align-right">
            <h1>& I create things</h1>
          </div>

          <div className="hero-row bordered">
            <h1>
              for the WW
              <mark>
                <span>WEB</span>
                <img className="highlight" src={Rect2} alt="" />
              </mark>
            </h1>
          </div>
        </div>
        <div className="scroll-hint">
          <span>
            Scroll <img src={ScrollArrow} alt="" /> down
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
