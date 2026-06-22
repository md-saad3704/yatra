import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Globe, IndianRupee } from "lucide-react";

import Logo from "./Logo";
import Container from "./Container";

import { NAV_LINKS } from "../../constants/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-heading font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#FF6B35]"
                      : "text-gray-700 hover:text-[#FF6B35]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2">
              <IndianRupee size={16} />
              <span>INR</span>
            </button>

            <button className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2">
              <Globe size={16} />
              <span>EN</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-gray-200 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="font-heading text-lg"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;