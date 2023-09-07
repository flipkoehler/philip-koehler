type TextProps = {
  headline: string
  firstContent: string
  secondContent: string
}

export default function TextCard({
  headline,
  firstContent,
  secondContent,
}: TextProps) {
  return (
    <div className="p-4">
      <h2 className="text-lg">{headline}</h2>
      <p className="leading-relaxed text-justify">
        {firstContent}
        {/* Vom Scrum Master zum Frontend Application Engineer. Bis Ende 2022 habe
        ich als Scrum-Meister und Product Owner, täglich Agilität in diversen
        Projekte inhaliert. Agile Prinzipien sind für mich wie der Kaffee am
        Morgen – unverzichtbar! Egal ob Portale, Content Management Systeme oder
        Online-Shops. Ich blicke auf eine 10 Jährige Geschichte an wilden
        Projekten. */}
      </p>
      <br></br>
      <p className="leading-relaxed text-justify">{secondContent}</p>
    </div>
  )
}
