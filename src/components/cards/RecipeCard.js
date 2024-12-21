// src/components/cards/RecipeCard.js
'use client'

export default function RecipeCard({ 
  title, 
  description, 
  thumbnail, 
  prepTime, 
  cookTime, 
  calories, 
  category,
  formattedDate 
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
          <span>Hazırlama: {prepTime} dk</span>
          <span>Pişirme: {cookTime} dk</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
            {calories} kcal
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>
    </div>
  )
}