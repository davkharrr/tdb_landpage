import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 md:bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start">
          <div className="mb-6 md:mb-0 md:mr-8">
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto md:mx-0 md:relative md:h-[300px] md:w-full md:rounded-lg">
              <Image
                src="/images/executive.jpg"
                alt="Executive"
                width={192}
                height={192}
                className="object-cover md:hidden"
              />
              <div className=" md:block relative h-[400px]">
                <Image src="/images/executive.jpg" alt="Executive" fill className="object-cover rounded-lg" />
              </div>
            </div>
          </div>
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Г. Энхбат</h2>
            <p className="text-gray-700 italic mb-4 md:hidden">
              "Ти Ди Би Секюритис ҮЦК" ХХК-н Гүйцэтгэх захирлын тэргүүн орлогч
            </p>
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                Монгол Улсын хөрөнгийн зах зээл 33 жилийн хөгжлийн түүхтэй бөгөөд энэхүү хөгжлийн тэн хагасыг бид эрхэм
                харилцагч, хөрөнгө оруулагчдынхаа хамтаар өнгөрүүлсэн. 2008 онд үүсгэн байгуулагдсан цагаасаа хойш бид
                "анхдагч, шинийг санаачлагч, үндэсний баялаг бүтээгчдийг дэмжигч, харилцагчдын найдвартай зөвлөх байх"
                эрхэм зорилгын хүрээнд харилцагчдын хүсэл зорилгыг эрхэмлэсэн, дэвшилтэт технологид суурилсан цогц
                бүтээгдэхүүн үйлчилгээ, санхүүгийн шийдлийг мэргэжлийн дээд түвшинд харилцагчдадаа хүргэн ажилласаар
                байна.
              </p>
              <p className="text-gray-600 mb-4">
                Хөрөнгийн зах зээл боломжоор дүүрэн. Та энэхүү боломж дүүрэн зах зээлийн явцад гарахад сайн хөтөч
                хамгийн чухал. Бид таны газрын зураг болж энэхүү аялалд амжилттай гарахад ургэлж хамт байх болно.
              </p>
            </div>
            <p className="text-gray-700 italic hidden md:block">
              "Ти Ди Би Секюритис ҮЦК" ХХК-ийн Гүйцэтгэх захирлын тавгүйн орлогч
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

