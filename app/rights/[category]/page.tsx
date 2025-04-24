import { notFound } from "next/navigation"
import { getAllRights, getCategoryRights } from "@/lib/rights"
import RightsList from "@/components/rights-list"

export async function generateStaticParams() {
  const rights = getAllRights()
  const categories = [...new Set(rights.map((right) => right.category))]

  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, "-"),
  }))
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = params.category.replace(/-/g, " ")
  const formattedCategory = category
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${formattedCategory} - Know Your Rights`,
    description: `Learn about your ${formattedCategory.toLowerCase()} as an Indian citizen`,
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category.replace(/-/g, " ")
  const formattedCategory = category
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const rights = getCategoryRights(formattedCategory)

  if (!rights.length) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{formattedCategory}</h1>
      <RightsList rights={rights} />
    </div>
  )
}
