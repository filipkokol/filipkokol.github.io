import { motion } from 'motion/react';

const WipeDiv = ({ children, className, start = 'left', delay = 0, style = {} }) => {
  const position = start;
  let initial, inView;

  switch (start) {
    case 'right':
    case 'left':
      initial = '0% 100%';
      inView = '100% 100%';
      break;
    case 'top':
    case 'bottom':
      initial = '100% 0%';
      inView = '100% 100%';
      break;
  }

  return (
    <motion.div
      style={{
        ...style,
        maskPosition: position,
        maskImage: 'linear-gradient(to right, black 0%, black 100%)',
        maskRepeat: 'no-repeat',
      }}
      initial={{ maskSize: initial }}
      whileInView={{ maskSize: inView }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.5, 0, 0, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default WipeDiv;
