import React from 'react'

interface GlassmorphicCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hover?: boolean
  premium?: boolean
}

export function GlassmorphicCard({
  children,
  className = '',
  onClick,
  hover = true,
  premium = false,
}: GlassmorphicCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-2xl p-6 sm:p-8
        transition-all duration-300 ease-out
        ${premium ? 'glass-premium' : 'glass'}
        ${hover ? 'hover-lift hover:shadow-2xl hover:shadow-emerald-500/10' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
