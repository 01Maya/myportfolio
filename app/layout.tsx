import type { Metadata } from "next"
import { Inter, Poppins } from 'next/font/google'
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Mansi Patel | UI/UX Designer & Frontend Developer",
  description: "Portfolio of Mansi Patel - IT Student, UI/UX Designer, and Frontend Developer creating engaging digital experiences.✨",
  authors: [{ name: "Mansi Patel" }],
  keywords: ["UI/UX Designer", "Frontend Developer", "Portfolio", "Web Development"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

