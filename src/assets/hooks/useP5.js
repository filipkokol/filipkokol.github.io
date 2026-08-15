// NOTE: this part was completely written with AI. i have no idea how to do this.

import { useEffect, useRef } from 'react';
import p5 from 'p5';

/**
 * Mounts a p5 instance bound to a container div, and automatically
 * pauses (noLoop) when the container scrolls out of view or the
 * tab is backgrounded, resuming (loop) when both are true again.
 *
 * @param {(p: p5, container: HTMLElement) => void} sketchFactory
 *   A function matching the `(p) => { p.setup = ...; p.draw = ...; }`
 *   shape your sketches already use — pass your `createSketch(container)`
 *   result directly.
 * @param {object} [options]
 * @param {number} [options.threshold=0] IntersectionObserver threshold
 * @param {string} [options.rootMargin='0px'] IntersectionObserver rootMargin,
 *   e.g. '200px' to start the sketch slightly before it enters the viewport
 * @returns {React.RefObject} attach to the container div
 */
export function useP5(sketchFactory, options = {}) {
  const { threshold = 0, rootMargin = '0px' } = options;
  const containerRef = useRef();
  const instanceRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const instance = new p5(sketchFactory(container), container);
    instanceRef.current = instance;

    const isVisible = { current: false };
    const isFocused = { current: !document.hidden };

    const sync = () => {
      if (isVisible.current && isFocused.current) instance.loop();
      else instance.noLoop();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
        sync();
      },
      { threshold, rootMargin },
    );
    observer.observe(container);

    const onVisibilityChange = () => {
      isFocused.current = !document.hidden;
      sync();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      setTimeout(() => instance.remove(), 0);
    };
  }, []); // sketchFactory intentionally not in deps — see note below

  return containerRef;
}
