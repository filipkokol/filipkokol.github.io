import './AboutShort.scss';
import meImg from '../assets/img/me-2.jpg';
import ArrowIcon from '../../public/arrow1.svg';

import WipeDiv from '../components/WipeDiv';

const AboutShort = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <WipeDiv className="img-container">
            <img src={meImg} alt="" />
          </WipeDiv>

          <p className="about-text">
            I'm a self-taught web developer with years of experience building personal projects and a{' '}
            <strong>passion</strong> for creating smooth and beautiful user experiences.
          </p>
        </div>

        <div className="scroll-hint upper">
          <span>See my projects</span>
          <img src={ArrowIcon} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutShort;
