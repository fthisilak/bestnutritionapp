// src/components/sections/AboutSection.js
export default function AboutSection() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Hakkımda</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Uzm. Dyt. [İsim Soyisim]</h3>
              <p className="text-gray-600">
                10 yılı aşkın deneyimimle, sağlıklı beslenme konusunda size rehberlik etmek için buradayım. 
                Özel yaklaşımım ve bilimsel temelli beslenme programlarımla hedeflerinize ulaşmanıza yardımcı oluyorum.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  Kişiye Özel Beslenme Programları
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  Online Diyet Danışmanlığı
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  Kurumsal Beslenme Danışmanlığı
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg">
              {/* Buraya diyetisyen fotoğrafı gelecek */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Diyetisyen Fotoğrafı
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  