import { motion } from 'framer-motion';

interface MarqueeProps {
    text: string;
    speed?: number;
    direction?: 'left' | 'right';
    className?: string;
    textClassName?: string;
}

export const Marquee = ({ text, speed = 20, direction = 'left', className = "", textClassName = "" }: MarqueeProps) => {
    const animateX = direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"];

    return (
        <div className={`w-full overflow-hidden flex whitespace-nowrap select-none ${className}`}>
            <motion.div
                className="flex items-center"
                animate={{ x: animateX }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                <div className="flex shrink-0">
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className={`px-4 md:px-8 ${textClassName}`}>
                            {text}
                        </span>
                    ))}
                </div>
                <div className="flex shrink-0">
                    {[...Array(4)].map((_, i) => (
                        <span key={`dup-${i}`} className={`px-4 md:px-8 ${textClassName}`}>
                            {text}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
