import { Inter, EB_Garamond } from 'next/font/google'

export const sans = Inter({ 
  subsets: ['latin'], 
  display: 'swap', 
  variable: "--font-sans", 
})

export const serif = EB_Garamond({ 
  subsets: ['latin'],
  display: 'swap', 
  variable: "--font-serif", 
})
