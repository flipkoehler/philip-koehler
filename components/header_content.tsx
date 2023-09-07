export default function HeaderContent() {
  return (
    <header className="w-full h-20 flex justify-end">
      <nav className="flex items-center">
        <ul className="hidden md:flex gap-10 m-4">
          <li>
            <button type="button">funky mode</button>
          </li>
          <li>
            <a href="#about-me">Über mich</a>
          </li>
          <li>
            <a href="#projects">Projekte</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
