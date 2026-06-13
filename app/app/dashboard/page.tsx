'use client'

import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { Activity, Leaf, Target, TrendingDown, Award, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { StatsCard } from '@/components/stats-card'
import { GlassmorphicCard } from '@/components/glassmorphic-card'
import { ClimateScore } from '@/components/climate-score'
import { AICarbonAvatar } from '@/components/ai-carbon-avatar'
import { RealImpactDashboard } from '@/components/real-impact-dashboard'
import { ClimateMissions } from '@/components/climate-missions'
import { SustainabilityStreaks } from '@/components/sustainability-streaks'

const WEEKLY_DATA = [
  { day: 'Mon', carbon: 45, target: 40 },
  { day: 'Tue', carbon: 52, target: 40 },
  { day: 'Wed', carbon: 38, target: 40 },
  { day: 'Thu', carbon: 41, target: 40 },
  { day: 'Fri', carbon: 35, target: 40 },
  { day: 'Sat', carbon: 28, target: 40 },
  { day: 'Sun', carbon: 32, target: 40 },
]

const MONTHLY_DATA = [
  { month: 'Jan', emission: 1200, reduction: 150 },
  { month: 'Feb', emission: 1100, reduction: 180 },
  { month: 'Mar', emission: 950, reduction: 250 },
  { month: 'Apr', emission: 850, reduction: 300 },
  { month: 'May', emission: 780, reduction: 350 },
  { month: 'Jun', emission: 650, reduction: 420 },
]

const RECENT_ACTIVITIES = [
  { activity: 'Used public transport', co2: -5.2, time: '2 hours ago' },
  { activity: 'Purchased renewable energy credits', co2: -10.5, time: '1 day ago' },
  { activity: 'Took a flight', co2: +45.3, time: '3 days ago' },
  { activity: 'Completed Bike to Work challenge', co2: -8.7, time: '1 week ago' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Welcome back, Innovator</h1>
        <p className="text-muted-foreground">Track your progress towards a sustainable future</p>
      </div>

      {/* AI Carbon Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AICarbonAvatar name="Champion" greeting="Welcome back! Your impact is growing exponentially." />
      </motion.div>

      {/* Climate Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ClimateScore score={742} />
      </motion.div>

      {/* Real Impact Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <RealImpactDashboard />
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: Activity,
            label: "Today's Footprint",
            value: "32",
            unit: "kg CO₂",
            trend: "down",
            trendValue: "8% less",
          },
          {
            icon: Leaf,
            label: "Monthly Reduction",
            value: "420",
            unit: "kg CO₂",
            trend: "up",
            trendValue: "25% more",
          },
          {
            icon: Target,
            label: "Goal Progress",
            value: "72",
            unit: "%",
            trend: "up",
            trendValue: "On track",
          },
          {
            icon: Award,
            label: "Total Points",
            value: "5,420",
            trend: "up",
            trendValue: "320 points",
          },
        ].map((card, i) => (
          <StatsCard
            key={i}
            icon={card.icon}
            label={card.label}
            value={card.value}
            unit={card.unit}
            trend={card.trend}
            trendValue={card.trendValue}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Carbon Footprint */}
        <GlassmorphicCard>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-neon-green" />
            Weekly Footprint
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={WEEKLY_DATA}>
              <defs>
                <linearGradient id="colorCarbon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
              <XAxis dataKey="day" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #10b981',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#f1f5f9' }}
              />
              <Area type="monotone" dataKey="carbon" stroke="#10b981" fillOpacity={1} fill="url(#colorCarbon)" />
            </AreaChart>
          </ResponsiveContainer>
        </GlassmorphicCard>

        {/* Monthly Trend */}
        <GlassmorphicCard>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-neon-emerald" />
            6-Month Progress
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={MONTHLY_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #10b981',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#f1f5f9' }}
              />
              <Line type="monotone" dataKey="emission" stroke="#ef4444" strokeWidth={2} name="Emissions" />
              <Line type="monotone" dataKey="reduction" stroke="#10b981" strokeWidth={2} name="Reduction" />
            </LineChart>
          </ResponsiveContainer>
        </GlassmorphicCard>
      </div>

      {/* Climate Missions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ClimateMissions />
      </motion.div>

      {/* Sustainability Streaks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SustainabilityStreaks />
      </motion.div>

      {/* Activity Feed & Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <GlassmorphicCard>
            <h3 className="text-xl font-bold mb-4">Recent Activities</h3>
            <div className="space-y-4">
              {RECENT_ACTIVITIES.map((item, i) => (
                <div key={i} className="flex items-center justify-between pb-4 border-b border-neon-green/10 last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{item.activity}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                  <span className={`font-bold ${item.co2 < 0 ? 'text-neon-green' : 'text-red-400'}`}>
                    {item.co2 > 0 ? '+' : ''}{item.co2} kg
                  </span>
                </div>
              ))}
            </div>
          </GlassmorphicCard>
        </div>

        {/* Goals */}
        <GlassmorphicCard>
          <h3 className="text-xl font-bold mb-4">Your Goals</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium">Monthly Reduction</p>
                <p className="text-xs text-neon-green">420/500 kg</p>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-neon-green to-neon-emerald" style={{ width: '84%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium">Daily Target</p>
                <p className="text-xs text-neon-green">32/40 kg</p>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-neon-green to-neon-emerald" style={{ width: '80%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium">Community Challenge</p>
                <p className="text-xs text-neon-green">89/100 points</p>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-neon-green to-neon-emerald" style={{ width: '89%' }} />
              </div>
            </div>
          </div>
        </GlassmorphicCard>
      </div>
    </div>
  )
}
