import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * This component automatically scrolls the window to the top (0, 0)
 * whenever the route (URL path) changes.
 */
export default function ScrollToTop() {
  // Get the current location object, which contains the pathname and hash
  const { pathname, hash } = useLocation();

  // Use an effect that triggers every time the pathname changes
  useEffect(() => {
    // Only scroll to top if there is no hash in the URL
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // The effect's dependency array

  return null; // This component doesn't render any visible UI
}
