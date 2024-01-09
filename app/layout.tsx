import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


export const metadata: Metadata = {
  title: 'JS Mastery',
  description: 'JS Mastery resources',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": 'https://static.wixstatic.com/media/c73eb8_f0c68fbf71154ad99db4ec936e623755~mv2.jpg',
    "twitter:card": "summary_large_image",
    "og:url": "sitesonpolaris.com",
    "og:image": 'https://static.wixstatic.com/media/c73eb8_f0c68fbf71154ad99db4ec936e623755~mv2.jpg',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100 font-poppins'>{children}</body>
    </html>
  )
}
