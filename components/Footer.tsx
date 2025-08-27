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
  Award
} from 'lucide-react'

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

  const companyInfo = [
    { name: 'Business Consulting', href: '/services#consulting' },
    { name: 'Training & Development', href: '/services#training' },
    { name: 'Recruitment - Kudos Consultancy', href: '/services#recruitment' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="w-40 h-16 mb-4">
                <img 
                  src="/images/kuanlogo.png" 
                  alt="Kuan Global Ventures Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Kuan Global Ventures OPC Private Limited</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Expert Business Consulting · Training & Development · Recruitment (Kudos Consultancy)
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Elevating businesses. Empowering professionals. Achieving results.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2 flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Vision
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  To be the trusted partner accelerating organizational growth, empowering professionals and enabling impactful talent connections.
                </p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Mission
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We empower businesses through strategic consulting, customized training, and seamless recruitment solutions via Kudos Consultancy—unlocking potential, elevating performance and building high-performing teams.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kudos Consultancy Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Kudos Consultancy: Kudos To Your Career
            </h3>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our recruitment services are not one-size-fits-all. We serve a diverse range of industries—from agile startups to IT firms, EdTech innovators and hospitality businesses—with customized strategies designed to connect you with the right talent, fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Startups',
                icon: <Building2 className="w-8 h-8 text-blue-400" />,
                description: 'Agile sourcing, efficient hiring, culture-focused recruitment'
              },
              {
                title: 'IT Companies',
                icon: <Globe className="w-8 h-8 text-green-400" />,
                description: 'Targeted screening, tech talent branding, technical assessments'
              },
              {
                title: 'EdTech Organizations',
                icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
                description: 'Flexible talent pools, academic partnerships, online scaling'
              },
              {
                title: 'Hospitality Sector',
                icon: <UserCheck className="w-8 h-8 text-yellow-400" />,
                description: 'Soft skills focus, cultural alignment, service-driven selection'
              }
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-4 rounded-lg text-center"
              >
                <div className="flex justify-center mb-3">
                  {industry.icon}
                </div>
                <h4 className="font-semibold mb-2">{industry.title}</h4>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">info@kuanglobalventures.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">What Sets Us Apart</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Industry-Specific Expertise</li>
                <li>• Smart Use of Technology</li>
                <li>• Transparent, Collaborative Approach</li>
                <li>• End-to-End Support</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Kuan Global Ventures OPC Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 