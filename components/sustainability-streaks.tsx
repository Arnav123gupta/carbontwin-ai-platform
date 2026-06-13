'use client'

import { motion } from 'framer-motion'
import { GlassmorphicCard } from './glassmorphic-card'
import { Flame, TrendingUp } from 'lucide-react'

interface Streak {
  name: string
  current: number
  best: number
  icon: string
}

const streaks: Streak[] = [
  { name: 'Carbon Neutral Days', current: 12, best: 28, icon: '🌱' },
  { name: 'Eco Meals', current: 8, best: 15, icon: '🥗' },
  { name: 'No Waste Days', current: 5, best: 14, icon: '♻️' },
  { name: 'Active Commute', current: 23, best: 45, icon: '🚴' },
]

export function SustainabilityStreaks() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Sustainability Streaks</h2>
        <p className="text-muted-foreground">Maintain your eco-friendly momentum</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {streaks.map((streak, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <GlassmorphicCard>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{streak.icon}</span>
                    <div>
                      <h3 className="font-semibold">{streak.name}</h3>
                      <p className="text-xs text-muted-foreground">Personal best: {streak.best} days</p>
                    </div>
                  </div>
                </div>

                {/* Current streak with flames */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      <Flame className="w-6 h-6 text-orange-500" />
                    </motion.div>
                    <motion.span
                      className="text-4xl font-bold text-orange-500"
                      key={streak.current}
                      initial={{ scale: 1.5 }}
                      animate={{ scale: 1 }}
                    >
                      {streak.current}
                    </motion.span>
                    <span className="text-muted-foreground font-medium">day streak</span>
                  </div>

                  {/* Streak progress bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Progress to personal best</span>
                      <span>{Math.round((streak.current / streak.best) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-dark-card rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${(streak.current / streak.best) * 100}%`,
                        }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </div>

                {/* Encouragement message */}
                {streak.current > streak.best * 0.8 ? (
                  <motion.div
                    className="text-sm text-neon-green font-medium flex items-center gap-2 pt-2 border-t border-neon-green/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <TrendingUp className="w-4 h-4" />
                    Almost there! Keep it up!
                  </motion.div>
                ) : (
                  <div className="text-sm text-muted-foreground pt-2 border-t border-muted/20">
                    {streak.best - streak.current} days to beat your personal best
                  </div>
                )}
              </div>
            </GlassmorphicCard>
          </motion.div>
        ))}
      </div>

      {/* Streak tips */}
      <motion.div
        className="glass rounded-xl p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold mb-3">Keep Your Streaks Alive</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-neon-green">•</span>
            <span>Even one eco-friendly action counts toward your daily streak</span>
          </li>
          <li className="flex gap-2">
            <span className="text-neon-green">•</span>
            <span>Streaks reset if you miss a day - mark your actions before midnight</span>
          </li>
          <li className="flex gap-2">
            <span className="text-neon-green">•</span>
            <span>Share your streaks to inspire friends and unlock bonus rewards</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}
