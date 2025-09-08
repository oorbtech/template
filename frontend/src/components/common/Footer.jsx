import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Activities', href: '/activities' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const courses = [
    { name: 'Web Development', href: '/courses' },
    { name: 'Data Science', href: '/courses' },
    { name: 'Digital Marketing', href: '/courses' },
    { name: 'Graphic Design', href: '/courses' },
    { name: 'Mobile Development', href: '/courses' },
  ];

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Verify Certificate', href: '/verify' },
    { name: 'Student Support', href: '/support' },
    { name: 'Career Services', href: '/careers' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Refund Policy', href: '/refund' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-lg lg:text-xl font-bold">BMS Academy</span>
            </Link>
            <p className="text-gray-300 mb-4 lg:mb-6 max-w-md text-sm lg:text-base">
              Empowering students with practical skills through comprehensive offline courses. 
              Join thousands of successful graduates who have transformed their careers with us.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 lg:space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">123 Education Street, Learning City, LC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">info@bmsacademy.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm lg:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm lg:text-base"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm lg:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left">
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-3 lg:mb-4 text-sm lg:text-base">
              Subscribe to our newsletter for the latest courses, offers, and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 lg:gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 lg:px-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap text-sm lg:text-base px-4 lg:px-6"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-6 lg:mt-8 pt-6 lg:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-300 text-xs lg:text-sm mb-4 lg:mb-0">
              © {currentYear} BMS Academy. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6 mb-4 lg:mb-0">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-primary-400 text-xs lg:text-sm transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 lg:space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;