
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

import img1 from '../assets/img/IMG_9671.webp';
import img2 from '../assets/img/IMG_9676.webp';
import img3 from '../assets/img/IMG_9673.webp';

const data = [
  { 
      title: "MASIF", 
      subtitle: "Skala Gudang", 
      desc: "Kapasitas penyimpanan raksasa yang dirancang untuk menjaga ketersediaan stok tanpa henti bagi ribuan mitra bisnis.",
      img: img1 
  },
  { 
      title: "TERINTEGRASI", 
      subtitle: "Sistem Logistik", 
      desc: "Manajemen rantai pasok modern memastikan setiap distribusi berjalan cepat, presisi, dan dapat diandalkan.",
      img: img2 
  },
  { 
      title: "TERJAMIN", 
      subtitle: "Kesegaran Mutu", 
      desc: "Fasilitas kontrol suhu dan standar sirkulasi udara optimal menjaga kualitas produk grosir tetap prima hingga ke tangan pelanggan.",
      img: img3 
  }
];

export const Showcase = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const items = gsap.utils.toArray('.showcase-item') as HTMLElement[];
        
        items.forEach((item) => {
            const img = item.querySelector('.showcase-img');
            const content = item.querySelector('.showcase-content');
            
            if (img) {
                gsap.fromTo(img, 
                    { opacity: 0, scale: 0.9, y: 50 },
                    { 
                        opacity: 1, scale: 1, y: 0, 
                        duration: 1.2, 
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                        }
                    }
                );
            }

            if (content) {
                gsap.fromTo(content,
                    { opacity: 0, x: item.classList.contains('flex-row-reverse') ? -50 : 50 },
                    { 
                        opacity: 1, x: 0, 
                        duration: 1, 
                        delay: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                        }
                    }
                );
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-matte-black text-off-white overflow-hidden relative z-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-24">
                    <h2 className="text-sm md:text-base tracking-[0.4em] uppercase text-muted-gold font-bold mb-4">
                        Infrastruktur Utama
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-light">
                        Pilar <span className="font-bold italic">Kekuatan Kami.</span>
                    </h3>
                </div>

                <div className="flex flex-col gap-24 md:gap-40">
                    {data.map((item, i) => (
                        <div 
                            key={i} 
                            className={`showcase-item flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
                        >
                            <div className="showcase-img w-full lg:w-1/2 aspect-4/3 lg:aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="absolute inset-0 w-full h-full object-cover filter brightness-75 transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 to-transparent pointer-events-none"></div>
                                <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none"></div>
                            </div>
                            
                            <div className="showcase-content w-full lg:w-1/2 flex flex-col justify-center">
                                <span className="text-muted-gold text-sm tracking-[0.3em] font-bold uppercase mb-4 block">
                                    0{i + 1} / 0{data.length} — {item.subtitle}
                                </span>
                                <h4 className="text-5xl md:text-6xl lg:text-7xl font-black italic tracking-tighter mb-6 text-white drop-shadow-lg">
                                    {item.title}
                                </h4>
                                <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-lg">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Very subtle background noise/texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
        </section>
    );
};
