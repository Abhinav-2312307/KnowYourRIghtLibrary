import Link from "next/link"
import { Calendar, Building, History, FileText } from "lucide-react"
import type { RightType } from "@/lib/rights"

interface RightsListProps {
  rights: RightType[]
}

export default function RightsList({ rights }: RightsListProps) {
  return (
    <div className="space-y-6">
      {rights.map((right) => (
        <div
          key={right.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
        >
          <div className={`h-2 ${getCategoryColor(right.category)}`}></div>
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 bg-gray-100">
                  {right.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{right.title}</h3>
              </div>
              {right.pdfUrl && (
                <Link href={`/pdf/${right.id}`} className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  View PDF
                </Link>
              )}
            </div>
            <p className="text-gray-600 mb-4">{right.description}</p>

            {/* Document metadata */}
            {right.pdfUrl && (right.publicationDate || right.officialSource || right.lastAmended) && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="font-bold mb-2 text-sm text-gray-700">Document Information:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-gray-600">
                  {right.publicationDate && (
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                      <span>Published: {right.publicationDate}</span>
                    </div>
                  )}

                  {right.officialSource && (
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2 text-gray-500" />
                      <span>Source: {right.officialSource}</span>
                    </div>
                  )}

                  {right.lastAmended && (
                    <div className="flex items-center">
                      <History className="h-4 w-4 mr-2 text-gray-500" />
                      <span>Last Amended: {right.lastAmended}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {right.content && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="font-bold mb-2">Details:</h4>
                <div className="prose max-w-none text-gray-700">{right.content}</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
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
