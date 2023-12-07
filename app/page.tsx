import AboutMe from "@/components/about_me"
import Contact from "@/components/contact"
import HeaderContent from "@/components/header_content"
import HeroTeaser from "@/components/hero_teaser"
import Portfolio from "@/components/portfolio"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="0ofPNoFjh1HXsmLtm7gz0El0joyDZrrisyYAHTCjdAM"
        />
      </Head>
      <HeaderContent />
      <main>
        <HeroTeaser />
        <AboutMe />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}
