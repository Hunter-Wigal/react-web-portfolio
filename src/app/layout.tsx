import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './page.module.css'
import NavBar from './navbar'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hunter Wigal Portfolio',
  description: 'Projects and information about Hunter Wigal',
  icons: '/favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <NavBar className="navbar"/>
        {children}
        <Footer className="footer" />
        <div className="background"></div>
      </body>
    </html>
  )
}
