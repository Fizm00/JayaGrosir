import { useEffect } from 'react';
import type { RefObject } from 'react';
import gsap from 'gsap';

export const useVisionAnimation = (containerRef: RefObject<HTMLDivElement | null>) => {
    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            if (!containerRef.current?.querySelector('.vision-bg')) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=300%',
                    pin: true,
                    scrub: 1,
                }
            });

            tl.to('.vision-bg', { scale: 1.25, filter: 'brightness(0.15) grayscale(70%)', ease: 'none' }, 0);

            tl.fromTo('.vision-title span', { y: '120%' }, { y: '0%', duration: 1, ease: 'power3.out' }, 0);
            tl.fromTo('.vision-divider', { scaleY: 0 }, { scaleY: 1, duration: 1, ease: 'power3.inOut' }, 0);
            tl.fromTo('.vision-line span', { y: '120%', opacity: 0 }, { y: '0%', opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out' }, 0.2);

            tl.to({}, { duration: 1.5 });

            tl.to('.vision-title span', { y: '-120%', opacity: 0, duration: 1, ease: 'power3.in' });
            tl.to('.vision-line span', { y: '-120%', opacity: 0, stagger: 0.05, duration: 1, ease: 'power3.in' }, '<');

            tl.fromTo('.misi-title span', { y: '120%' }, { y: '0%', opacity: 1, duration: 1, ease: 'power3.out' }, '<0.5');
            tl.fromTo('.misi-line span', { y: '120%', opacity: 0 }, { y: '0%', opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out' }, '<0.2');

            tl.to({}, { duration: 1.5 });

        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, [containerRef]);
};
