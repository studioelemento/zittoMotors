const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black">
      <div className="mx-auto flex h-24 items-center justify-between px-8 lg:px-20">
        {/* Logo */}
        <div>
          <img
            src="/logo.png"
            alt="Zitto"
            className="h-14 object-contain"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-10 text-white">
          <li>
            <a href="#about" className="transition hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#products" className="transition hover:text-gray-300">
              Products
            </a>
          </li>
          <li>
            <a href="#careers" className="transition hover:text-gray-300">
              Careers
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;