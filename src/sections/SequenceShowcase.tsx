import { useRef } from 'react';
import { ImageSequence } from '../components/ImageSequence';
import { useSequenceAnimation } from '../hooks/useSequenceAnimation';

const sequenceModules = import.meta.glob('../assets/sequence/*.jpg', { eager: true, query: '?url', import: 'default' });
const urls = Object.values(sequenceModules) as string[];

export const SequenceShowcase = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useSequenceAnimation(containerRef, textRef);

    return (
        <section id="sequence-showcase" ref={containerRef} className="relative w-full h-[400vh] bg-white dark:bg-matte-black z-10 overflow-hidden transition-colors duration-700">
            <div className="sticky top-0 h-screen w-full">
                <ImageSequence frameCount={urls.length} urlTemplate={(i) => urls[i]} scrollHeight="400%" />
            </div>

            <div ref={textRef} className="absolute top-0 left-0 w-full h-screen grid grid-cols-1 grid-rows-1 place-items-center pointer-events-none z-20 px-4 md:px-16 lg:px-32">
                <div className="seq-stage col-start-1 row-start-1 w-full flex flex-col items-center xl:items-start opacity-0">
                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-off-white tracking-[0.2em] uppercase mix-blend-difference mb-2 md:mb-4 text-center xl:text-left">
                        Skala Gudang
                    </h2>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold italic text-muted-gold tracking-widest drop-shadow-2xl text-center xl:text-left">
                        MASIF
                    </h2>
                </div>

                <div className="seq-stage col-start-1 row-start-1 w-full flex flex-col items-center xl:items-end opacity-0">
                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-off-white tracking-[0.2em] uppercase mix-blend-difference mb-2 md:mb-4 text-center xl:text-right">
                        Sistem Logistik
                    </h2>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold italic text-muted-gold tracking-widest drop-shadow-2xl text-center xl:text-right">
                        TERINTEGRASI
                    </h2>
                </div>

                <div className="seq-stage col-start-1 row-start-1 w-full flex flex-col items-center xl:items-start opacity-0 xl:pl-32">
                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-off-white tracking-[0.2em] uppercase mix-blend-difference mb-2 md:mb-4 text-center xl:text-left">
                        Kesegaran Mutu
                    </h2>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold italic text-muted-gold tracking-widest drop-shadow-2xl text-center xl:text-left">
                        TERJAMIN
                    </h2>
                </div>

            </div>
        </section>
    );
};
