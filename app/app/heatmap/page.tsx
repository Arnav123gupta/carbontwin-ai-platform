'use client'

import { motion } from 'framer-motion'
import { Globe, TrendingDown, AlertTriangle } from 'lucide-react'
import { GlassmorphicCard } from '@/components/glassmorphic-card'

const HOTSPOTS = [
  { region: 'Asia Pacific', emissions: 15240, change: -12, population: '4.2B' },
  { region: 'Europe', emissions: 8950, change: -18, population: '740M' },
  { region: 'Americas', emissions: 11200, change: -8, population: '1.0B' },
  { region: 'Africa', emissions: 4500, change: 5, population: '1.4B' },
  { region: 'Middle East', emissions: 6800, change: -3, population: '400M' },
  { region: 'Oceania', emissions: 1200, change: -22, population: '45M' },
]

const HEATMAP_GRID = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  intensity: Math.random(),
  delay: Math.random() * 0.5,
}))

export default function HeatmapPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <Globe className="w-8 h-8 text-neon-green" />
          Global Carbon Heatmap
        </h1>
        <p className="text-muted-foreground">Real-time emission hotspots and regional impact</p>
      </motion.div>

      {/* Interactive Heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <GlassmorphicCard>
          <h3 className="text-xl font-bold mb-6">World Emission Map</h3>
          <div className="grid grid-cols-12 gap-1 h-64 p-6 bg-dark-bg/50 rounded-lg overflow-hidden">
            {HEATMAP_GRID.map((cell) => (
              <motion.div
                key={cell.id}
                className="rounded-sm cursor-pointer hover:scale-110 transition-transform"
                style={{
                  backgroundColor:
                    cell.intensity > 0.75
                      ? 'rgba(239, 68, 68, 0.8)'
                      : cell.intensity > 0.5
                        ? 'rgba(245, 158, 11, 0.6)'
                        : cell.intensity > 0.25
                          ? 'rgba(34, 197, 94, 0.4)'
                          : 'rgba(16, 185, 129, 0.2)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: cell.delay }}
                whileHover={{ scale: 1.2, opacity: 1 }}
              />
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 pt-6 border-t border-neon-green/10">
            <div className="flex gap-6">
              {[
                { label: 'Critical', color: 'bg-red-500' },
                { label: 'High', color: 'bg-yellow-500' },
                { label: 'Moderate', color: 'bg-green-500' },
                { label: 'Low', color: 'bg-neon-green' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-sm ${item.color}`} />
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Updated live every 5 minutes</p>
          </div>
        </GlassmorphicCard>
      </motion.div>

      {/* Regional Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Regional Emissions</h2>
        <div className="space-y-3">
          {HOTSPOTS.map((region, i) => {
            const isIncreasing = region.change > 0

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.05 }}
              >
                <GlassmorphicCard>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-foreground">{region.region}</h3>
                        <span className="text-xs text-muted-foreground">{region.population}</span>
                      </div>

                      <div className="w-full h-2 bg-dark-bg rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${isIncreasing ? 'bg-red-500/70' : 'bg-gradient-to-r from-neon-green to-neon-emerald'}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min((region.emissions / 15240) * 100, 100)}%` }}
                          transition={{ duration: 1, delay: 0.4 + i * 0.05 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>

                    <div className="ml-6 text-right">
                      <p className="font-bold text-lg text-foreground">{region.emissions.toLocaleString()}</p>
                      <div className={`flex items-center justify-end gap-1 text-sm ${isIncreasing ? 'text-red-400' : 'text-neon-green'}`}>
                        {isIncreasing ? (
                          <AlertTriangle className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        <span>{isIncreasing ? '+' : ''}{region.change}%</span>
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Key Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-4">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Highest Emitter',
              value: 'Asia Pacific',
              subtitle: '15,240 MT/day',
              icon: '🔴',
            },
            {
              title: 'Best Progress',
              value: 'Oceania',
              subtitle: '-22% this year',
              icon: '📉',
            },
            {
              title: 'Global Trend',
              value: '-11%',
              subtitle: 'Average reduction',
              icon: '🌍',
            },
          ].map((insight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            >
              <GlassmorphicCard>
                <div className="text-center space-y-3">
                  <span className="text-4xl">{insight.icon}</span>
                  <h3 className="text-sm text-muted-foreground">{insight.title}</h3>
                  <p className="text-2xl font-bold text-neon-green">{insight.value}</p>
                  <p className="text-xs text-muted-foreground">{insight.subtitle}</p>
                </div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
