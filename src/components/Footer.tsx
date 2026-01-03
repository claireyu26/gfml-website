import React from 'react';
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/GFML.png" alt="GFML Logo" className="h-8 w-8" />
              <span className="font-bold text-xl">GFML</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Promoting accessibility in mathematics and nurturing mathematical talent 
              through free online competitions for students ages 6-18.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>Philadelphia, PA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/register" className="hover:text-orange-500 transition-colors">Register</a></li>
              <li><a href="/results" className="hover:text-orange-500 transition-colors">Results</a></li>
              <li><a href="/resources" className="hover:text-orange-500 transition-colors">Resources</a></li>
              <li><a href="/faq" className="hover:text-orange-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/our-team" className="hover:text-orange-500 transition-colors">Our Team</a></li>
              <li><a href="/contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
              <li><a href="mailto:info@gfml.org" className="hover:text-orange-500 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Germantown Friends Math League. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Math competition series • Ages 6-18 • Original problems
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;