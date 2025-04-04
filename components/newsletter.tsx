export default function Newsletter() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-600">И-Мэйл хаяг бүргүүлэх?</h2>
        </div>

        {/* Mobile view */}
        <div className="max-w-2xl mx-auto md:hidden">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="email"
              placeholder="Мэйл хаягаа оруулна уу..."
              className="px-6 py-4 rounded-full border border-gray-300 flex-grow text-gray-700"
            />
            <button className="bg-blue-500 text-white px-8 py-4 rounded-full font-medium whitespace-nowrap">
              Sign up
            </button>
          </div>
          <div className="flex flex-col space-y-4 mt-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
              <span className="text-gray-700">Хөрөнгө оруулалтын боломж</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
              <span className="text-gray-700">7 хоногийн тойм</span>
            </label>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden md:block max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="email"
              placeholder="Мэйл хаягаа оруулна уу..."
              className="px-6 py-4 rounded-full border border-gray-300 flex-grow text-gray-700"
            />
            <button className="bg-blue-500 text-white px-8 py-4 rounded-full font-medium whitespace-nowrap">
              Sign up
            </button>
          </div>
          <div className="flex flex-row items-center justify-center gap-6 mt-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
              <span className="text-gray-700">7 хоногийн тойм</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
              <span className="text-gray-700">Хөрөнгө оруулалтын боломж</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}

