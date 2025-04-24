"use client"

import { useState, useEffect } from "react"
import { FileText, Download, Calendar, Building, History } from "lucide-react"

interface PdfViewerProps {
  pdfUrl: string
  title: string
  publicationDate?: string
  officialSource?: string
  lastAmended?: string
}

export default function PdfViewer({ pdfUrl, title, publicationDate, officialSource, lastAmended }: PdfViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    // Simulate loading the PDF
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setLoadError(true)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-gray-50 border-b">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-red-600 mr-2" />
              <h2 className="font-semibold">{title}</h2>
            </div>

            {/* Document metadata */}
            <div className="mt-3 space-y-1 text-sm text-gray-600">
              {publicationDate && (
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Published: {publicationDate}</span>
                </div>
              )}

              {officialSource && (
                <div className="flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  <span>Source: {officialSource}</span>
                </div>
              )}

              {lastAmended && (
                <div className="flex items-center">
                  <History className="h-4 w-4 mr-2" />
                  <span>Last Amended: {lastAmended}</span>
                </div>
              )}
            </div>
          </div>

          <a
            href={pdfUrl}
            download
            className="flex items-center text-sm text-blue-600 hover:text-blue-800 bg-white px-3 py-2 rounded-md border border-blue-200 hover:bg-blue-50 transition"
          >
            <Download className="h-4 w-4 mr-1" />
            Download PDF
          </a>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-[600px] bg-gray-50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : loadError ? (
        <div className="flex flex-col justify-center items-center h-[600px] bg-gray-50 p-6 text-center">
          <FileText className="h-16 w-16 text-red-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Unable to display PDF</h3>
          <p className="text-gray-600 mb-4">The PDF viewer couldn't load this document in the browser.</p>
          <a
            href={pdfUrl}
            download
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Download PDF Instead
          </a>
        </div>
      ) : (
        <iframe
          src={pdfUrl}
          className="w-full h-[600px]"
          title={title}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        ></iframe>
      )}
    </div>
  )
}
