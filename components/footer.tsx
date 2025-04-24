import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Know Your Rights</h3>
            <p className="text-gray-300">
              Empowering Indian citizens with knowledge about their legal rights and protections.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rights" className="text-gray-300 hover:text-white transition">
                  All Rights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Disclaimer</h3>
            <p className="text-gray-300">
              This website is for educational purposes only and does not constitute legal advice. Always consult with a
              qualified legal professional for specific concerns.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Know Your Rights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
