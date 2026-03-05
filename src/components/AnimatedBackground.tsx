import React, { useRef, useEffect } from 'react';

class Particle {
    x: number;
    y: number;
    directionX: number;
    directionY: number;
    size: number;
    color: string;
    alpha: number;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string,
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D
    ) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.color = color;
        this.canvas = canvas;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        this.ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        this.ctx.fill();
    }

    update() {
        if (this.x > this.canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > this.canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;

        this.alpha += (Math.random() - 0.5) * 0.01;
        if (this.alpha > 0.6) this.alpha = 0.6;
        if (this.alpha < 0.05) this.alpha = 0.05;

        this.draw();
    }
}

export const AnimatedBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particlesArray: Particle[] = [];
        let animationFrameId: number;

        const init = (isDark: boolean) => {
            particlesArray = [];
            const numberOfParticles = (window.innerHeight * window.innerWidth) / 12000;
            const particleColorRGB = isDark ? '245, 245, 247' : '10, 20, 40';

            for (let i = 0; i < numberOfParticles; i++) {
                const size = (Math.random() * 2) + 0.5;
                const x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
                const y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
                const directionX = (Math.random() * 0.4) - 0.2;
                const directionY = (Math.random() * -0.5) - 0.1;

                particlesArray.push(new Particle(x, y, directionX, directionY, size, particleColorRGB, canvas, ctx));
            }
        };

        const resizeCanvas = () => {
            const isDarkMode = document.documentElement.classList.contains('dark') ||
                window.matchMedia('(prefers-color-scheme: dark)').matches;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init(isDarkMode);
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
        };

        window.addEventListener('resize', resizeCanvas);

        const observer = new MutationObserver(() => {
            const isDark = document.documentElement.classList.contains('dark');
            init(isDark);
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-normal">
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-60 transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,white_90%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,10,21,1)_90%)] transition-colors duration-700" />
        </div>
    );
};
