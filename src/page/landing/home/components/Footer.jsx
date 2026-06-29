import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    
    // Add a flag so the Google Sheet knows this is from the Contact form
    data.formType = "Contact Us";

    try {
      // CLIENT INSTRUCTION: Replace this URL with the Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxPwfbQXHNjBdI49iQ6JGkGtc7koSGBMLTUAi4naXM5Bpz4J4IVeGNQsj0eY7gOOorE/exec";
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#202c32] text-white pb-[50px] w-full overflow-hidden">
      {/* Red Top Bar with diagonal clip */}
      <div className="relative top-0 left-0 h-[48px] bg-[#D4373D] w-full md:w-[48%] z-10 flex items-center justify-center md:justify-start md:[clip-path:polygon(0_0,100%_0,calc(100%-100px)_100%,0_100%)]">
        <ul className="flex items-center dm-sans  font-semibold md:text-[20px] md:pl-[100px] ">
          <li>
                      <HashLink
                        smooth
                        to="/#about"
                        className="transition flex justify-center  hover:text-gray-300"
                      >
                        About
                      </HashLink>
                    </li>
          <li>
            <Link
              to="/zcr"
              className="hover:text-gray-200 transition-colors px-[20px] py-[13px]"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className="hover:text-gray-200 transition-colors px-[20px] py-[13px]"
            >
              Careers
            </Link>
          </li>
        </ul>
      </div>

      {/* Two-column body */}
      <div className="w-full md:px-[134px] p-[30px] md:p-0  flex flex-col md:flex-row justify-between gap-8">
        {/* LEFT — Logo, socials, legal */}
        <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1 pl-0   pt-[40px]">
          {/* Logo image */}
          <div className="mb-">
            <img
              src="/Logo/logoWithText.png"
              alt="Zitto"
              className=" w-[18%] object-contain object-left"
            />
          </div>

          <p className="text-white text-[15px] font-semimedium tracking-wide mb-7">
            For the Enthusiast.
          </p>

          {/* Socials */}
          <div className="flex items-center w-full gap-3 mb-5 ">
            <span className="text-[16px] font-semimedium mr-1 text-nowrap">
              Find us at /
            </span>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/zittomotors/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300  max-w-[28px] max-h-[28px]  transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/zittomotors/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300   max-w-[28px] max-h-[28px] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@ZittoEV"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300  max-w-[28px] max-h-[28px]  transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>
            {/* X / Twitter */}
            <a
              href="https://x.com/zittomotors"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300  max-w-[28px] max-h-[28px]  transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/zittomotors/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300  max-w-[28px] max-h-[28px]  transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>

          {/* Legal */}
          <p className="text-[12px] text-gray-300 mb-2">
            Copyright Zitto Motors Pvt Ltd © {new Date().getFullYear()}
          </p>
          <p className="font-sans font-weight-300 text-[10px] text-gray-300 leading-[1.4] max-w-[800px] ">
            Disclaimer: The images of motorcycles shown are for illustrative
            purposes only. Actual vehicles may vary in appearance, features, and
            specifications. Please refer to the specific model details or
            contact us for accurate and up-to-date information on our products.
            All materials presented, including images of motorcycles, are
            protected by copyright.
          </p>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="w-full md:w-1/2 flex flex-col order-1 md:order-2  md:pl-[150px]">
          <h3 className="text-[28px] saira font-bold uppercase  mb-[20px]">
            Contact Us
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-[#989898] gap-2.5 w-full"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="text"
              placeholder="Name"
              name='name'
              required
              className="w-full bg-white text-black px-3 py-2.5 rounded-[2px] focus:outline-none placeholder:text-[#989898] text-[12px] md:text-[16px]"
            />
            <input
              type="text"
              name='email'
              required
              placeholder="Email Id / Phone number"
              className="w-full bg-white text-[12px] md:text-[16px] text-black px-3 py-2.5 rounded-[2px] focus:outline-none placeholder:text-[#989898] "
            />
            <textarea
              name='message'
              required
              rows="4"
              placeholder="For investment, inquiries or further information, please add a note here, and we'll be in touch promptly."
              className="w-full bg-white text-black px-3 py-2.5 rounded-[2px] focus:outline-none placeholder:text-[#989898] text-[12px] md:text-[16px] resize-none leading-snug"
            ></textarea>

            <button
              disabled={isSubmitting}
              type="submit"
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
              className="mt-1 w-fit bg-[#D4373D] dm-sans leading-none hover:bg-red-700 transition-colors text-white font-semibold text-[16px] md:text-[20px] ps-[15px] pe-[20px] py-[10px] rounded-[5px] flex items-center gap-2 "
            >
              {isSubmitting ? 'Sending...' : 'Get in touch with us'}
              {!isSubmitting && (
                <span className="ml-[26px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
              )}
            </button>
            {isSuccess && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-[5px] flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h4 className="text-green-800 font-semibold text-[16px] m-0 leading-tight">Message sent successfully!</h4>
                  <p className="text-green-600 text-[13px] mt-1 m-0">Thank you for getting in touch. We will reply to you promptly.</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 w-8 h-8 bg-[#E33B42] hover:bg-red-700 transition-colors flex items-center justify-center rounded-[3px]"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </footer>
  );
}
