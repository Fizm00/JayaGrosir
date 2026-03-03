import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
    title: string;
    description: string;
    image: string;
    delay: number;
}

const TiltCard = ({ title, description, image, delay }: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full aspect-3/4 md:aspect-4/5 rounded-4xl bg-off-white dark:bg-charcoal border border-black/5 dark:border-white/5 overflow-hidden group shadow-2xl"
        >
            <div
                className="absolute inset-[-10%] z-0 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ transform: "translateZ(40px)" }}
            >
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700 grayscale-40"
                />
            </div>

            <div className="absolute inset-0 bg-linear-to-tr from-muted-gold/0 to-muted-gold/0 group-hover:to-muted-gold/10 transition-colors duration-700 z-10 mix-blend-overlay" />

            <div className="absolute inset-0 bg-linear-to-t from-off-white dark:from-matte-black via-off-white/50 dark:via-matte-black/50 to-transparent z-10" />

            <div
                className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full"
                style={{ transform: "translateZ(70px)" }}
            >
                <div className="w-8 h-px bg-muted-gold mb-4 md:mb-6 origin-left transform scale-x-50 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-charcoal dark:text-white mb-2 md:mb-4 tracking-wide leading-tight">{title}</h3>
                <p className="text-charcoal/70 dark:text-white/60 text-sm lg:text-base tracking-wide leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

import { PRODUCTS_DATA } from '../data';

export const Products = () => {

    return (
        <section id="products" className="relative w-full min-h-screen bg-white dark:bg-matte-black py-32 px-4 md:px-16 overflow-hidden z-20 transition-colors duration-700">
            <div className="container mx-auto">
                <div className="flex flex-col items-center mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-gold mb-6"
                    >
                        Katalog Produk
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-charcoal dark:text-off-white"
                    >
                        Penuhi Permintaan <span className="font-bold italic pr-2">Pasar</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-[1400px] mx-auto perspective-[1000px]">
                    {PRODUCTS_DATA.map((item, i) => (
                        <TiltCard key={i} {...item} delay={0.2 * i} />
                    ))}
                </div>
            </div>
        </section>
    );
};
