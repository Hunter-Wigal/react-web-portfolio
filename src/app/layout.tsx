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
  icons: '/icon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
            </head>
            <body>
              <NavBar className="navbar" />
              {children}
              <Footer className="footer" />
              <div className="background"></div>
            </body>
          </html>
          )
}
