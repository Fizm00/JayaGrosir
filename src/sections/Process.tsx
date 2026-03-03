import { useRef } from 'react';
import { PROCESS_STEPS } from '../data';
import { useProcessAnimation } from '../hooks/useProcessAnimation';

export const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useProcessAnimation(containerRef, lineRef);

    return (
        <section ref={containerRef} className="relative w-full md:h-screen bg-white dark:bg-matte-black text-charcoal dark:text-off-white overflow-hidden py-32 md:pt-40 md:pb-12 z-20 transition-colors duration-700">
            <div className="container mx-auto px-6 md:px-16 lg:px-32 h-full flex flex-col justify-start md:justify-center">

                <div className="mb-16 md:mb-24 z-10 w-full relative">
                    <h2 className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-gold mb-6">Bagaimana Kami Bekerja</h2>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-charcoal dark:text-white mb-8 border-l-4 border-muted-gold pl-6">
                        Proses <span className="font-bold italic">Terintegrasi</span>
                    </h3>

                    <div className="hidden md:block w-full h-[2px] bg-charcoal/10 dark:bg-white/10 mt-16 relative">
                        <div ref={lineRef} className="absolute top-0 left-0 h-full w-full bg-muted-gold origin-left scale-x-0 shadow-[0_0_15px_rgba(218,41,28,0.5)]" />
                    </div>
                </div>

                <div className="w-full flex-1 relative overflow-visible mt-12 md:mt-0">
                    <div className="steps-container flex flex-col md:flex-row gap-16 md:gap-0 w-full md:w-[400%] relative md:absolute top-0 left-0">
                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className="process-step shrink-0 w-full md:w-1/4 px-0 md:px-6 lg:px-8 flex flex-col justify-start">
                                <div className="md:hidden w-8 h-[2px] bg-muted-gold mb-6" />

                                <span className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter text-charcoal/5 dark:text-white/5 mb-6 block">
                                    {step.num}
                                </span>
                                <h4 className="text-2xl md:text-2xl lg:text-3xl font-light mb-4 text-charcoal dark:text-white">{step.title}</h4>
                                <p className="text-base md:text-sm lg:text-lg text-charcoal/50 dark:text-white/50 leading-relaxed font-light md:max-w-xs lg:max-w-sm">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
