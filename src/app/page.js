// src/app/page.js
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sağlıklı Yaşam için Profesyonel Diyetisyen Hizmetleri
          </h1>
          <p className="text-xl mb-8">
            Size özel beslenme programları ve sağlıklı yaşam önerileri
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Randevu Al
          </button>
        </div>
      </section>

      {/* About and Services Sections */}
      <AboutSection />
      <ServicesSection />
    </div>
  );
}