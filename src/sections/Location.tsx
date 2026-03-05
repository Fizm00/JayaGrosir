import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Location = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section id="location" ref={sectionRef} className="py-24 md:py-40 bg-off-white dark:bg-charcoal relative z-20 overflow-hidden transition-colors duration-700">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 w-full max-w-[1600px]">
                <motion.div
                    initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10% round 2rem)', scale: 0.95 }}
                    whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 2rem)', scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-4xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/5 bg-white dark:bg-matte-black grid grid-cols-1 lg:grid-cols-2"
                >
                    <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white dark:bg-matte-black text-charcoal dark:text-off-white relative overflow-hidden transition-colors duration-700">
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none mix-blend-overlay" />

                        <div className="absolute -top-32 -right-32 w-96 h-96 bg-muted-gold/5 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <span className="inline-block py-2 px-6 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm text-xs md:text-sm font-bold tracking-widest uppercase mb-8 text-muted-gold">
                                Kunjungi Toko
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-8">
                                Mari Berbelanja &amp;<br />
                                <span className="font-bold italic text-muted-gold">Dapatkan Keuntungan.</span>
                            </h2>
                            <p className="text-charcoal/60 dark:text-white/60 text-lg font-light leading-relaxed mb-12 max-w-md">
                                Lihat langsung skala operasional kami, rasakan kualitas produk, dan negosiasikan harga terbaik untuk bisnis Anda secara langsung.
                            </p>

                            <div className="flex flex-col gap-8 mb-16">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 bg-off-white dark:bg-charcoal shrink-0 flex items-center justify-center text-muted-gold">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 text-charcoal dark:text-off-white">Pusat Grosir Jaya</h4>
                                        <p className="text-charcoal/50 dark:text-white/50 font-light leading-relaxed text-sm">Jl. Raya Kedu - Parakan Gang 1, RT.01/RW.01<br />Sabrang, Danurejo, Kec. Kedu,<br />Kabupaten Temanggung, Jawa Tengah 56252</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 bg-off-white dark:bg-charcoal shrink-0 flex items-center justify-center text-muted-gold">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 text-charcoal dark:text-off-white">Jam Operasional</h4>
                                        <p className="text-charcoal/50 dark:text-white/50 font-light leading-relaxed text-sm">Senin - Minggu: 07.30 - 18.00 WIB<br />(Buka Setiap Hari)</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://maps.app.goo.gl/icwDAyHAmGPUe3L6A"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-4 px-8 py-4 bg-charcoal dark:bg-charcoal hover:bg-muted-gold text-white dark:text-off-white rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-xl border border-black/10 dark:border-white/10 hover:border-transparent"
                            >
                                <span>Buka di Google Maps</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-auto min-h-[500px] overflow-hidden group">
                        <div className="absolute inset-0 bg-matte-black/40 z-10 pointer-events-none transition-colors duration-1000 group-hover:bg-transparent" />

                        <motion.div
                            style={{ y: yParallax }}
                            className="absolute inset-x-0 -top-[20%] h-[140%] w-full"
                        >
                            {import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL ? (
                                <iframe
                                    src={import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full object-cover filter grayscale-80 contrast-80 opacity-80 group-hover:grayscale-20 group-hover:opacity-100 transition-all duration-1000 ease-out"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-charcoal/20 dark:text-white/20 font-light tracking-widest text-sm bg-white dark:bg-[#111]">
                                    MAP CONFIGURATION MISSING
                                </div>
                            )}
                        </motion.div>

                        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none transition-opacity duration-300 lg:group-hover:opacity-0">
                            <div className="bg-white/90 dark:bg-matte-black/90 backdrop-blur-md px-6 py-3 rounded-full text-charcoal dark:text-off-white font-light text-sm tracking-widest uppercase shadow-2xl flex items-center gap-3 border border-black/10 dark:border-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="text-muted-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.3 6.3 1.4 1.4" /><path d="m16.3 16.3 1.4 1.4" /><path d="m6.3 17.7 1.4-1.4" /><path d="m16.3 7.7 1.4-1.4" /></svg>
                                Jelajahi Peta
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
