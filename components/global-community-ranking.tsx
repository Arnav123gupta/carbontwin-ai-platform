'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassmorphicCard } from './glassmorphic-card'
import { Medal, Trophy, Users, Building2, School } from 'lucide-react'

interface RankingItem {
  rank: number
  name: string
  co2Reduced: number
  badge?: string
}

const topUsers: RankingItem[] = [
  { rank: 1, name: 'EcoWarrior23', co2Reduced: 5240, badge: '👑' },
  { rank: 2, name: 'GreenLife_Alex', co2Reduced: 4890, badge: '🥈' },
  { rank: 3, name: 'ClimateChampion', co2Reduced: 4650, badge: '🥉' },
  { rank: 4, name: 'You!', co2Reduced: 2450 },
  { rank: 5, name: 'SustainableJohn', co2Reduced: 2340 },
]

const topCities: RankingItem[] = [
  { rank: 1, name: 'San Francisco, CA', co2Reduced: 245000 },
  { rank: 2, name: 'Portland, OR', co2Reduced: 198000 },
  { rank: 3, name: 'Boulder, CO', co2Reduced: 156000 },
  { rank: 4, name: 'Seattle, WA', co2Reduced: 142000 },
  { rank: 5, name: 'Austin, TX', co2Reduced: 128000 },
]

const topSchools: RankingItem[] = [
  { rank: 1, name: 'MIT', co2Reduced: 95000 },
  { rank: 2, name: 'Stanford', co2Reduced: 87000 },
  { rank: 3, name: 'UC Berkeley', co2Reduced: 76000 },
  { rank: 4, name: 'Harvard', co2Reduced: 68000 },
  { rank: 5, name: 'Yale', co2Reduced: 54000 },
]

interface Tab {
  id: 'users' | 'cities' | 'schools'
  label: string
  icon: typeof Users
  data: RankingItem[]
}

const tabs: Tab[] = [
  { id: 'users', label: 'Top Users', icon: Users, data: topUsers },
  { id: 'cities', label: 'Top Cities', icon: Building2, data: topCities },
  { id: 'schools', label: 'Top Schools', icon: School, data: topSchools },
]

export function GlobalCommunityRanking() {
  const [activeTab, setActiveTab] = useState<'users' | 'cities' | 'schools'>('users')

  const activeData = tabs.find(t => t.id === activeTab)?.data || []

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
        <h2 className="text-3xl font-bold mb-2">Global Community Rankings</h2>
        <p className="text-muted-foreground">See who's leading the climate action</p>
      </div>

      {/* Tab selector */}
      <div className="flex gap-2">
        {tabs.map(tab => {
          const Icon = tab.icon
          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-neon-green text-dark-bg'
                  : 'glass text-foreground hover:bg-neon-green/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </motion.button>
          )
        })}
      </div>

      {/* Rankings list */}
      <motion.div
        className="space-y-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {activeData.map((item, i) => {
          const isTop3 = item.rank <= 3
          const isCurrentUser = item.name === 'You!'

          return (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <GlassmorphicCard
                className={`transition-all ${
                  isTop3 ? 'border-neon-green/50 bg-neon-green/5' : ''
                } ${isCurrentUser ? 'border-l-4 border-neon-green' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Rank badge */}
                    <motion.div
                      className="relative"
                      animate={{
                        scale: isTop3 ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: isTop3 ? Infinity : 0,
                      }}
                    >
                      {isTop3 ? (
                        <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-neon-green to-neon-emerald flex items-center justify-center font-bold text-dark-bg">
                          {item.badge && <span className="text-xl">{item.badge}</span>}
                          {!item.badge && (
                            <Trophy className="w-6 h-6" />
                          )}
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full glass flex items-center justify-center font-bold text-neon-green">
                          #{item.rank}
                        </div>
                      )}
                    </motion.div>

                    {/* Name and ranking */}
                    <div>
                      <h3 className={`font-semibold ${
                        isCurrentUser ? 'text-neon-green' : ''
                      }`}>
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {activeTab === 'users'
                          ? 'Emissions Reduced'
                          : 'Community CO₂ Reduced'}
                      </p>
                    </div>
                  </div>

                  {/* CO2 value */}
                  <motion.div
                    className="text-right"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <p className={`text-2xl font-bold ${
                      isTop3 ? 'text-neon-green' : 'text-foreground'
                    }`}>
                      {(item.co2Reduced / 1000).toFixed(1)}k
                    </p>
                    <p className="text-xs text-muted-foreground">kg CO₂</p>
                  </motion.div>
                </div>
              </GlassmorphicCard>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Competition info */}
      <motion.div
        className="glass rounded-xl p-6 border-l-4 border-neon-green"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold mb-2">Join the Movement</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Your community is tracking who reduces the most emissions. Climb the rankings by
          completing missions, maintaining streaks, and living sustainably. The monthly winners
          get featured on our homepage!
        </p>
        <motion.button
          className="text-neon-green font-medium text-sm hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Invite friends to compete
          <span>→</span>
        </motion.button>
      </motion.div>
    </div>
  )
}
