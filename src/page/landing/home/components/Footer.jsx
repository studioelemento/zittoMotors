export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#202c32] text-white pt-5 pb-10 mt-10 w-full overflow-hidden">
      {/* Red Top Bar */}
      <div 
        className="absolute top-0 left-0 h-[48px] bg-[#E33B42] w-full md:w-[45%] z-10 flex items-center justify-center md:justify-start md:[clip-path:polygon(0_0,100%_0,calc(100%-30px)_100%,0_100%)]"
      >
        <ul className="flex items-center justify-center gap-8 md:gap-6 font-semibold text-[14px] md:pl-16 lg:pl-32 w-full md:w-auto">
          <li><a href="#about" className="hover:text-gray-200 transition">About</a></li>
          <li><a href="#products" className="hover:text-gray-200 transition">Products</a></li>
          <li><a href="#careers" className="hover:text-gray-200 transition">Careers</a></li>
        </ul>
      </div>

      <div className="w-full px-6 md:px-16 lg:px-32 mt-10 md:mt-8 flex flex-col md:flex-row justify-between gap-12 md:gap-16">
        
        {/* INFO COLUMN (Bottom on mobile, Left on desktop) */}
        <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1 pt-0 md:pt-15">
          {/* Logo Placeholder */}
          <div className="flex flex-col mb-4 items-start">
            <div className="w-[56px] h-[56px] rounded-full border-[2px] border-white flex items-center justify-center relative">
              <span className="text-[28px] font-black italic leading-none pr-1">Z</span>
              <span className="absolute -right-4 text-[10px] top-2 font-bold">™</span>
            </div>
            <span className="text-[14px] font-light tracking-[0.25em] lowercase mt-1 ml-1">
              zitto
            </span>
          </div>

          <p className="text-white text-[13px] font-medium tracking-wide mb-8">
            For the Enthusiast.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[13px] font-medium mr-1">Find us at /</span>
            <a href="#" className="hover:text-gray-300 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
            {/* X icon */}
            <a href="#" className="hover:text-gray-300 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>

          {/* Legal */}
          <p className="text-[11px] text-gray-300 mb-2">
            Copyright Zitto Motors Pvt Ltd © {new Date().getFullYear()}
          </p>
          <p className="text-[9px] text-gray-400 leading-[1.4] max-w-xl">
            Disclaimer: The images of motorcycles shown are for illustrative purposes only. Actual vehicles may vary in appearance, features, and specifications. Please refer to the specific model details or contact us for accurate and up-to-date information on our products. All materials presented, including images of motorcycles, are protected by copyright.
          </p>
        </div>

        {/* CONTACT FORM COLUMN (Top on mobile, Right on desktop) */}
        <div className="w-full md:w-[45%] flex flex-col pt-4 md:pt-2 order-1 md:order-2">
          <h3 className="text-2xl md:text-xl font-bold uppercase tracking-wider mb-5">Contact Us</h3>
          
          <form className="flex flex-col gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-white text-black px-4 py-2.5 rounded-[3px] focus:outline-none placeholder:text-gray-400 text-[14px]"
            />
            <input 
              type="text" 
              placeholder="Email Id / Phone number" 
              className="w-full bg-white text-black px-4 py-2.5 rounded-[3px] focus:outline-none placeholder:text-gray-400 text-[14px]"
            />
            <textarea 
              placeholder="For investment, inquiries or further information, please add a note here, and we'll be in touch promptly." 
              className="w-full bg-white text-black px-4 py-3 rounded-[3px] focus:outline-none placeholder:text-gray-400 text-[14px] h-24 resize-none leading-tight"
            ></textarea>
            
            <button 
              type="submit" 
              className="mt-2 w-fit bg-[#E33B42] hover:bg-red-700 transition-colors text-white font-semibold text-[14px] px-6 py-2.5 rounded flex items-center gap-2"
            >
              Get in touch with us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </button>
          </form>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-8 h-8 bg-[#E33B42] hover:bg-red-700 transition-colors flex items-center justify-center rounded-[3px]"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </footer>
  );
}
