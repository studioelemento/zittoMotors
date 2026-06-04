import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 h-[80px] md:h-[120px] w-full bg-black">
      <div className="mx-auto flex h-full items-center justify-between px-6 lg:px-20">
        {/* Logo */}
        <div>
          <img
            src="/logo.png"
            alt="Zitto"
            className="h-14 object-contain"
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
            <HashLink smooth to="/#careers" className="transition hover:text-gray-300">
              Careers
            </HashLink>
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
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black h-60 flex flex-col px-8 py-6">
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="Zitto" className="h-14 object-contain" />
            <button className="text-white" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
          </div>
          <ul className="flex flex-col mt-1 gap-5 text-[18px] font-bold text-white">
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
              <HashLink smooth to="/#careers" onClick={() => setIsOpen(false)}>
                Careers
              </HashLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;