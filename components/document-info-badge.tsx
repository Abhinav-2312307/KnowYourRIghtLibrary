import { Calendar, Building, History, FileText } from "lucide-react"

interface DocumentInfoBadgeProps {
  publicationDate?: string
  officialSource?: string
  lastAmended?: string
  compact?: boolean
}

export default function DocumentInfoBadge({
  publicationDate,
  officialSource,
  lastAmended,
  compact = false,
}: DocumentInfoBadgeProps) {
  if (!publicationDate && !officialSource && !lastAmended) {
    return null
  }

  if (compact) {
    return (
      <div className="inline-flex items-center bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded-md">
        <Calendar className="h-3 w-3 mr-1" />
        <span className="truncate max-w-[150px]">{publicationDate || "Official Document"}</span>
      </div>
    )
  }

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-md p-3 text-sm text-blue-800">
      <h4 className="font-semibold mb-2 flex items-center">
        <FileText className="h-4 w-4 mr-1" />
        Document Information
      </h4>
      <div className="space-y-1">
        {publicationDate && (
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-blue-600" />
            <span>Published: {publicationDate}</span>
          </div>
        )}

        {officialSource && (
          <div className="flex items-center">
            <Building className="h-4 w-4 mr-2 text-blue-600" />
            <span>Source: {officialSource}</span>
          </div>
        )}

        {lastAmended && (
          <div className="flex items-center">
            <History className="h-4 w-4 mr-2 text-blue-600" />
            <span>Last Amended: {lastAmended}</span>
          </div>
        )}
      </div>
    </div>
  )
}
