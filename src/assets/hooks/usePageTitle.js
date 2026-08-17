import { useEffect } from 'react';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Filip K` : 'Portfolio | Filip K';
  }, [title]);
}
