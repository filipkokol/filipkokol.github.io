import './Cta.scss';
import meImg from '../assets/img/me-4.jpg';

const Cta = () => {
  return (
    <section id="cta">
      <div className="container">
        <div className="central-content">
          <p>I really hope to hear from you soon!</p>
          <img src={meImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
