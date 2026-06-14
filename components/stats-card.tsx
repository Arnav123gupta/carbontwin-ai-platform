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
    <div className="glass-premium rounded-2xl p-6 sm:p-8 space-y-4 hover-lift transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
        </div>
        <div className="bg-neon-green/10 rounded-lg p-2">
          <Icon className="w-5 h-5 text-neon-green" />
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-4xl sm:text-5xl font-bold text-foreground">
          {value}
          {unit && <span className="text-base font-semibold ml-2 text-muted-foreground">{unit}</span>}
        </p>
        {trend && trendValue && (
          <p className={`text-sm font-medium flex items-center gap-1 ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
            <span>{trend === 'up' ? '↑' : '↓'}</span> {trendValue}
          </p>
        )}
      </div>
    </div>
  )
}
