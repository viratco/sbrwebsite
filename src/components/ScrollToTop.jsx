import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there is no hash, scroll to top (standard page navigation)
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            // If there is a hash, attempt to scroll to the element
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Retry for dynamic content/race conditions
                setTimeout(() => {
                    const el = document.getElementById(id);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
