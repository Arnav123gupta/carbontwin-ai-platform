'use client'

import Link from 'next/link'
import { ArrowRight, Leaf, TrendingDown, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { NavigationBar } from '@/components/navigation-bar'
import { EarthGlobe } from '@/components/earth-globe'
import { GlassmorphicCard } from '@/components/glassmorphic-card'
import { LiveCO2Counter } from '@/components/live-co2-counter'
import { FloatingParticles } from '@/components/floating-particles'
import { Button } from '@/components/ui/button'

const FEATURES = [
  {
    icon: Leaf,
    title: 'AI Carbon Twin',
    description: 'Your digital twin that learns your habits and predicts your carbon footprint',
  },
  {
    icon: TrendingDown,
    title: 'Smart Predictions',
    description: 'Get AI-powered forecasts and personalized reduction strategies',
  },
  {
    icon: Zap,
    title: 'Gamified Missions',
    description: 'Complete challenges, earn rewards, and see real climate impact',
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-foreground">Meet Your</span>{' '}
              <span className="neon-text">Carbon Twin</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Track, predict, and reduce your environmental impact with an AI-powered digital twin that understands your unique lifestyle.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/app/dashboard">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full sm:w-auto bg-neon-green hover:bg-neon-emerald text-dark-bg font-semibold flex items-center gap-2 h-12 px-8">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </Link>
              <motion.button
                className="neon-border rounded-lg px-8 h-12 font-semibold text-foreground hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div
              className="flex gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-3xl font-bold text-neon-green">500K+</p>
                <p className="text-sm text-muted-foreground">Carbon Tracked</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-neon-green">50M</p>
                <p className="text-sm text-muted-foreground">Tons Reduced</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-neon-green">180+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Globe & Live Counter */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <EarthGlobe />
            <LiveCO2Counter />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-dark-card/20">
        <FloatingParticles count={15} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Why CarbonTwin?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the future of sustainability with cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-neon-green/10 flex items-center justify-center"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
                      >
                        <Icon className="w-6 h-6 text-neon-green" />
                      </motion.div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </GlassmorphicCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassmorphicCard className="space-y-8 py-12">
            <h2 className="text-4xl font-bold">
              Ready to <span className="neon-text">transform</span> your impact?
            </h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of users making a real difference for our planet
            </p>
            <Link href="/app/dashboard">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-neon-green hover:bg-neon-emerald text-dark-bg font-semibold flex items-center gap-2 h-12 px-8 mx-auto">
                  Start Your Journey <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </Link>
          </GlassmorphicCard>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neon-green/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 CarbonTwin AI. Reducing emissions, one twin at a time.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neon-green transition-colors">Privacy</a>
            <a href="#" className="hover:text-neon-green transition-colors">Terms</a>
            <a href="#" className="hover:text-neon-green transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
