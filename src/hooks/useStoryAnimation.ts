import { useEffect } from 'react';
import type { RefObject } from 'react';
import gsap from 'gsap';

export const useStoryAnimation = (containerRef: RefObject<HTMLDivElement | null>) => {
    useEffect(() => {
        if (!containerRef.current) return;

        const isDesktop = window.matchMedia('(min-width: 768px)').matches;

        const ctx = gsap.context(() => {
            if (isDesktop) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: '+=300%',
                        pin: true,
                        scrub: 1,
                    }
                });

                tl.to('.story-bg-text', { x: '-20%', ease: 'none', duration: 3 }, 0);

                gsap.set('.story-img-0', { zIndex: 3 });
                gsap.set('.story-img-1', { zIndex: 2 });
                gsap.set('.story-img-2', { zIndex: 1 });

                gsap.set(`.story-text-0 .word-inner`, { y: '0%' });
                gsap.set(`.story-text-0-highlight`, { opacity: 1, y: 0 });

                tl.to(`.story-text-0 .word-inner`, { y: '-100%', duration: 0.5, stagger: 0.02, ease: 'power2.in' }, 0)
                    .to(`.story-text-0-highlight`, { opacity: 0, y: -20, duration: 0.5 }, 0)
                    .to('.story-img-0', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1, ease: 'power2.inOut' }, 0)
                    .fromTo('.story-img-1', { scale: 1.1 }, { scale: 1, duration: 1, ease: 'power2.out' }, 0)
                    .to(`.story-text-1 .word-inner`, { y: '0%', duration: 0.5, stagger: 0.02, ease: 'power2.out' }, 0.5)
                    .fromTo(`.story-text-1-highlight`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.5);

                tl.to(`.story-text-1 .word-inner`, { y: '-100%', duration: 0.5, stagger: 0.02, ease: 'power2.in' }, 1)
                    .to(`.story-text-1-highlight`, { opacity: 0, y: -20, duration: 0.5 }, 1)
                    .to('.story-img-1', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1, ease: 'power2.inOut' }, 1)
                    .fromTo('.story-img-2', { scale: 1.1 }, { scale: 1, duration: 1, ease: 'power2.out' }, 1)
                    .to(`.story-text-2 .word-inner`, { y: '0%', duration: 0.5, stagger: 0.02, ease: 'power2.out' }, 1.5)
                    .fromTo(`.story-text-2-highlight`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 1.5);

            } else {
                const items = gsap.utils.toArray('.mobile-story-item') as HTMLElement[];
                items.forEach((item: HTMLElement) => {
                    gsap.from(item, {
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                        },
                        opacity: 0,
                        y: 40,
                        duration: 1,
                        ease: 'power3.out'
                    });
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, [containerRef]);
};
