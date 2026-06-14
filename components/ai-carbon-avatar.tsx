'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface AIAvatarProps {
  name?: string
  greeting?: string
}

export function AICarbonAvatar({ name = 'User', greeting }: AIAvatarProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const defaultGreeting = `Hello ${name}! I'm your Carbon Twin AI. Ready to make an impact today?`
  const fullText = greeting || defaultGreeting

  useEffect(() => {
    if (!isTyping) return

    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1))
      }, 30)
      return () => clearTimeout(timer)
    } else {
      setIsTyping(false)
    }
  }, [displayedText, fullText, isTyping])

  return (
    <div className="space-y-4">
      {/* Holographic Avatar */}
      <motion.div
        className="relative h-48 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated glow rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-neon-green/30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 0.3, 0.8],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Avatar circle */}
        <motion.div
          className="relative w-32 h-32 rounded-full bg-gradient-to-br from-neon-green/40 to-neon-emerald/20 border-2 border-neon-green flex items-center justify-center"
          animate={{
            boxShadow: [
              '0 0 20px rgba(16, 185, 129, 0.3)',
              '0 0 40px rgba(52, 211, 153, 0.6)',
              '0 0 20px rgba(16, 185, 129, 0.3)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-center">
            <Sparkles className="w-12 h-12 text-neon-green mx-auto mb-2" />
            <p className="text-sm font-semibold text-neon-green">Carbon Twin</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Typing message */}
      <motion.div
        className="glass-premium rounded-2xl p-6 sm:p-8 min-h-28"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-lg text-foreground leading-relaxed font-light">
          {displayedText}
          {isTyping && <span className="animate-pulse ml-1">▊</span>}
        </p>
      </motion.div>

      {/* Quick actions */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {[
          { label: 'Daily Mission', icon: '🎯' },
          { label: 'View Impact', icon: '📊' },
          { label: 'Tips & Tricks', icon: '💡' },
          { label: 'Settings', icon: '⚙️' },
        ].map((action, i) => (
          <motion.button
            key={i}
            className="glass-premium rounded-xl p-4 text-sm font-semibold text-foreground hover:border-neon-green/50 interactive-element flex flex-col items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">{action.icon}</span>
            <span>{action.label}</span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}
