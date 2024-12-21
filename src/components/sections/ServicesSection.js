// src/components/sections/ServicesSection.js
export default function ServicesSection() {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Hizmetlerim</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-4">Kilo Yönetimi</h3>
              <p className="text-gray-600 mb-4">
                Bilimsel temelli, sürdürülebilir kilo verme ve alma programları.
              </p>
              <a href="/beslenme-programlari" className="text-blue-600 hover:underline">
                Detaylı Bilgi →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-4">Hastalıklarda Beslenme</h3>
              <p className="text-gray-600 mb-4">
                Diyabet, tiroid, PCOS gibi hastalıklara özel beslenme programları.
              </p>
              <a href="/beslenme-programlari" className="text-blue-600 hover:underline">
                Detaylı Bilgi →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-4">Özel Durum Beslenmesi</h3>
              <p className="text-gray-600 mb-4">
                Hamilelik, sporcu beslenmesi ve özel durumlara yönelik programlar.
              </p>
              <a href="/beslenme-programlari" className="text-blue-600 hover:underline">
                Detaylı Bilgi →
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }