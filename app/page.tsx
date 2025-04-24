import Hero from "@/components/hero"
import FeaturedRights from "@/components/featured-rights"
import SearchSection from "@/components/search-section"
import PdfSection from "@/components/pdf-section"
import CategorySection from "@/components/category-section"
import { FileText } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />

      {/* New section highlighting official documents */}
      <div className="bg-blue-50 rounded-lg p-6 mb-12 border border-blue-100">
        <div className="flex items-center mb-4">
          <FileText className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-bold text-blue-800">Official Legal Documents</h2>
        </div>
        <p className="text-blue-700 mb-2">
          This site now includes official legal documents from government sources with publication dates and sources.
          All PDFs are authentic copies of:
        </p>
        <ul className="list-disc list-inside text-blue-700 mb-4 ml-4">
          <li>Constitutional provisions (published January 26, 1950)</li>
          <li>Acts of Parliament with their original publication dates</li>
          <li>Official government notifications with source ministries</li>
          <li>Legal amendments with their latest amendment dates</li>
        </ul>
        <p className="text-sm text-blue-600">
          Note: These documents are provided for educational purposes. For legal proceedings, please refer to officially
          certified copies.
        </p>
      </div>

      <FeaturedRights />
      <SearchSection />
      <CategorySection />
      <PdfSection />
    </div>
  )
}
