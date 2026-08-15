// another sketch, same hook, optionally starting a bit early
import { useP5 } from '../assets/hooks/useP5';
import createSketch from '../assets/sketches/life/sketch';

export default function HeroCanvas() {
  const containerRef = useP5(createSketch, { rootMargin: '200px' });
  return <div ref={containerRef} className="footer-canvas" />;
}
