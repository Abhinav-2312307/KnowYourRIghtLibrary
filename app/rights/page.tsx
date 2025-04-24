import { getAllRights } from "@/lib/rights"
import RightsList from "@/components/rights-list"

export const metadata = {
  title: "All Rights - Know Your Rights",
  description: "Complete list of rights for Indian citizens",
}

export default function AllRightsPage() {
  const rights = getAllRights()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">All Rights</h1>
      <RightsList rights={rights} />
    </div>
  )
}
