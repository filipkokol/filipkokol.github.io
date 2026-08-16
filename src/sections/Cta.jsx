import './Cta.scss';
import meImg from '../assets/img/me-4.jpg';

import FloatUpDiv from '../components/FloatUpDiv';

const Cta = () => {
  return (
    <section id="cta">
      <div className="container">
        <div className="central-content">
          <FloatUpDiv>
            <p>I really hope to hear from you soon!</p>
          </FloatUpDiv>
          <img src={meImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
