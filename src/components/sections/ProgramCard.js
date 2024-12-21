// src/components/sections/ProgramCard.js
'use client'

export default function ProgramCard({ title, description, features = [], image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image || "/api/placeholder/400/300"} 
          alt={title}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features?.map((item, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {typeof item === 'string' ? item : item.feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}