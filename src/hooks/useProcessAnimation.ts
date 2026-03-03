import { useEffect } from 'react';
import type { RefObject } from 'react';
import gsap from 'gsap';

export const useProcessAnimation = (containerRef: RefObject<HTMLDivElement | null>, lineRef: RefObject<HTMLDivElement | null>) => {
    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const isDesktop = window.matchMedia('(min-width: 768px)').matches;
            const steps = gsap.utils.toArray('.process-step') as HTMLElement[];

            if (isDesktop) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "+=200%",
                        pin: true,
                        scrub: 1,
                    }
                });

                tl.to('.steps-container', {
                    xPercent: -100 * ((steps.length - 1) / steps.length),
                    ease: "none"
                }, 0);

                if (lineRef.current) {
                    tl.fromTo(lineRef.current,
                        { scaleX: 0 },
                        { scaleX: 1, ease: "none" },
                        0
                    );
                }
            } else {
                steps.forEach((step: HTMLElement) => {
                    gsap.fromTo(step,
                        { opacity: 0, x: -50 },
                        {
                            opacity: 1, x: 0, duration: 0.8, ease: "power2.out",
                            scrollTrigger: {
                                trigger: step,
                                start: "top 80%",
                            }
                        }
                    );
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, [containerRef, lineRef]);
};
