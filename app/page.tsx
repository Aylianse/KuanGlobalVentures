'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Users, GraduationCap, TrendingUp, Star } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const HomePage = () => {
  const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Professional consultancy team"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-5 overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-40 right-20 w-32 h-32 bg-primary-400/15 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-40 left-20 w-16 h-16 bg-white/10 rounded-full blur-lg"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            {/* Trust Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-sm rounded-full border border-white/25 mb-8 shadow-lg"
            >
              <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-white">Trusted by 500+ Companies Worldwide</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-semibold mb-8 leading-tight"
            >
              <span className="text-white">Global </span>
              <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                Success 
              </span>
              <span className="text-white"> Made </span>
              <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                Possible
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Onboard, operate, and scale global teams quickly. And enjoy peace of mind knowing you've handled 
              recruitment, training, and placement with strategic solutions.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold rounded-xl shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Contant Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/services" 
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Kuan Global
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: '180+', label: 'Countries Available' },
                { number: '99%', label: 'Success Rate' },
                { number: '200+', label: 'Global Partners' },
                { number: '96%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-300 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
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

      {/* Trust Section - Inspired by G-P */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by businesses big and small, everywhere
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to enterprise, we help companies of all sizes achieve their global ambitions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Startups',
                description: 'Scale quickly with our agile recruitment and training solutions.',
                icon: '🚀'
              },
              {
                title: 'Mid-Market',
                description: 'Optimize your operations with strategic consulting and placement services.',
                icon: '📈'
              },
              {
                title: 'Enterprise',
                description: 'Transform your global workforce with comprehensive solutions.',
                icon: '🏢'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">Kuan Global Ventures</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a leading consultancy firm with years of experience in helping businesses 
                and individuals achieve their goals. Our comprehensive approach combines strategic 
                thinking with practical solutions to deliver measurable results.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From recruitment and training to business consulting, we provide end-to-end 
                solutions that drive growth and success for our clients.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your business needs and drive success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recruitment Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg card-hover"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kudos Consultancy
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional recruitment services that connect top talent with leading organizations. 
                We specialize in finding the perfect match for both candidates and companies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Executive Search & Recruitment
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Talent Assessment & Screening
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  HR Consulting & Strategy
                </li>
              </ul>
              <Link href="/services#recruitment" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Learn More →
              </Link>
            </motion.div>

            {/* Training & Placement Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg card-hover"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                SkillForge Placements
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive training and placement services that empower individuals with 
                the skills and opportunities they need to succeed in their careers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Professional Skills Training
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Career Development Programs
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Job Placement Services
                </li>
              </ul>
              <Link href="/services#training" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-primary-100">
              Delivering results that speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Successful Placements' },
              { number: '50+', label: 'Corporate Clients' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '10+', label: 'Years of Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses and individuals we've helped succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'HR Director',
                company: 'TechCorp Inc.',
                content: 'Kuan Global Ventures transformed our recruitment process. Their expertise helped us find exceptional talent that perfectly fits our company culture.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Career Changer',
                content: 'The training program at SkillForge Placements gave me the skills and confidence I needed to transition into a new career. Highly recommended!',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                role: 'CEO',
                company: 'StartupXYZ',
                content: 'Their strategic consulting services helped us scale our business effectively. The team is professional, knowledgeable, and truly cares about our success.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 card-hover"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our strategic solutions can help you achieve your goals. 
              Get in touch today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Start Your Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage 