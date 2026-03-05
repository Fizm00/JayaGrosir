import { useRef } from 'react';
import { useHeroAnimation } from '../hooks/useHeroAnimation';
import { motion } from 'framer-motion';
import img1 from '../assets/img/IMG_9672.webp';

export const Hero = () => {
    const containerRef = useRef<HTMLElement>(null);

    useHeroAnimation(containerRef);

    return (
        <section id="hero" ref={containerRef} className="hero-container relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={img1}
                    alt="Pusat Grosir Sembako"
                    className="hero-bg w-full h-full object-cover filter brightness-[0.35] grayscale-20"
                />
            </div>

            <div className="absolute inset-0 bg-black/40 z-1 pointer-events-none" />

            <div
                className="hero-content absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none z-10"
            >
                <div className="overflow-hidden flex flex-col items-center justify-center gap-y-2 md:gap-y-4 text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white px-4 text-center">
                    <div className="flex flex-wrap justify-center gap-x-6">
                        {['MURAH', 'SETIAP'].map((word, i) => (
                            <span key={`1-${i}`} className="hero-word block relative drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">{word}</span>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-6">
                        {['HARI'].map((word, i) => (
                            <span key={`2-${i}`} className="hero-word block relative drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">{word}</span>
                        ))}
                    </div>
                </div>

                <p className="hero-sub mt-12 text-sm md:text-lg font-light tracking-[0.4em] text-white/90 uppercase max-w-2xl text-center px-4 drop-shadow-lg">
                    Pusat belanja grosir sembako terpercaya untuk kebutuhan harian dan bisnis Anda
                </p>

                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 pointer-events-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                >
                    <a
                        href="https://wa.me/62882008756907"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-4 bg-transparent border border-white/20 hover:border-muted-gold text-white text-xs tracking-widest uppercase rounded-full overflow-hidden transition-all duration-500 flex items-center gap-3 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(230,190,138,0.2)]"
                    >
                        <div className="absolute inset-0 bg-muted-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                        <span className="relative z-10 group-hover:text-white font-bold transition-colors duration-500">Hubungi Kami</span>
                        <svg className="w-4 h-4 relative z-10 group-hover:text-white group-hover:translate-x-1 transition-all duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </a>

                    <div className="w-px h-12 bg-linear-to-b from-white/20 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
};
