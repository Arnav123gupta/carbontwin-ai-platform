'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GlassmorphicCard } from './glassmorphic-card'
import { ArrowRight, Zap } from 'lucide-react'

interface Scenario {
  id: 'current' | 'improved'
  title: string
  emoji: string
  description: string
  outcomes: string[]
  color: string
  callToAction: string
}

const scenarios: Scenario[] = [
  {
    id: 'current',
    title: 'Your Future If You Continue',
    emoji: '⚠️',
    description: 'Continuing current habits without change...',
    outcomes: [
      '2030: 40% more daily emissions than today',
      '2040: Your carbon footprint doubles',
      '2050: Living in a world 3°C warmer',
      'Extreme weather, resource scarcity, migration crisis',
      'Your children inherit an unstable climate',
    ],
    color: 'from-red-500/20 to-orange-500/10',
    callToAction: 'This timeline is preventable - act now!',
  },
  {
    id: 'improved',
    title: 'Your Future If You Improve',
    emoji: '✨',
    description: 'Making sustainable choices starting today...',
    outcomes: [
      '2030: 30% reduction in personal emissions',
      '2040: Carbon neutral lifestyle achieved',
      '2050: Living in a stable 1.5°C world',
      'Clean air, thriving ecosystems, abundance',
      'Your children inherit a healthy planet',
    ],
    color: 'from-neon-green/20 to-neon-emerald/10',
    callToAction: 'You have the power to create this future!',
  },
]

export function InteractiveStorytelling() {
  const [selectedScenario, setSelectedScenario] = useState<'current' | 'improved' | null>(null)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Your Climate Futures</h2>
        <p className="text-muted-foreground">
          Two timelines. One choice. See the impact of your decisions.
        </p>
      </div>

      {/* Scenario cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {scenarios.map(scenario => (
          <motion.button
            key={scenario.id}
            onClick={() => setSelectedScenario(selectedScenario === scenario.id ? null : scenario.id)}
            className="text-left"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <GlassmorphicCard
              className={`h-full transition-all cursor-pointer border-2 ${
                selectedScenario === scenario.id
                  ? 'border-neon-green'
                  : 'border-transparent hover:border-muted/50'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{scenario.emoji}</span>
                  <h3 className="text-xl font-bold">{scenario.title}</h3>
                </div>
                <p className="text-muted-foreground">{scenario.description}</p>

                <motion.div
                  className="flex items-center gap-2 text-neon-green font-medium"
                  animate={{
                    x: selectedScenario === scenario.id ? 5 : 0,
                  }}
                >
                  {selectedScenario === scenario.id ? (
                    <>
                      See full timeline <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Explore this path <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.div>
              </div>
            </GlassmorphicCard>
          </motion.button>
        ))}
      </div>

      {/* Detailed timeline view */}
      <AnimatePresence>
        {selectedScenario && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <GlassmorphicCard
              className={`bg-gradient-to-br ${
                scenarios.find(s => s.id === selectedScenario)?.color
              }`}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {scenarios.find(s => s.id === selectedScenario)?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {scenarios.find(s => s.id === selectedScenario)?.description}
                  </p>
                </div>

                {/* Timeline */}
                <div className="space-y-3">
                  {scenarios
                    .find(s => s.id === selectedScenario)
                    ?.outcomes.map((outcome, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="flex-shrink-0">
                          <motion.div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                              selectedScenario === 'current'
                                ? 'bg-red-500/30 text-red-400'
                                : 'bg-neon-green/30 text-neon-green'
                            }`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            {i + 1}
                          </motion.div>
                        </div>
                        <p className="flex-1 pt-1 leading-relaxed">{outcome}</p>
                      </motion.div>
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                  className={`rounded-lg p-4 border-l-4 ${
                    selectedScenario === 'current'
                      ? 'border-red-500 bg-red-500/10'
                      : 'border-neon-green bg-neon-green/10'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className={`font-semibold ${
                    selectedScenario === 'current'
                      ? 'text-red-400'
                      : 'text-neon-green'
                  }`}>
                    {scenarios.find(s => s.id === selectedScenario)?.callToAction}
                  </p>
                </motion.div>

                {/* Action button */}
                {selectedScenario === 'improved' && (
                  <motion.button
                    className="w-full bg-neon-green text-dark-bg font-bold py-3 rounded-lg hover:bg-neon-emerald transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Zap className="w-5 h-5" />
                    Start Creating This Future
                  </motion.button>
                )}
              </div>
            </GlassmorphicCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Guidance */}
      <motion.div
        className="glass rounded-xl p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold mb-2">The Choice is Yours</h3>
        <p className="text-sm text-muted-foreground">
          These aren&apos;t sci-fi scenarios - they&apos;re real projections based on current climate
          science. The future isn&apos;t written yet. Every action you take today shifts the timeline.
          Complete missions, maintain streaks, and inspire others to build the future you want to see.
        </p>
      </motion.div>
    </div>
  )
}
