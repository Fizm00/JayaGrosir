import { Layout } from './components/Layout';
import { Hero } from './sections/Hero';
import { Story } from './sections/Story';
import { Vision } from './sections/Vision';
import { SequenceShowcase } from './sections/SequenceShowcase';
import { Stats } from './sections/Stats';
import { Products } from './sections/Products';
import { Advantages } from './sections/Advantages';
import { Gallery } from './sections/Gallery';
import { Testimonials } from './sections/Testimonials';
import { Location } from './sections/Location';
import { Footer } from './sections/Footer';
import { Marquee } from './components/Marquee';
import { Process } from './sections/Process';
import { BentoGrid } from './sections/BentoGrid';

function App() {
  return (
    <Layout>
      <Hero />

      <div className="bg-white dark:bg-matte-black py-4 border-b border-black/5 dark:border-white/5 transition-colors duration-700">
        <Marquee
          text="DISTRIBUSI CEPAT • STOK MELIMPAH • KUALITAS TERJAMIN • HARGA GROSIR • "
          speed={30}
          textClassName="text-charcoal/20 dark:text-white/20 font-bold tracking-[0.2em]"
        />
      </div>

      <Story />
      <SequenceShowcase />
      <Vision />

      <div className="bg-white dark:bg-matte-black py-4 border-y border-black/5 dark:border-white/5 transition-colors duration-700">
        <Marquee
          text="KEMITRAAN JANGKA PANJANG • LOGISTIK HANDAL • PELAYANAN MAKSIMAL • "
          speed={25}
          direction="right"
          textClassName="text-muted-gold/40 font-bold tracking-[0.2em]"
        />
      </div>

      <Stats />
      <Products />
      <Advantages />

      <Process />
      <BentoGrid />

      <Gallery />
      <Testimonials />
      <Location />
      <Footer />
    </Layout>
  );
}

export default App;
