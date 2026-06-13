'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Flame, Award, TrendingUp, Gem } from 'lucide-react'
import { GlassmorphicCard } from '@/components/glassmorphic-card'
import { Button } from '@/components/ui/button'

export default function GamePage() {
  const [level, setLevel] = useState(5)
  const [xp, setXp] = useState(3420)
  const [streak, setStreak] = useState(12)
  const [coins, setCoins] = useState(2150)

  const handlePlayMission = () => {
    setXp(prev => prev + 100)
    setStreak(prev => prev + 1)
    setCoins(prev => prev + 50)
  }

  const levelProgress = (xp % 1000) / 1000

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Planet Defense</h1>
        <p className="text-muted-foreground">Master your environmental impact with epic challenges</p>
      </div>

      {/* Player Stats */}
      <div>
        <GlassmorphicCard>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Level */}
            <div className="text-center">
              <motion.div
                className="relative w-24 h-24 mx-auto mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
              >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgba(16, 185, 129, 0.1)"
                    strokeWidth="4"
                    fill="none"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="url(#levelGradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={283}
                    strokeDashoffset={283 - 283 * levelProgress}
                    initial={{ strokeDashoffset: 283 }}
                    animate={{ strokeDashoffset: 283 - 283 * levelProgress }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="levelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-neon-green">{level}</p>
                    <p className="text-xs text-muted-foreground">LVL</p>
                  </div>
                </div>
              </motion.div>
              <p className="text-sm text-muted-foreground">Level</p>
            </div>

            {/* XP */}
            <div className="flex flex-col justify-center">
              <p className="text-muted-foreground text-sm mb-3">Experience</p>
              <motion.p
                className="text-3xl font-bold text-neon-green mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {xp}
              </motion.p>
              <div className="h-2 bg-dark-card rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-green to-neon-emerald"
                  animate={{ width: `${levelProgress * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{Math.floor(levelProgress * 100)}% to next level</p>
            </div>

            {/* Streak */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-4 h-4 text-orange-400" />
                <p className="text-muted-foreground text-sm">Streak</p>
              </div>
              <motion.p
                className="text-3xl font-bold text-orange-400"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {streak} days
              </motion.p>
              <p className="text-xs text-muted-foreground mt-3">Keep it going!</p>
            </div>

            {/* Coins */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Gem className="w-4 h-4 text-neon-emerald" />
                <p className="text-muted-foreground text-sm">Credits</p>
              </div>
              <motion.p
                className="text-3xl font-bold text-neon-emerald"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {coins}
              </motion.p>
              <p className="text-xs text-muted-foreground mt-3">Redeem rewards</p>
            </div>
          </div>
        </GlassmorphicCard>
      </div>

      {/* Active Challenges */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Active Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Zap,
              title: 'Eco Warrior',
              description: 'Complete 5 sustainability missions this week',
              reward: '500 XP, 100 Credits',
              difficulty: 'Medium',
              progress: 60,
            },
            {
              icon: Shield,
              title: 'Carbon Guardian',
              description: 'Maintain a 20-day eco streak',
              reward: '1000 XP, 250 Credits',
              difficulty: 'Hard',
              progress: 75,
            },
            {
              icon: TrendingUp,
              title: 'Green Grower',
              description: 'Reach level 10',
              reward: '750 XP, 150 Credits',
              difficulty: 'Medium',
              progress: 45,
            },
            {
              icon: Award,
              title: 'Impact Master',
              description: 'Offset 10,000 kg CO₂',
              reward: '1500 XP, 500 Credits',
              difficulty: 'Legend',
              progress: 34,
            },
          ].map((challenge, i) => {
            const Icon = challenge.icon
            const difficultyColor = {
              Easy: 'text-green-400',
              Medium: 'text-yellow-400',
              Hard: 'text-red-400',
              Legend: 'text-neon-green',
            }[challenge.difficulty]

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              >
                <GlassmorphicCard className="hover:border-neon-green/40 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-lg bg-neon-green/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-neon-green" />
                      </div>
                      <span className={`text-xs font-bold ${difficultyColor}`}>{challenge.difficulty}</span>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-1">{challenge.title}</h3>
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-neon-green">{challenge.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-dark-card rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-neon-green to-neon-emerald"
                          initial={{ width: 0 }}
                          animate={{ width: `${challenge.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        />
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground pt-2">Reward: {challenge.reward}</p>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Play Mission Button */}
      <div className="flex justify-center">
        <Button
          onClick={handlePlayMission}
          className="bg-gradient-to-r from-neon-green to-neon-emerald text-dark-bg font-bold text-lg px-12 h-14 hover:opacity-90"
        >
          <Zap className="w-5 h-5 mr-2" />
          Start Mission
        </Button>
      </div>
    </div>
  )
}
