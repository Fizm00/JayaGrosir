import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <footer ref={ref} className="relative w-full bg-off-white dark:bg-footer-bg text-charcoal dark:text-white pt-40 pb-12 overflow-hidden z-20 transition-colors duration-700">
            <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10">

                <div className="mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-[12vw] leading-[0.85] font-light tracking-tighter mb-8 drop-shadow-xl"
                    >
                        JAYA<span className="font-bold italic text-muted-gold">GROSIR</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-charcoal/40 dark:text-white/40 tracking-[0.3em] text-xs md:text-sm uppercase max-w-xl leading-relaxed"
                    >
                        Mitra Strategis Retail & Grosir Nasional. Mengantarkan kesegaran dan ketersediaan tanpa kompromi.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-32 border-t border-black/5 dark:border-white/5 pt-16">
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xs tracking-[0.4em] uppercase text-muted-gold font-bold">Lokasi Pusat</h4>
                        <p className="text-charcoal/50 dark:text-white/50 text-sm leading-loose max-w-xs font-light hoverable w-fit">
                            Jl. Raya Kedu - Parakan Gang 1<br />
                            Temanggung, Jawa Tengah<br />
                            Indonesia 56252
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-xs tracking-[0.4em] uppercase text-muted-gold font-bold">Jam Oprasional</h4>
                        <ul className="text-charcoal/50 dark:text-white/50 text-sm leading-loose font-light space-y-2">
                            <li className="flex justify-between md:max-w-[200px] hoverable"><span>Senin - Minggu:</span> <span>07:30 - 18:00</span></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6 md:items-end">
                        <h4 className="text-xs tracking-[0.4em] uppercase text-muted-gold font-bold md:text-right">Hubungi Kami</h4>
                        <div className="flex flex-col gap-4 md:items-end text-sm font-light">
                            {[
                                { name: 'Instagram', href: '#' },
                                { name: 'WhatsApp', href: 'https://wa.me/62882008756907' },
                                { name: 'Email Us', href: 'mailto:cs@jayagrosir.com' }
                            ].map((social, i) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target={social.href.startsWith('http') ? "_blank" : "_self"}
                                    rel={social.href.startsWith('http') ? "noopener noreferrer" : ""}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                                    className="hoverable text-charcoal/50 dark:text-white/50 hover:text-muted-gold transition-colors duration-300 w-fit"
                                >
                                    {social.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    className="w-full h-px bg-charcoal/10 dark:bg-white/10 origin-left mb-12"
                />

                <div className="flex flex-col-reverse md:flex-row justify-between items-center text-[10px] md:text-xs tracking-widest text-charcoal/30 dark:text-white/30 uppercase gap-8">
                    <p>&copy; {new Date().getFullYear()} Jaya Grosir. All rights reserved.</p>
                    <div className="flex gap-8 md:gap-12">
                        <a href="#" className="hoverable hover:text-charcoal dark:hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hoverable hover:text-charcoal dark:hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
        </footer>
    );
};
