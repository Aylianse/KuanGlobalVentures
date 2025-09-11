'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react'

export default function PrivacyPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Privacy & Security
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="prose prose-lg max-w-none"
            >
              <motion.div variants={itemVariants} className="mb-12">
                <p className="text-gray-600 text-lg leading-relaxed">
                  <strong>Last updated:</strong> December 2024
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mt-4">
                  At Kuan Global Ventures OPC Private Limited ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="w-8 h-8 mr-3 text-primary" />
                  Information We Collect
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Name and contact information (email, phone number, address)</li>
                      <li>Professional information (job title, company, industry)</li>
                      <li>Resume and career history</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Website usage data and analytics</li>
                      <li>Device information and IP address</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Communication records and preferences</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-8 h-8 mr-3 text-primary" />
                  How We Use Your Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                      <li>Provide consulting and recruitment services</li>
                      <li>Match candidates with job opportunities</li>
                      <li>Deliver training and development programs</li>
                      <li>Communicate about our services</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Operations</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                      <li>Improve our services and website</li>
                      <li>Analyze usage patterns and trends</li>
                      <li>Comply with legal obligations</li>
                      <li>Protect against fraud and security threats</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="w-8 h-8 mr-3 text-primary" />
                  Data Security
                </h2>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Staff training on data protection practices</li>
                    <li>Secure data storage and backup procedures</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <UserCheck className="w-8 h-8 mr-3 text-primary" />
                  Your Rights
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Access</h3>
                        <p className="text-gray-600 text-sm">Request access to your personal information</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Correction</h3>
                        <p className="text-gray-600 text-sm">Update or correct inaccurate information</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Deletion</h3>
                        <p className="text-gray-600 text-sm">Request deletion of your personal data</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Portability</h3>
                        <p className="text-gray-600 text-sm">Receive your data in a portable format</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm font-bold">5</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Objection</h3>
                        <p className="text-gray-600 text-sm">Object to certain processing activities</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm font-bold">6</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Withdrawal</h3>
                        <p className="text-gray-600 text-sm">Withdraw consent at any time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-8 h-8 mr-3 text-primary" />
                  Contact Us
                </h2>
                
                <div className="bg-primary/5 p-8 rounded-xl">
                  <p className="text-gray-600 mb-6">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">info.kuanglobalventures@gmail.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">+91 9964640472</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-8">
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Policy Updates</h3>
                  <p className="text-gray-600 text-sm">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
