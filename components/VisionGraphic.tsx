'use client'

import { motion } from 'framer-motion'
import { Eye, Target, Lightbulb, Users, TrendingUp, Globe } from 'lucide-react'

export default function VisionGraphic() {
  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      {/* Background Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute w-48 h-48 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full blur-xl"
      />
      
      {/* Main Vision Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
      >
        <Eye className="w-12 h-12 text-white" />
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
          className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shadow-lg"
        >
          <Target className="w-4 h-4 text-blue-600" />
        </motion.div>

        {/* Lightbulb Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shadow-lg"
        >
          <Lightbulb className="w-4 h-4 text-green-600" />
        </motion.div>

        {/* Users Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shadow-lg"
        >
          <Users className="w-4 h-4 text-purple-600" />
        </motion.div>

        {/* TrendingUp Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shadow-lg"
        >
          <TrendingUp className="w-4 h-4 text-orange-600" />
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          className="absolute w-2 h-2 bg-primary/60 rounded-full"
          style={{
            left: `${20 + (i * 15)}%`,
            top: `${30 + (i * 10)}%`
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
