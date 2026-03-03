import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSequenceAnimation = (
    containerRef: RefObject<HTMLElement | null>,
    textRef: RefObject<HTMLElement | null>
) => {
    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=400%',
                    pin: textRef.current,
                    scrub: true,
                }
            });

            const stages = gsap.utils.toArray('.seq-stage') as HTMLElement[];
            const durationPerStage = 1;

            stages.forEach((stage: HTMLElement, i) => {
                const startTime = i * durationPerStage;

                // Entrance
                tl.fromTo(stage,
                    { opacity: 0, y: 30, scale: 0.95 },
                    { opacity: 1, y: 0, scale: 1, duration: durationPerStage * 0.3, ease: "power2.out" },
                    startTime
                );

                // Slight zoom while active
                tl.to(stage,
                    { scale: 1.05, duration: durationPerStage * 0.4, ease: "none" },
                    startTime + durationPerStage * 0.3
                );

                // Exit
                tl.to(stage,
                    { opacity: 0, y: -30, duration: durationPerStage * 0.3, ease: "power2.in" },
                    startTime + durationPerStage * 0.7
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, [containerRef, textRef]);
};
