'use client'

import { motion } from 'framer-motion'
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
  Star
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Business Consulting",
      description: "From strategic planning to operational execution, our seasoned experts deliver customized solutions to help your business overcome challenges, identify opportunities and achieve sustainable growth.",
      features: ["Strategic Planning", "Operational Excellence", "Growth Strategy", "Performance Optimization"]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-green-600" />,
      title: "Training & Development",
      description: "We design and deliver bespoke training programs that enhance leadership, communication, technical skills and team effectiveness—empowering your workforce to perform at their best.",
      features: ["Leadership Development", "Communication Skills", "Technical Training", "Team Effectiveness"]
    },
    {
      icon: <UserCheck className="w-12 h-12 text-purple-600" />,
      title: "Recruitment – Kudos Consultancy",
      description: "Our recruitment arm, Kudos Consultancy, connects you with top-tier talent across domains. We streamline your hiring process to present only the best candidates.",
      features: ["Talent Acquisition", "Industry Expertise", "Streamlined Process", "Cultural Fit"]
    }
  ]

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      text: "Integrated Solutions across consulting, training, and talent acquisition—designed to work in harmony."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      text: "Client-Centric Approach: Tailored services that align with your unique goals and challenges."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      text: "Kudos Consultancy: A trusted brand known for precision, transparency and lasting candidate placements."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      text: "End-to-End Support: From strategy development and training delivery to sourcing and onboarding talent."
    }
  ]

  const industries = [
    {
      title: "Startups",
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      features: [
        "Agile sourcing across multiple channels",
        "Efficient and transparent hiring",
        "Culture-focused recruitment"
      ]
    },
    {
      title: "IT Companies",
      icon: <Globe className="w-8 h-8 text-green-500" />,
      features: [
        "Targeted candidate screening",
        "Employer branding for tech talent",
        "Technical assessments"
      ]
    },
    {
      title: "EdTech Organizations",
      icon: <Lightbulb className="w-8 h-8 text-purple-500" />,
      features: [
        "Flexible and adaptable talent pools",
        "Partnerships with academia",
        "Online/hybrid role scaling"
      ]
    },
    {
      title: "Hospitality Sector",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      features: [
        "Focus on soft skills and cultural alignment",
        "Highlighting employer identity",
        "Service-driven candidate selection"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Empowering Businesses.
              <br />
              <span className="text-blue-200">Transforming Talent.</span>
              <br />
              <span className="text-yellow-400">Delivering Results.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
            >
              At Kuan Global Ventures OPC Private Limited, we specialize in three core areas that drive your business forward: Business Consulting, Training & Development and Recruitment—under the brand name Kudos Consultancy.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in Success
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're a thriving enterprise seeking strategic guidance, an organization aiming to upskill your workforce or a brand in need of top-tier talent, we are your trusted partner in success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to work in harmony, driving your business forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don't just deliver services; we drive transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {whyChooseUs.slice(0, 2).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    {item.icon}
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {whyChooseUs.slice(2).map((item, index) => (
                  <motion.div
                    key={index + 2}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    {item.icon}
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kudos Consultancy Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Kudos Consultancy: Kudos To Your Career
              </h2>
              <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
                Our recruitment services are not one-size-fits-all. We serve a diverse range of industries with customized strategies designed to connect you with the right talent, fast.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="text-center mb-4">
                    {industry.icon}
                    <h3 className="text-xl font-bold mt-3 mb-4">{industry.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-purple-100 flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                At Kuan Global Ventures, every engagement is rooted in long-term partnership. We don't just deliver services; we drive transformation.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="font-semibold mb-2">For Businesses Seeking Growth</h3>
                  <p className="text-sm text-blue-100 mb-4">Ready to elevate your strategy and performance?</p>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300"
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="font-semibold mb-2">For Organizations Wanting to Develop Talent</h3>
                  <p className="text-sm text-blue-100 mb-4">Looking to enhance your team's capabilities?</p>
                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300"
                    >
                      Get Training Plan
                    </motion.button>
                  </Link>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="font-semibold mb-2">For Businesses in Need of Great Talent</h3>
                  <p className="text-sm text-blue-100 mb-4">Hire smart, hire fast with Kudos Consultancy</p>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300"
                    >
                      Request Support
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 