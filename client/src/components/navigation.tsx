import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/98 backdrop-blur-sm shadow-sm" : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-slate-800">John Dev</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#contact", label: "Contact" },
                { href: "#comments", label: "Comments" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#portfolio", label: "Portfolio" },
              { href: "#contact", label: "Contact" },
              { href: "#comments", label: "Comments" },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="block text-slate-600 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
