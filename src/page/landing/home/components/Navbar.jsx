import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0  left-0 z-50 h-[80px] md:h-[120px] w-full bg-black">
      <div className="mx-auto flex h-full items-center justify-between px-6 lg:px-20">
        {/* Logo */}
        <div className="flex items-center h-full">
          <img
            src="/Logo/logoWithText.png"
            alt="Zitto"
            className="h-[60px] md:h-[70px] object-contain"
          />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-10 font-bold text-white mr-26">
          <li>
            <HashLink smooth to="/#about" className="transition hover:text-gray-300">
              About
            </HashLink>
          </li>
          <li>
            <Link to="/zcr" className="transition hover:text-gray-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/careers" className="transition hover:text-gray-300">
              Careers
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      <div 
        className={`fixed top-0 left-0 w-full z-[100] bg-black h-64 flex flex-col px-8 py-6 transform transition-all duration-400 ease-out ${
          isOpen ? "translate-y-0 opacity-100 pointer-events-auto shadow-2xl" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between">
          <img src="/Logo/logoWithText.png" alt="Zitto" className="h-[50px] object-contain" />
          <button className="text-white" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
        </div>
        <ul className="flex flex-col mt-4 gap-5 text-[18px] font-bold text-white">
          <li>
            <HashLink smooth to="/about" onClick={() => setIsOpen(false)}>
              About
            </HashLink>
          </li>
          <li>
            <Link to="/zcr" onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/careers" onClick={() => setIsOpen(false)}>
              Careers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;