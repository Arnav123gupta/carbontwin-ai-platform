'use client'

import Link from 'next/link'
import { ArrowRight, Leaf, TrendingDown, Zap } from 'lucide-react'
import { NavigationBar } from '@/components/navigation-bar'
import { EarthGlobe } from '@/components/earth-globe'
import { GlassmorphicCard } from '@/components/glassmorphic-card'
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              <span className="text-foreground">Meet Your</span>{' '}
              <span className="neon-text">Carbon Twin</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Track, predict, and reduce your environmental impact with an AI-powered digital twin that understands your unique lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/app/dashboard">
                <Button className="w-full sm:w-auto bg-neon-green hover:bg-neon-emerald text-dark-bg font-semibold flex items-center gap-2 h-12 px-8">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <button className="neon-border rounded-lg px-8 h-12 font-semibold text-foreground hover:bg-white/5 transition-colors">
                Learn More
              </button>
            </div>

            <div className="flex gap-8 pt-8">
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
            </div>
          </div>

          {/* Right - Globe */}
          <div className="animate-slide-in-down">
            <EarthGlobe />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-dark-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why CarbonTwin?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the future of sustainability with cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon
              return (
                <GlassmorphicCard key={i} className="animate-slide-in-up">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-neon-green/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-neon-green" />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </GlassmorphicCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassmorphicCard className="space-y-8 py-12">
            <h2 className="text-4xl font-bold">
              Ready to <span className="neon-text">transform</span> your impact?
            </h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of users making a real difference for our planet
            </p>
            <Link href="/app/dashboard">
              <Button className="bg-neon-green hover:bg-neon-emerald text-dark-bg font-semibold flex items-center gap-2 h-12 px-8 mx-auto">
                Start Your Journey <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </GlassmorphicCard>
        </div>
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
