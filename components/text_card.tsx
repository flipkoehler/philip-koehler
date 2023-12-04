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
      <p className="leading-relaxed text-justify">{firstContent}</p>
      <br></br>
      <p className="leading-relaxed text-justify">{secondContent}</p>
    </div>
  )
}
