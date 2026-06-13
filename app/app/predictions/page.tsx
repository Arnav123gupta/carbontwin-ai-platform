'use client'

import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp, Target, AlertCircle, Lightbulb } from 'lucide-react'
import { GlassmorphicCard } from '@/components/glassmorphic-card'
import { StatsCard } from '@/components/stats-card'

const PREDICTION_DATA = [
  { month: 'Current', actual: 650, predicted: 650 },
  { month: 'Jul', actual: null, predicted: 620 },
  { month: 'Aug', actual: null, predicted: 590 },
  { month: 'Sep', actual: null, predicted: 550 },
  { month: 'Oct', actual: null, predicted: 500 },
  { month: 'Nov', actual: null, predicted: 450 },
  { month: 'Dec', actual: null, predicted: 400 },
]

const SCENARIOS = [
  { name: 'Current Path', reduction: 250, color: '#ef4444' },
  { name: 'Moderate Changes', reduction: 450, color: '#f59e0b' },
  { name: 'Aggressive Action', reduction: 650, color: '#10b981' },
]

export default function PredictionsPage() {
  return (
    <div className="space-section animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="flex items-center gap-3">
          <TrendingUp className="w-10 h-10 text-neon-green" />
          Prediction Center
        </h1>
        <p className="text-lg text-muted-foreground font-light">AI-powered forecasts for your carbon future</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          icon={Target}
          label="Projected 2024 Emissions"
          value="4.2"
          unit="tons CO₂"
          trend="down"
          trendValue="18% below baseline"
        />
        <StatsCard
          icon={TrendingUp}
          label="Potential Annual Savings"
          value="2.8"
          unit="tons"
          trend="up"
          trendValue="With recommended actions"
        />
        <StatsCard
          icon={Lightbulb}
          label="Top Opportunity"
          value="520 kg"
          unit="CO₂/year"
        />
      </div>

      {/* Main Prediction Chart */}
      <GlassmorphicCard>
        <h3 className="text-xl font-bold mb-4">6-Month Emission Forecast</h3>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={PREDICTION_DATA}>
            <defs>
              <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
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
            <Legend />
            <Area type="monotone" dataKey="predicted" stroke="#10b981" fill="url(#colorPredicted)" name="Predicted" />
            <Line type="monotone" dataKey="actual" stroke="#34d399" strokeWidth={2} name="Actual" />
          </AreaChart>
        </ResponsiveContainer>
      </GlassmorphicCard>

      {/* Scenarios */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What-If Scenarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SCENARIOS.map((scenario, i) => (
            <GlassmorphicCard key={i}>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: scenario.color }} />
                  <h4 className="font-bold">{scenario.name}</h4>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">{scenario.reduction}</p>
                  <p className="text-sm text-muted-foreground">kg CO₂ reduction/year</p>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full"
                    style={{
                      width: `${(scenario.reduction / 650) * 100}%`,
                      backgroundColor: scenario.color,
                    }}
                  />
                </div>
              </div>
            </GlassmorphicCard>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <GlassmorphicCard>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-neon-green" />
          AI Recommendations
        </h3>
        <div className="space-y-3">
          {[
            { title: 'Switch to Renewable Energy', impact: '+320 kg/year saved', priority: 'High' },
            { title: 'Reduce Flight Travel', impact: '+210 kg/year saved', priority: 'High' },
            { title: 'Optimize Home Energy', impact: '+155 kg/year saved', priority: 'Medium' },
            { title: 'Electric Vehicle Upgrade', impact: '+250 kg/year saved', priority: 'High' },
          ].map((rec, i) => (
            <div key={i} className="flex items-start justify-between p-4 bg-white/5 rounded-lg border border-neon-green/20">
              <div>
                <p className="font-semibold text-foreground">{rec.title}</p>
                <p className="text-sm text-neon-green">{rec.impact}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${rec.priority === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {rec.priority}
              </span>
            </div>
          ))}
        </div>
      </GlassmorphicCard>
    </div>
  )
}
