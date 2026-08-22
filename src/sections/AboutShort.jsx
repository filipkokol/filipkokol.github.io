import './AboutShort.scss';
import meImg from '../assets/img/me-2.jpg?format=webp&quality=45';
import ArrowIcon from '../assets/img/svgs/arrow1.svg';

import WipeDiv from '../components/WipeDiv';

const AboutShort = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <WipeDiv className="img-container" start="top">
            <img src={meImg} alt="Me" />
          </WipeDiv>

          <p className="about-text">
            I'm a self-taught web developer with years of experience building personal projects and a <strong>passion</strong> for creating
            smooth and beautiful user experiences.
          </p>
        </div>

        <div className="scroll-hint upper">
          <span>See my projects</span>
          <img src={ArrowIcon} alt="Down arrow" />
        </div>
      </div>
    </section>
  );
};

export default AboutShort;
