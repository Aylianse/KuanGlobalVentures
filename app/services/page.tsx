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
      subtitle: 'Kudos To Your Career',
      description: 'Our recruitment services are designed to find the perfect match between exceptional candidates and forward-thinking companies. We serve a diverse range of industries—from agile startups to IT firms, EdTech innovators and hospitality businesses—with customized strategies designed to connect you with the right talent, fast.',
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
      ],
      industries: [
        {
          name: 'Startups',
          features: ['Agile sourcing across multiple channels', 'Efficient and transparent hiring', 'Culture-focused recruitment']
        },
        {
          name: 'IT Companies',
          features: ['Targeted candidate screening', 'Employer branding for tech talent']
        },
        {
          name: 'EdTech Organizations',
          features: ['Flexible and adaptable talent pools', 'Partnerships with academia']
        },
        {
          name: 'Hospitality Sector',
          features: ['Focus on soft skills and cultural alignment', 'Highlighting employer identity']
        }
      ]
    },
    {
      id: 'training',
      brand: 'Training & Development',
      title: 'Training & Development Services',
      subtitle: 'Empowering Your Workforce',
      description: 'We design and deliver bespoke training programs that enhance leadership, communication, technical skills and team effectiveness—empowering your workforce to perform at their best.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      icon: GraduationCap,
      features: [
        'Professional Skills Training',
        'Career Development Programs',
        'Leadership Development',
        'Industry-Specific Certifications',
        'Soft Skills Enhancement',
        'Career Counseling & Guidance'
      ],
      benefits: [
        'Industry-relevant skills and certifications',
        'Customized training programs',
        'Ongoing career support and guidance',
        'Measurable performance improvements'
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
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/Video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white drop-shadow-lg">
              Our <span className="text-blue-200">Services</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Comprehensive solutions designed to meet your business needs and drive success through strategic recruitment, training, and placement services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`mb-24 ${index > 0 ? 'pt-16 border-t border-gray-200' : ''}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-2">{service.title}</h2>
                      <p className="text-xl text-blue-600 font-medium">{service.brand}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
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
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Get Started with {service.brand}
                      <ArrowRight className="w-4 h-4 ml-2" />
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
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industry Expertise Section - Kudos Consultancy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry-Specific Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kudos Consultancy delivers customized recruitment strategies for diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Startups',
                icon: '🚀',
                description: 'Agile sourcing across multiple channels with culture-focused recruitment',
                features: ['Job boards, social media, referrals', 'Efficient ATS tools', 'Cultural fit priority']
              },
              {
                title: 'IT Companies',
                icon: '💻',
                description: 'Technical assessments and employer branding for tech talent',
                features: ['Automated screening tools', 'Innovation highlighting', 'Growth potential focus']
              },
              {
                title: 'EdTech Organizations',
                icon: '🎓',
                description: 'Flexible talent pools and academic partnerships',
                features: ['Online/hybrid role scaling', 'University partnerships', 'Training ecosystem access']
              },
              {
                title: 'Hospitality Sector',
                icon: '🏨',
                description: 'Soft skills focus and cultural alignment',
                features: ['Interpersonal skills priority', 'Brand story showcasing', 'Guest-centric mission']
              }
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Kudos Consultancy Apart */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Sets <span className="text-blue-600">Kudos Consultancy</span> Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our unique combination of expertise, technology, and transparent approach ensures exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Industry-Specific Expertise',
                description: 'We deeply understand the nuances of each sector, allowing us to deliver precise, high-impact candidate matches.',
                icon: Target
              },
              {
                title: 'Smart Use of Technology',
                description: 'From ATS and recruitment marketing to screening tools, our tech-savvy approach ensures faster, smarter placements.',
                icon: Award
              },
              {
                title: 'Transparent, Collaborative Approach',
                description: 'Expect clear timelines, open communication and regular updates—every step of the way.',
                icon: Users
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">Kuan Global Ventures</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine expertise, innovation, and personalized service to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our services can help you achieve your goals. 
              Contact us today for a free consultation and personalized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Your Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
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