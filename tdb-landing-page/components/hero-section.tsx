import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <Image src="/images/building.jpg" alt="Modern building" fill className="object-cover" priority />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 max-w-3xl">
          Your partner in Mongolian
          <br />
          Capital Market
        </h1>
        <p className="text-base md:text-xl mb-6 max-w-2xl">Your Way To Wall Street</p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center">
            <span>Find out more</span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

