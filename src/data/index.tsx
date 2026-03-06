import img1 from '../assets/img/IMG_9671.webp';
import img2 from '../assets/img/IMG_9672.webp';
import img3 from '../assets/img/IMG_9673.webp';
import img4 from '../assets/img/IMG_9674.webp';
import img5 from '../assets/img/IMG_9675.webp';
import img6 from '../assets/img/IMG_9676.webp';
import img7 from '../assets/img/IMG_9677.webp';

export const STORY_CONTENT = [
    {
        highlight: "Skala Besar",
        text: "Menghadirkan konsep supermarket grosir untuk kenyamanan belanja skala besar.",
        image: img1
    },
    {
        highlight: "Kebutuhan Pokok",
        text: "Menyediakan kebutuhan pokok, beras, minyak, hingga perlengkapan rumah.",
        image: img6
    },
    {
        highlight: "Pilihan Cerdas",
        text: "Pilihan cerdas berbelanja untuk kulakan warung maupun kebutuhan harian rumah tangga.",
        image: img3
    }
];

export const PRODUCTS_DATA = [
    {
        title: "Beras & Sembako",
        description: "Berbagai pilihan beras, gula, dan kebutuhan pangan esensial kualitas terjamin untuk suplai kulakan warung maupun kebutuhan dapur.",
        image: img4
    },
    {
        title: "Minyak & Bumbu",
        description: "Koleksi lengkap minyak goreng, saus, dan bumbu dapur tersedia dalam kemasan eceran hingga kartonan dengan harga bersaing.",
        image: img5
    },
    {
        title: "Kebutuhan Rumah",
        description: "Sabun, deterjen, dan beragam perlengkapan pembersih rumah tangga yang tertata rapi memberi pengalaman berbelanja layaknya di supermarket.",
        image: img6
    }
];

export const BENTO_ITEMS = [
    {
        title: "Harga Grosir Terbaik",
        desc: "Kalkulasi margin yang transparan untuk mitra bisnis kami.",
        className: "col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 bg-white dark:bg-charcoal",
        image: img7
    },
    {
        title: "Kualitas Premium",
        desc: "Sortir ketat untuk setiap barang yang masuk ke gudang.",
        className: "col-span-1 bg-off-white dark:bg-charcoal",
        icon: (
            <svg className="w-8 h-8 text-muted-gold mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        )
    },
    {
        title: "Stok Melimpah",
        desc: "Kapasitas gudang raksasa menjamin ketersediaan barang.",
        className: "col-span-1 bg-white dark:bg-charcoal border border-black/5 dark:border-white/5",
        icon: (
            <svg className="w-8 h-8 text-muted-gold mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        )
    },
    {
        title: "Distribusi Nasional",
        desc: "Jangkauan logistik terpadu untuk pengiriman tepat waktu.",
        className: "col-span-1 md:col-span-2 lg:col-span-3 min-h-[300px] bg-off-white dark:bg-charcoal relative overflow-hidden group",
        image: img1
    }
];

export const PROCESS_STEPS = [
    {
        num: "01",
        title: "Pemesanan Fleksibel",
        desc: "Lakukan pemesanan grosir dengan mudah melalui kontak langsung maupun kunjungan ke toko kami. Tim kami siap merespons daftar kebutuhan Anda."
    },
    {
        num: "02",
        title: "Penyiapan & Sortir",
        desc: "Barang pesanan Anda akan segera disiapkan dari area penyimpanan masif kami, melalui proses pengecekan kualitas untuk memastikan kesegaran dan kondisi optimal."
    },
    {
        num: "03",
        title: "Pengemasan Aman",
        desc: "Kru handal kami memproses pesanan skala besar dengan metode pengemasan yang terstandar sehingga barang aman dari tumpahan atau kerusakan."
    },
    {
        num: "04",
        title: "Distribusi Cepat",
        desc: "Pesanan siap diangkut. Area muat yang luas memudahkan kendaraan Anda, atau manfaatkan layanan logistik terintegrasi kami untuk pengiriman tepat waktu."
    }
];

export const VISION_LINES = [
    "Menjadi pusat grosir",
    "sembako terdepan yang",
    "menghadirkan pengalaman",
    "berbelanja nyaman layaknya",
    "supermarket modern."
];

export const MISSION_LINES = [
    "Menyediakan stok lengkap",
    "dengan harga kompetitif.",
    "Membangun distribusi logistik",
    "yang efisien, aman, dan",
    "selalu dapat diandalkan."
];

export const GALLERY_IMAGES = [
    img2,
    img3,
    img4,
    img5
];

export const STATS_DATA = [
    { value: 1, suffix: "+", label: "Tahun Berdiri" },
    { value: 10, suffix: "+", label: "Mitra Toko" },
    { value: 1, suffix: "T", label: "Ton Barang/Bulan" },
    { value: 100, suffix: "%", label: "Kepuasan Klien" }
];

export const TESTIMONIALS_DATA = [
    {
        name: "Ana Muslimah",
        role: "Customer",
        content: "Toko yang sangat lengkap, bersih, dan pelayanan cepat serta parkiran luas.",
        rating: 5
    },
    {
        name: "Tugas Aja",
        role: "Customer",
        content: "Harga terjangkau murah murah bgt jauh dari toko lain.",
        rating: 5
    },
    {
        name: "Djoto Purwanto",
        role: "Customer",
        content: "Kalau kamu bodoh, pergilah berbelanja dan beli beberapa hadiah Idul Fitri dari Jaya Grosir, harganya murah.",
        rating: 5
    },
    {
        name: "Ibu Kartini",
        role: "Customer",
        content: "Sangat bersyukur kenal Jaya Grosir. Harga miring tapi barangnya premium semua.",
        rating: 5
    },
    {
        name: "Agus Pratama",
        role: "Customer",
        content: "Sistem pemesanan yang mudah dan respon admin yang cepat membuat saya tenang. Tidak pernah ada masalah stok kosong.",
        rating: 5
    }
];

export const ADVANTAGES_DATA = [
    {
        title: "Kualitas & Tata Letak",
        desc: "Barang selalu baru dan ditata rapi layaknya supermarket berbintang untuk kemudahan navigasi dan menjaga kenyamanan Anda berbelanja.",
        image: img3
    },
    {
        title: "Harga Grosir Terbaik",
        desc: "Nikmati penawaran harga super tangguh yang menguntungkan baik untuk modal usaha warung maupun persediaan pokok keluarga.",
        image: img7
    },
    {
        title: "Stok Etalase Lengkap",
        desc: "Area display yang sangat lega memastikan lorong-lorong kami selalu diisi berbagai pilihan merek populer secara melimpah.",
        image: img1
    },
    {
        title: "Layanan Cepat Tanggap",
        desc: "Kasir yang handal dan kru toko sigap membantu pengemasan skala besar, menghemat waktu belanja berharga Anda.",
        image: img5
    }
];

export const SHOWCASE_DATA = [
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
