import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleViewWork = () => {
    const portfolioSection = document.querySelector("#portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleGetInTouch = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="animate-float mb-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
            alt="Professional headshot"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/30 shadow-xl"
          />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-slide-up">John Developer</h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto animate-slide-up">
          Full Stack Developer & UI/UX Designer
        </p>
        <p className="text-base sm:text-lg mb-12 max-w-3xl mx-auto text-white/90 animate-slide-up">
          Passionate about creating beautiful, functional, and user-centered digital experiences.
          I bring ideas to life through code and design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <button
            onClick={handleViewWork}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={handleGetInTouch}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={handleScrollDown}>
          <ChevronDown className="text-white text-2xl" />
        </button>
      </div>
    </section>
  );
}
