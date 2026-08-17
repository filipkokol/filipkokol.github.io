import FloatUpDiv from '../components/FloatUpDiv';
import WipeDiv from '../components/WipeDiv';
import usePageTitle from '../assets/hooks/usePageTitle';

import './About.scss';

import meImg from '../assets/img/me-1.jpg';
import ScrollFloatDiv from '../components/ScrollFloatDiv';

const About = () => {
  usePageTitle('About');

  return (
    <section id="about-me">
      <div className="container">
        <WipeDiv className="cover-img">
          <img src={meImg} alt="" />
        </WipeDiv>

        <FloatUpDiv>
          <h1>Who am I?</h1>
        </FloatUpDiv>

        <div className="text-container">
          <FloatUpDiv delay={0.2}>
            <div className="description">
              <ScrollFloatDiv>
                <p>
                  This one isn't easy to answer! As a philosopher at heart and by degree at least, I tend to overthink
                  it&nbsp;... But let's start with the facts.
                </p>
              </ScrollFloatDiv>
              <ScrollFloatDiv>
                <p>
                  I am a self-taught web <strong>developer</strong>, passionate about <strong>web design</strong> and{' '}
                  <strong>creative coding</strong>. My background is in the arts — I studied piano for 12 years before
                  turning to philosophy. All along being passionate about <strong>UI&nbsp;design</strong>, I started
                  coding in the beginning of college, working on many passion projects for the last 6 years, from
                  generative art to fullstack web tools.
                </p>
              </ScrollFloatDiv>
              <ScrollFloatDiv>
                <p>
                  My main focus is on <strong>frontend web development</strong>. I've learned to code to be able to
                  express my creativity and put the projects I loved on the web for everyone to see. Through time I
                  picked up some frameworks and other tools to use in my projects, from React and Vue, to Sass, Python
                  for scripting, MongoDB and some SQL for managing databases, NodeJS and Express for backend and Git as
                  a version control tool.
                </p>
              </ScrollFloatDiv>
              <ScrollFloatDiv>
                <p>
                  I really believe that broad interests help me think out of the box and connect people from different
                  disciplines together. I hope my portfolio sheds some light on my passions and inspires you to
                  collaborate with me in the future.
                </p>
              </ScrollFloatDiv>
              <ScrollFloatDiv>
                <p>
                  Sincerely,
                  <br />
                  Filip K.
                </p>
              </ScrollFloatDiv>
            </div>
          </FloatUpDiv>

          <FloatUpDiv>
            <div className="tags">
              <a href="/cv_it.pdf">
                <div className="tag btn-outlined">CV</div>
              </a>
              <a href="https://github.com/vodnibivol" target="_blank">
                <div className="tag btn-outlined">Github</div>
              </a>
              <a href="https://www.linkedin.com/in/filip-kokol-bb291342a/" target="_blank">
                <div className="tag btn-outlined">LinkedIn</div>
              </a>
            </div>
          </FloatUpDiv>
        </div>
      </div>
    </section>
  );
};

export default About;
