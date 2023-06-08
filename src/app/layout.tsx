import React from 'react'
import './globals.css'
import { IBM_Plex_Sans } from 'next/font/google'

const font = IBM_Plex_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
