import type { ReactNode } from "react"

interface StatisticsCardProps {
  icon: ReactNode
  title: string
  value: number
  viewAllLink?: string
  bgColor?: string
  linkColor?: string
}

export default function StatisticsCard({
  icon,
  title,
  value,
  viewAllLink,
  bgColor = "bg-gray-100",
  linkColor = "text-blue-500",
}: StatisticsCardProps) {
  return (
    <div className={`rounded-lg border border-gray-200 overflow-hidden ${bgColor}`}>
      <div className="p-4">
        <div className="flex items-center mb-2">
          {icon}
          <span className="ml-2 text-sm font-medium">{title}</span>
        </div>

        <div className="flex justify-between items-end">
          <span className="text-4xl font-bold">{value}</span>

          {viewAllLink && (
            <a href={viewAllLink} className={`text-sm ${linkColor}`}>
              view All -&gt;
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
