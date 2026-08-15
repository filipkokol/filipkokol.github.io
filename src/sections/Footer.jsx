import './Footer.scss';
import SkratekLogo from '../../public/skratek.svg';
import FooterCanvas from '../components/FooterCanvas';

const Footer = () => {
  return (
    <section id="footer">
      <FooterCanvas />

      <div className="container">
        <div className="footer-top">
          <div className="logo">
            <h1>Filip K</h1>
            <img src={SkratekLogo} alt="" />
          </div>

          <div className="social-links">
            <a className="underlined-hover" href="#">
              LinkedIn
            </a>
            <a className="underlined-hover" href="https://github.com/vodnibivol">
              Github
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">© 2026</div>
          <div className="contact-links">
            <a className="underlined-hover" href="mailto:filipkokol@icloud.com">
              filipkokol@icloud.com
            </a>
            <a className="underlined-hover" href="tel:+38651608707">
              (+386)51608707
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
