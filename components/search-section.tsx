"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import Fuse from "fuse.js"
import { getAllRights, type RightType } from "@/lib/rights"
import Link from "next/link"

export default function SearchSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<RightType[]>([])
  const [fuse, setFuse] = useState<Fuse<RightType> | null>(null)

  useEffect(() => {
    const rights = getAllRights()
    const fuseInstance = new Fuse(rights, {
      keys: ["title", "description", "category"],
      threshold: 0.4,
    })
    setFuse(fuseInstance)
  }, [])

  useEffect(() => {
    if (fuse && searchTerm) {
      const results = fuse.search(searchTerm).map((result) => result.item)
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchTerm, fuse])

  return (
    <section id="search" className="mb-12">
      <div className="bg-gray-100 rounded-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Search Your Rights</h2>

        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for rights, laws, or keywords..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
            />
          </div>
        </div>

        {searchTerm && (
          <div className="max-w-2xl mx-auto">
            <h3 className="font-medium text-gray-700 mb-3">
              {searchResults.length === 0
                ? "No results found"
                : `Found ${searchResults.length} result${searchResults.length === 1 ? "" : "s"}`}
            </h3>

            <div className="space-y-4">
              {searchResults.map((right) => (
                <div key={right.id} className="bg-white p-4 rounded-md shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg">{right.title}</h4>
                      <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full mt-1 mb-2 bg-gray-100">
                        {right.category}
                      </span>
                    </div>
                    {right.pdfUrl && (
                      <Link href={`/pdf/${right.id}`} className="text-sm text-blue-600 hover:text-blue-800">
                        View PDF
                      </Link>
                    )}
                  </div>
                  <p className="text-gray-600">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
