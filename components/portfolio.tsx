export default function Portfolio() {
  return (
    <div className="flex flex-wrap w-full justify-center" id="portfolio">
      <h2 className="flex text-lg w-full">Projekte</h2>
      <section className="flex flex-wrap max-w-xl">
        <div className="bg-slate-400 w-full h-24">Movie Flip</div>
        <div className="w-1/2 bg-orange-100">Privatklinik</div>
        <div className="w-1/2 bg-orange-200">Codepen</div>
      </section>
    </div>
  )
}
