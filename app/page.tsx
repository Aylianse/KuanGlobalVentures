'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Globe, 
  Award, 
  CheckCircle, 
  Building2,
  Lightbulb,
  Target,
  Heart,
  Star,
  Zap,
  Briefcase,
  GraduationCap,
  Rocket,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  Eye
} from 'lucide-react'

export default function Home() {
  const router = useRouter()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Business Consulting",
      description: "From strategic planning to operational execution, our seasoned experts deliver customized solutions to help your business overcome challenges, identify opportunities and achieve sustainable growth."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Training & Development",
      description: "We design and deliver bespoke training programs that enhance leadership, communication, technical skills and team effectiveness—empowering your workforce to perform at their best."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Recruitment – Kudos Consultancy",
      description: "Our recruitment arm, Kudos Consultancy, connects you with top-tier talent across domains. We streamline your hiring process to present only the best candidates—helping you build a team that truly fits your culture and vision."
    }
  ]

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "15+ years of successful business transformations and talent placements."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Approach",
      description: "Data-driven insights and customized solutions for measurable results."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships based on trust."
    }
  ]

  const kudosServices = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Executive Search",
      description: "C-level and senior leadership recruitment across industries."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "HR Consulting",
      description: "Comprehensive human resources strategy and implementation."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Organizational Development",
      description: "Transform your company culture and operational efficiency."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
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
            <source src="/videos/Video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
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
            className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 right-20 w-24 h-24 bg-indigo-100 rounded-full opacity-20"
          />
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-100 rounded-full opacity-20"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                  <Star className="w-4 h-4 mr-2" />
                  Trusted by 500+ Companies
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                  Empowering Businesses.
                  <span className="block text-blue-200">Transforming Talent.</span>
                  <span className="block text-blue-200">Delivering Results.</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
                  At Kuan Global Ventures OPC Private Limited, we specialize in three core areas that drive your business forward: 
                  Business Consulting, Training & Development and Recruitment—under the brand name Kudos Consultancy.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg" onClick={() => router.push('/contact')}>
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center space-x-8 pt-4">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-white/80">Companies Served</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm text-white/80">Placements Made</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                        <Users className="w-8 h-8 text-blue-200 mb-2" />
                        <h3 className="font-semibold text-white">Talent Solutions</h3>
                        <p className="text-sm text-white/80">Strategic recruitment</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                        <TrendingUp className="w-8 h-8 text-green-200 mb-2" />
                        <h3 className="font-semibold text-white">Growth Strategy</h3>
                        <p className="text-sm text-white/80">Business optimization</p>
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                        <Globe className="w-8 h-8 text-purple-200 mb-2" />
                        <h3 className="font-semibold text-white">Global Reach</h3>
                        <p className="text-sm text-white/80">International expansion</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                        <Lightbulb className="w-8 h-8 text-yellow-200 mb-2" />
                        <h3 className="font-semibold text-white">Innovation</h3>
                        <p className="text-sm text-white/80">Creative solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Whether you're a thriving enterprise seeking strategic guidance, an organization aiming to upskill your workforce, 
              or a brand in need of top-tier talent, we are your trusted partner in success. Founded with a vision to bridge 
              the gap between exceptional talent and innovative companies, Kuan Global Ventures has been at the forefront of 
              business transformation for over 15 years.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To connect exceptional talent with innovative companies, creating partnerships that drive success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading force in business transformation and talent acquisition globally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
              <p className="text-gray-600">
                Integrity, excellence, innovation, and unwavering commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to address your business challenges and drive sustainable growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-elegant hover:shadow-elegant-lg transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                      <div className="text-blue-600 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach and client-centric methodology set us apart in delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrated Solutions</h3>
              <p className="text-gray-600">
                Across consulting, training, and talent acquisition—designed to work in harmony.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-Centric Approach</h3>
              <p className="text-gray-600">
                Tailored services that align with your unique goals and challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kudos Consultancy</h3>
              <p className="text-gray-600">
                A trusted brand known for precision, transparency and lasting candidate placements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Support</h3>
              <p className="text-gray-600">
                From strategy development and training delivery to sourcing and onboarding talent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Promise
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Kuan Global Ventures, every engagement is rooted in long-term partnership. We don't just deliver services; 
              we drive transformation. With Kudos Consultancy, our recruitment brand, you're not just hiring—you're investing 
              in the right fit, every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Kuan Global Ventures?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We stand apart through our commitment to excellence, personalized approach, and proven track record of delivering exceptional results for our clients.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-blue-600">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-elegant-lg">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">98%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-2xl">
                    <div>
                      <div className="text-2xl font-bold text-green-600">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-2xl">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">500+</div>
                      <div className="text-sm text-gray-600">Companies Served</div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kudos Consultancy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Kudos Consultancy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized division focused on human resources and organizational development, 
              helping companies build high-performing teams and cultures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {kudosServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-elegant hover:shadow-elegant-lg transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 transition-colors">
                      <div className="text-indigo-600 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help you achieve your goals. 
              Our team is ready to partner with you on your journey to success.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">For Businesses Seeking Growth</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Ready to elevate your strategy and performance?
                </p>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base w-full">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">For Organizations Wanting to Develop Talent</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Looking to enhance your team's capabilities?
                </p>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base w-full">
                  Get a Custom Training Plan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">For Businesses in Need of Great Talent</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Hire smart, hire fast with Kudos Consultancy.
                </p>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base w-full">
                  Request Recruitment Support
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-200 mx-auto mb-3" />
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-blue-200">+1 (555) 123-4567</div>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-200 mx-auto mb-3" />
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-blue-200">info@kuanglobalventures.com</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-200 mx-auto mb-3" />
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-blue-200">New York, NY</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 