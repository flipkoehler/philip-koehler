import Link from "next/link"

export default function HeaderContent() {
  return (
    <header className="h-20 max-w-5xl flex w-full justify-end m-auto">
      <nav>
        <ul className="hidden md:flex gap-10 my-4 font-semibold py-1 px-6 shadow-underlineMenu">
          <li>
            <Link href="#about-me">Über mich</Link>
          </li>
          <li>
            <Link href="#portfolio">Projekte</Link>
          </li>
          <li>
            <Link href="#contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
