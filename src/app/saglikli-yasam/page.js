// src/app/saglikli-yasam/page.js
import { getContentList } from '@/lib/getMdxContent'
import HealthTipCard from '@/components/cards/HealthTipCard'

export default async function SaglikliYasam() {
  const posts = await getContentList('health-tips')

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Sağlıklı Yaşam</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <HealthTipCard 
            key={post.slug} 
            {...post}
            formattedDate={new Date(post.date).toLocaleDateString('tr-TR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          />
        ))}
      </div>
    </div>
  )
}