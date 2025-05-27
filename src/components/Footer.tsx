
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold">Cricket Village</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Connecting village cricketers across communities. Join teams, schedule matches, 
              stream live games, and be part of the growing cricket village network.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-slate-300 hover:text-green-400 transition-colors">Features</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/community" className="text-slate-300 hover:text-green-400 transition-colors">Community</Link></li>
              <li><Link to="/admin" className="text-slate-300 hover:text-green-400 transition-colors">Admin Info</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-slate-300 hover:text-green-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-green-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-slate-300 hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-green-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Cricket Village Community App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
