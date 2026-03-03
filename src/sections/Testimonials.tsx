import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../data';

export const Testimonials = () => {
    // Duplicate array to create a seamless infinite loop
    const doubledTestimonials = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

    return (
        <section id="testimonials" className="py-32 md:py-40 bg-white dark:bg-charcoal overflow-hidden text-charcoal dark:text-off-white z-20 relative transition-colors duration-700">
            <div className="container mx-auto px-6 md:px-16 lg:px-32 mb-16 md:mb-24 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight max-w-2xl flex flex-wrap gap-x-3 gap-y-2">
                        {"Dipercaya Oleh Ratusan".split(" ").map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="inline-block"
                            >
                                {word}
                            </motion.span>
                        ))}
                        <div className="w-full h-0 xl:hidden" /> {/* Line break on mobile/tablet */}
                        {"Mitra Bisnis Loyal.".split(" ").map((word, i) => (
                            <motion.span
                                key={i + 10}
                                initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: (i + 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="inline-block text-muted-gold font-bold italic"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-charcoal/60 dark:text-white/60 max-w-sm text-lg font-light leading-relaxed"
                    >
                        Keberhasilan bisnis Anda adalah prioritas kami. Dengarkan langsung pengalaman mereka berkembang bersama Jaya Grosir.
                    </motion.p>
                </div>
            </div>

            {/* Scrolling Marquee Container */}
            <div className="relative w-full flex overflow-hidden">
                {/* Fade Edges for premium effect */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-white dark:from-charcoal to-transparent z-10 pointer-events-none transition-colors duration-700" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-white dark:from-charcoal to-transparent z-10 pointer-events-none transition-colors duration-700" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40, // Elegant slow speed
                    }}
                    className="flex gap-8 px-4 w-max"
                >
                    {doubledTestimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="w-[300px] md:w-[450px] shrink-0 bg-off-white dark:bg-matte-black p-8 md:p-12 rounded-4xl border border-black/5 dark:border-white/5 flex flex-col justify-between group hover:border-muted-gold/30 transition-colors duration-500 shadow-xl"
                        >
                            <div>
                                <div className="flex gap-1 mb-8">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-muted-gold fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <p className="text-xl md:text-2xl font-light text-charcoal/90 dark:text-off-white/90 leading-snug mb-10 group-hover:text-charcoal dark:group-hover:text-off-white transition-colors duration-300">"{testimonial.content}"</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-charcoal border border-black/10 dark:border-white/10 flex items-center justify-center text-muted-gold font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-lg text-charcoal dark:text-off-white tracking-wide">{testimonial.name}</h4>
                                    <p className="text-charcoal/40 dark:text-white/40 font-light text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute top-0 left-0 w-full h-px bg-black/5 dark:bg-white/5" />
        </section>
    );
};
