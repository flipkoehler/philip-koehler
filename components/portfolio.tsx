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
          <div className="w-full bg-white mb-4 flex flex-wrap p-3">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/movieFlip.jpg"
                height={275}
                width={432}
                alt="Movie Flip"
              />
            </div>
            <div className="p-3 w-full md:w-1/2 pl-5">
              <h3 className="text-base font-bold ">Movie Flip</h3>
              <p>
                Mein Herzensprojekt: Movie Flip ist die perfekte Lösung für
                Filmliebhaber, die das endlose Scrollen auf Plattformen wie
                Netflix oder Amazon satt haben. Durch die Beantwortung von vier
                Fragen erhält man eine Filmempfehlung. Alle Filme sind
                sorgfältig ausgewählt und garantieren beste Unterhaltung!
              </p>
              <div className="flex flex-wrap gap-2 pt-3">
                {movieFlipChips.map((chip, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-lime-50 py-1 px-2 rounded-xl "
                    >
                      {chip}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex w-full space-x-4 mb-5">
            <div className="w-full md:w-1/2 h-28 bg-white p-3">
              <h3 className="text-base font-bold ">Privatklinik Nordsee</h3>
              <p>folgt in kürze...</p>
            </div>
            <div className="w-full md:w-1/2 h-28 bg-white p-3">
              <h3 className="text-base font-bold ">Codepen</h3>
              <p>folgt in kürze...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
