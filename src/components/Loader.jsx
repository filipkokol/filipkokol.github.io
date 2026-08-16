import { motion } from 'motion/react';

const Loader = () => {
  return (
    <motion.div
      key="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'ivory',
        zIndex: 9999,
        fontWeight: '900',
      }}
    >
      <h1 className="invisible" style={{ position: 'absolute' }}>
        Loading
      </h1>
      <small className="upper">Loading</small>
    </motion.div>
  );
};

export default Loader;
