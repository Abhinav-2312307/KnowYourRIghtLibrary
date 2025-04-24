export const metadata = {
  title: "Contact Us - Know Your Rights",
  description: "Get in touch with the Know Your Rights team",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          This website is maintained for educational purposes only. If you have any questions, suggestions, or would
          like to contribute to this resource, please reach out to us.
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p>contact@knowyourrights.example.com</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p>123 Legal Avenue</p>
          <p>New Delhi, 110001</p>
          <p>India</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Social Media</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:underline">
              Twitter
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Facebook
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
