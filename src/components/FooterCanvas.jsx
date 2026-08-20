import { useP5 } from '../assets/hooks/useP5';
import createSketch from '../assets/sketches/life/sketch_pixel';

export default function HeroCanvas() {
  const containerRef = useP5(createSketch, { rootMargin: '0px' });
  return <div ref={containerRef} className="footer-canvas" />;
}
