"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type Bubbles = {
  top: string
  left: string
  image: string
}

type PictureCardProps = {
  bubbles: Bubbles[]
  centerPic: string
}

export default function PictureCard({ bubbles, centerPic }: PictureCardProps) {
  const parentRef = useRef<HTMLDivElement>(null)
  const [divWidth, setDivWidth] = useState<number>(0)

  useEffect(() => {
    if (parentRef.current) {
      const parentWidth = parentRef.current.getBoundingClientRect().width
      setDivWidth(parentWidth * 0.1)
      console.log(divWidth)
    }
  }, [divWidth])

  return (
    <div
      className="relative h-full flex justify-center items-center py-12 md:py-24 "
      ref={parentRef}
    >
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
            className={`${bubble.left} ${bubble.top} h-[${divWidth}px] w-[${divWidth}px] rounded-full absolute animate-[float_4s_infinite]`}
          >
            <div className="relative w-full h-full">
              <div
                className={`animate-[pulse_ease-out_4s_infinite] bg-[#E2EAEE] h-[${divWidth}px] w-[${divWidth}px] shadow-lg rounded-full absolute top-0 bottom-0 left-0 right-0 -z-10`}
              ></div>
              <div className="flex justify-center items-center w-full h-full">
                <Image
                  src={bubble.image}
                  alt=""
                  height={divWidth}
                  width={divWidth}
                  className="p-2"
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
