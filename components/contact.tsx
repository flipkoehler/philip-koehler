import Image from "next/image"
import Link from "next/link"

export default function Contact() {
  return (
    <div
      className="p-7 bg-slate-800 w-full flex justify-center items-center flex-col"
      id="contact"
    >
      <h3 className="text-lg text-white font-semibold">
        Du willst Hallo sagen?
      </h3>
      <div className="flex py-3">
        <Link
          href="https://codepen.io/philip3000/"
          className="hover:bg-[#131417] p-3 transition duration-700 ease-in-out"
          target="_blank"
        >
          <Image
            src="/assets/contact/codepen.svg"
            height={30}
            width={30}
            alt="contact codepen"
          />
        </Link>
        <Link
          href="mailto:hallo@philip-koehler.de"
          className="hover:bg-cyan-700 p-3 transition duration-700 ease-in-out my-auto"
          target="_blank"
        >
          <Image
            src="/assets/contact/mail.svg"
            height={30}
            width={30}
            alt="contact mail"
          />
        </Link>
        <Link
          href="https://github.com/flipkoehler/"
          className="hover:bg-[#070707] p-3 transition duration-700 ease-in-out"
          target="_blank"
        >
          <Image
            src="/assets/contact/github.svg"
            height={30}
            width={30}
            alt="contact github"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/philip-k%C3%B6hler-a56489269/"
          className="hover:bg-[#0A66C2] p-3 transition duration-700 ease-in-out"
          target="_blank"
        >
          <Image
            src="/assets/contact/linked-in.svg"
            height={30}
            width={30}
            alt="contact linkedin"
          />
        </Link>
        <Link
          href="https://www.xing.com/profile/Philip_Koehler5/"
          className="hover:bg-[#0698A0] p-3 transition duration-700 ease-in-out"
          target="_blank"
        >
          <Image
            src="/assets/contact/xing.svg"
            height={30}
            width={30}
            alt="contact xing"
          />
        </Link>
      </div>
      <span className="text-white text-sm">established since 1987.</span>
    </div>
  )
}
