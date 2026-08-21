import { useP5 } from '../hooks/useP5';
import createSketch from '../assets/sketches/mravlja/sketch';

export default function HeroCanvas() {
  const containerRef = useP5(createSketch, { rootMargin: '200px' });
  return <div ref={containerRef} className="hero-canvas" />;
}
