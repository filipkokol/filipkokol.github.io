import { useEffect, useRef } from 'react';
import p5 from 'q5';

/**
 * Mounts a p5 instance bound to a container div, and automatically
 * pauses (noLoop) when the container scrolls out of view or the
 * tab is backgrounded, resuming (loop) when both are true again.
 *
 * @param {(p: p5, container: HTMLElement) => void} sketchFactory
 * @param {object} [options]
 * @returns {React.RefObject} attach to the container div
 */
export function useP5(sketchFactory, options = {}) {
  const { threshold = 0, rootMargin = '0px' } = options;
  const containerRef = useRef();
  const instanceRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Save the browser's native listener
    const originalAddEventListener = EventTarget.prototype.addEventListener;

    // 2. Temporarily hijack the listener specifically for q5's initialization
    EventTarget.prototype.addEventListener = function (type, listener, opts) {
      if (type === 'touchstart' || type === 'touchmove') {
        const safeOpts = typeof opts === 'object' ? { ...opts } : { capture: !!opts };
        safeOpts.passive = true; // Force passive
        return originalAddEventListener.call(this, type, listener, safeOpts);
      }
      return originalAddEventListener.call(this, type, listener, opts);
    };

    // 3. Initialize q5
    const instance = new p5(sketchFactory(container), container);
    instanceRef.current = instance;

    // 4. Immediately restore the native listener
    EventTarget.prototype.addEventListener = originalAddEventListener;

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
  }, [sketchFactory, options.threshold, options.rootMargin]);

  return containerRef;
}
