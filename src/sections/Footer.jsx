import './Footer.scss';
import SkratekLogo from '../../public/skratek.svg';
import FooterCanvas from '../components/FooterCanvas';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';

const Footer = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-35%', '0%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]); // progress/2 + 0.5

  return (
    <section id="footer" ref={sectionRef}>
      <motion.div className="content" style={{ y, opacity }}>
        <FooterCanvas />

        <div className="container">
          <div className="footer-top">
            <div className="logo jump-hover">
              <h1>Filip K</h1>
              <a href="https://lulekfun.github.io/skratek/">
                <img className="skratek" src={SkratekLogo} alt="" />
              </a>
            </div>

            <div className="social-links upper">
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
            <div className="contact-links upper">
              <a className="underlined-hover" href="mailto:filipkokol@icloud.com">
                filipkokol@icloud.com
              </a>
              <a className="underlined-hover" href="tel:+38651608707">
                (+386)51608707
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
