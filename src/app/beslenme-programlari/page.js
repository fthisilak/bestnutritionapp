// src/app/beslenme-programlari/page.js
import ProgramCard from '@/components/sections/ProgramCard'

export default function BeslenmeProgramlari() {
    // Şimdilik statik veri kullanıyoruz
    const testPrograms = [
        {
            id: 1,
            title: "Kilo Verme Programı",
            description: "Sağlıklı ve sürdürülebilir kilo verme programı",
            features: ["Kişiye özel beslenme planı", "Haftalık takip", "Online destek"],
            active: true
        },
        {
            id: 2,
            title: "Kilo Alma Programı",
            description: "Sağlıklı kilo alma programı",
            features: ["Protein odaklı beslenme", "Kas kazanımı desteği", "Düzenli takip"],
            active: true
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-12">Beslenme Programları</h1>
            
            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Kilo Yönetimi</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testPrograms.map((program) => (
                        <ProgramCard key={program.id} {...program} />
                    ))}
                </div>
            </section>
        </div>
    )
}