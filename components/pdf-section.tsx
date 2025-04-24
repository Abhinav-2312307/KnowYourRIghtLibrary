import Link from "next/link"
import { FileText, Calendar, Building } from "lucide-react"
import { getPdfRights } from "@/lib/rights"

export default function PdfSection() {
  const pdfRights = getPdfRights()

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">PDF Resources</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfRights.map((right) => (
          <Link
            key={right.id}
            href={`/pdf/${right.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col"
          >
            <div className="bg-red-100 p-3 rounded-full mb-4 self-center">
              <FileText className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">{right.title}</h3>

            {/* Document metadata */}
            <div className="mb-4 space-y-2 text-sm text-gray-600">
              {right.publicationDate && (
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <span>Published: {right.publicationDate}</span>
                </div>
              )}

              {right.officialSource && (
                <div className="flex items-center">
                  <Building className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="truncate">{right.officialSource}</span>
                </div>
              )}
            </div>

            <p className="text-gray-600 mb-4 flex-grow">{right.description.substring(0, 100)}...</p>
            <span className="text-blue-600 font-medium self-center mt-2 flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              View PDF
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
