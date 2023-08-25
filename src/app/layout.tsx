import Navbar from '@/src/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/src/components/Footer/Footer'
import AuthProvider from '../components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Dev Hub',
  description: 'A portfolio site for everyone.',
}

interface RootLayoutInterface {
  children: React.ReactNode
}

export default function RootLayout({children}:RootLayoutInterface){
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className='flex flex-col h-screen justify-between max-w-[1366px] mx-auto'>
              <Navbar/>
              {children}
              <Footer/>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
