import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function FeaturedArticles() {
  const articles = [1, 2, 3, 4].map((index) => ({
    id: index,
    title: "How technical and price action analysis can help traders through the US election",
    excerpt:
      "Trading a discretionary or tactical strategy through the US election cycle is not an easy proposition – it requires thorough research, an understanding of...",
    image: `/images/article-${index}.jpg`,
    date: "Aug 19, 2024",
    category: "Economic",
    views: 19,
  }))

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Онцлох мэдээ</h2>
        <Link href="#" className="text-blue-600 hover:text-blue-800 md:hidden">
          <ChevronRight className="h-5 w-5" />
        </Link>
        <Link href="#" className="hidden md:block text-blue-600 font-medium">
          Read more
        </Link>
      </div>

      {/* Mobile view */}
      <div className="space-y-6 md:hidden">
        {articles.slice(0, 3).map((article) => (
          <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="relative h-48">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{article.date}</span>
                <div className="flex items-center">
                  <span className="text-xs text-blue-600 mr-2">{article.category}</span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    {article.views}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
            <div className="relative h-48">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{article.date}</span>
                <div className="flex items-center">
                  <span className="text-xs text-blue-600 mr-2">{article.category}</span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    {article.views}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile pagination dots */}
      <div className="flex justify-center mt-6 md:hidden">
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  )
}

