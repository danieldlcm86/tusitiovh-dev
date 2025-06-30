import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        const servicios = document.getElementById('servicios');
        const offset = servicios?.offsetTop || 500;
        setIsVisible(window.scrollY > offset);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        isVisible && (
            <button className="scroll-to-top" onClick={scrollToTop}>
                <i className="fa-solid fa-chevron-up"></i>
            </button>
        )
    );
};

export default ScrollToTopButton;
