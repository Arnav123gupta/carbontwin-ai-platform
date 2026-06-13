'use client'

import { useEffect, useRef } from 'react'

export function EarthGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const dpr = window.devicePixelRatio || 1
    canvas.width = canvas.offsetWidth * dpr
    canvas.height = canvas.offsetHeight * dpr
    ctx.scale(dpr, dpr)

    const width = canvas.offsetWidth
    const height = canvas.offsetHeight
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 2.5

    let rotation = 0

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = '#0f172a'
      ctx.fillRect(0, 0, width, height)

      // Draw star field
      ctx.fillStyle = 'rgba(148, 163, 184, 0.3)'
      for (let i = 0; i < 100; i++) {
        const x = (Math.sin(i * 12.9898) * 43758.5453) % width
        const y = (Math.cos(i * 78.233) * 43758.5453) % height
        const size = Math.random() * 0.5
        ctx.fillRect(x, y, size, size)
      }

      // Draw Earth
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Earth sphere
      const gradient = ctx.createRadialGradient(-50, -50, 0, 0, 0, radius)
      gradient.addColorStop(0, '#1e40af')
      gradient.addColorStop(0.7, '#0369a1')
      gradient.addColorStop(1, '#10b981')

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.fill()

      // Glow effect
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.stroke()

      // Land masses (simplified continents)
      ctx.fillStyle = 'rgba(52, 211, 153, 0.8)'
      
      // North America
      ctx.beginPath()
      ctx.ellipse(-40, -30, 25, 20, -0.3, 0, Math.PI * 2)
      ctx.fill()

      // South America
      ctx.beginPath()
      ctx.ellipse(-25, 20, 15, 22, -0.2, 0, Math.PI * 2)
      ctx.fill()

      // Europe
      ctx.beginPath()
      ctx.ellipse(15, -25, 18, 12, 0, 0, Math.PI * 2)
      ctx.fill()

      // Africa
      ctx.beginPath()
      ctx.ellipse(25, 0, 20, 28, 0, 0, Math.PI * 2)
      ctx.fill()

      // Asia
      ctx.beginPath()
      ctx.ellipse(50, -15, 35, 28, 0, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()

      rotation += 0.0005

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-96 rounded-2xl"
      style={{ display: 'block' }}
    />
  )
}
