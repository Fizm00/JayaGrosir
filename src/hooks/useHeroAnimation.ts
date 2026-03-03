import { useEffect } from 'react';
import type { RefObject } from 'react';
import gsap from 'gsap';

export const useHeroAnimation = (containerRef: RefObject<HTMLElement | null>) => {
    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            if (!containerRef.current?.querySelector('.hero-bg')) return;

            gsap.to('.hero-bg', {
                scale: 1.1,
                duration: 10,
                ease: 'none'
            });

            gsap.from('.hero-word', {
                y: 100,
                opacity: 0,
                duration: 2,
                stagger: 0.15,
                ease: 'power4.out',
                delay: 0.2
            });

            gsap.from('.hero-sub', {
                opacity: 0,
                y: 20,
                duration: 1.5,
                delay: 1.2,
                ease: 'power2.out'
            });

            gsap.to('.hero-content', {
                y: '-20vh',
                opacity: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, [containerRef]);
};
