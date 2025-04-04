import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-4 md:px-8 md:bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Mobile view */}
        <div className="md:hidden">
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-blue-900">Ready to Trade</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
            </p>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-full border border-gray-300 w-full"
              />
            </div>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full w-full sm:w-auto">Subscribe</button>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-900">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Case studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Updates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-900">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-900">Downloads</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    iOS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Android
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Mac
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Windows
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Chrome
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center space-x-6 my-8">
            <Link href="#" className="text-gray-600 hover:text-blue-900">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-900">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-900">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-900">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-900">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600 text-sm">© 2024 TDB Securities SC LLC | All Rights Reserved</p>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden md:block">
          {/* Top section with logo and text */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-6 md:mb-0">
              <Image src="/images/logo-tdb.svg" alt="TDB Securities" width={180} height={60} className="h-12 w-auto" />
            </div>
            <div className="max-w-md">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Links section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-900">Product</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Case studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Updates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-900">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-900">Support</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Getting started
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Help center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Server status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Report a bug
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-900">
                    Chat support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-900">Ready to Trade</h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
              </p>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-full border border-gray-300 w-full"
                />
              </div>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full">Subscribe</button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Copyright and social */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">© 2024 TDB Securities SC LLC | All Rights Reserved</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-blue-900">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-900">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-900">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-900">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-900">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

