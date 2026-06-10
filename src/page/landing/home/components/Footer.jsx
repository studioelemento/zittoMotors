import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#202c32] text-white pt-5 pb-10 w-full overflow-hidden">

      {/* Red Top Bar with diagonal clip */}
      <div className="absolute top-0 left-0 h-[48px] bg-[#D4373D] w-full md:w-[45%] z-10 flex items-center justify-center md:justify-start md:[clip-path:polygon(0_0,100%_0,calc(100%-40px)_100%,0_100%)]">
        <ul className="flex items-center gap-10 font-semibold text-[20px] md:pl-16 lg:pl-24">
          <li><a href="#about" className="hover:text-gray-200 transition-colors">About</a></li>
          <li><a href="#products" className="hover:text-gray-200 transition-colors">Products</a></li>
          <li><Link to="/careers" className="hover:text-gray-200 transition-colors">Careers</Link></li>
        </ul>
      </div>

      {/* Two-column body */}
      <div className="w-full px-6 md:px-16 lg:px-24 mt-14 flex flex-col md:flex-row justify-between gap-8">

        {/* LEFT — Logo, socials, legal */}
        <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1 pl-0 md:pl-16 pt-5">

          {/* Logo image */}
          <div className="mb-">
            <img
              src="/Logo/logoWithText.png"
              alt="Zitto"
              className="h-[120px] object-contain object-left"
            />
          </div>

          <p className="text-white text-[15px] font-medium tracking-wide mb-7">
            For the Enthusiast.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-[16px] font-medium mr-1">Find us at /</span>
            {/* Instagram */}
            <a href="https://www.instagram.com/zittomotors/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/zittomotors/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/@ZittoEV" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
            {/* X / Twitter */}
            <a href="https://x.com/zittomotors" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/zittomotors/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>

          {/* Legal */}
          <p className="text-[12px] text-gray-300 mb-2">
            Copyright Zitto Motors Pvt Ltd © {new Date().getFullYear()}
          </p>
          <p className="font-sans font-weight-300 text-[10px] text-gray-400 leading-[1.4] max-w-[800px] line-clamp-2">
            Disclaimer: The images of motorcycles shown are for illustrative purposes only. Actual vehicles may vary in appearance, features, and specifications. Please refer to the specific model details or contact us for accurate and up-to-date information on our products. All materials presented, including images of motorcycles, are protected by copyright.
          </p>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="w-full md:w-1/2 flex flex-col order-1 md:order-2 pt-3 md:pl-8">
          <h3 className="text-[28px] saira font-bold uppercase  mb-4">Contact Us</h3>

          <form className="flex flex-col gap-2.5 w-full" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-white text-black px-3 py-2.5 rounded-[2px] focus:outline-none placeholder:text-gray-400 text-[13px]"
            />
            <input
              type="text"
              placeholder="Email Id / Phone number"
              className="w-full bg-white text-black px-3 py-2.5 rounded-[2px] focus:outline-none placeholder:text-gray-400 text-[13px]"
            />
            <textarea
              placeholder="For investment, inquiries or further information, please add a note here, and we'll be in touch promptly."
              className="w-full bg-white text-black px-3 py-2.5 rounded-[2px] focus:outline-none placeholder:text-gray-400 text-[13px] h-[90px] resize-none leading-snug"
            ></textarea>

            <button
              type="submit"
              className="mt-1 w-fit bg-[#D4373D] hover:bg-red-700 transition-colors text-white font-semibold text-[13px] px-5 py-2.5 rounded-[2px] flex items-center gap-2"
            >
              Get in touch with us
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </button>
          </form>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 w-8 h-8 bg-[#E33B42] hover:bg-red-700 transition-colors flex items-center justify-center rounded-[3px]"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </footer>
  );
}
