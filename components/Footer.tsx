'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Building2,
  GraduationCap,
  UserCheck,
  Globe,
  Award,
  Sparkles,
  ArrowUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'Business Consulting', href: '/services#consulting' },
    { name: 'Training & Development', href: '/services#training' },
    { name: 'Recruitment - Kudos Consultancy', href: '/services#recruitment' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="w-48 h-20 mb-6">
                <img 
                  src="/images/kuanlogo.png" 
                  alt="Kuan Global Ventures Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Kuan Global Ventures OPC Private Limited
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Expert Business Consulting · Training & Development · Recruitment (Kudos Consultancy)
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Elevating businesses. Empowering professionals. Achieving results.
              </p>
            </motion.div>

            {/* Vision & Mission */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-500/30 hover:border-blue-500/50 transition-all duration-500">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold text-blue-300 mb-2 flex items-center group-hover:text-blue-200 transition-colors duration-300">
                      <Globe className="w-5 h-5 mr-2" />
                      Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      To be the trusted partner accelerating organizational growth, empowering professionals and enabling impactful talent connections.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-500/30 hover:border-green-500/50 transition-all duration-500">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold text-green-300 mb-2 flex items-center group-hover:text-green-200 transition-colors duration-300">
                      <Award className="w-5 h-5 mr-2" />
                      Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      We empower businesses through strategic consulting, customized training, and seamless recruitment solutions via Kudos Consultancy—unlocking potential, elevating performance and building high-performing teams.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-blue-300 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 group flex items-center"
                  >
                    <motion.div
                      className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-green-300 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Our Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 group flex items-center"
                  >
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Kudos Consultancy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md border border-pink-500/30 rounded-full px-6 py-3 mb-6"
            >
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span className="text-pink-200 font-medium">Kudos Consultancy</span>
            </motion.div>
            
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">
              Kudos Consultancy: Kudos To Your Career
            </h3>
            <p className="text-lg text-purple-100 max-w-5xl mx-auto leading-relaxed">
              Our recruitment services are not one-size-fits-all. We serve a diverse range of industries—from agile startups to IT firms, EdTech innovators and hospitality businesses—with customized strategies designed to connect you with the right talent, fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Startups',
                icon: <Building2 className="w-8 h-8 text-blue-400" />,
                description: 'Agile sourcing, efficient hiring, culture-focused recruitment',
                gradient: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-500/30"
              },
              {
                title: 'IT Companies',
                icon: <Globe className="w-8 h-8 text-green-400" />,
                description: 'Targeted screening, tech talent branding, technical assessments',
                gradient: "from-green-500/20 to-emerald-500/20",
                border: "border-green-500/30"
              },
              {
                title: 'EdTech Organizations',
                icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
                description: 'Flexible talent pools, academic partnerships, online scaling',
                gradient: "from-purple-500/20 to-pink-500/20",
                border: "border-purple-500/30"
              },
              {
                title: 'Hospitality Sector',
                icon: <UserCheck className="w-8 h-8 text-yellow-400" />,
                description: 'Soft skills focus, cultural alignment, service-driven selection',
                gradient: "from-yellow-500/20 to-orange-500/20",
                border: "border-yellow-500/30"
              }
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <Card className={`bg-gradient-to-br ${industry.gradient} backdrop-blur-md border ${industry.border} hover:shadow-2xl transition-all duration-500`}>
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="mx-auto mb-3"
                    >
                      {industry.icon}
                    </motion.div>
                    <CardTitle className="text-lg font-bold text-white mb-3">
                      {industry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-sm text-center">
                      {industry.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-blue-300 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Contact Information
              </h4>
              <div className="space-y-4">
                {[
                  { icon: <Phone className="w-5 h-5 text-blue-400" />, text: "+91 98765 43210" },
                  { icon: <Mail className="w-5 h-5 text-purple-400" />, text: "info@kuanglobalventures.com" },
                  { icon: <MapPin className="w-5 h-5 text-green-400" />, text: "Mumbai, Maharashtra, India" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="flex-shrink-0"
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-green-300 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                What Sets Us Apart
              </h4>
              <ul className="space-y-3">
                {[
                  "Industry-Specific Expertise",
                  "Smart Use of Technology", 
                  "Transparent, Collaborative Approach",
                  "End-to-End Support"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-300 flex items-center group"
                  >
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-all duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-purple-300 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Linkedin className="w-6 h-6" />, href: "#", color: "hover:text-blue-400" },
                  { icon: <Twitter className="w-6 h-6" />, href: "#", color: "hover:text-cyan-400" },
                  { icon: <Facebook className="w-6 h-6" />, href: "#", color: "hover:text-blue-500" },
                  { icon: <Instagram className="w-6 h-6" />, href: "#", color: "hover:text-pink-400" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-all duration-300 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Kuan Global Ventures OPC Private Limited. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-8 mt-4 md:mt-0"
            >
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
} 