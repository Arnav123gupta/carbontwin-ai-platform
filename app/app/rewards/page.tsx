'use client'

import { Trophy, Zap, Star, Target, Gift, Crown } from 'lucide-react'
import { GlassmorphicCard } from '@/components/glassmorphic-card'
import { Button } from '@/components/ui/button'

const BADGES = [
  { icon: Zap, title: 'Energy Saver', description: 'Reduce energy by 100kg', earned: true },
  { icon: Star, title: 'Green Champion', description: '500kg reduction', earned: true },
  { icon: Target, title: 'Streak Master', description: '30-day streak', earned: false },
  { icon: Crown, title: 'Planet Hero', description: '1 ton reduction', earned: false },
]

const LEADERBOARD = [
  { rank: 1, name: 'EcoWarrior23', points: 15420, reduction: 2.8 },
  { rank: 2, name: 'GreenMinded', points: 14850, reduction: 2.6 },
  { rank: 3, name: 'You', points: 13220, reduction: 2.4, isYou: true },
  { rank: 4, name: 'SustainAble', points: 12950, reduction: 2.3 },
  { rank: 5, name: 'EarthGuard', points: 12100, reduction: 2.1 },
]

export default function RewardsPage() {
  return (
    <div className="space-section animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="flex items-center gap-3">
          <Trophy className="w-10 h-10 text-neon-green" />
          Rewards & Achievements
        </h1>
        <p className="text-lg text-muted-foreground font-light">Celebrate your sustainability journey</p>
      </div>

      {/* Points & Level */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassmorphicCard premium>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Total Points</p>
            <p className="text-4xl font-bold text-neon-green">13,220</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">Level 7</span>
                <span className="text-neon-green">850 / 2000 to Level 8</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-5/12 bg-gradient-to-r from-neon-green to-neon-emerald" />
              </div>
            </div>
          </div>
        </GlassmorphicCard>

        <GlassmorphicCard>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Monthly Streak</p>
            <p className="text-4xl font-bold text-neon-emerald">24 days</p>
            <p className="text-xs text-muted-foreground">Keep it going! 6 more days for badge</p>
          </div>
        </GlassmorphicCard>

        <GlassmorphicCard>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Total Reduction</p>
            <p className="text-4xl font-bold text-emerald-400">2.4 tons</p>
            <p className="text-xs text-muted-foreground">Equivalent to planting 120 trees</p>
          </div>
        </GlassmorphicCard>
      </div>

      {/* Badges */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BADGES.map((badge, i) => {
            const Icon = badge.icon
            return (
              <GlassmorphicCard key={i} className={!badge.earned ? 'opacity-50' : ''}>
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${badge.earned ? 'bg-neon-green/20' : 'bg-white/5'}`}>
                    <Icon className={`w-6 h-6 ${badge.earned ? 'text-neon-green' : 'text-muted-foreground'}`} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{badge.title}</p>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                  </div>
                  {badge.earned && <span className="text-xs text-neon-green font-semibold">Unlocked</span>}
                </div>
              </GlassmorphicCard>
            )
          })}
        </div>
      </div>

      {/* Leaderboard */}
      <GlassmorphicCard>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Crown className="w-5 h-5 text-neon-green" />
          Global Leaderboard
        </h3>
        <div className="space-y-2">
          {LEADERBOARD.map((user) => (
            <div
              key={user.rank}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                user.isYou
                  ? 'bg-neon-green/10 border-neon-green/30'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <div className="flex items-center gap-4 flex-1">
                <span className={`font-bold w-8 text-center ${user.rank <= 3 ? 'text-neon-green' : ''}`}>
                  {user.rank <= 3 && ['🥇', '🥈', '🥉'][user.rank - 1]}
                  {user.rank}
                </span>
                <div>
                  <p className={`font-semibold ${user.isYou ? 'text-neon-green' : ''}`}>
                    {user.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{user.reduction} tons CO₂ reduced</p>
                </div>
              </div>
              <p className="font-bold text-neon-green">{user.points.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </GlassmorphicCard>

      {/* Store */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Gift className="w-6 h-6 text-neon-green" />
          Rewards Store
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Carbon Offset Credit', cost: 5000, description: '1 ton of CO₂ offset' },
            { name: 'Tree Planting Kit', cost: 3000, description: 'Plant 5 trees in your name' },
            { name: 'Premium Features', cost: 2500, description: 'Unlock advanced analytics' },
            { name: 'Merchandise Pack', cost: 1500, description: 'CarbonTwin branded items' },
          ].map((reward, i) => (
            <GlassmorphicCard key={i}>
              <div className="space-y-4">
                <h4 className="font-bold">{reward.name}</h4>
                <p className="text-sm text-muted-foreground">{reward.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-neon-green/10">
                  <span className="font-semibold text-neon-green">{reward.cost} pts</span>
                  <Button className="bg-neon-green/20 hover:bg-neon-green/30 text-neon-green h-8 px-4 text-sm">
                    Redeem
                  </Button>
                </div>
              </div>
            </GlassmorphicCard>
          ))}
        </div>
      </div>
    </div>
  )
}
