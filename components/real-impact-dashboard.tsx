'use client'

import { motion } from 'framer-motion'
import { GlassmorphicCard } from './glassmorphic-card'
import { Leaf, Droplets, Zap, Wind } from 'lucide-react'

interface RealImpactProps {
  treesSaved?: number
  waterSaved?: number
  fuelSaved?: number
  co2Reduction?: number
}

const AnimatedCounter = ({ value, unit }: { value: number; unit: string }) => {
  const [displayValue, setDisplayValue] = React.useState(0)

  React.useEffect(() => {
    let start = 0
    const duration = 2000
    const startTime = Date.now()

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      setDisplayValue(Math.floor(value * progress))

      if (progress === 1) clearInterval(timer)
    }, 30)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div>
      <p className="text-4xl font-bold text-neon-green">{displayValue.toLocaleString()}</p>
      <p className="text-sm text-muted-foreground mt-1">{unit}</p>
    </div>
  )
}

export function RealImpactDashboard({
  treesSaved = 156,
  waterSaved = 4200000,
  fuelSaved = 3500,
  co2Reduction = 2450,
}: RealImpactProps) {
  const impacts = [
    {
      icon: Leaf,
      label: 'Trees Saved',
      value: treesSaved,
      unit: 'trees',
      color: '#10b981',
      description: 'Equivalent to a small forest',
    },
    {
      icon: Droplets,
      label: 'Water Conserved',
      value: waterSaved,
      unit: 'liters',
      color: '#06b6d4',
      description: 'Enough for 100 people/year',
    },
    {
      icon: Zap,
      label: 'Fuel Saved',
      value: fuelSaved,
      unit: 'liters',
      color: '#f59e0b',
      description: 'Car drives saved',
    },
    {
      icon: Wind,
      label: 'CO2 Reduced',
      value: co2Reduction,
      unit: 'kg',
      color: '#10b981',
      description: 'Flights avoided',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Your Real Impact</h2>
        <p className="text-muted-foreground">The tangible change you&apos;ve made for our planet</p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {impacts.map((impact, i) => {
          const Icon = impact.icon
          return (
            <motion.div key={i} variants={itemVariants}>
              <GlassmorphicCard className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8" style={{ color: impact.color }} />
                  <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                </div>
                <p className="text-muted-foreground text-sm mb-3">{impact.label}</p>
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCounter value={impact.value} unit={impact.unit} />
                </motion.div>
                <p className="text-xs text-muted-foreground mt-3 italic">{impact.description}</p>
              </GlassmorphicCard>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Impact multiplier section */}
      <motion.div
        className="glass rounded-xl p-6 border-l-4 border-neon-green"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold text-lg mb-2">Global Impact Multiplier</h3>
        <p className="text-muted-foreground mb-4">
          If every user reduced emissions like you, the world would save{' '}
          <span className="text-neon-green font-bold">18,562 tons of CO2 per year</span> globally.
        </p>
        <div className="h-2 bg-dark-card rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-neon-green to-neon-emerald"
            initial={{ width: 0 }}
            whileInView={{ width: '87%' }}
            transition={{ duration: 1.5, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </div>
  )
}

import React from 'react'
