// src/app/beslenme-programlari/page.js
import { getAllContent } from '@/lib/content'

export default async function BeslenmeProgramlari() {
  const programs = await getAllContent('beslenme-programlari')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Beslenme Programları</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div key={program.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {program.thumbnail && (
              <img 
                src={program.thumbnail} 
                alt={program.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{program.title}</h2>
              <p className="text-gray-600 mb-4">{program.description}</p>
              {program.features && (
                <ul className="space-y-2">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">•</span>
                      {feature.item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}