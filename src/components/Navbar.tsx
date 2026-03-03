import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Cerita', href: '#story' },
    { name: 'Katalog', href: '#products' },
    { name: 'Keunggulan', href: '#advantages' },
    { name: 'Fasilitas', href: '#gallery' },
    { name: 'Lokasi', href: '#location' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOnDarkSection, setIsOnDarkSection] = useState(true); // Hero is initially dark

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Setup observer for dark sections
        const observerOptions = {
            root: null,
            rootMargin: '-50px 0px -90% 0px', // Trigger when section is near top navbar area
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsOnDarkSection(true);
                }
            });
        };

        const darkObserver = new IntersectionObserver(observerCallback, observerOptions);

        // Observe dark sections based on explicit IDs
        const darkSectionIds = ['#hero', '#sequence-showcase', '#vision'];
        const elementsToObserve: Element[] = [];

        darkSectionIds.forEach(id => {
            const el = document.querySelector(id);
            if (el) elementsToObserve.push(el);
        });

        // Add a check for changing to light sections (resetting the state)
        const lightObserverCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Only set to false if we are intersecting a light section
                    setIsOnDarkSection(false);
                }
            });
        };

        const lightObserver = new IntersectionObserver(lightObserverCallback, observerOptions);

        // Start observing
        elementsToObserve.forEach(el => darkObserver.observe(el));

        // For light sections, we intercept everything else
        const allSections = document.querySelectorAll('section, .bg-white, .bg-off-white');
        allSections.forEach(el => {
            if (!elementsToObserve.includes(el)) {
                lightObserver.observe(el);
            }
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            darkObserver.disconnect();
            lightObserver.disconnect();
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ease-out ${isScrolled ? 'py-4' : 'py-8'}`}
        >
            <div className="container mx-auto px-6 md:px-16 flex items-center justify-between">

                <a href="#" className={`relative z-50 text-2xl font-black tracking-tighter group transition-colors duration-500 ${isScrolled && !isOnDarkSection ? 'text-charcoal dark:text-off-white' : 'text-off-white'}`}>
                    <span className="sr-only">Jaya Grosir</span>
                    JAYA<span className={`italic transition-colors duration-500 ${isScrolled && !isOnDarkSection ? 'text-muted-gold group-hover:text-charcoal dark:group-hover:text-off-white' : 'text-muted-gold group-hover:text-off-white'}`}>GROSIR</span>
                </a>
                <div className={`hidden md:flex items-center gap-8 transition-all duration-500 ease-out absolute left-1/2 -translate-x-1/2 ${isScrolled
                    ? 'bg-white/90 dark:bg-matte-black/90 backdrop-blur-xl px-8 py-3 rounded-full border border-black/5 dark:border-white/5 shadow-2xl scale-100 opacity-100 pointer-events-auto'
                    : 'scale-95 opacity-0 pointer-events-none'
                    }`}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-sm font-medium tracking-widest uppercase text-charcoal/70 dark:text-off-white/70 hover:text-muted-gold dark:hover:text-muted-gold transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className={`hidden md:flex items-center gap-8 transition-all duration-500 ${isScrolled ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-sm font-medium tracking-widest uppercase text-off-white/80 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <button
                    className={`md:hidden relative z-50 p-2 focus:outline-none transition-colors duration-500 ${isScrolled && !isOnDarkSection ? 'text-charcoal dark:text-off-white' : 'text-off-white'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className="w-6 h-5 flex flex-col justify-between items-end">
                        <span className={`h-[2px] bg-current transition-all duration-300 ease-out ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6'}`} />
                        <span className={`h-[2px] bg-current transition-all duration-300 ease-out ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
                        <span className={`h-[2px] bg-current transition-all duration-300 ease-out ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-5'}`} />
                    </div>
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-white/95 dark:bg-matte-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center min-h-screen"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                                    className="text-3xl font-light tracking-widest uppercase text-charcoal dark:text-off-white hover:text-muted-gold dark:hover:text-muted-gold transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
