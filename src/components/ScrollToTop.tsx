import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  // Optional: scroll to top on same-page nav clicks
  useEffect(() => {
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.href.includes(window.location.origin)) {
        // Same route click
        if (target.getAttribute('href') === window.location.pathname) {
          window.scrollTo({ top: 0, behavior: 'auto' });
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  return null;
};

export default ScrollToTop;
