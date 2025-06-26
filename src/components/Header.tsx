import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
    setIsMobileMenuOpen(false);
  };

  const isActivePage = (path: string) => location.pathname === path;

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ];

  const userTabs = isSignedIn ? [
    { name: 'Inventory', path: '/inventory' },
    { name: 'Billing', path: '/billing' },
    { name: 'Estimates', path: '/estimates' },
    { name: 'Analytics', path: '/analytics' },
  ] : [];

  const allLinks = [...navigationLinks, ...userTabs];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Brand Navigator</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {allLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  isActivePage(link.path) 
                    ? 'text-red-600 border-b-2 border-red-600 pb-4' 
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {!isSignedIn && (
              <Link to="/signup">
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                >
                  Sign Up
                </Button>
              </Link>
            )}
            <Button
              onClick={handleSignIn}
              variant={isSignedIn ? "outline" : "default"}
              className={isSignedIn ? 
                "border-red-600 text-red-600 hover:bg-red-50" : 
                "bg-red-600 hover:bg-red-700 text-white"
              }
            >
              {isSignedIn ? 'Sign Out' : 'Sign In'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {allLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    isActivePage(link.path)
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-200 space-y-2">
                {!isSignedIn && (
                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full border-red-600 text-red-600 hover:bg-red-50"
                    >
                      Sign Up
                    </Button>
                  </Link>
                )}
                <Button
                  onClick={handleSignIn}
                  variant={isSignedIn ? "outline" : "default"}
                  className={`w-full ${isSignedIn ? 
                    "border-red-600 text-red-600 hover:bg-red-50" : 
                    "bg-red-600 hover:bg-red-700 text-white"
                  }`}
                >
                  {isSignedIn ? 'Sign Out' : 'Sign In'}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
