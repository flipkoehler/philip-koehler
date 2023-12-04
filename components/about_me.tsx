import PictureCard from "./picture_card"
import TextCard from "./text_card"

const workPic = "/assets/philip_köhler.jpg"

const workText = {
  headline: "Meine Arbeitswelt",
  first:
    "Vom Scrum Master zum Frontend Fuchs: Bis Ende 2022 habe ich als Scrum Master und Product Owner gearbeitet. Agile Prinzipien sind für mich wie der Kaffee am Morgen – unverzichtbar! Egal ob Portale, Content Management Systeme oder Online-Shops. Ich blicke auf eine 10 Jährige Geschichte an wilden Projekten.",
  second:
    "Anfang 2023 habe ich dann die Seiten gewechselt. Mein Fokus verlagerte sich von Post-Its auf Vue und React. Typescript und Unit Tests sind seit je her meine treuen Begleiter, Tailwind oder Styled Components mein modisches Statement im Developer-Dschungel. In meiner Freizeit wage ich mich sogar ins Backend-Dickicht. Mehr dazu bei meinem Projekten.",
}

const workBubbles = [
  {
    top: "top-[4%]",
    left: "left-[15%]",
    image: "assets/business/figma.svg",
  },
  {
    top: "top-[70%]",
    left: "left-[25%]",
    image: "assets/business/git.svg",
  },
  {
    top: "top-[30%]",
    left: "left-[7%]",
    image: "assets/business/mongodb.svg",
  },
  {
    top: "top-[26%]",
    left: "left-[68%]",
    image: "assets/business/nextjs.svg",
  },
  {
    top: "top-[58%]",
    left: "left-[75%]",
    image: "assets/business/nuxt.svg",
  },
  {
    top: "top-[68%]",
    left: "left-[60%]",
    image: "assets/business/vue.svg",
  },
  {
    top: "top-[8%]",
    left: "left-[75%]",
    image: "assets/business/react.svg",
  },
  {
    top: "top-[60%]",
    left: "left-[7%]",
    image: "assets/business/tailwind.svg",
  },
  {
    top: "top-[5%]",
    left: "left-[45%]",
    image: "assets/business/typescript.svg",
  },
]

const freeTimePic = "/assets/privatepic.jpg"

const freeTimeText = {
  headline: "Meine private Welt",
  first:
    "Willkommen in meiner kleinen Welt: Als Kind habe ich mein gesamtes Taschengeld in die örtliche Videothek investiert. Die Faszination für Film und Kino ist seitdem zu einem festen Bestandteil meines Lebens geworden. So habe ich angefangen meine Liebe zum Film und die Liebe zum Programmieren in meinem Freizeitprojekt Movie Flip zu vereinen.",
  second:
    "Aber mein Leben ist nicht nur auf die Leinwand beschränkt – gemeinsam mit meiner Familie erkunde ich gerne diesen verrückten Planeten. Es gibt nichts Besseres, als sich in die majestätischen Berge zu wagen und die Welt unter meinen Wanderschuhen zu entdecken. Die Natur wird zur persönlichen Filmkulisse.",
}

const freeTimeBubbles = [
  {
    top: "top-[14%]",
    left: "left-[25%]",
    image: "assets/private/travel.svg",
  },
  {
    top: "top-[70%]",
    left: "left-[27%]",
    image: "assets/private/movie.svg",
  },
  {
    top: "top-[34%]",
    left: "left-[12%]",
    image: "assets/private/read.svg",
  },
  {
    top: "top-[25%]",
    left: "left-[72%]",
    image: "assets/private/code.svg",
  },
  {
    top: "top-[50%]",
    left: "left-[79%]",
    image: "assets/private/hiking.svg",
  },
  {
    top: "top-[68%]",
    left: "left-[60%]",
    image: "assets/private/football.svg",
  },
]

export default function AboutMe() {
  return (
    <div className="flex justify-center items-center" id="about-me">
      <div className="grid md:grid-cols-2 md:grid-rows-2 gap-x-5 gap-y-5 max-w-5xl">
        <div className="div1">
          <PictureCard bubbles={workBubbles} centerPic={workPic} />
        </div>
        <div className="div2">
          <TextCard
            headline={workText.headline}
            firstContent={workText.first}
            secondContent={workText.second}
          />
        </div>
        <div className="div4 order-4 md:order-3">
          <TextCard
            headline={freeTimeText.headline}
            firstContent={freeTimeText.first}
            secondContent={freeTimeText.second}
          />
        </div>
        <div className="div3 order-3 md:order-4">
          <PictureCard bubbles={freeTimeBubbles} centerPic={freeTimePic} />
        </div>
      </div>
    </div>
  )
}
