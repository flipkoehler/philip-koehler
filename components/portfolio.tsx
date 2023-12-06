import Image from "next/image"
import Link from "next/link"

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
          <div className="flex justify-start w-full pl-4">
            <h2>Projekte</h2>
          </div>
          <div className="w-full bg-white mb-4 flex flex-wrap p-4">
            <div className="w-full justify-center flex md:w-1/2 md:block">
              <Image
                src="/assets/movieFlip.jpg"
                height={220}
                width={345}
                alt="Movie Flip"
              />
            </div>
            <div className="p-3 w-full md:w-1/2">
              <h3 className="text-base font-bold ">Movie Flip</h3>
              <p>
                Mein Herzensprojekt:{" "}
                <Link href="https://www.movie-flip.de" target="_blank">
                  Movie Flip
                </Link>{" "}
                ist eine Website für Filmfreunde, die das endlose Scrollen auf
                Plattformen wie Netflix oder Amazon satt haben. Durch die
                Beantwortung von vier simplen Fragen erhält man eine
                individuelle Filmempfehlung.
              </p>
              <div className="flex flex-wrap gap-2 pt-5">
                {movieFlipChips.map((chip, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-cloudwhite py-1 px-3 rounded-full "
                    >
                      {chip}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex w-full space-x-4 mb-5">
            <div className="w-full md:w-1/2 bg-white p-3">
              <h3 className="text-base font-bold ">Privatklinik Nordsee</h3>
              <p>
                Für den Familienbetrieb der{" "}
                <Link
                  href="https://www.privatklinik-nordsee.de"
                  target="_blank"
                >
                  Privatklinik Nordsee
                </Link>{" "}
                betreibe ich seit vielen Jahren die Website auf Wordpress Basis
                und pflege diese auch redaktionell.
              </p>
              <div className="flex flex-wrap gap-2 py-5">
                {privatKlinikChips.map((chip, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-cloudwhite py-1 px-3 rounded-full "
                    >
                      {chip}
                    </span>
                  )
                })}
              </div>
            </div>
            <div className="w-full md:w-1/2  bg-white p-3">
              <h3 className="text-base font-bold ">Codepen</h3>
              <p>
                Meine{" "}
                <Link href="https://codepen.io/philip3000/" target="_blank">
                  Spielwiese
                </Link>
                , um Dinge auszuprobieren oder Inspiration zu bekommen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
