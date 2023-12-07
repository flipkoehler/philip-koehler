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
      <head>    <meta
          name="google-site-verification"
          content="0ofPNoFjh1HXsmLtm7gz0El0joyDZrrisyYAHTCjdAM"
        /></head>
      <body>{children}</body>
    </html>
  )
}
