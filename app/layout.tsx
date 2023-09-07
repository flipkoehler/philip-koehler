import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Philip Cinematic Universe",
  description: "Eine sehr persönliche Website - gemacht mit Herz und AI",
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
