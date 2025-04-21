import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import nxyLogo from "../assets/nxy-logo.jpg";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full bg-black z-50 transition-all duration-300 ${scrolled ? "bg-opacity-90 backdrop-blur-sm shadow-sm" : "bg-opacity-100"}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={nxyLogo} alt="NXY Markets Logo" className="h-10 mr-2" />
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="font-medium text-white hover:text-primary transition-colors">Features</a>
          <a href="#app" className="font-medium text-white hover:text-primary transition-colors">App</a>
          <a href="#social" className="font-medium text-white hover:text-primary transition-colors">Community</a>
          <a href="#download" className="font-medium text-white hover:text-primary transition-colors">Download</a>
        </nav>
        
        <button 
          className="md:hidden focus:outline-none text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
        
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <a 
            href="#download" 
            className="bg-gradient-to-r from-primary to-accent text-secondary font-bold py-2 px-6 rounded-full hover:shadow-lg transition-all"
          >
            Get Started
          </a>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-3 space-y-2 bg-white shadow-md">
            <a 
              href="#features" 
              className="block py-2 font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#app" 
              className="block py-2 font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              App
            </a>
            <a 
              href="#social" 
              className="block py-2 font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </a>
            <a 
              href="#download" 
              className="block py-2 font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download
            </a>
            <div className="flex items-center justify-between py-2">
              <span className="font-medium">Toggle Theme</span>
              <ThemeToggle />
            </div>
            <a 
              href="#download" 
              className="block py-2 mt-2 text-center bg-gradient-to-r from-primary to-accent text-secondary font-bold rounded-full hover:shadow-lg transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
