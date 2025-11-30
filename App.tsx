import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, FileText } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import Home from './pages/Home';
import Tutoring from './pages/Tutoring';
import Portfolio from './pages/Portfolio';
import WorkWithMe from './pages/WorkWithMe';
import AboutContact from './pages/AboutContact';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tutoring', path: '/tutoring' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Work With Me', path: '/work-with-me' },
    { name: 'About & Contact', path: '/about-contact' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <ImageWithFallback 
              src="assets/logo.png" 
              alt="Hanna Nejad" 
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap px-2 py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-gray-700 hover:text-gray-900 py-2"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600 text-sm text-center md:text-left">
            © 2025 Hanna Shoari Nejad. All rights reserved.
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="/tutoring" className="text-gray-600 hover:text-gray-900">
              Tutoring
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="/portfolio" className="text-gray-600 hover:text-gray-900">
              Portfolio
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="/work-with-me" className="text-gray-600 hover:text-gray-900">
              Work With Me
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="/about-contact" className="text-gray-600 hover:text-gray-900">
              About & Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              title="Download Resume"
            >
              <FileText size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500 text-center">
          All tutoring and work inquiries are reviewed with a parent/guardian before any
          commitments are made.
        </div>
      </div>
    </footer>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutoring" element={<Tutoring />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/work-with-me" element={<WorkWithMe />} />
          <Route path="/about-contact" element={<AboutContact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );

  export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

}

