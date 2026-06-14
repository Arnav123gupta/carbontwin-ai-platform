'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/app/dashboard' },
  { label: 'Carbon Twin', href: '/app/carbon-twin' },
  { label: 'Futures', href: '/app/futures' },
  { label: 'Predictions', href: '/app/predictions' },
  { label: 'Forest', href: '/app/forest' },
  { label: 'Game', href: '/app/game' },
  { label: 'Heatmap', href: '/app/heatmap' },
  { label: 'Timeline', href: '/app/timeline' },
  { label: 'Rewards', href: '/app/rewards' },
  { label: 'Community', href: '/app/community' },
]

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="glass-premium sticky top-0 w-full z-50 border-b border-neon-green/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-neon-green to-neon-emerald rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-neon-green/30 transition-all duration-300">
              <span className="text-dark-bg font-bold text-lg">♻</span>
            </div>
            <span className="text-lg font-bold hidden sm:inline bg-gradient-to-r from-neon-green to-neon-emerald bg-clip-text text-transparent">CarbonTwin</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-neon-green to-neon-emerald rounded-full group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-neon-green hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
