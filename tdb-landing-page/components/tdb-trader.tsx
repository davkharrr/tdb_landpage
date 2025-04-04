import Image from "next/image"

export default function TdbTrader() {
  return (
    <section className="py-12 px-4 md:px-8 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Mobile view */}
        <div className="flex flex-col items-center text-center md:hidden">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-800 p-2 rounded-lg mr-3">
                <Image src="/images/logo-tdb-white.svg" alt="TDB Logo" width={40} height={40} />
              </div>
              <h2 className="text-2xl font-bold">TDB Trader</h2>
            </div>
            <p className="text-blue-100 mb-6">
              Дэлхийн зах зээлийг
              <br />
              нэг дороос...
            </p>
            <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-medium">АПП татах</button>
            <div className="flex justify-center mt-4 space-x-2">
              <Image
                src="/placeholder.svg?height=30&width=100"
                alt="Google Play"
                width={100}
                height={30}
                className="h-8 w-auto"
              />
              <Image
                src="/placeholder.svg?height=30&width=100"
                alt="App Store"
                width={100}
                height={30}
                className="h-8 w-auto"
              />
            </div>
          </div>
          <div className="w-full">
            <Image src="/images/piggy-bank.png" alt="TDB Trader" width={300} height={200} className="mx-auto" />
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex md:flex-row md:items-center md:justify-between">
          <div className= "md:items-center">
            <h2 className="text-3xl font-bold mb-4">TDB Trader</h2>
            <p className="text-blue-100 mb-6">
              Дэлхийн зах зээлийг
              <br />
              гар дороо.
            </p>
            <button className="bg-white text-blue-900 px-6 py-2 rounded-md font-medium">APP татах</button>
          </div>
          <div>
            {/* <Image src="/images/piggy-bank.png" alt="TDB Trader" width={300} height={200} className="mx-auto" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

