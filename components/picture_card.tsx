"use client"
import Image from "next/image"

type Bubbles = {
  top: string
  left: string
  image: string
}

type PictureCardProps = {
  bubbles: Bubbles[]
}

export default function PictureCard({ bubbles }: PictureCardProps) {
  //reingeben!!!

  return (
    <div className="relative h-full flex justify-center items-center py-12 md:py-24">
      {/* <div className="w-5 h-5 bg-slate-600 translate-x-[50%]"></div>
      <Image
        className="rounded-full"
        src="/assets/philip_köhler.jpg"
        height={40}
        width={40}
        alt="Bild vom professionellen Philip Köhler"
      /> */}

      <div className="md:w-56 md:h-56 h-48 w-48 rounded-full relative">
        <Image
          className="rounded-full"
          src="/assets/philip_köhler.jpg"
          fill={true}
          alt="Bild vom professionellen Philip Köhler"
        />
      </div>

      {bubbles.map((bubble, index) => {
        return (
          <div
            key={index}
            className={`${bubble.left} ${bubble.top} h-[10vw] w-[10vw] md:h-[5vw] md:w-[5vw] rounded-full absolute animate-[float_4s_infinite]`}
          >
            <div className="relative w-full h-full">
              <div className="animate-[pulse_ease-out_4s_infinite] bg-slate-50 h-[10vw] w-[10vw] md:h-[5vw] md:w-[5vw] shadow-lg rounded-full absolute top-0 bottom-0 left-0 right-0 -z-10"></div>
              <div className="flex justify-center items-center w-full h-full">
                <Image src={bubble.image} alt="" fill={true} className="p-2" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
