import { useEffect } from 'react';
import type { RefObject } from 'react';
import gsap from 'gsap';

export const useStatsAnimation = (sectionRef: RefObject<HTMLDivElement | null>, statsData: { label: string, value: number, suffix: string }[]) => {
    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            const numbers = gsap.utils.toArray('.stat-number') as HTMLElement[];

            numbers.forEach((num: HTMLElement, i) => {
                const endValue = statsData[i].value;
                gsap.fromTo(num,
                    { innerHTML: 0 },
                    {
                        innerHTML: endValue,
                        duration: 2,
                        ease: "power2.out",
                        snap: { innerHTML: 1 },
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            once: true
                        }
                    }
                );
            });

            gsap.from('.stat-item', {
                opacity: 0,
                y: 40,
                stagger: 0.2,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true
                }
            });

            gsap.from('.stat-line', {
                scaleX: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, [sectionRef, statsData]);
};
