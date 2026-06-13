import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  icon: LucideIcon
  label: string
  value: string | number
  unit?: string
  trend?: 'up' | 'down'
  trendValue?: string
}

export function StatsCard({
  icon: Icon,
  label,
  value,
  unit,
  trend,
  trendValue,
}: StatsCardProps) {
  return (
    <div className="card-glow rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        <Icon className="w-5 h-5 text-neon-green" />
      </div>
      <div>
        <p className="text-3xl font-bold text-foreground">
          {value}
          {unit && <span className="text-sm ml-1 text-muted-foreground">{unit}</span>}
        </p>
        {trend && trendValue && (
          <p className={`text-xs mt-2 ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
            {trend === 'up' ? '↑' : '↓'} {trendValue} from last month
          </p>
        )}
      </div>
    </div>
  )
}
