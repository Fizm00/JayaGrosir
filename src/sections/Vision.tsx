import { useRef } from 'react';
import { VISION_LINES, MISSION_LINES } from '../data';
import imgVision from '../assets/img/IMG_9677.webp';
import { useVisionAnimation } from '../hooks/useVisionAnimation';

export const Vision = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useVisionAnimation(containerRef);

    return (
        <section id="vision" ref={containerRef} className="relative w-full h-screen bg-white dark:bg-matte-black text-off-white overflow-hidden z-20 transition-colors duration-700">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    data-speed="0.8"
                    src={imgVision}
                    alt="Pusat Grosir Modern"
                    className="vision-bg w-full h-full object-cover filter brightness-[0.2] grayscale-80"
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-32 h-full flex flex-col md:flex-row items-center justify-center relative z-10">
                <div className="w-full md:w-[45%] flex justify-start md:justify-end md:pr-12 lg:pr-16 relative h-[120px] md:h-[200px] mt-16 md:mt-0">
                    <h2 className="vision-title absolute left-0 md:left-auto md:right-12 lg:right-16 top-1/2 -translate-y-1/2 text-6xl md:text-7xl lg:text-9xl font-black italic tracking-tighter text-muted-gold overflow-hidden pb-4 pr-12 drop-shadow-lg">
                        <span className="block translate-y-[120%]">VISI</span>
                    </h2>
                    <h2 className="misi-title absolute left-0 md:left-auto md:right-12 lg:right-16 top-1/2 -translate-y-1/2 text-6xl md:text-7xl lg:text-9xl font-black italic tracking-tighter text-muted-gold overflow-hidden pb-4 pr-12 drop-shadow-lg">
                        <span className="block translate-y-[120%] opacity-0">MISI</span>
                    </h2>
                </div>

                <div className="hidden md:block w-[2px] h-64 bg-charcoal/10 dark:bg-white/10 mx-6 lg:mx-8 relative shrink-0">
                    <div className="vision-divider absolute top-0 left-0 w-full h-full bg-muted-gold origin-top transform scale-y-0" />
                </div>
                <div className="w-full md:w-[55%] flex flex-col justify-center mt-8 md:mt-0 md:pl-6 lg:pl-8 relative h-[300px] md:h-[400px]">
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex flex-col justify-center">
                        {VISION_LINES.map((line, i) => (
                            <div key={`visi-${i}`} className="vision-line overflow-hidden mb-1 md:mb-2 pb-2 pr-4 md:pr-8">
                                <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-wide leading-tight text-white drop-shadow-md translate-y-[120%] opacity-0">
                                    {line}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex flex-col justify-center">
                        {MISSION_LINES.map((line, i) => (
                            <div key={`misi-${i}`} className="misi-line overflow-hidden mb-1 md:mb-2 pb-2 pr-4 md:pr-8">
                                <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-wide leading-tight text-white drop-shadow-md translate-y-[120%] opacity-0">
                                    {line}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
};
