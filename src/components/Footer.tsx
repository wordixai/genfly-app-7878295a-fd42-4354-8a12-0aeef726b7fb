import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WhatsApp<span className="text-primary">Marketing</span></h3>
            <p className="text-gray-300 mb-4">
              Powerful WhatsApp Marketing solutions to help businesses connect with customers and drive growth.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">API Reference</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary transition-colors">GDPR Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WhatsApp Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}