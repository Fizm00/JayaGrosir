import { useRef } from 'react';
import { ADVANTAGES_DATA } from '../data';
import { useAdvantagesAnimation } from '../hooks/useAdvantagesAnimation';

export const Advantages = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useAdvantagesAnimation(containerRef, ADVANTAGES_DATA.length);

    return (
        <section id="advantages" ref={containerRef} className="relative w-full h-auto md:h-screen bg-white dark:bg-matte-black text-charcoal dark:text-off-white overflow-hidden flex flex-col items-center justify-center z-20 py-24 md:py-0 transition-colors duration-700">
            {ADVANTAGES_DATA.map((adv, i) => (
                <div key={`bg-${i}`} className="advantage-bg absolute inset-0 z-0 hidden md:block opacity-0">
                    <img src={adv.image} alt={adv.title} className="w-full h-full object-cover filter grayscale-0 dark:grayscale-50 transition-all duration-700" />
                </div>
            ))}

            {/* Gradient overlay to ensure text readability */}
            <div className="adv-overlay absolute inset-0 bg-linear-to-r from-off-white dark:from-matte-black via-off-white/95 dark:via-matte-black/90 to-off-white/50 dark:to-matte-black/40 z-0 opacity-90 dark:opacity-80 transition-colors duration-700" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(229,9,20,0.05)_0%,transparent_60%)] z-0 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row h-auto md:min-h-[60vh] relative z-10">
                <div className="w-full md:w-1/3 flex flex-col justify-start md:justify-center relative mb-16 md:mb-0">
                    <h2 className="text-sm tracking-[0.4em] uppercase text-muted-gold mb-8 md:mb-16">Keunggulan Kami</h2>

                    <div className="hidden md:block relative h-[250px] w-px bg-charcoal/10 dark:bg-white/10 ml-2">
                        <div className="adv-progress-bar absolute top-0 left-0 w-[2px] h-full bg-muted-gold origin-top scale-y-0 shadow-[0_0_15px_rgba(194,43,43,0.5)]" />
                    </div>
                </div>

                <div className="w-full md:w-2/3 h-full relative min-h-[400px] md:min-h-0">
                    {ADVANTAGES_DATA.map((adv, i) => (
                        <div
                            key={i}
                            className={`advantage-item md:absolute md:inset-0 flex flex-col justify-center mb-16 md:mb-0 md:opacity-0 ${i === 0 ? 'md:opacity-100' : ''}`}
                        >
                            <span className="text-muted-gold/20 text-7xl md:text-8xl lg:text-9xl font-light mb-4 md:mb-6 block tracking-tighter">
                                {(i + 1).toString().padStart(2, '0')}
                            </span>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 tracking-wide text-charcoal dark:text-off-white">{adv.title}</h3>
                            <p className="text-lg md:text-xl lg:text-2xl text-charcoal/50 dark:text-white/50 max-w-xl font-light leading-relaxed">{adv.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
