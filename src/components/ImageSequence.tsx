import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImageSequenceProps {
    frameCount: number;
    urlTemplate: (index: number) => string;
    scrollHeight?: string;
}

export const ImageSequence = ({ frameCount, urlTemplate, scrollHeight = '+=300%' }: ImageSequenceProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = urlTemplate(i);
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
    }, [frameCount, urlTemplate]);

    useEffect(() => {
        if (!isLoaded || images.length === 0 || !canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render(Math.round(animation.frame));
        };

        window.addEventListener('resize', resize);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const render = (index: number) => {
            if (images[index] && images[index].complete && images[index].naturalWidth !== 0) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                const img = images[index];
                const canvasRatio = canvas.width / canvas.height;
                const imgRatio = img.width / img.height;
                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasRatio > imgRatio) {
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgRatio;
                    offsetX = 0;
                    offsetY = (canvas.height - drawHeight) / 2;
                } else {
                    drawWidth = canvas.height * imgRatio;
                    drawHeight = canvas.height;
                    offsetX = (canvas.width - drawWidth) / 2;
                    offsetY = 0;
                }

                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                const darkness = Math.max(0, 1 - (index / frameCount));
                const rgb = Math.floor(25 * darkness);
                gradient.addColorStop(0, `rgb(${rgb}, ${rgb}, ${rgb})`);
                gradient.addColorStop(1, '#0f0f0f');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.font = '300 12px Inter';
                ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.textAlign = 'center';
                ctx.fillText(`Provide images at /public/frames/sequence_XXXX.webp to enable sequence.`, canvas.width / 2, canvas.height - 40);

                ctx.beginPath();
                const radius = (canvas.width / 4) + (Math.sin(index * 0.1) * 50);
                ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(197, 160, 89, ${0.05 + Math.sin(index * 0.05) * 0.02})`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        };

        const animation = { frame: 0 };
        render(0);

        const st = ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: scrollHeight,
            pin: true,
            scrub: 0.5,
            animation: gsap.to(animation, {
                frame: frameCount - 1,
                snap: 'frame',
                ease: 'none',
                onUpdate: () => render(Math.round(animation.frame))
            })
        });

        return () => {
            window.removeEventListener('resize', resize);
            st.kill();
        };
    }, [isLoaded, images, frameCount, urlTemplate, scrollHeight]);

    return (
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-matte-black -z-10">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-linear-to-t from-matte-black via-transparent to-matte-black/50 mix-blend-multiply" />
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(15,15,15,1)] pointer-events-none" />
        </div>
    );
};
