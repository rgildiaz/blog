import { Noto_Sans as FontSans, Cormorant_Garamond as FontSerif } from 'next/font/google'

export const fontSans = FontSans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-sans",
})

export const fontSerif = FontSerif({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: "--font-serif",
})
