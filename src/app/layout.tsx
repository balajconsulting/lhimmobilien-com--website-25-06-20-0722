import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LH.Immobilien',
  description: 'LH.Immobilien - Professionelle allgemein Dienstleistungen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}