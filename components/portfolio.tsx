import Image from "next/image"

const movieFlipChips = [
  "Next.js",
  "React",
  "Contentful",
  "mongo DB",
  "TMDB Api",
  "styled components",
  "Figma",
  "Vercel",
]

const privatKlinikChips = ["Wordpress", "All Inkl", "html/css"]

export default function Portfolio() {
  return (
    <>
      <div className="flex items-center justify-center w-full" id="portfolio">
        <div className="flex flex-col items-center w-full max-w-5xl">
          <h2 className="text-lg py-5">Projekte</h2>
          <div className="w-full bg-ultraviolet mb-4 flex flex-wrap">
            <Image
              src="/assets/movieFlip.jpg"
              height={275}
              width={432}
              alt="Movie Flip"
            />
            <div className="p-3">
              <h3 className="text-lg">Movie Flip</h3>
              <p>
                Mein Herzensprojekt: Movie Flip ist die perfekte Lösung für
                Filmliebhaber, die das endlose Scrollen auf Plattformen wie
                Netflix oder Amazon satt haben. Durch die Beantwortung von vier
                Fragen erhält man eine Filmempfehlung. Alle Filme sind
                sorgfältig ausgewählt und garantieren beste Unterhaltung!
              </p>
              <div className="flex flex-wrap gap-2">
                {movieFlipChips.map((chip, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-white py-1 px-2 rounded-xl "
                    >
                      {chip}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex w-full space-x-4">
            <div className="w-1/2 h-28 bg-lightyellow">Box 2</div>
            <div className="w-1/2 h-28 bg-lightgreen">Box 3</div>
          </div>
        </div>
      </div>
    </>
  )
}
