import React from 'react';
import Hero from '../components/Hero';
import Biography from '../components/Biography';

export default function Aboutus() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section with Animation */}
      <Hero 
        title={
          <span className="inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Learn more about us
            </span>
            <span className="text-gray-700"> || Zee Care Medical Institute</span>
          </span>
        } 
        imageUrl={'/image2.png'}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
              Healing with <span className="text-blue-400">Heart</span>, 
              Caring with <span className="text-teal-400">Passion</span>
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
              Where medical excellence meets compassionate care for our community
            </p>
          </div>
        </div>
      </Hero>

      {/* Biography Section with Enhanced Styling */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <Biography 
          imageUrl={'image3.jpg'}
          className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Our <span className="text-blue-600">Story</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in 2010, Zee Care Medical Institute began as a small clinic with a big vision - to provide 
                  exceptional healthcare accessible to all. Today, we've grown into a leading medical institution 
                  without losing our personal touch.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our team of dedicated professionals combines cutting-edge technology with compassionate care 
                  to deliver outstanding medical services to our community.
                </p>
                <div className="flex space-x-4">
                  <div className="bg-blue-100 p-4 rounded-lg flex-1">
                    <h3 className="font-bold text-blue-800 mb-2">500+</h3>
                    <p className="text-sm text-blue-600">Specialized Doctors</p>
                  </div>
                  <div className="bg-teal-100 p-4 rounded-lg flex-1">
                    <h3 className="font-bold text-teal-800 mb-2">50+</h3>
                    <p className="text-sm text-teal-600">Medical Departments</p>
                  </div>
                  <div className="bg-indigo-100 p-4 rounded-lg flex-1">
                    <h3 className="font-bold text-indigo-800 mb-2">24/7</h3>
                    <p className="text-sm text-indigo-600">Emergency Care</p>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <img 
                  src="image3.jpg" 
                  alt="Our Team" 
                  className="relative w-full h-auto rounded-lg shadow-md transform group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </Biography>
      </div>

      {/* Mission and Values Section */}
      <div className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our <span className="text-yellow-300">Core Values</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "👨‍⚕️",
                title: "Patient-Centered Care",
                description: "Every decision we make prioritizes the well-being and comfort of our patients."
              },
              {
                icon: "🔬",
                title: "Medical Excellence",
                description: "We maintain the highest standards of medical practice through continuous learning."
              },
              {
                icon: "❤️",
                title: "Compassion",
                description: "We treat every patient with the kindness and respect they deserve."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Our <span className="text-blue-600">Patients</span> Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The care I received at Zee Care was exceptional. The doctors took time to listen and explain everything clearly.",
                name: "Sarah Johnson",
                role: "Cardiac Patient"
              },
              {
                quote: "From the moment I walked in, I felt welcomed and cared for. Truly a patient-first institution.",
                name: "Michael Chen",
                role: "Orthopedic Patient"
              },
              {
                quote: "The pediatric team was amazing with my child. They made a difficult situation much easier to handle.",
                name: "Priya Patel",
                role: "Parent"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-blue-500"
              >
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-blue-600">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}