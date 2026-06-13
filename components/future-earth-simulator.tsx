'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassmorphicCard } from './glassmorphic-card'
import { Globe, TrendingUp, TrendingDown } from 'lucide-react'

const scenarios = [
  {
    year: 2030,
    title: 'Earth 2030',
    currentPath: 'Rising 1.8°C',
    optimisticPath: 'Rising 1.5°C',
    image: '🌍',
    description: 'Critical decade for climate action',
    stats: {
      current: { temp: 1.8, co2: 430 },
      optimistic: { temp: 1.5, co2: 415 },
    },
  },
  {
    year: 2040,
    title: 'Earth 2040',
    currentPath: 'Rising 2.4°C',
    optimisticPath: 'Rising 1.8°C',
    image: '🔥',
    description: 'Point of no return or recovery?',
    stats: {
      current: { temp: 2.4, co2: 450 },
      optimistic: { temp: 1.8, co2: 425 },
    },
  },
  {
    year: 2050,
    title: 'Earth 2050',
    currentPath: 'Rising 3.0°C+',
    optimisticPath: 'Rising 1.5°C',
    image: '🌡️',
    description: 'Your legacy for next generation',
    stats: {
      current: { temp: 3.0, co2: 480 },
      optimistic: { temp: 1.5, co2: 420 },
    },
  },
]

export function FutureEarthSimulator() {
  const [activeScenario, setActiveScenario] = useState(0)
  const [showOptimistic, setShowOptimistic] = useState(false)

  const current = scenarios[activeScenario]
  const stats = showOptimistic ? current.stats.optimistic : current.stats.current

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Future Earth Simulator</h2>
        <p className="text-muted-foreground">See how your choices shape Earth&apos;s future</p>
      </div>

      {/* Year selector */}
      <div className="flex gap-3">
        {scenarios.map((scenario, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveScenario(i)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeScenario === i
                ? 'bg-neon-green text-dark-bg'
                : 'glass text-foreground hover:bg-neon-green/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {scenario.year}
          </motion.button>
        ))}
      </div>

      {/* Main display */}
      <motion.div
        key={activeScenario}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* Earth visualization */}
        <GlassmorphicCard>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="text-8xl"
              animate={{ scale: [1, 1.1, 1], rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                rotate: { duration: 60 },
              }}
            >
              {current.image}
            </motion.div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{current.title}</h3>
              <p className="text-muted-foreground mb-4">{current.description}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Current path:</span>
                  <span className="font-semibold text-red-400">{current.currentPath}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">If we act:</span>
                  <span className="font-semibold text-neon-green">{current.optimisticPath}</span>
                </div>
              </div>
            </div>
          </div>
        </GlassmorphicCard>

        {/* Path comparison toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowOptimistic(false)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              !showOptimistic
                ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                : 'glass text-muted-foreground'
            }`}
          >
            Current Path
          </button>
          <div className="text-muted-foreground text-sm">vs</div>
          <button
            onClick={() => setShowOptimistic(true)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              showOptimistic
                ? 'bg-neon-green/20 text-neon-green border border-neon-green/50'
                : 'glass text-muted-foreground'
            }`}
          >
            Optimistic Path
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <GlassmorphicCard>
            <div className="text-center">
              <p className="text-muted-foreground text-sm mb-2">Global Temperature Rise</p>
              <motion.div
                key={`temp-${showOptimistic}`}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className={`text-3xl font-bold ${
                  showOptimistic ? 'text-neon-green' : 'text-red-400'
                }`}>
                  +{stats.temp}°C
                </p>
              </motion.div>
            </div>
          </GlassmorphicCard>
          <GlassmorphicCard>
            <div className="text-center">
              <p className="text-muted-foreground text-sm mb-2">Atmospheric CO2</p>
              <motion.div
                key={`co2-${showOptimistic}`}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className={`text-3xl font-bold ${
                  showOptimistic ? 'text-neon-green' : 'text-red-400'
                }`}>
                  {stats.co2} ppm
                </p>
              </motion.div>
            </div>
          </GlassmorphicCard>
        </div>

        {/* Impact message */}
        <motion.div
          className="glass rounded-xl p-6 border-l-4 border-neon-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-foreground">
            {showOptimistic
              ? `Your actions today directly impact this timeline. Every choice compounds over 
                decades. By 2050, optimistic scenarios could stabilize at 1.5°C warming - preserving 
                the planet for future generations.`
              : `Without significant action, we face catastrophic climate impacts: extreme weather, 
                mass migration, ecosystem collapse. The window to act closes by 2030. Your choices matter.`}
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
