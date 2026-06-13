'use client'

import { motion } from 'framer-motion'
import { Leaf, Award, Zap, Trees } from 'lucide-react'
import { GlassmorphicCard } from '@/components/glassmorphic-card'

const TREES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  height: Math.random() * 100 + 80,
  delay: i * 0.08,
  level: Math.floor(Math.random() * 5) + 1,
}))

const MISSIONS = [
  {
    icon: Zap,
    title: 'Energy Saver',
    description: 'Reduce electricity by 20%',
    reward: '5 Trees',
    progress: 75,
  },
  {
    icon: Leaf,
    title: 'Green Commute',
    description: 'Use public transport 5 times',
    reward: '8 Trees',
    progress: 60,
  },
  {
    icon: Award,
    title: 'Community Leader',
    description: 'Invite 3 friends',
    reward: '10 Trees',
    progress: 33,
  },
]

export default function ForestPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <Trees className="w-8 h-8 text-neon-green" />
          Your Virtual Forest
        </h1>
        <p className="text-muted-foreground">Every action grows your forest. Plant real trees with your impact!</p>
      </div>

      {/* Forest Visualization */}
      <div>
        <GlassmorphicCard className="py-12">
          <div className="flex items-end justify-center gap-6 h-96 px-8">
            {TREES.map((tree) => (
              <motion.div
                key={tree.id}
                className="flex flex-col items-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: tree.delay,
                }}
              >
                {/* Tree */}
                <motion.div
                  className="relative"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div
                    className="w-12 bg-gradient-to-b from-neon-green to-neon-emerald rounded-full relative"
                    style={{ height: `${tree.height}px` }}
                  >
                    {/* Foliage */}
                    <motion.div
                      className="absolute -top-8 -left-4 w-20 h-16 bg-neon-green/40 rounded-full blur-lg"
                      animate={{ opacity: [0.4, 0.6, 0.4] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  {/* Trunk */}
                  <div
                    className="w-4 h-12 bg-amber-700 mx-auto"
                    style={{ marginTop: '-12px' }}
                  />
                </motion.div>

                {/* Level Badge */}
                <motion.div
                  className="mt-3 px-2 py-1 rounded-full bg-neon-green/20 border border-neon-green/40 text-xs font-semibold text-neon-green"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: tree.delay + 0.3, duration: 0.4 }}
                >
                  Lvl {tree.level}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.p
              className="text-2xl font-bold text-neon-green mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              12 Trees Planted
            </motion.p>
            <p className="text-muted-foreground text-sm">Each tree = 50kg CO₂ offset</p>
          </div>
        </GlassmorphicCard>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total CO₂ Offset', value: '600kg', icon: Leaf },
          { label: 'Real Trees Planted', value: '12', icon: Trees },
          { label: 'Forest Level', value: '5', icon: Award },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <GlassmorphicCard key={i} className="text-center">
              <Icon className="w-8 h-8 text-neon-green mx-auto mb-3" />
              <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-neon-green">{stat.value}</p>
            </GlassmorphicCard>
          )
        })}
      </div>

      {/* Active Missions */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Planting Missions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MISSIONS.map((mission, i) => {
            const Icon = mission.icon
            return (
              <GlassmorphicCard key={i}>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-neon-green/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-neon-green" />
                    </div>
                    <span className="text-xs font-semibold text-neon-green bg-neon-green/10 px-2 py-1 rounded">
                      {mission.reward}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold mb-1">{mission.title}</h3>
                    <p className="text-sm text-muted-foreground">{mission.description}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-neon-green">{mission.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-card rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-neon-green to-neon-emerald"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${mission.progress}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>
            )
          })}
        </div>
      </div>
    </div>
  )
}
