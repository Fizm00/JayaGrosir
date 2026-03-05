import { motion } from 'framer-motion';

import { BENTO_ITEMS } from '../data';
import { AnimatedBackground } from '../components/AnimatedBackground';

export const BentoGrid = () => {
    return (
        <section className="relative w-full pt-32 pb-48 md:pb-64 bg-off-white dark:bg-matte-black text-charcoal dark:text-off-white overflow-hidden z-20 transition-colors duration-700">
            <AnimatedBackground />

            <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10">

                <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-gold mb-6"
                    >
                        Nilai Tambah
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-light tracking-tight text-charcoal dark:text-white max-w-2xl"
                    >
                        Lebih Dari Sekadar <span className="font-bold italic">Pemasok</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6 md:gap-8 max-w-6xl mx-auto">
                    {BENTO_ITEMS.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                            className={`relative rounded-3xl p-8 md:p-12 flex flex-col justify-end overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-xl border border-black/5 dark:border-white/5 ${item.className}`}
                        >
                            {item.image && (
                                <>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] grayscale-40 group-hover:scale-110 group-hover:brightness-[0.6] transition-all duration-1000 ease-out pointer-events-none"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-off-white/90 dark:from-matte-black/90 via-off-white/40 dark:via-matte-black/40 to-transparent pointer-events-none transition-colors duration-700" />
                                </>
                            )}

                            {item.icon && <div className="relative z-10">{item.icon}</div>}

                            <div className="relative z-10">
                                <h4 className="text-2xl md:text-3xl font-light text-charcoal dark:text-white mb-4 tracking-wide group-hover:text-muted-gold transition-colors duration-300">
                                    {item.title}
                                </h4>
                                <p className="text-charcoal/60 dark:text-white/60 font-light leading-relaxed max-w-md">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-muted-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
