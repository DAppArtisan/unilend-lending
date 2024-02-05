import { Inter } from 'next/font/google'
import localFont from "@next/font/local"
import './globals.css'
import Navbar from '@/components/Navbar'
import  Footer  from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Unilend Finance',
  description: 'UniLend is a permission-less decentralized protocol that combines spot trading services and money markets with lending and borrowing services through smart contracts.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
