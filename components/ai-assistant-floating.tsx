'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

export function AIAssistantFloating() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ id: number; text: string; sender: 'user' | 'ai' }[]>([
    {
      id: 1,
      text: "Hi! I'm your AI Carbon Twin. How can I help you reduce your environmental impact today?",
      sender: 'ai',
    },
  ])

  const handleSend = (text: string) => {
    if (!text.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text,
      sender: 'user' as const,
    }

    setMessages([...messages, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: 'Great suggestion! Based on your patterns, I recommend using public transportation 2 more days per week. This could reduce your carbon footprint by 15kg per month!',
        sender: 'ai' as const,
      }
      setMessages(prev => [...prev, aiResponse])
    }, 800)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-neon-green to-neon-emerald shadow-lg flex items-center justify-center text-dark-bg z-40 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 h-96 rounded-2xl bg-dark-card border border-neon-green/20 shadow-2xl flex flex-col z-40"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="border-b border-neon-green/10 p-4">
              <h3 className="font-bold text-foreground">Carbon Twin AI</h3>
              <p className="text-xs text-muted-foreground">Always here to help</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-neon-green text-dark-bg'
                        : 'bg-dark-bg border border-neon-green/30 text-foreground'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <ChatInput onSend={handleSend} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function ChatInput({ onSend }: { onSend: (text: string) => void }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSend(input)
    setInput('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-neon-green/10 p-3 flex gap-2"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
        className="flex-1 bg-dark-bg border border-neon-green/20 rounded-lg px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-neon-green/50"
      />
      <button
        type="submit"
        className="bg-neon-green text-dark-bg rounded-lg p-2 hover:bg-neon-emerald transition-colors"
      >
        <Send className="w-4 h-4" />
      </button>
    </form>
  )
}
