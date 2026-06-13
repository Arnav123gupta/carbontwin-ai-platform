'use client'

import { useState } from 'react'
import { Send, Sparkles, Zap, Lightbulb } from 'lucide-react'
import { GlassmorphicCard } from '@/components/glassmorphic-card'
import { Button } from '@/components/ui/button'

const SUGGESTIONS = [
  { icon: Zap, text: 'How can I reduce energy at home?', category: 'Energy' },
  { icon: Lightbulb, text: 'What are my low-carbon transport options?', category: 'Transport' },
  { icon: Sparkles, text: 'Show me my weekly progress', category: 'Progress' },
]

export default function CarbonTwinPage() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hey! I'm your Carbon Twin AI. I've analyzed your lifestyle and I'm here to help you reduce your environmental impact. What would you like to know?",
    },
  ])
  const [input, setInput] = useState('')

  const handleSend = (text: string = input) => {
    if (!text.trim()) return

    setMessages([
      ...messages,
      { role: 'user', content: text },
      {
        role: 'assistant',
        content: `Based on your lifestyle, I've identified some opportunities for reduction. ${text.includes('energy') ? "You're currently using about 15% more energy than the average. Consider upgrading to LED bulbs and improving insulation. This could save 200kg CO₂ annually." : text.includes('transport') ? "Your commute accounts for 40% of your footprint. Carpooling 2 days a week could reduce this by 600kg CO₂ per year." : "You're making great progress! Keep up the momentum and focus on the areas with highest impact."}`,
      },
    ])
    setInput('')
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-neon-emerald rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-dark-bg" />
          </div>
          Your Carbon Twin
        </h1>
        <p className="text-muted-foreground">AI-powered insights tailored to your lifestyle</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Section */}
        <div className="lg:col-span-2">
          <GlassmorphicCard className="flex flex-col h-[600px]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-neon-green/20 text-foreground border border-neon-green/30'
                        : 'bg-white/5 text-foreground border border-white/10'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 pt-4 border-t border-neon-green/10">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask your Carbon Twin..."
                className="flex-1 bg-white/5 border border-neon-green/20 rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-neon-green/50 transition-colors"
              />
              <button
                onClick={() => handleSend()}
                className="bg-neon-green hover:bg-neon-emerald text-dark-bg p-2 rounded-lg transition-colors"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </GlassmorphicCard>
        </div>

        {/* Stats Panel */}
        <div className="space-y-4">
          <GlassmorphicCard>
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-neon-green" />
              Twin Analysis
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Profile Accuracy</p>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-neon-green to-neon-emerald" />
                </div>
                <p className="text-xs mt-1 text-neon-green">95% Match</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-1">Risk Score</p>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-emerald-500" />
                </div>
                <p className="text-xs mt-1 text-emerald-400">Low Risk</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-1">AI Confidence</p>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-11/12 bg-neon-green" />
                </div>
                <p className="text-xs mt-1 text-neon-green">92% Confident</p>
              </div>
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard>
            <h3 className="font-bold mb-4">Quick Suggestions</h3>
            <div className="space-y-2">
              {SUGGESTIONS.map((suggestion, i) => {
                const Icon = suggestion.icon
                return (
                  <button
                    key={i}
                    onClick={() => handleSend(suggestion.text)}
                    className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-neon-green/10 border border-white/10 hover:border-neon-green/30 transition-all text-sm"
                  >
                    <div className="flex items-start gap-2">
                      <Icon className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-foreground">{suggestion.text}</p>
                        <p className="text-xs text-muted-foreground">{suggestion.category}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </GlassmorphicCard>
        </div>
      </div>

      {/* Insights Section */}
      <GlassmorphicCard>
        <h3 className="text-xl font-bold mb-4">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-lg border border-neon-green/20">
            <p className="text-sm text-muted-foreground mb-2">Highest Impact Area</p>
            <p className="text-lg font-bold">Transportation</p>
            <p className="text-xs text-muted-foreground mt-2">45% of total footprint</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-neon-green/20">
            <p className="text-sm text-muted-foreground mb-2">Quick Win</p>
            <p className="text-lg font-bold">Switch to Green Energy</p>
            <p className="text-xs text-neon-green mt-2">Save 300kg CO₂/year</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-neon-green/20">
            <p className="text-sm text-muted-foreground mb-2">Monthly Goal</p>
            <p className="text-lg font-bold">420 kg Reduction</p>
            <p className="text-xs text-neon-green mt-2">On track +10%</p>
          </div>
        </div>
      </GlassmorphicCard>
    </div>
  )
}
