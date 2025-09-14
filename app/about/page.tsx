'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, MessageSquare, Zap, Shield, Users, Lightbulb, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const AboutPage = () => {
  const sections = [
    {
      id: 'about',
      icon: Heart,
      title: 'About',
      subtitle: 'Our Story & Journey',
      content: `Founded with a vision to bridge the gap between talent and opportunity, Kuan Global Ventures has been at the forefront of professional consultancy services for over a decade. Our journey began with a simple yet powerful mission: to help businesses and individuals achieve their full potential through strategic solutions and personalized approaches.

We started as a small team of passionate professionals who believed that every organization and individual deserves access to world-class recruitment, training, and placement services. Today, we've grown into a trusted partner for hundreds of companies and thousands of individuals across various industries.

Our success is built on the foundation of deep industry knowledge, innovative methodologies, and an unwavering commitment to delivering exceptional results. We understand that every client is unique, which is why we tailor our services to meet specific needs and objectives.`,
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      hasVideo: true,
      videoSrc: '/videos/Video2.mp4'
    },
    {
      id: 'vision',
      icon: Eye,
      title: 'Vision',
      subtitle: 'What We Aim to Achieve',
      content: `To be the trusted partner accelerating organizational growth, empowering professionals and enabling impactful talent connections.

We strive to be the catalyst for positive change in the professional landscape, creating opportunities that drive economic growth and personal fulfillment. Our long-term goal is to establish new standards of excellence in recruitment, training, and placement services while maintaining the highest levels of integrity and professionalism.

Through continuous innovation and adaptation to changing market dynamics, we aim to remain at the forefront of industry best practices, leveraging technology and human expertise to deliver unparalleled results for our clients.`,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      hasVideo: false
    },
    {
      id: 'mission',
      icon: Target,
      title: 'Mission',
      subtitle: 'Our Immediate Goals & Core Values',
      content: `We empower businesses through strategic consulting, customized training, and seamless recruitment solutions via Kudos Consultancy—unlocking potential, elevating performance and building high-performing teams.

Our mission is to provide comprehensive, innovative, and results-driven consultancy services that empower businesses and individuals to achieve their objectives.

We believe in the power of collaboration and strive to create win-win situations for all stakeholders. Our team of experienced professionals is dedicated to understanding the unique challenges faced by our clients and developing customized solutions that drive measurable results.`,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      hasVideo: false
    },
    {
      id: 'message',
      icon: MessageSquare,
      title: 'Message',
      subtitle: 'From Our Leadership',
      content: `Dear Valued Clients and Partners,

As the founder of Kuan Global Ventures, I am honored to share our story and vision with you. Our journey has been driven by a simple yet powerful belief: that every business and individual deserves access to world-class professional services that can transform their potential into reality.

In today's rapidly evolving business landscape, the right talent and strategic guidance can make the difference between success and stagnation. This is why we've dedicated ourselves to providing comprehensive solutions that address the unique challenges faced by our clients.

Our commitment to excellence, innovation, and client satisfaction has been the cornerstone of our success. We understand that trust is earned through consistent delivery of results, and we take this responsibility seriously. Every project we undertake is an opportunity to demonstrate our expertise and commitment to your success.

I invite you to partner with us on your journey to success. Together, we can achieve remarkable results that exceed expectations and create lasting value for your organization.

Thank you for considering Kuan Global Ventures as your trusted partner.

Best regards, Leadership Team Kuan Global Ventures`,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
      hasVideo: false
    }
  ]

  const coreValues = [
    {
      icon: Zap,
      title: 'Strategic Excellence',
      description: 'Developing tailored solutions that align with client goals and market demands'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Maintaining the highest standards in all our services and deliverables'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Putting our clients\' needs first and building long-term partnerships'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously improving our methodologies and embracing new technologies'
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'Operating with transparency, honesty, and ethical practices in all our dealings'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/Video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              About <span className="text-blue-100">Kuan Global Ventures</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover our journey, vision, mission, and the values that drive our success in transforming businesses and careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <div className="bg-white">
        {sections.map((section, index) => (
          <div key={section.id}>
          <section key={section.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
                      <section.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-2">{section.title}</h2>
                      <p className="text-xl text-blue-600 font-medium">{section.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 leading-relaxed mb-6 text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Image or Video */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    {section.hasVideo ? (
                      <video
                        src={section.videoSrc}
                        controls
                        className="rounded-2xl shadow-2xl w-full"
                        poster={section.image}
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-2xl"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Core Values Section - Only show after mission section */}
          {/* {section.id === 'mission' && (
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    The principles that guide everything we do and ensure excellence in our service delivery
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                  {coreValues.map((value, valueIndex) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: valueIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )} */}
          </div>
        ))}
      </div>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in every aspect of our work, maintaining the highest standards of quality and professionalism.'
              },
              {
                title: 'Integrity',
                description: 'We operate with complete transparency and honesty, building trust through ethical practices and reliable service delivery.'
              },
              {
                title: 'Innovation',
                description: 'We continuously evolve our methodologies and embrace new technologies to deliver cutting-edge solutions for our clients.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold mb-6">{value.title}</h3>
                <p className="text-blue-100 leading-relaxed text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage 