'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, GraduationCap, Search, Briefcase, Target, Award, CheckCircle, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const ServicesPage = () => {
  const services = [
    {
      id: 'recruitment',
      brand: 'Kudos Consultancy',
      title: 'Recruitment Services',
      subtitle: 'Connecting Top Talent with Leading Organizations',
      description: 'Our recruitment services are designed to find the perfect match between exceptional candidates and forward-thinking companies. We specialize in understanding both the needs of our clients and the aspirations of our candidates to create successful, long-term partnerships.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: Users,
      features: [
        'Executive Search & Headhunting',
        'Talent Assessment & Screening',
        'HR Consulting & Strategy',
        'Employer Branding',
        'Recruitment Process Optimization',
        'Candidate Experience Management'
      ],
      benefits: [
        'Access to pre-screened, qualified candidates',
        'Reduced time-to-hire and cost-per-hire',
        'Improved retention rates through better cultural fit',
        'Strategic HR guidance and best practices'
      ]
    },
    {
      id: 'training',
      brand: 'SkillForge Placements',
      title: 'Training & Placement Services',
      subtitle: 'Empowering Careers Through Skill Development',
      description: 'SkillForge Placements focuses on comprehensive training and career development programs that prepare individuals for success in today\'s competitive job market. We combine industry-relevant training with strategic placement services to ensure career growth and professional advancement.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      icon: GraduationCap,
      features: [
        'Professional Skills Training',
        'Career Development Programs',
        'Job Placement Services',
        'Industry-Specific Certifications',
        'Soft Skills Enhancement',
        'Career Counseling & Guidance'
      ],
      benefits: [
        'Industry-relevant skills and certifications',
        'Direct placement opportunities with partner companies',
        'Ongoing career support and guidance',
        'Networking opportunities with industry professionals'
      ]
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We begin by understanding your specific needs, challenges, and objectives through comprehensive consultation and analysis.',
      icon: Search
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Based on our assessment, we develop a customized strategy that aligns with your goals and market requirements.',
      icon: Target
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute our strategy with precision, leveraging our expertise and resources to deliver optimal results.',
      icon: Briefcase
    },
    {
      step: '04',
      title: 'Results & Follow-up',
      description: 'We monitor outcomes, provide ongoing support, and ensure long-term success through continuous improvement.',
      icon: Award
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your business needs and drive success through strategic recruitment, training, and placement services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`mb-24 ${index > 0 ? 'pt-16 border-t border-gray-200' : ''}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      <p className="text-lg text-primary-600 font-medium">{service.brand}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/contact" className="btn-primary">
                      Get Started with {service.brand}
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional results and ensuring your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose <span className="gradient-text">Kuan Global Ventures</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, innovation, and personalized service to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Track Record',
                description: 'Over 500 successful placements and 95% client satisfaction rate across various industries.',
                icon: Award
              },
              {
                title: 'Industry Expertise',
                description: 'Deep understanding of market trends and industry-specific requirements for optimal results.',
                icon: Target
              },
              {
                title: 'Personalized Approach',
                description: 'Tailored solutions that address your unique challenges and align with your specific goals.',
                icon: Users
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your goals. 
              Contact us today for a free consultation and personalized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Start Your Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServicesPage 