'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassmorphicCard } from './glassmorphic-card'
import { CheckCircle2, Circle, Award, Zap, Calendar } from 'lucide-react'

interface Mission {
  id: string
  type: 'daily' | 'weekly' | 'monthly'
  title: string
  description: string
  xpReward: number
  completed: boolean
  badge?: string
  icon: string
}

const missions: Mission[] = [
  {
    id: 'd1',
    type: 'daily',
    title: 'Carbon Fast',
    description: 'Use public transport or bike instead of driving',
    xpReward: 50,
    completed: true,
    icon: '🚴',
  },
  {
    id: 'd2',
    type: 'daily',
    title: 'Energy Saver',
    description: 'Keep home temp at 68°F or use less AC',
    xpReward: 35,
    completed: true,
    icon: '⚡',
  },
  {
    id: 'd3',
    type: 'daily',
    title: 'Plastic Free',
    description: 'Use reusable bags and avoid single-use plastics',
    xpReward: 40,
    completed: false,
    icon: '♻️',
  },
  {
    id: 'w1',
    type: 'weekly',
    title: 'Meat-Free Week',
    description: '4 vegetarian meals or more this week',
    xpReward: 150,
    completed: true,
    badge: '🥗',
  },
  {
    id: 'w2',
    type: 'weekly',
    title: 'Water Warrior',
    description: 'Save 100+ gallons through shorter showers',
    xpReward: 120,
    completed: false,
    icon: '💧',
  },
  {
    id: 'm1',
    type: 'monthly',
    title: 'Carbon Neutral',
    description: 'Offset your entire month\'s emissions',
    xpReward: 500,
    completed: false,
    badge: '🌱',
  },
]

export function ClimateMissions() {
  const [selectedType, setSelectedType] = useState<'daily' | 'weekly' | 'monthly' | 'all'>('all')
  const [completedMissions, setCompletedMissions] = useState(
    missions.filter(m => m.completed).map(m => m.id)
  )

  const toggleMission = (missionId: string) => {
    setCompletedMissions(prev =>
      prev.includes(missionId)
        ? prev.filter(id => id !== missionId)
        : [...prev, missionId]
    )
  }

  const filtered =
    selectedType === 'all'
      ? missions
      : missions.filter(m => m.type === selectedType)

  const totalXP = filtered
    .filter(m => completedMissions.includes(m.id))
    .reduce((sum, m) => sum + m.xpReward, 0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Climate Missions</h2>
        <p className="text-muted-foreground">Complete daily, weekly, and monthly challenges</p>
      </div>

      {/* XP Display */}
      <motion.div
        className="glass rounded-xl p-6 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <p className="text-muted-foreground text-sm mb-1">Mission XP Earned</p>
          <motion.p
            className="text-4xl font-bold text-neon-green"
            key={totalXP}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
          >
            {totalXP}
          </motion.p>
        </div>
        <Zap className="w-12 h-12 text-neon-green opacity-50" />
      </motion.div>

      {/* Type selector */}
      <div className="flex gap-2 flex-wrap">
        {(['all', 'daily', 'weekly', 'monthly'] as const).map(type => (
          <motion.button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
              selectedType === type
                ? 'bg-neon-green text-dark-bg'
                : 'glass text-foreground hover:bg-neon-green/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type}
          </motion.button>
        ))}
      </div>

      {/* Missions list */}
      <motion.div
        className="space-y-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filtered.map((mission, i) => {
          const isCompleted = completedMissions.includes(mission.id)
          const typeEmoji = {
            daily: '📅',
            weekly: '📆',
            monthly: '📊',
          }[mission.type]

          return (
            <motion.div
              key={mission.id}
              variants={itemVariants}
              onClick={() => toggleMission(mission.id)}
              className="cursor-pointer"
            >
              <GlassmorphicCard className={`transition-all ${
                isCompleted ? 'border-neon-green/50 bg-neon-green/5' : ''
              }`}>
                <div className="flex items-start gap-4">
                  <motion.button
                    className="flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleMission(mission.id)}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-neon-green" />
                    ) : (
                      <Circle className="w-6 h-6 text-muted-foreground" />
                    )}
                  </motion.button>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{mission.icon || mission.badge}</span>
                          <h3 className={`font-semibold ${
                            isCompleted ? 'text-neon-green line-through' : ''
                          }`}>
                            {mission.title}
                          </h3>
                          <span className="text-xs bg-muted/50 px-2 py-1 rounded text-muted-foreground">
                            {typeEmoji} {mission.type}
                          </span>
                        </div>
                        <p className={`text-sm ${
                          isCompleted ? 'text-muted-foreground' : 'text-muted-foreground'
                        }`}>
                          {mission.description}
                        </p>
                      </div>

                      <motion.div
                        className="flex-shrink-0 text-right"
                        animate={{
                          scale: isCompleted ? [1, 1.1, 1] : 1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                      >
                        <div className="flex items-center gap-1 text-neon-green font-bold">
                          <Zap className="w-4 h-4" />
                          +{mission.xpReward}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
