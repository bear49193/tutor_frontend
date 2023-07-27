import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Noto_Sans } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '@/components/footer/Footer';

const notoSans = Noto_Sans({ 
  weight: ['300', '400', '500', '600', '700'],
  preload: false,
});

export const metadata = {
  title: 'Sessionly | Tutoring Site',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}