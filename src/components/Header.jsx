import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Prizes", link: "#prizes" },
    { name: "Mentors", link: "#mentors" },
    { name: "Sponsors", link: "#sponsors" },
    { name: "Crew", link: "#crew" },
  ];

  const handleScroll = (link) => {
    setOpen(false);
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">PentaVerse</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              <button
                onClick={() => handleScroll(item.link)}
                className="bg-transparent border-none"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/60 backdrop-blur-lg text-white 
        absolute w-full transition-all duration-300 
        ${open ? "max-h-96 py-4" : "max-h-0 overflow-hidden"}`}
      >
        <ul className="flex flex-col gap-6 px-6 text-lg">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              <button
                onClick={() => handleScroll(item.link)}
                className="bg-transparent border-none text-white text-left"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
