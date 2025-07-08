import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const navItems = [
    { href: "#introduction", label: "Introduction" },
    { href: "#variables", label: "Variables" },
    { href: "#functions", label: "Functions" },
    { href: "#objects", label: "Objects" },
    { href: "#examples", label: "Examples" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-github-text">JavaScript Fundamentals</h1>
            <span className="ml-2 px-2 py-1 bg-github-bg text-xs font-medium rounded-full">Tutorial</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-github-gray hover:text-github-blue transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Link href="/setup" className="text-github-gray hover:text-github-blue transition-colors">
              GitHub Pages Setup
            </Link>
          </nav>
          
          <button
            className="md:hidden p-2 rounded-md hover:bg-github-bg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-github-bg">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-2 text-github-gray hover:text-github-blue"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
