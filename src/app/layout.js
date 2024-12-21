// src/app/layout.js
import './globals.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

export const metadata = {
  title: 'Diyetisyen Web Sitesi',
  description: 'Profesyonel diyetisyen hizmetleri ve sağlıklı yaşam önerileri',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-16">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}