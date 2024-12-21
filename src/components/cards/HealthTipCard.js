// src/components/cards/HealthTipCard.js
'use client'

export default function HealthTipCard({ 
  title, 
  description, 
  thumbnail, 
  formattedDate, 
  category, 
  readTime 
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        {thumbnail && (
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span>{formattedDate}</span>
          <span>{readTime} dk okuma</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>
    </div>
  )
}