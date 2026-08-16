import { motion } from 'motion/react';

const WipeDiv = ({ children, className }) => {
  return (
    <motion.div
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default WipeDiv;
