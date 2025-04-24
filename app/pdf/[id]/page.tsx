import { notFound } from "next/navigation"
import { getAllRights } from "@/lib/rights"
import PdfViewer from "@/components/pdf-viewer"

export async function generateStaticParams() {
  const rights = getAllRights()

  return rights
    .filter((right) => right.pdfUrl)
    .map((right) => ({
      id: right.id,
    }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const rights = getAllRights()
  const right = rights.find((r) => r.id === params.id)

  if (!right) {
    return {
      title: "PDF Not Found - Know Your Rights",
    }
  }

  return {
    title: `${right.title} PDF - Know Your Rights`,
    description: `View the PDF document for ${right.title}`,
  }
}

export default function PdfPage({ params }: { params: { id: string } }) {
  const rights = getAllRights()
  const right = rights.find((r) => r.id === params.id)

  if (!right || !right.pdfUrl) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{right.title}</h1>
      <PdfViewer
        pdfUrl={right.pdfUrl}
        title={right.title}
        publicationDate={right.publicationDate}
        officialSource={right.officialSource}
        lastAmended={right.lastAmended}
      />
    </div>
  )
}
