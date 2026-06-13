'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function LiveCO2Counter() {
  const [co2Reduced, setCO2Reduced] = useState(45230000)

  useEffect(() => {
    // Simulate real-time CO2 reduction (increases every 2 seconds)
    const interval = setInterval(() => {
      setCO2Reduced(prev => prev + Math.random() * 50000)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="glass rounded-xl p-8 space-y-4"
    >
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
        <p className="text-sm font-semibold text-neon-green">LIVE TRACKER</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Global CO₂ Reduction This Week</p>
        <motion.p
          key={Math.floor(co2Reduced / 100000)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold text-neon-green"
        >
          {(co2Reduced / 1000000).toFixed(1)}M tons
        </motion.p>
      </div>

      <div className="pt-4 border-t border-neon-green/20">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span>Progress to 1B ton target</span>
          <span>{Math.min((co2Reduced / 1000000000) * 100, 100).toFixed(1)}%</span>
        </div>
        <div className="w-full bg-dark-card rounded-full h-2 overflow-hidden">
          <motion.div
            animate={{ width: `${Math.min((co2Reduced / 1000000000) * 100, 100)}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-neon-green to-neon-emerald"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  )
}
