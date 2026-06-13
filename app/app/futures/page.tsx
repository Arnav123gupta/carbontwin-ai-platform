'use client'

import { motion } from 'framer-motion'
import { FutureEarthSimulator } from '@/components/future-earth-simulator'
import { InteractiveStorytelling } from '@/components/interactive-storytelling'
import { GlobalCommunityRanking } from '@/components/global-community-ranking'

export default function FuturesPage() {
  return (
    <div className="space-y-12">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-2">Your Climate Futures</h1>
        <p className="text-muted-foreground text-lg">
          Explore multiple timelines and see how your choices shape Earth's future
        </p>
      </motion.div>

      {/* Interactive Storytelling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <InteractiveStorytelling />
      </motion.div>

      {/* Future Earth Simulator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <FutureEarthSimulator />
      </motion.div>

      {/* Global Rankings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <GlobalCommunityRanking />
      </motion.div>

      {/* Impact summary */}
      <motion.div
        className="glass rounded-xl p-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-4">One Planet. Many Futures.</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          The climate crisis isn't a distant threat—it's unfolding now. But the future isn't written.
          Your daily choices compound over time. Start with one small action today. Build momentum
          with streaks. Inspire others with your impact. Together, we're shifting the timeline toward hope.
        </p>
        <motion.button
          className="bg-neon-green text-dark-bg font-bold px-8 py-3 rounded-lg hover:bg-neon-emerald transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Take Your First Mission
        </motion.button>
      </motion.div>
    </div>
  )
}
