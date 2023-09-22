import AboutMe from "@/components/about_me"
import Contact from "@/components/contact"
import HeaderContent from "@/components/header_content"
import HeroTeaser from "@/components/hero_teaser"
import Portfolio from "@/components/portfolio"

export default function Home() {
  return (
    <>
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
