import { useState } from 'react';
import AnimatedCard from './AnimatedCard';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:mnsohan.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-6" style={{ backgroundColor: '#b8c8fb' }}>
      <div className="container mx-auto max-w-6xl">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-700">Get In Touch</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-600" size={18} />
                <div>
                  <p className="text-gray-700 font-medium">mnsohan.dev@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-600" size={18} />
                <div>
                  <p className="text-gray-700 font-medium">+88 01714069155</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-gray-600" size={18} />
                <div>
                  <p className="text-gray-700 font-medium">WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <AnimatedCard className="bg-white rounded-lg p-6 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Your Message"
              />

              <button
                type="submit"
                className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
