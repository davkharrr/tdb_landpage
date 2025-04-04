import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-900">Онцлох үйлчилгээ</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className={`flex flex-col items-center text-center p-6 rounded-2xl md:rounded-2xl md:border md:shadow-none ${item === 1 ? "md:border-purple-500" : "md:border-gray-200"} bg-white shadow-sm md:bg-transparent`}
          >
            <div className="w-20 h-20 bg-blue-50 rounded-2xl md:rounded-full flex items-center justify-center mb-4">
              <Image src={`/images/icon-${item}.svg`} alt={`Service ${item}`} width={40} height={40} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Үнэт цаасны зуучлалын үйлчилгээ</h3>
            <p className="text-gray-600 text-sm mb-4">
              Монголын хөрөнгийн биржийн арилжаанд оролцох эрхтэй брокерийн компани бөгөөд системийн ашиглан үнэт цаасны
              арилжаанд хамгийн түргэн шуурхай, цаг үеийнхээ хөдөлгөөнтэй уялдуулж, үнэт цаасны данснаас удирдах
              боломжтой.
            </p>
            <Link href="#" className="text-blue-600 font-medium flex items-center text-sm">
              <span>Цааш үзэх</span>
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

