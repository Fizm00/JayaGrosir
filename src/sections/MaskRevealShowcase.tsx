import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

import img1 from '../assets/img/IMG_9671.webp';
import img2 from '../assets/img/IMG_9672.webp';
import img3 from '../assets/img/IMG_9673.webp';

const data = [
  { text: "MASIF", label: "Skala Gudang", img: img1 },
  { text: "TERINTEGRASI", label: "Sistem Logistik", img: img2 },
  { text: "TERJAMIN", label: "Kesegaran Mutu", img: img3 }
];

export const MaskRevealShowcase = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const panels = gsap.utils.toArray('.mask-panel') as HTMLElement[];
        
        // Ensure all panels except the first are hidden initially
        gsap.set(panels.slice(1), { autoAlpha: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=400%", // 400vh total scroll distance
                scrub: true,
                pin: true,
                anticipatePin: 1
            }
        });

        panels.forEach((panel, i) => {
            const maskRect = panel.querySelector('.mask-rect') as SVGRectElement;
            const label = panel.querySelector('.mask-label') as HTMLElement;
            const textGroup = panel.querySelector('.text-group') as SVGGElement;
            
            // If it's not the first panel, bring it in (fade in the whole panel)
            if (i > 0) {
                tl.to(panel, { autoAlpha: 1, duration: 0.5 });
            }

            // Zoom the text massively to reveal the image
            tl.to(textGroup, { 
                scale: 150,
                duration: 2, 
                ease: "power2.inOut",
                transformOrigin: "50% 50%"
            });

            // Fade out the label as we zoom
            tl.to(label, { autoAlpha: 0, duration: 0.5 }, "<0.5");

            // Fade out the SVG mask wrapper entirely so the image is perfectly clear
            tl.to(maskRect, { autoAlpha: 0, duration: 0.5 }, "-=0.5");

            // If this is not the last panel, we fade out the current panel to reveal the next one underneath
            if (i < panels.length - 1) {
                tl.to({}, { duration: 0.5 }); // Short pause to admire the image
                
                // Fade out current panel. Because the next panel is faded in at the start of the NEXT loop iteration,
                // we actually don't want to fade out the current panel. We want the NEXT panel to fade IN ON TOP of it!
                // Since they are stacked 1, 2, 3 (z-index 30, 20, 10)... wait, if they are stacked 30, 20, 10,
                // the NEXT panel (20) is UNDER the current panel (30). 
                // Therefore, fading OUT the current panel (30) will reveal the next panel (20).
                tl.to(panel, { autoAlpha: 0, duration: 0.5 }); 
            }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-screen z-10 overflow-hidden bg-white dark:bg-matte-black">
            {data.map((item, i) => (
                <div 
                    key={item.text} 
                    className="mask-panel absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center isolate"
                    style={{ zIndex: 30 - (i * 10) }}
                >
                    {/* Background Image Container */}
                    <div className="absolute inset-0 w-full h-full">
                        <img src={item.img} alt={item.text} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    {/* SVG Mask Layer */}
                    <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <mask id={`mask-${i}`}>
                                    {/* Everything under white stays opaque, under black becomes transparent */}
                                    <rect width="100%" height="100%" fill="white" />
                                    <g className="text-group">
                                        <text 
                                            x="50%" 
                                            y="50%" 
                                            textAnchor="middle" 
                                            dominantBaseline="middle" 
                                            fill="black"
                                            className="font-black italic tracking-tighter"
                                            style={{ fontSize: '15vw' }}
                                        >
                                            {item.text}
                                        </text>
                                    </g>
                                </mask>
                            </defs>
                            {/* The screen overlay that gets cut out by the mask */}
                            <rect 
                                className="mask-rect fill-white dark:fill-matte-black"
                                width="100%" 
                                height="100%" 
                                mask={`url(#mask-${i})`} 
                            />
                        </svg>
                    </div>

                    {/* HTML Label (on top of the SVG) */}
                    <div className="absolute top-[35%] left-0 w-full flex justify-center z-20 pointer-events-none">
                        <h3 className="mask-label text-xl md:text-3xl font-light tracking-[0.2em] uppercase text-black dark:text-white mix-blend-difference">
                            {item.label}
                        </h3>
                    </div>
                </div>
            ))}
        </section>
    );
};
