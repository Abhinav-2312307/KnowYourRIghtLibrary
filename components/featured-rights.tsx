import Link from "next/link"
import { FileText } from "lucide-react"
import { getFeaturedRights } from "@/lib/rights"
import DocumentInfoBadge from "./document-info-badge"

export default function FeaturedRights() {
  const featuredRights = getFeaturedRights()

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Rights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredRights.map((right) => (
          <div
            key={right.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className={`h-2 ${getCategoryColor(right.category)}`}></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gray-100">
                  {right.category}
                </span>
                {right.pdfUrl && (
                  <span className="text-red-600" title="PDF Available">
                    <FileText className="h-4 w-4" />
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{right.title}</h3>

              {/* Show compact document info badge if available */}
              {right.pdfUrl && right.publicationDate && (
                <div className="mb-3">
                  <DocumentInfoBadge publicationDate={right.publicationDate} compact={true} />
                </div>
              )}

              <p className="text-gray-600 mb-4 line-clamp-3">{right.description}</p>
              <div className="flex justify-between items-center">
                <Link
                  href={`/rights/${right.category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more →
                </Link>
                {right.pdfUrl && (
                  <Link href={`/pdf/${right.id}`} className="text-sm text-red-600 hover:text-red-800 flex items-center">
                    <FileText className="h-3 w-3 mr-1" />
                    View PDF
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    "Fundamental Rights": "bg-blue-600",
    "Consumer Rights": "bg-green-600",
    "Women's Rights": "bg-purple-600",
    "Right to Information": "bg-yellow-600",
    "Labour Law": "bg-red-600",
    "Cyber Law": "bg-indigo-600",
  }

  return colors[category] || "bg-gray-600"
}
