import { useRef } from 'react';
import { STATS_DATA } from '../data';
import { useStatsAnimation } from '../hooks/useStatsAnimation';

export const Stats = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useStatsAnimation(sectionRef, STATS_DATA);

    return (
        <section ref={sectionRef} className="relative w-full py-32 bg-off-white dark:bg-charcoal text-charcoal dark:text-off-white z-20 transition-colors duration-700">
            <div className="container mx-auto px-6 md:px-16 lg:px-32">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                    {STATS_DATA.map((stat, i) => (
                        <div key={i} className="stat-item flex flex-col items-center md:items-start text-center md:text-left relative">
                            <div className="flex items-baseline mb-4">
                                <span className="stat-number text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-muted-gold">
                                    0
                                </span>
                                <span className="text-3xl md:text-5xl lg:text-6xl font-light text-muted-gold ml-1">
                                    {stat.suffix}
                                </span>
                            </div>
                            <h4 className="text-xs md:text-sm tracking-[0.2em] uppercase text-charcoal/50 dark:text-white/50">{stat.label}</h4>

                            {i !== STATS_DATA.length - 1 && (
                                <div className="hidden md:block absolute top-[20%] right-0 w-px h-[60%] bg-charcoal/10 dark:bg-white/10 stat-line origin-top" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
