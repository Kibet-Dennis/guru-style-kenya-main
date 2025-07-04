
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Style Gurus
            </div>
            <p className="text-gray-400 mb-6">
              Kenya's premier fashion destination for authentic mitumba and new collections. Express your unique style with us.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/styleguru" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com/styleguru" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com/styleguru" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://youtube.com/styleguru" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/mitumba-collection" className="text-gray-400 hover:text-white transition-colors">Mitumba Collection</Link></li>
              <li><Link to="/new-arrivals" className="text-gray-400 hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/size-guide" className="text-gray-400 hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link to="/fashion-blog" className="text-gray-400 hover:text-white transition-colors">Fashion Blog</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping-info" className="text-gray-400 hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns-exchange" className="text-gray-400 hover:text-white transition-colors">Returns & Exchange</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/track-order" className="text-gray-400 hover:text-white transition-colors">Track Your Order</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-3 text-gray-400">
              <p>📱 WhatsApp: +254 712 345 678</p>
              <p>📧 info@stylegurus.co.ke</p>
              <p>📍 Nairobi, Kenya</p>
              <p>🕒 Mon-Sat: 8AM-8PM</p>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Payment Methods</h4>
              <div className="flex space-x-2">
                <div className="bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold">M-PESA</div>
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">VISA</div>
                <div className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold">MASTERCARD</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Style Gurus. All rights reserved. Made with ❤️ in Kenya
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
