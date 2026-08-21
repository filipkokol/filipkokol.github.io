import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { lenisInstance } from '../hooks/useLenis';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // 'PUSH' | 'POP' | 'REPLACE'

  useEffect(() => {
    if (navigationType === 'POP') {
      // Back/forward: do NOT scroll to top, but restore previous position
      requestAnimationFrame(() => {
        lenisInstance?.scrollTo(window.scrollY, { immediate: true });
      });
      return;
    }

    // Regular link navigation: always start fresh at the top.
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
}
