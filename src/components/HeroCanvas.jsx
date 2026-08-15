import { useEffect, useRef } from 'react';
import p5 from 'p5';
import createSketch from '../assets/sketches/mravlja/sketch';

export default function HeroCanvas() {
  const containerRef = useRef();

  useEffect(() => {
    const instance = new p5(createSketch(containerRef.current), containerRef.current);

    return () => {
      instance.remove();
    };
  }, []);

  return <div ref={containerRef} className="hero-canvas" />;
}
