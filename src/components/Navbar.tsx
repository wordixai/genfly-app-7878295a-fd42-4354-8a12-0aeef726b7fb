"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">WhatsApp<span className="text-dark">Marketing</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-primary transition-colors">Features</Link>
            <Link href="#benefits" className="text-gray-700 hover:text-primary transition-colors">Benefits</Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">How It Works</Link>
            <Link href="#pricing" className="text-gray-700 hover:text-primary transition-colors">Pricing</Link>
            <Link href="#contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors">
              Get Started
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="#features" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Features
            </Link>
            <Link href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Benefits
            </Link>
            <Link href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
            <Link href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="#contact" className="block px-3 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}