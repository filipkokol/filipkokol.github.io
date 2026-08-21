import './Hero.scss';

import HeroCanvas from '../components/HeroCanvas';
import FloatUpDiv from '../components/FloatUpDiv';

import ScrollArrow from '../assets/img/svgs/scroll-triangle.svg';
import Rect1 from '../assets/img/svgs/rect1.svg';
import Rect2 from '../assets/img/svgs/rect2.svg';

import useStickyState from '../hooks/useStickyState';
import WipeDiv from '../components/WipeDiv';

const Hero = () => {
  const [isClicked, setIsClicked] = useStickyState(false, 'user-has-clicked');

  return (
    <section id="hero" onClick={() => setIsClicked(true)}>
      <HeroCanvas />

      <div className={'clicker ' + (isClicked && 'destroyed')}>
        <p>click!</p>
      </div>

      <div className="hero-text">
        <FloatUpDiv>
          <div className="hero-row bordered align-left">
            <h1>
              Hi, I'm{' '}
              <mark>
                <span>Filip</span>

                <WipeDiv className="highlight-container" delay={0.5} style={{ transform: 'rotate(3deg) scale(1.2)' }}>
                  <img src={Rect1} alt="Highlight" className="highlight" />
                </WipeDiv>
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
              the W<span className="medium-bold">W</span>
              <mark>
                <span>WEB</span>
                <WipeDiv className="highlight-container" start="right" delay={0.8} style={{ transform: 'rotate(-3deg) scale(1.1)' }}>
                  <img src={Rect2} alt="Highlight" className="highlight" />
                </WipeDiv>
              </mark>
            </h1>
          </div>
        </FloatUpDiv>
      </div>

      <div className="scroll-hint upper">
        <span>
          Scroll <img src={ScrollArrow} alt="Down arrow" /> down
        </span>
      </div>
    </section>
  );
};

export default Hero;
