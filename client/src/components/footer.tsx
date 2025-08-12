import { Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">John Developer</h3>
            <p className="text-slate-300 mb-4">
              Passionate full-stack developer creating beautiful and functional web experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleLinkClick("#about")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#skills")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#portfolio")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#contact")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-slate-300">
              <p>john.developer@email.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-300">
            © 2024 John Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
