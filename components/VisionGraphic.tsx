'use client'

import { motion } from 'framer-motion'
import { Eye, Target, Lightbulb, Users, TrendingUp, Globe } from 'lucide-react'

export default function VisionGraphic() {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Background Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute w-24 h-24 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-full blur-sm"
      />
      
      {/* Main Vision Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
      >
        <Eye className="w-8 h-8 text-white" />
      </motion.div>

      {/* Orbiting Elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-0"
      >
        {/* Target Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shadow-md"
        >
          <Target className="w-3 h-3 text-blue-600" />
        </motion.div>

        {/* Lightbulb Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shadow-md"
        >
          <Lightbulb className="w-3 h-3 text-green-600" />
        </motion.div>

        {/* Users Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center shadow-md"
        >
          <Users className="w-3 h-3 text-cyan-600" />
        </motion.div>

        {/* TrendingUp Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center shadow-md"
        >
          <TrendingUp className="w-3 h-3 text-orange-600" />
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 40 - 20],
            y: [0, Math.random() * 40 - 20]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${25 + (i * 20)}%`,
            top: `${25 + (i * 15)}%`
          }}
        />
      ))}

      {/* Vision Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <div className="text-sm font-semibold text-gray-600">Our Vision</div>
        <div className="text-xs text-gray-500 mt-1">Empowering Growth</div>
      </motion.div>
    </div>
  )
}
