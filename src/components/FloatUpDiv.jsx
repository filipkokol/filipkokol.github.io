import { motion } from 'motion/react';

const FloatUpDiv = ({ children, delay = 0, duration = 1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration, delay, ease: [0.5, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default FloatUpDiv;
