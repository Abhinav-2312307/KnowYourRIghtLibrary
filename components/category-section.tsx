import Link from "next/link"
import { BookOpen, ShoppingBag, Users, FileText, Briefcase, Shield } from "lucide-react"

export default function CategorySection() {
  const categories = [
    {
      name: "Fundamental Rights",
      description: "Basic rights guaranteed to all citizens by the Constitution of India",
      icon: <BookOpen className="h-10 w-10 text-blue-600" />,
      href: "/rights/fundamental-rights",
      color: "bg-blue-100 hover:bg-blue-200",
    },
    {
      name: "Consumer Rights",
      description: "Rights that protect consumers from unfair trade practices",
      icon: <ShoppingBag className="h-10 w-10 text-green-600" />,
      href: "/rights/consumer-rights",
      color: "bg-green-100 hover:bg-green-200",
    },
    {
      name: "Women's Rights",
      description: "Legal protections and entitlements for women in India",
      icon: <Users className="h-10 w-10 text-purple-600" />,
      href: "/rights/womens-rights",
      color: "bg-purple-100 hover:bg-purple-200",
    },
    {
      name: "Right to Information",
      description: "Rights related to accessing information from public authorities",
      icon: <FileText className="h-10 w-10 text-yellow-600" />,
      href: "/rights/right-to-information",
      color: "bg-yellow-100 hover:bg-yellow-200",
    },
    {
      name: "Labour Law",
      description: "Rights and protections for workers and employees",
      icon: <Briefcase className="h-10 w-10 text-red-600" />,
      href: "/rights/labour-law",
      color: "bg-red-100 hover:bg-red-200",
    },
    {
      name: "Cyber Law",
      description: "Legal framework governing the internet, digital transactions, and cybercrime",
      icon: <Shield className="h-10 w-10 text-indigo-600" />,
      href: "/rights/cyber-law",
      color: "bg-indigo-100 hover:bg-indigo-200",
    },
  ]

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Browse by Category</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className={`p-6 rounded-lg shadow-md transition duration-300 ${category.color}`}
          >
            <div className="flex flex-col items-center text-center">
              {category.icon}
              <h3 className="text-xl font-bold mt-4 mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
