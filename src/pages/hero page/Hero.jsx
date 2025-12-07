import React, { useState } from 'react';
import heroImage from '../../assets/IronMann.png';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (section) => {
    setMenuOpen(false);
    setTimeout(() => {
      let targetId = section;
      // Map mentors button to the mentors-detail section
      if (section === 'mentors') {
        targetId = 'mentors-detail';
      }
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div id="home" className="bg-gradient-to-br from-red-950 via-black to-red-950 min-h-screen text-white font-sans flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-black/40 backdrop-blur border-b border-white/10 sticky top-0 z-50">
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-xl sm:text-2xl font-bold">⚡</span>
          <span className="text-sm sm:text-lg md:text-xl font-bold tracking-wide truncate">PentaverseIndia</span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer"
        >
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-4 lg:gap-8">
          <button onClick={() => handleNavigation('home')} className="text-white hover:text-red-400 transition-colors text-xs lg:text-sm font-medium cursor-pointer bg-transparent border-none">Home</button>
          <button onClick={() => handleNavigation('about')} className="text-white hover:text-red-400 transition-colors text-xs lg:text-sm font-medium cursor-pointer bg-transparent border-none">About</button>
          <button onClick={() => handleNavigation('prizes')} className="text-white hover:text-red-400 transition-colors text-xs lg:text-sm font-medium cursor-pointer bg-transparent border-none">Prizes</button>
          <button onClick={() => handleNavigation('sponsors')} className="text-white hover:text-red-400 transition-colors text-xs lg:text-sm font-medium cursor-pointer bg-transparent border-none">sponsors</button>
          <button onClick={() => handleNavigation('mentors')} className="text-white hover:text-red-400 transition-colors text-xs lg:text-sm font-medium cursor-pointer bg-transparent border-none">mentors</button>
          <button onClick={() => handleNavigation('more')} className="text-white hover:text-red-400 transition-colors text-xs lg:text-sm font-medium cursor-pointer bg-transparent border-none">more</button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur border-b border-white/10 sticky top-16 z-40">
          <div className="flex flex-col gap-3 px-4 py-4">
            <button onClick={() => handleNavigation('home')} className="text-white hover:text-red-400 transition-colors text-sm font-medium cursor-pointer bg-transparent border-none text-left py-2">Home</button>
            <button onClick={() => handleNavigation('about')} className="text-white hover:text-red-400 transition-colors text-sm font-medium cursor-pointer bg-transparent border-none text-left py-2">About</button>
            <button onClick={() => handleNavigation('prizes')} className="text-white hover:text-red-400 transition-colors text-sm font-medium cursor-pointer bg-transparent border-none text-left py-2">Prizes</button>
            <button onClick={() => handleNavigation('sponsors')} className="text-white hover:text-red-400 transition-colors text-sm font-medium cursor-pointer bg-transparent border-none text-left py-2">sponsors</button>
            <button onClick={() => handleNavigation('mentors')} className="text-white hover:text-red-400 transition-colors text-sm font-medium cursor-pointer bg-transparent border-none text-left py-2">mentors</button>
            <button onClick={() => handleNavigation('more')} className="text-white hover:text-red-400 transition-colors text-sm font-medium cursor-pointer bg-transparent border-none text-left py-2">more</button>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 max-w-7xl mx-auto w-full flex-1">
        <div className="space-y-4 sm:space-y-6 md:space-y-8 z-10">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Welsone to<br />
            Pentaverse
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button 
            onClick={() => handleNavigation('about')}
            className="bg-gradient-to-r from-red-900 to-red-700 hover:from-red-800 hover:to-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded font-semibold border border-red-600 hover:border-red-400 transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base">
            Get Started
          </button>
        </div>

        <div className="flex justify-center items-center relative w-full h-80 sm:h-96 md:h-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-red-900/20 rounded-full blur-3xl -z-10"></div>
          <img 
            src={heroImage} 
            alt="Iron Man Character" 
            className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 0 60px rgba(220, 20, 20, 0.3))',
              animation: 'float 3s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      {/* Sponsors Section */}
      <div id="sponsors" className="flex flex-wrap justify-center md:justify-around items-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 gap-6 sm:gap-8 md:gap-10 bg-black/50 border-t border-white/10">
        <div className="text-gray-500 hover:text-red-400 transition-colors font-semibold cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl">Amazon</div>
        <div className="text-gray-500 hover:text-red-400 transition-colors font-semibold cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl">dribbble</div>
        <div className="text-gray-500 hover:text-red-400 transition-colors font-semibold cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl">HubSpot</div>
        <div className="text-gray-500 hover:text-red-400 transition-colors font-semibold cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl">NETFLIX</div>
        <div className="text-gray-500 hover:text-red-400 transition-colors font-semibold cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl">zoom</div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
