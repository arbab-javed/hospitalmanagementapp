import React, { useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';
import Hero from '../components/Hero';

export default function Appointment() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Appointment-focused Content */}
      <Hero 
        title={
          <span className="inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Schedule Your Appointment
            </span>
            <span className="text-gray-700"> || ZeeCare Medical Institute</span>
          </span>
        } 
        imageUrl={"image7.jpg"}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in-down">
              Your <span className="text-blue-300">Health</span> Journey Starts Here
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 animate-fade-in-up delay-100">
              Book your consultation with our specialists in just a few clicks. Fast, secure, and convenient.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-white text-sm">Real-time availability</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                <span className="text-white text-sm">Instant confirmation</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                <span className="text-white text-sm">24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </Hero>

      {/* Appointment Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form Container */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-lg relative">
            {showConfirmation && (
              <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center p-8 z-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Appointment Requested!</h3>
                <p className="text-gray-600 mb-6 text-center">
                  We've received your appointment request and will contact you shortly to confirm.
                </p>
                <button 
                  onClick={() => setShowConfirmation(false)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            )}
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Book Your <span className="text-blue-600">Appointment</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form and we'll get back to you within 24 hours to confirm.
              </p>
              <AppointmentForm onSuccess={() => setShowConfirmation(true)} />
            </div>
          </div>

          {/* Benefits Sidebar */}
          <div className="space-y-6 sticky top-8">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Why Book With Us?
              </h3>
              <ul className="space-y-3">
                {[
                  "Same-day appointments available",
                  "No long wait times",
                  "Expert specialists in every field",
                  "Flexible rescheduling",
                  "Secure online payments",
                  "Digital health records"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Operating Hours
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
                  { day: "Saturday", time: "9:00 AM - 5:00 PM" },
                  { day: "Sunday", time: "Emergency only" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{item.day}</span>
                    <span className="font-medium text-gray-800">{item.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex">
                  <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  <span className="text-yellow-800 text-sm">
                    For emergencies, please call: <span className="font-bold">(123) 456-7890</span>
                  </span>
                </div>
              </div>
            </div>

            {/* New: Doctor Availability Widget */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Doctor Availability
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Dr. Sarah Johnson", specialty: "Cardiology", availability: "Today: 2 PM - 6 PM" },
                  { name: "Dr. Michael Chen", specialty: "Orthopedics", availability: "Tomorrow: 9 AM - 3 PM" },
                  { name: "Dr. Priya Patel", specialty: "Pediatrics", availability: "Today: 10 AM - 4 PM" }
                ].map((doctor, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium text-gray-800">{doctor.name}</div>
                    <div className="text-sm text-gray-600 mb-1">{doctor.specialty}</div>
                    <div className="text-sm text-blue-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {doctor.availability}
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full py-2 text-sm text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                View All Doctors
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New: How It Works Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How Our <span className="text-blue-600">Appointment System</span> Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                ),
                title: "1. Fill the Form",
                description: "Provide your details and preferred appointment time"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                ),
                title: "2. Get Confirmation",
                description: "We'll contact you within 24 hours to confirm your slot"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                ),
                title: "3. Visit the Clinic",
                description: "Arrive 15 minutes early for your appointment"
              }
            ].map((step, index) => (
              <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="mx-auto w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
            Trusted By Thousands of Patients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Happy Patients" },
              { number: "200+", label: "Specialists" },
              { number: "99%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Support Available" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.number}</div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New: FAQ Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "How soon can I get an appointment?",
                answer: "We offer same-day appointments for urgent cases and typically have availability within 24-48 hours for non-emergency visits."
              },
              {
                question: "What should I bring to my appointment?",
                answer: "Please bring your ID, insurance card (if applicable), any relevant medical records, and a list of current medications."
              },
              {
                question: "Can I reschedule my appointment?",
                answer: "Yes, you can reschedule up to 24 hours before your appointment time through our online portal or by calling our office."
              },
              {
                question: "Do you accept my insurance?",
                answer: "We accept most major insurance plans. Please contact our billing department for specific coverage questions."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full px-5 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="px-5 py-3 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}