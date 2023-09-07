import PictureCard from "./picture_card"
import TextCard from "./text_card"

const workText = {
  headline: "Meine Arbeitswelt",
  first:
    "Vom Scrum Master zum Frontend Application Engineer. Bis Ende 2022 habe ich als Scrum-Meister und Product Owner, täglich Agilität in diversen Projekte inhaliert. Agile Prinzipien sind für mich wie der Kaffee am Morgen – unverzichtbar! Egal ob Portale, Content Management Systeme oder Online-Shops. Ich blicke auf eine 10 Jährige Geschichte an wilden Projekten.",
  second:
    "Anfang 2023 habe ich dann die Seiten gewechselt. Mein Fokus verlagerte sich von Post-Its auf Vue und React. Typescript und Unit Tests sind seit je her meine treuen Begleiter, Tailwind oder Styled Components mein modisches Statement im Developer-Dschungel. In meiner Freizeit wage ich mich sogar ins Backend-Dickicht. Mehr dazu bei meinem Projekten",
}

const workBubbles = [
  {
    top: "top-[4%]",
    left: "left-[15%]",
    image: "assets/teenyicons_nextjs-solid.svg",
  },
  {
    top: "top-[70%]",
    left: "left-[25%]",
    image: "assets/mdi_tailwind.svg",
  },
  {
    top: "top-[30%]",
    left: "left-[7%]",
    image: "assets/teenyicons_react-outline.svg",
  },
  {
    top: "top-[26%]",
    left: "left-[68%]",
    image: "assets/teenyicons_vue-solid.svg",
  },
  {
    top: "top-[58%]",
    left: "left-[75%]",
    image: "assets/teenyicons_nextjs-solid.svg",
  },
]

const freeTimeText = {
  headline: "Meine private Welt",
  first: "x",
  second: "y",
}

export default function AboutMe() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid md:grid-cols-2 md:grid-rows-2 gap-x-5 gap-y-5 max-w-5xl">
        <div className="div1 ">
          <PictureCard bubbles={workBubbles} />
        </div>
        <div className="div2 ">
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
        <div className="div3 order-3 md:order-4 ">
          <PictureCard bubbles={workBubbles} />
        </div>
      </div>
    </div>
  )
}
