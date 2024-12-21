// src/lib/content.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src/content')

export async function getAllContent(folder) {
  const folderPath = path.join(contentDirectory, folder)
  
  // Klasör yoksa oluştur
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true })
    return []
  }

  const files = fs.readdirSync(folderPath)
  
  const content = files.map(filename => {
    const filePath = path.join(folderPath, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug: filename.replace(/\.md$/, ''),
      ...data,
      content
    }
  })

  return content
}