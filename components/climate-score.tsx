'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingUp, Award } from 'lucide-react'

interface ClimateScoreProps {
  score: number // 0-1000
}

export function ClimateScore({ score }: ClimateScoreProps) {
  const getScoreColor = (s: number) => {
    if (s >= 800) return 'from-neon-green to-neon-emerald'
    if (s >= 600) return 'from-blue-400 to-neon-emerald'
    if (s >= 400) return 'from-yellow-400 to-yellow-500'
    return 'from-red-400 to-orange-400'
  }

  const getScoreLabel = (s: number) => {
    if (s >= 800) return 'Excellent'
    if (s >= 600) return 'Good'
    if (s >= 400) return 'Fair'
    return 'Needs Work'
  }

  const circumference = 2 * Math.PI * 45
  const offset = circumference - (score / 1000) * circumference

  return (
    <div className="glass rounded-xl p-8 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-muted-foreground text-sm mb-2">YOUR CLIMATE SCORE</p>
          <h3 className="text-2xl font-bold">Impact Rating</h3>
        </div>
        <Award className="w-6 h-6 text-neon-green" />
      </div>

      <div className="flex justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="45"
              stroke="rgba(16, 185, 129, 0.1)"
              strokeWidth="8"
              fill="none"
            />
            <motion.circle
              cx="60"
              cy="60"
              r="45"
              stroke="url(#scoreGradient)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: offset }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-3xl font-bold text-neon-green"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {score}
              </motion.p>
              <p className="text-xs text-muted-foreground">/1000</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className={`text-sm font-semibold bg-gradient-to-r ${getScoreColor(score)} bg-clip-text text-transparent`}>
            {getScoreLabel(score)}
          </span>
          <motion.span
            className="text-xs text-neon-green flex items-center gap-1"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-3 h-3" />
            +12 this month
          </motion.span>
        </div>

        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>Energy Efficiency</span>
            <span className="text-neon-green">85%</span>
          </div>
          <div className="w-full bg-dark-card rounded-full h-1.5">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-green to-neon-emerald rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '85%' }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </div>

        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>Transportation Impact</span>
            <span className="text-neon-emerald">72%</span>
          </div>
          <div className="w-full bg-dark-card rounded-full h-1.5">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-green to-neon-emerald rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '72%' }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
