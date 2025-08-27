'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      {/* Top Bar with Glassmorphism */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-blue-800/90 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center text-sm">
            <motion.div 
              className="flex items-center space-x-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center space-x-3 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"
                />
                <Phone className="w-4 h-4 text-blue-200" />
                <span className="text-blue-100 font-medium">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"
                />
                <Mail className="w-4 h-4 text-purple-200" />
                <span className="text-purple-100 font-medium">info@kuanglobalventures.com</span>
              </div>
            </motion.div>
            <motion.div 
              className="hidden md:flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-blue-100 font-medium bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm border border-white/20">
                Empowering Businesses. Transforming Talent.
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with Enhanced Animation */}
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <Link href="/" className="flex items-center">
              <div className="relative">
                <div className="w-48 h-20 flex items-center justify-center transition-all duration-500 overflow-hidden">
                  <img 
                    src="/images/kuanlogo.png" 
                    alt="Kuan Global Ventures Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation with Glassmorphism */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group">
                      Home
                      <motion.div
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group">
                      About
                      <motion.div
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group">
                      Services
                      <motion.div
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group">
                      Contact
                      <motion.div
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="gradient" 
                size="lg"
                className="relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button with Animation */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation with Glassmorphism */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-6 overflow-hidden"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6">
                <nav className="flex flex-col space-y-4">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'About', href: '/about' },
                    { name: 'Services', href: '/services' },
                    { name: 'Contact', href: '/contact' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={item.href}
                        className="block text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/50"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-2"
                  >
                    <Button 
                      variant="gradient" 
                      size="lg" 
                      className="w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
} 