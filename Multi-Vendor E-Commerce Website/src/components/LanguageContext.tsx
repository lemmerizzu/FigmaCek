import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation objects
const translations = {
  en: {
    // Header
    'header.search.placeholder': 'Search industrial products & services...',
    'header.signin': 'Sign In',
    'header.signup': 'Sign Up',
    'header.cart': 'Cart',
    
    // Hero Banner
    'hero.badge': 'Trusted by 500+ SMEs',
    'hero.title': 'Your Gateway to',
    'hero.title.highlight': 'Industrial Excellence',
    'hero.description': 'Connect with verified local vendors for industrial products, professional services, and business solutions. Empowering SMEs to grow their reach and strengthen local commerce.',
    'hero.browse.products': 'Browse Products',
    'hero.explore.services': 'Explore Services',
    'hero.browse.all': 'Browse Products & Services',
    'hero.vendor.title': 'Ready to grow your business?',
    'hero.vendor.description': 'Join hundreds of vendors already expanding their reach through our platform',
    'hero.become.vendor': 'Become a Vendor',
    
    // Categories
    'categories.badge': 'Explore Categories',
    'categories.title': 'Find Products & Services by',
    'categories.title.highlight': 'Industry',
    'categories.description': 'Discover high-quality industrial products and professional services from verified local SMEs across multiple sectors',
    'categories.industrial.equipment': 'Industrial Equipment',
    'categories.industrial.equipment.desc': 'Heavy machinery and industrial tools',
    'categories.manufacturing.tools': 'Manufacturing Tools',
    'categories.manufacturing.tools.desc': 'Precision manufacturing equipment',
    'categories.safety.equipment': 'Safety Equipment',
    'categories.safety.equipment.desc': 'Industrial safety and protection gear',
    'categories.electronics': 'Electronics & Components',
    'categories.electronics.desc': 'Electrical components and systems',
    'categories.business.services': 'Business Services',
    'categories.business.services.desc': 'Professional consulting & support',
    
    // Top Selling Products
    'products.badge': 'Most Popular',
    'products.title': 'Top-Selling Products &',
    'products.title.highlight': 'Services',
    'products.description': 'Discover the most trusted and highly-rated offerings from our verified vendor community',
    'products.reviews': 'reviews',
    'products.add.cart': 'Add to Cart',
    'products.get.quote': 'Get Quote',
    'products.view.all': 'View All Products & Services',
    'products.product': 'Product',
    'products.service': 'Service',
    'products.sale': 'Limited Sale',
    
    // Footer
    'footer.company.description': 'Connecting businesses with quality industrial products and professional services from verified local SMEs. Building stronger communities through trusted partnerships.',
    'footer.quick.links': 'Quick Links',
    'footer.about': 'About Us',
    'footer.how.works': 'How It Works',
    'footer.become.vendor': 'Become a Vendor',
    'footer.support': 'Support Center',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.categories': 'Categories',
    'footer.contact': 'Contact Us',
    'footer.newsletter.title': 'Stay Connected',
    'footer.newsletter.description': 'Get the latest industrial products, services, and vendor updates delivered to your inbox.',
    'footer.newsletter.placeholder': 'Enter your email address',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.copyright': '© 2025 boost-. All rights reserved. Empowering SMEs worldwide.',
    'footer.payments': 'Secure Payments:',
    
    // User Type Selection
    'usertype.title': 'Join boost-',
    'usertype.description': 'Choose how you\'d like to get started with our platform',
    'usertype.buyer.title': 'I\'m a Buyer',
    'usertype.buyer.description': 'Looking for products and services from local vendors',
    'usertype.buyer.features': 'Browse thousands of products • Compare prices and reviews • Direct vendor communication • Secure transactions',
    'usertype.vendor.title': 'I\'m a Vendor',
    'usertype.vendor.description': 'Want to sell products or services on the platform',
    'usertype.vendor.features': 'Reach new customers • Manage your inventory • Track sales and analytics • Grow your business',
    'usertype.continue': 'Continue'
  },
  id: {
    // Header
    'header.search.placeholder': 'Cari produk industri & layanan...',
    'header.signin': 'Masuk',
    'header.signup': 'Daftar',
    'header.cart': 'Keranjang',
    
    // Hero Banner
    'hero.badge': 'Dipercaya oleh 500+ UKM',
    'hero.title': 'Gerbang Anda Menuju',
    'hero.title.highlight': 'Keunggulan Industri',
    'hero.description': 'Terhubung dengan vendor lokal terverifikasi untuk produk industri, layanan profesional, dan solusi bisnis. Memberdayakan UKM untuk memperluas jangkauan dan memperkuat perdagangan lokal.',
    'hero.browse.products': 'Jelajahi Produk',
    'hero.explore.services': 'Jelajahi Layanan',
    'hero.browse.all': 'Jelajahi Produk & Layanan',
    'hero.vendor.title': 'Siap mengembangkan bisnis Anda?',
    'hero.vendor.description': 'Bergabunglah dengan ratusan vendor yang sudah memperluas jangkauan melalui platform kami',
    'hero.become.vendor': 'Jadi Vendor',
    
    // Categories
    'categories.badge': 'Jelajahi Kategori',
    'categories.title': 'Temukan Produk & Layanan berdasarkan',
    'categories.title.highlight': 'Industri',
    'categories.description': 'Temukan produk industri berkualitas tinggi dan layanan profesional dari UKM lokal terverifikasi di berbagai sektor',
    'categories.industrial.equipment': 'Peralatan Industri',
    'categories.industrial.equipment.desc': 'Mesin berat dan peralatan industri',
    'categories.manufacturing.tools': 'Alat Manufaktur',
    'categories.manufacturing.tools.desc': 'Peralatan manufaktur presisi',
    'categories.safety.equipment': 'Peralatan Keselamatan',
    'categories.safety.equipment.desc': 'Perlengkapan keselamatan dan proteksi industri',
    'categories.electronics': 'Elektronik & Komponen',
    'categories.electronics.desc': 'Komponen dan sistem listrik',
    'categories.business.services': 'Layanan Bisnis',
    'categories.business.services.desc': 'Konsultasi profesional & dukungan',
    
    // Top Selling Products
    'products.badge': 'Paling Populer',
    'products.title': 'Produk & Layanan',
    'products.title.highlight': 'Terlaris',
    'products.description': 'Temukan penawaran paling dipercaya dan berperingkat tinggi dari komunitas vendor terverifikasi kami',
    'products.reviews': 'ulasan',
    'products.add.cart': 'Tambah ke Keranjang',
    'products.get.quote': 'Minta Penawaran',
    'products.view.all': 'Lihat Semua Produk & Layanan',
    'products.product': 'Produk',
    'products.service': 'Layanan',
    'products.sale': 'Obral Terbatas',
    
    // Footer
    'footer.company.description': 'Menghubungkan bisnis dengan produk industri berkualitas dan layanan profesional dari UKM lokal terverifikasi. Membangun komunitas yang lebih kuat melalui kemitraan terpercaya.',
    'footer.quick.links': 'Tautan Cepat',
    'footer.about': 'Tentang Kami',
    'footer.how.works': 'Cara Kerja',
    'footer.become.vendor': 'Jadi Vendor',
    'footer.support': 'Pusat Bantuan',
    'footer.privacy': 'Kebijakan Privasi',
    'footer.terms': 'Syarat Layanan',
    'footer.categories': 'Kategori',
    'footer.contact': 'Hubungi Kami',
    'footer.newsletter.title': 'Tetap Terhubung',
    'footer.newsletter.description': 'Dapatkan produk industri, layanan, dan update vendor terbaru langsung ke kotak masuk Anda.',
    'footer.newsletter.placeholder': 'Masukkan alamat email Anda',
    'footer.newsletter.subscribe': 'Berlangganan',
    'footer.copyright': '© 2025 boost-. Semua hak cipta dilindungi. Memberdayakan UKM di seluruh dunia.',
    'footer.payments': 'Pembayaran Aman:',
    
    // User Type Selection
    'usertype.title': 'Bergabung dengan boost-',
    'usertype.description': 'Pilih bagaimana Anda ingin memulai dengan platform kami',
    'usertype.buyer.title': 'Saya Pembeli',
    'usertype.buyer.description': 'Mencari produk dan layanan dari vendor lokal',
    'usertype.buyer.features': 'Jelajahi ribuan produk • Bandingkan harga dan ulasan • Komunikasi langsung dengan vendor • Transaksi aman',
    'usertype.vendor.title': 'Saya Vendor',
    'usertype.vendor.description': 'Ingin menjual produk atau layanan di platform',
    'usertype.vendor.features': 'Jangkau pelanggan baru • Kelola inventaris Anda • Lacak penjualan dan analitik • Kembangkan bisnis Anda',
    'usertype.continue': 'Lanjutkan'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};