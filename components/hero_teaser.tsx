import Image from "next/image"

export default function HeroTeaser() {
  return (
    <div className="h-96 w-full relative">
      <section aria-hidden="true" className="w-full">
        <Image
          src="/assets/cloud.svg"
          alt=""
          width={120}
          height={40}
          className="animate-[moveRightSmall_linear_35s_infinite] absolute"
        />
        <Image
          src="/assets/cloud.svg"
          alt=""
          width={170}
          height={40}
          className="animate-[moveRightSmall_linear_42s_infinite] absolute top-20"
        />
        <Image
          src="/assets/cloud.svg"
          alt=""
          width={120}
          height={40}
          className="animate-[moveRightSmall_linear_25s_infinite] absolute top-24 -left-60"
        />
        <Image
          src="/assets/cloud.svg"
          alt=""
          width={240}
          height={40}
          className="animate-[moveRightSmall_linear_30s_infinite] absolute top-24"
        />
      </section>
      <section className="text-white flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl text-center leading-10 drop-shadow-xl">
          Way out west there was this fella I wanna tell ya about. <br />
          Goes by the name of{" "}
          <span className="bg-sky-300 p-1">Philip Köhler</span>.
        </h1>
        <span className="pt-2 z-10">- The Stranger (The Big Lebowski)</span>
      </section>
    </div>
  )
}
