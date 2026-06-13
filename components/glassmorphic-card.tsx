import React from 'react'

interface GlassmorphicCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hover?: boolean
}

export function GlassmorphicCard({
  children,
  className = '',
  onClick,
  hover = true,
}: GlassmorphicCardProps) {
  return (
    <div
      onClick={onClick}
      className={`glass rounded-xl p-6 ${
        hover ? 'transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
