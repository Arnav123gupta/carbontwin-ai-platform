'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Leaf, TrendingDown, Calendar } from 'lucide-react'
import { GlassmorphicCard } from '@/components/glassmorphic-card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const TIMELINE_DATA = [
  { year: '2024', emissions: 45, reduction: 0, scenario: 'current' },
  { year: '2025', emissions: 42, reduction: 3, scenario: 'current' },
  { year: '2026', emissions: 38, reduction: 7, scenario: 'current' },
  { year: '2030', emissions: 25, reduction: 20, scenario: 'current' },
  { year: '2035', emissions: 12, reduction: 33, scenario: 'current' },
  { year: '2040', emissions: 5, reduction: 40, scenario: 'current' },
]

const OPTIMISTIC_DATA = [
  { year: '2024', emissions: 45, reduction: 0, scenario: 'optimistic' },
  { year: '2025', emissions: 40, reduction: 5, scenario: 'optimistic' },
  { year: '2026', emissions: 34, reduction: 11, scenario: 'optimistic' },
  { year: '2030', emissions: 15, reduction: 30, scenario: 'optimistic' },
  { year: '2035', emissions: 5, reduction: 40, scenario: 'optimistic' },
  { year: '2040', emissions: 1, reduction: 44, scenario: 'optimistic' },
]

export default function TimelinePage() {
  const [scenario, setScenario] = useState<'current' | 'optimistic'>('current')
  const data = scenario === 'current' ? TIMELINE_DATA : OPTIMISTIC_DATA

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <Calendar className="w-8 h-8 text-neon-green" />
          Future Timeline Simulator
        </h1>
        <p className="text-muted-foreground">See your carbon footprint projections through 2040</p>
      </div>

      {/* Scenario Toggle */}
      <div className="flex gap-4">
        {[
          { id: 'current', label: 'Current Trajectory', icon: TrendingDown },
          { id: 'optimistic', label: 'Optimistic Future', icon: Leaf },
        ].map((scenario_option) => {
          const Icon = scenario_option.icon
          return (
            <motion.button
              key={scenario_option.id}
              onClick={() => setScenario(scenario_option.id as 'current' | 'optimistic')}
              className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all ${
                scenario === scenario_option.id
                  ? 'bg-neon-green text-dark-bg'
                  : 'bg-dark-card border border-neon-green/20 text-foreground hover:border-neon-green/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-4 h-4" />
              {scenario_option.label}
            </motion.button>
          )
        })}
      </div>

      {/* Projection Chart */}
      <div>
        <GlassmorphicCard>
          <h3 className="text-xl font-bold mb-6">Carbon Footprint Projection</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" label={{ value: 'Emissions (kg CO₂)', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #10b981',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#f1f5f9' }}
              />
              <Line
                type="monotone"
                dataKey="emissions"
                stroke={scenario === 'current' ? '#ef4444' : '#10b981'}
                strokeWidth={3}
                name="Projected Emissions"
                dot={{ fill: scenario === 'current' ? '#ef4444' : '#10b981', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassmorphicCard>
      </div>

      {/* Key Milestones */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Key Milestones</h2>
        <div className="space-y-3">
          {data.map((milestone, i) => {
            const isReduction = milestone.reduction > 0
            return (
              <div key={i}>
                <GlassmorphicCard>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-center">
                        <p className="text-lg font-bold text-neon-green">{milestone.year}</p>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-semibold text-foreground">Emissions: {milestone.emissions} kg CO₂</p>
                          <span className={`text-sm font-bold ${isReduction ? 'text-neon-green' : 'text-muted-foreground'}`}>
                            {isReduction && '↓'} {milestone.reduction}% reduction
                          </span>
                        </div>
                        <div className="w-full h-2 bg-dark-card rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full ${isReduction ? 'bg-gradient-to-r from-neon-green to-neon-emerald' : 'bg-gray-600'}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${(milestone.emissions / 45) * 100}%` }}
                            transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>
              </div>
            )
          })}
        </div>
      </div>

      {/* Impact Comparison */}
      <div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">2040 Outcome Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Current Trajectory',
              emissions: '5 kg CO₂/day',
              reduction: '89% reduction',
              status: 'On track',
              color: 'text-yellow-400',
            },
            {
              title: 'Optimistic Scenario',
              emissions: '1 kg CO₂/day',
              reduction: '98% reduction',
              status: 'Best case',
              color: 'text-neon-green',
            },
          ].map((comparison, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
            >
              <GlassmorphicCard>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{comparison.title}</h3>

                  <div className="space-y-3">
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">Daily Emissions</p>
                      <motion.p
                        className={`text-3xl font-bold ${comparison.color}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                      >
                        {comparison.emissions}
                      </motion.p>
                    </div>

                    <div>
                      <p className="text-muted-foreground text-sm mb-1">Total Reduction</p>
                      <motion.p
                        className={`text-2xl font-bold ${comparison.color}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                      >
                        {comparison.reduction}
                      </motion.p>
                    </div>

                    <div className="pt-3 border-t border-neon-green/10">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${comparison.color} bg-white/5`}>
                        {comparison.status}
                      </span>
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
