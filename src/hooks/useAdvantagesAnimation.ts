import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';

export const useAdvantagesAnimation = (containerRef: RefObject<HTMLElement | null>, itemsCount: number) => {
    useEffect(() => {
        const isDesktop = window.matchMedia('(min-width: 768px)').matches;

        if (!isDesktop || !containerRef.current || itemsCount === 0) return;

        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray('.advantage-item') as HTMLElement[];
            const bgItems = gsap.utils.toArray('.advantage-bg') as HTMLElement[];
            const totalScroll = items.length * 100; // %

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalScroll}%`,
                    pin: true,
                    scrub: true,
                }
            });

            tl.to('.adv-progress-bar', { scaleY: 1, ease: "none", duration: items.length }, 0);

            // Abstract overlay remains constant
            tl.to('.adv-overlay', { opacity: 0.6, ease: "none", duration: items.length }, 0);

            items.forEach((item: HTMLElement, i) => {
                const bgItem = bgItems[i];
                gsap.set(item, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 40 });
                gsap.set(bgItem, { opacity: i === 0 ? 0.4 : 0, scale: i === 0 ? 1 : 1.1 });

                if (i > 0) {
                    const startTime = i - 0.5;
                    // Text animation
                    tl.to(items[i - 1], { opacity: 0, y: -40, duration: 0.5, ease: "power2.inOut" }, startTime);
                    tl.to(item, { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" }, startTime);

                    // Background image animation (crossfade & slight zoom in)
                    tl.to(bgItems[i - 1], { opacity: 0, duration: 0.5, ease: "power2.inOut" }, startTime);
                    tl.to(bgItem, { opacity: 0.4, scale: 1, duration: 0.5, ease: "power2.out" }, startTime);
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, [containerRef, itemsCount]);
};
