'use client'

import { Users, Zap, Heart, MessageCircle, TrendingUp } from 'lucide-react'
import { GlassmorphicCard } from '@/components/glassmorphic-card'
import { Button } from '@/components/ui/button'

const CHALLENGES = [
  {
    title: 'Meatless Mondays',
    description: 'Go vegetarian for the day',
    participants: 2847,
    co2Saved: 320,
    progress: 75,
    joined: true,
  },
  {
    title: 'Bike Week',
    description: 'Commute by bike instead of car',
    participants: 1923,
    co2Saved: 450,
    progress: 45,
    joined: false,
  },
  {
    title: 'Energy Shutdown',
    description: 'Reduce electricity usage by 25%',
    participants: 3104,
    co2Saved: 280,
    progress: 60,
    joined: true,
  },
  {
    title: 'Plastic Free July',
    description: 'Eliminate single-use plastics',
    participants: 2156,
    co2Saved: 195,
    progress: 55,
    joined: false,
  },
]

const TEAMS = [
  {
    name: 'Green Knights',
    members: 156,
    totalReduction: 45.3,
    rank: 1,
  },
  {
    name: 'Eco Warriors',
    members: 142,
    totalReduction: 42.8,
    rank: 2,
  },
  {
    name: 'Planet Savers',
    members: 128,
    totalReduction: 38.5,
    rank: 3,
  },
]

export default function CommunityPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <Users className="w-10 h-10 text-neon-green" />
          Community Battles
        </h1>
        <p className="text-muted-foreground">Join challenges and compete with the global community</p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassmorphicCard>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4" />
              Active Members
            </p>
            <p className="text-3xl font-bold text-neon-green">48,293</p>
            <p className="text-xs text-muted-foreground">+2,451 this month</p>
          </div>
        </GlassmorphicCard>

        <GlassmorphicCard>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Community Reduction
            </p>
            <p className="text-3xl font-bold text-neon-emerald">18,542 tons</p>
            <p className="text-xs text-muted-foreground">CO₂ saved together</p>
          </div>
        </GlassmorphicCard>

        <GlassmorphicCard>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Active Challenges
            </p>
            <p className="text-3xl font-bold text-emerald-400">12</p>
            <p className="text-xs text-muted-foreground">Running this month</p>
          </div>
        </GlassmorphicCard>
      </div>

      {/* Challenges */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Featured Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CHALLENGES.map((challenge, i) => (
            <GlassmorphicCard key={i}>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-lg">{challenge.title}</h4>
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                  </div>
                  {challenge.joined && (
                    <span className="text-xs bg-neon-green/20 text-neon-green px-2 py-1 rounded-full">
                      Joined
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">{challenge.participants.toLocaleString()} participants</span>
                    <span className="text-neon-green">{challenge.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-neon-green to-neon-emerald" style={{ width: `${challenge.progress}%` }} />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neon-green/10">
                  <span className="text-sm text-neon-green font-semibold">{challenge.co2Saved}kg CO₂ saved</span>
                  <Button className={`h-8 px-4 text-sm ${challenge.joined ? 'bg-neon-green/20 text-neon-green' : 'bg-neon-green text-dark-bg'}`}>
                    {challenge.joined ? 'Active' : 'Join'}
                  </Button>
                </div>
              </div>
            </GlassmorphicCard>
          ))}
        </div>
      </div>

      {/* Team Leaderboard */}
      <GlassmorphicCard>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-neon-green" />
          Top Teams
        </h3>
        <div className="space-y-3">
          {TEAMS.map((team, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-4 flex-1">
                <span className="font-bold text-neon-green w-6 text-center">{team.rank}</span>
                <div>
                  <p className="font-semibold text-foreground">{team.name}</p>
                  <p className="text-xs text-muted-foreground">{team.members} members</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-neon-green">{team.totalReduction} tons</p>
                <p className="text-xs text-muted-foreground">CO₂ saved</p>
              </div>
            </div>
          ))}
        </div>
      </GlassmorphicCard>

      {/* Create Team CTA */}
      <GlassmorphicCard>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Create Your Own Team</h3>
            <p className="text-muted-foreground">Invite friends and competitors to form the ultimate eco-warrior squad</p>
          </div>
          <Button className="bg-neon-green hover:bg-neon-emerald text-dark-bg font-semibold h-10 px-6 whitespace-nowrap">
            Create Team
          </Button>
        </div>
      </GlassmorphicCard>
    </div>
  )
}
