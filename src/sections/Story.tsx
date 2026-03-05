import { useRef } from 'react';
import { STORY_CONTENT } from '../data';
import { useStoryAnimation } from '../hooks/useStoryAnimation';
import { AnimatedBackground } from '../components/AnimatedBackground';

const SplitText = ({ text, className }: { text: string; className?: string }) => {
    return (
        <span className={className}>
            {text.split(' ').map((word, index) => (
                <span key={index} className="inline-block overflow-hidden mr-[0.25em] pb-1 font-light align-bottom">
                    <span className="word-inner inline-block transform translate-y-full">{word}</span>
                </span>
            ))}
        </span>
    );
};

export const Story = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useStoryAnimation(containerRef);

    return (
        <section id="story" ref={containerRef} className="relative w-full md:h-screen bg-off-white dark:bg-matte-black overflow-hidden z-20 py-24 md:py-0 transition-colors duration-700">
            <AnimatedBackground />

            <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-0 overflow-hidden">
                <div className="text-[12rem] lg:text-[18rem] font-black text-charcoal/[0.04] dark:text-off-white/[0.03] whitespace-nowrap story-bg-text tracking-tighter transition-colors duration-700">
                    JAYA GROSIR SUPERMARKET JAYA GROSIR
                </div>
            </div>

            <div className="container mx-auto h-full px-6 md:px-16 lg:px-32 relative z-10 flex flex-col md:flex-row items-center">
                <div className="hidden md:flex w-1/2 h-full flex-col justify-center relative pr-8 lg:pr-12">
                    <h2 className="text-xs md:text-sm tracking-[0.4em] text-muted-gold mb-12 uppercase absolute top-[15%]">Cerita Kami</h2>

                    <div className="relative w-full h-[250px] flex items-center">
                        {STORY_CONTENT.map((item, i) => (
                            <div key={i} className={`absolute left-0 w-full`}>
                                <h3 className={`story-text-${i}-highlight text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 text-muted-gold opacity-0`}>
                                    {item.highlight}
                                </h3>
                                <div className={`story-text-${i} text-xl md:text-2xl lg:text-4xl font-light leading-snug text-charcoal/90 dark:text-off-white/90`}>
                                    <SplitText text={item.text} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block w-1/2 h-[75vh] relative overflow-hidden rounded-4xl shadow-2xl">
                    {STORY_CONTENT.map((item, i) => (
                        <div
                            key={i}
                            className={`story-img-${i} absolute inset-0 w-full h-full will-change-transform drop-shadow-2xl`}
                            style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                        >
                            <img
                                src={item.image}
                                alt={item.highlight}
                                className="w-full h-full object-cover filter brightness-[0.75] contrast-125 grayscale-20"
                            />
                            <div className="absolute inset-0 bg-linear-to-tr from-off-white/60 dark:from-matte-black/60 via-transparent to-transparent mix-blend-multiply" />
                            <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-4xl pointer-events-none" />
                        </div>
                    ))}
                </div>

                <div className="md:hidden w-full flex flex-col gap-20">
                    <h2 className="text-xs tracking-[0.4em] text-muted-gold uppercase text-center mb-4">Cerita Kami</h2>
                    {STORY_CONTENT.map((item, i) => (
                        <div key={i} className="mobile-story-item flex flex-col gap-6">
                            <div className="w-full aspect-4/5 rounded-2xl overflow-hidden relative shadow-2xl">
                                <img
                                    src={item.image}
                                    alt={item.highlight}
                                    className="w-full h-full object-cover filter brightness-[0.7] grayscale-20"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-off-white dark:from-matte-black via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-2xl pointer-events-none" />
                            </div>
                            <div className="px-4">
                                <h3 className="text-3xl font-light mb-4 text-muted-gold">{item.highlight}</h3>
                                <p className="text-xl font-light leading-relaxed text-charcoal/80 dark:text-off-white/80">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
