import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

export default function NewsSection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Шинэ мэдээлэл</h2>
        <Link href="#" className="text-blue-600 hover:text-blue-800 md:hidden">
          <ChevronRight className="h-5 w-5" />
        </Link>
        <div className="hidden md:flex md:space-x-4">
          <button className="text-blue-600 hover:text-blue-900 font-medium">Latest</button>
          <button className="text-gray-600 hover:text-blue-900">Most read</button>
        </div>
      </div>

      {/* Mobile view */}
      <div className="overflow-x-auto pb-4 md:hidden">
        <div className="flex space-x-4 min-w-max">
          <div className="w-80 bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-48">
              <Image src="/images/apple.jpg" alt="Apple Inc" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                JPMorgan in talks with Apple over Goldman credit card partnership, source says
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                On May 2, 2024, Apple Inc (NASDAQ:AAPL) disclosed its financial outcomes for the fiscal second quarter
                ending March 30, 2024, through an 8-K filing...
              </p>
            </div>
          </div>

          <div className="w-80 bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-48">
              <Image src="/images/apple.jpg" alt="Apple Inc" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                JPMorgan in talks with Apple over Goldman credit card partnership, source says
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                On May 2, 2024, Apple Inc (NASDAQ:AAPL) disclosed its financial outcomes for the fiscal second quarter
                ending March 30, 2024, through an 8-K filing...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:grid md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full">
            <div className="relative h-64">
              <Image src="/images/apple.jpg" alt="Apple Inc" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Apple Inc Q2 Earnings:</h3>
              <p className="text-gray-600 mb-4">
                On May 2, 2024, Apple Inc (NASDAQ:AAPL) disclosed its financial outcomes for the fiscal second quarter
                ending March 30, 2024, through an 8-K filing...
              </p>
              <Link href="#" className="text-blue-600 font-medium flex items-center">
                <span>Read more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-6">
            <div className="relative h-32">
              <Image src="/images/nyse.jpg" alt="New York Stock Exchange" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">New York Stock Exchange</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-32">
              <Image src="/images/nyse2.jpg" alt="New York Stock Exchange" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">New York Stock Exchange</h3>
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full">
            <div className="relative h-64">
              <Image src="/images/powell.jpg" alt="Fed's Powell" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Fed's Powell says:</h3>
              <p className="text-gray-600 mb-4">
                On May 2, 2024, Apple Inc (NASDAQ:AAPL) disclosed its financial outcomes for the fiscal second quarter
                ending March 30, 2024, through an 8-K filing...
              </p>
              <Link href="#" className="text-blue-600 font-medium flex items-center">
                <span>Read more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile pagination dots */}
      <div className="flex justify-center mt-4 md:hidden">
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  )
}

