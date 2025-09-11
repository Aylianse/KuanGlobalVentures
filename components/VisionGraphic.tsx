'use client'

import { motion } from 'framer-motion'
import { Eye, Target, Lightbulb, Users, TrendingUp, Globe } from 'lucide-react'

export default function VisionGraphic() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      {/* Background Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute w-20 h-20 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-full blur-sm"
      />
      
      {/* Main Vision Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
      >
        <Eye className="w-7 h-7 text-white" />
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
          className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center shadow-sm"
        >
          <Target className="w-2.5 h-2.5 text-blue-600" />
        </motion.div>

        {/* Lightbulb Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shadow-sm"
        >
          <Lightbulb className="w-2.5 h-2.5 text-green-600" />
        </motion.div>

        {/* Users Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center shadow-sm"
        >
          <Users className="w-2.5 h-2.5 text-cyan-600" />
        </motion.div>

        {/* TrendingUp Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center shadow-sm"
        >
          <TrendingUp className="w-2.5 h-2.5 text-orange-600" />
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 20 - 10],
            y: [0, Math.random() * 20 - 10]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          className="absolute w-0.5 h-0.5 bg-primary/30 rounded-full"
          style={{
            left: `${30 + (i * 20)}%`,
            top: `${30 + (i * 15)}%`
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
