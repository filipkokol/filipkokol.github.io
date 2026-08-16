import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollFloatDiv = ({ children, className }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start 90%'],
  });

  const dampened = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30, // 30
  });

  const y = useTransform(dampened, [0, 1], ['40%', '0%']);
  const opacity = useTransform(dampened, [0, 1], [0, 1]); // progress/2 + 0.5

  return (
    <div ref={sectionRef}>
      <motion.div className={className} style={{ y, opacity }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollFloatDiv;
