'use client'

import { NavigationBar } from '@/components/navigation-bar'
import { AIAssistantFloating } from '@/components/ai-assistant-floating'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <main className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      <AIAssistantFloating />
    </div>
  )
}
