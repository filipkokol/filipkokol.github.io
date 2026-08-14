import './Footer.scss';
import SkratekLogo from '../../public/skratek.svg';
import LifeGif from '../assets/img/life.gif';

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="logo">
            <h1>Filip K</h1>
            <img src={SkratekLogo} alt="" />
          </div>
          <div className="social-links">
            <a href="#">LinkedIn</a>
            <a href="https://github.com/vodnibivol">Github</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">© 2026</div>
          <div className="contact-links">
            <a href="mailto:filipkokol@icloud.com">filipkokol@icloud.com</a>
            <a href="tel:+38651608707">(+386)51608707</a>
          </div>
        </div>
      </div>
      <div className="game-of-life">
        <img src={LifeGif} alt="" />
      </div>
    </section>
  );
};

export default Footer;
