'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Lightbulb, 
  CheckCircle, 
  ArrowRight,
  Building2,
  GraduationCap,
  UserCheck,
  Star,
  Sparkles,
  Zap,
  Rocket
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-blue-400" />,
      title: "Business Consulting",
      description: "From strategic planning to operational execution, our seasoned experts deliver customized solutions to help your business overcome challenges, identify opportunities and achieve sustainable growth.",
      features: ["Strategic Planning", "Operational Excellence", "Growth Strategy", "Performance Optimization"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-green-400" />,
      title: "Training & Development",
      description: "We design and deliver bespoke training programs that enhance leadership, communication, technical skills and team effectiveness—empowering your workforce to perform at their best.",
      features: ["Leadership Development", "Communication Skills", "Technical Training", "Team Effectiveness"],
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30"
    },
    {
      icon: <UserCheck className="w-12 h-12 text-purple-400" />,
      title: "Recruitment – Kudos Consultancy",
      description: "Our recruitment arm, Kudos Consultancy, connects you with top-tier talent across domains. We streamline your hiring process to present only the best candidates.",
      features: ["Talent Acquisition", "Industry Expertise", "Streamlined Process", "Cultural Fit"],
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30"
    }
  ]

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      text: "Integrated Solutions across consulting, training, and talent acquisition—designed to work in harmony."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      text: "Client-Centric Approach: Tailored services that align with your unique goals and challenges."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      text: "Kudos Consultancy: A trusted brand known for precision, transparency and lasting candidate placements."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      text: "End-to-End Support: From strategy development and training delivery to sourcing and onboarding talent."
    }
  ]

  const industries = [
    {
      title: "Startups",
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      features: [
        "Agile sourcing across multiple channels",
        "Efficient and transparent hiring",
        "Culture-focused recruitment"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "IT Companies",
      icon: <Globe className="w-8 h-8 text-green-400" />,
      features: [
        "Targeted candidate screening",
        "Employer branding for tech talent",
        "Technical assessments"
      ],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "EdTech Organizations",
      icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
      features: [
        "Flexible and adaptable talent pools",
        "Partnerships with academia",
        "Online/hybrid role scaling"
      ],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Hospitality Sector",
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      features: [
        "Focus on soft skills and cultural alignment",
        "Highlighting employer identity",
        "Service-driven candidate selection"
      ],
      gradient: "from-yellow-500/20 to-orange-500/20"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <Header />
      
      {/* Hero Section with Immersive Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-white/90 font-medium">Award-Winning Business Solutions</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-6xl md:text-8xl font-black mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Empowering
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Businesses.
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
                Transforming
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                Talent.
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Delivering
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Results.
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              At Kuan Global Ventures OPC Private Limited, we specialize in three core areas that drive your business forward: Business Consulting, Training & Development and Recruitment—under the brand name Kudos Consultancy.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="gradient" 
                  size="xl"
                  className="relative overflow-hidden group text-lg font-bold px-10 py-6"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Rocket className="w-6 h-6" />
                    <span>Get Started Today</span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="glass" 
                  size="xl"
                  className="text-lg font-bold px-10 py-6 border-2 border-white/30 hover:border-white/50"
                >
                  <span className="flex items-center space-x-2">
                    <Zap className="w-6 h-6" />
                    <span>Explore Services</span>
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: '500+', label: 'Businesses Transformed' },
                { number: '1000+', label: 'Professionals Trained' },
                { number: '2000+', label: 'Successful Placements' },
                { number: '99%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2 + index * 0.1, duration: 0.8 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section with Glassmorphism */}
      <section className="relative py-32 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-500/30 rounded-full px-6 py-3 mb-8"
            >
              <Target className="w-5 h-5 text-blue-400" />
              <span className="text-blue-200 font-medium">Your Success Partner</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Your Trusted Partner in Success
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Whether you're a thriving enterprise seeking strategic guidance, an organization aiming to upskill your workforce or a brand in need of top-tier talent, we are your trusted partner in success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section with Modern Cards */}
      <section className="relative py-32 bg-gradient-to-b from-black/20 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-500/30 rounded-full px-6 py-3 mb-8"
            >
              <Lightbulb className="w-5 h-5 text-green-400" />
              <span className="text-green-200 font-medium">Core Services</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive solutions designed to work in harmony, driving your business forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className={`bg-gradient-to-br ${service.gradient} backdrop-blur-md border ${service.border} hover:shadow-2xl transition-all duration-500`}>
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="mx-auto mb-4"
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-6 leading-relaxed text-base">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Interactive Elements */}
      <section className="relative py-32 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 rounded-full px-6 py-3 mb-8"
              >
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-purple-200 font-medium">Why Choose Us</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We don't just deliver services; we drive transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                {whyChooseUs.slice(0, 2).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-6 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="flex-shrink-0"
                    >
                      {item.icon}
                    </motion.div>
                    <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-8">
                {whyChooseUs.slice(2).map((item, index) => (
                  <motion.div
                    key={index + 2}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ x: -10 }}
                    className="flex items-start space-x-6 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      className="flex-shrink-0"
                    >
                      {item.icon}
                    </motion.div>
                    <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kudos Consultancy Section with Immersive Design */}
      <section className="relative py-32 bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-purple-900/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md border border-pink-500/30 rounded-full px-6 py-3 mb-8"
              >
                <Star className="w-5 h-5 text-pink-400" />
                <span className="text-pink-200 font-medium">Kudos Consultancy</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">
                Kudos Consultancy: Kudos To Your Career
              </h2>
              <p className="text-xl text-purple-100 max-w-5xl mx-auto leading-relaxed">
                Our recruitment services are not one-size-fits-all. We serve a diverse range of industries with customized strategies designed to connect you with the right talent, fast.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group"
                >
                  <Card className={`bg-gradient-to-br ${industry.gradient} backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500`}>
                    <CardHeader className="text-center">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto mb-4"
                      >
                        {industry.icon}
                      </motion.div>
                      <CardTitle className="text-xl font-bold text-white mb-4">
                        {industry.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {industry.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + idx * 0.1 }}
                            viewport={{ once: true }}
                            className="text-sm text-purple-100 flex items-start"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Modern Design */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-blue-800/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-500/30 rounded-full px-6 py-3 mb-8"
              >
                <Rocket className="w-5 h-5 text-blue-400" />
                <span className="text-blue-200 font-medium">Ready to Transform?</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
                At Kuan Global Ventures, every engagement is rooted in long-term partnership. We don't just deliver services; we drive transformation.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    title: "For Businesses Seeking Growth",
                    description: "Ready to elevate your strategy and performance?",
                    buttonText: "Contact Us",
                    href: "/contact",
                    gradient: "from-green-500/20 to-emerald-500/20",
                    border: "border-green-500/30"
                  },
                  {
                    title: "For Organizations Wanting to Develop Talent",
                    description: "Looking to enhance your team's capabilities?",
                    buttonText: "Get Training Plan",
                    href: "/services",
                    gradient: "from-blue-500/20 to-cyan-500/20",
                    border: "border-blue-500/30"
                  },
                  {
                    title: "For Businesses in Need of Great Talent",
                    description: "Hire smart, hire fast with Kudos Consultancy",
                    buttonText: "Request Support",
                    href: "/contact",
                    gradient: "from-purple-500/20 to-pink-500/20",
                    border: "border-purple-500/30"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group"
                  >
                    <Card className={`bg-gradient-to-br ${item.gradient} backdrop-blur-md border ${item.border} hover:shadow-2xl transition-all duration-500`}>
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-white mb-2">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-blue-100 text-sm mb-4">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link href={item.href}>
                          <Button 
                            variant="glass" 
                            size="lg"
                            className="w-full group-hover:bg-white/20 transition-all duration-300"
                          >
                            {item.buttonText}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 