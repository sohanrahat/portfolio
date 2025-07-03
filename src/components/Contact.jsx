import React from 'react';
import AnimatedCard from './AnimatedCard';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6" style={{ backgroundColor: '#b8c8fb' }}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">
          Get In Touch
        </h2>
        <AnimatedCard className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <a href="mailto:mnsohan.dev@gmail.com" className="group p-6 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                <FaEnvelope className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h3 className="font-bold mb-2 text-slate-800 text-lg">Email</h3>
              <p className="text-slate-600 text-sm font-medium break-words">mnsohan.dev@gmail.com</p>
            </a>
            <a href="tel:+8801714069155" className="group p-6 rounded-xl hover:bg-green-50 transition-all duration-300 border border-transparent hover:border-green-200 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                <FaPhone className="text-green-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h3 className="font-bold mb-2 text-slate-800 text-lg">Phone</h3>
              <p className="text-slate-600 text-sm font-medium">+88 01714069155</p>
            </a>
            <a href="https://wa.me/8801714069155" className="group p-6 rounded-xl hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-200 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                <FaWhatsapp className="text-emerald-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h3 className="font-bold mb-2 text-slate-800 text-lg">WhatsApp</h3>
              <p className="text-slate-600 text-sm font-medium">+88 01714069155</p>
            </a>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default Contact;
