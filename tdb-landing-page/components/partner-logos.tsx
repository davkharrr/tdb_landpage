import Image from "next/image"

const partners = [
  { name: "Acme Corp", logo: "/images/logo-acme.svg" },
  { name: "Quantum", logo: "/images/logo-quantum.svg" },
  { name: "Echo Valley", logo: "/images/logo-echo.svg" },
  { name: "Celestial", logo: "/images/logo-celestial.svg" },
  { name: "Pulse", logo: "/images/logo-pulse.svg" },
  { name: "Apex", logo: "/images/logo-apex.svg" },
]

export default function PartnerLogos() {
  return (
    <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-8 items-center overflow-x-auto pb-4 md:pb-0 md:justify-items-center">
        {partners.map((partner) => (
          <div key={partner.name} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all">
            <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} width={100} height={40} />
          </div>
        ))}
      </div>
    </section>
  )
}

