import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GALLERY_IMAGES } from '../data';

interface GalleryImageProps {
    src: string;
    yOffset?: number;
    speed?: number;
    className?: string;
}

const GalleryImage = ({ src, yOffset = 0, speed = 1, className = "" }: GalleryImageProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Create parallax range based on the speed multiplier
    const y = useTransform(scrollYProgress, [0, 1], [150 * speed, -150 * speed]);

    return (
        <div ref={ref} className={`relative overflow-hidden group rounded-3xl border border-black/5 dark:border-white/5 shadow-2xl ${className}`} style={{ top: yOffset }}>
            <motion.div style={{ y, height: "140%" }} className="absolute inset-[-20%] w-[140%]">
                <img
                    src={src}
                    alt="Gallery"
                    className="w-full h-full object-cover filter grayscale-60 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
            </motion.div>

            {/* Dark wash that disappears on hover */}
            <div className="absolute inset-0 bg-white/50 dark:bg-matte-black/40 group-hover:bg-transparent transition-colors duration-1000 ease-out pointer-events-none" />

            {/* Subtle luxurious gold glowing border on hover */}
            <div className="absolute inset-0 border border-muted-gold/0 group-hover:border-muted-gold/30 rounded-3xl transition-colors duration-700 pointer-events-none" />
        </div>
    );
};

export const Gallery = () => {
    return (
        <section id="gallery" className="relative w-full min-h-[120vh] bg-off-white dark:bg-charcoal py-32 px-4 md:px-16 lg:px-32 flex flex-col items-center justify-center z-20 transition-colors duration-700">
            <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white dark:from-matte-black to-transparent pointer-events-none transition-colors duration-700" />

            <div className="text-center mb-16 md:mb-24 z-10 w-full">
                <h2 className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-gold mb-8">Fasilitas Kami</h2>
                <p className="text-4xl md:text-7xl font-light text-charcoal dark:text-off-white tracking-widest leading-none">SKALA</p>
                <p className="text-4xl md:text-7xl font-bold tracking-widest italic leading-none text-transparent bg-clip-text bg-linear-to-r from-charcoal to-charcoal/40 dark:from-off-white dark:to-off-white/40 mt-2">GUDANG KAMI</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 w-full max-w-[1400px] relative z-10 px-4 md:px-0 mx-auto">
                {/* Image 0: Wide Hero - Spans 2 columns */}
                <GalleryImage src={GALLERY_IMAGES[0]} speed={1.1} className="md:col-span-2 md:row-span-1 h-[300px] md:h-[500px]" />

                {/* Image 1: Tall Vertical - Spans 2 rows on the right */}
                <GalleryImage src={GALLERY_IMAGES[1]} speed={0.9} className="md:col-span-1 md:row-span-2 h-[400px] md:h-full" />

                {/* Image 2: Square Bottom Left */}
                <GalleryImage src={GALLERY_IMAGES[2]} speed={1.2} className="md:col-span-1 md:row-span-1 h-[300px] md:h-[400px]" />

                {/* Image 3: Square Bottom Middle */}
                <GalleryImage src={GALLERY_IMAGES[3]} speed={0.95} className="md:col-span-1 md:row-span-1 h-[300px] md:h-[400px]" />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-white dark:from-matte-black to-transparent pointer-events-none transition-colors duration-700" />
        </section>
    );
};
