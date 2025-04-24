import Link from "next/link"

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-xl mb-12 overflow-hidden">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Empower Yourself By Knowing Your Rights</h1>
          <p className="text-xl mb-8">
            Access and understand your fundamental rights as an Indian citizen. Knowledge is the first step towards
            justice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/rights"
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition duration-300 text-center"
            >
              Explore All Rights
            </Link>
            <Link
              href="#search"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 text-center"
            >
              Search Rights
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
