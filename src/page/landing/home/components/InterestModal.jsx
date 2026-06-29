import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { MailPlus, X } from "lucide-react";

const bikes = [
  {
    title: "ZITTO CRUISER",
    image: "/ZCR Page/ZCR Section 5 Image 1.png",
  },
  {
    title: "Zitto Naked Sport",
    image: "/ZCR Page/ZCR Section 5 Image 2.png",
  },
  {
    title: "Zitto Supersport",
    image: "/ZCR Page/ZCR Section 5 Image 3.png",
  },
  {
    title: "Zitto Adventure Tourer",
    image: "/ZCR Page/ZCR Section 5 Image 4.png",
  },
];

export default function InterestModal({ isOpen, onClose }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleScroll = (e) => {
    const slideWidth = e.target.clientWidth;
    const index = Math.round(e.target.scrollLeft / slideWidth);
    setActiveSlide(index);
    console.log(activeSlide)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to a standard JSON object
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

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
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting the form. Ensure your Google Script URL is correct.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999]  overflow-y-auto">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative   flex      bg-[linear-gradient(173deg,#000_0%,#000_35.5%,#D4373D_36%)]
 min-h-screen items-center justify-center p-[10px] "
      >
        <button
          onClick={onClose}
          className="fixed right-4 top-4 lg:right-[5%] lg:top-8 z-50 rounded-full bg-[#D4373D] p-1 font-bold text-black"
        >
          <X size={24} />
        </button>

        <div
          className="
        w-full
        
        overflow-hidden
        rounded-lg
      "
        >
          <div className="py-8  lg:py-12">
            <h2 className="saira text-center  lg:text-[42px] text-[20px] font-bold text-white/80">
              I AM INTERESTED
            </h2>

            <p className="lg:px-[300px] px-[20px] text-center dm-sans md:mt-6 mb-[20px] max-w-9xl md:text-left text-[8px] lg:text-[12px] font-normal  text-white">
              Hold your horses! We’re not hitting the pre-booking pedal just
              yet. You can make a booking after we let you know exactly what our
              machines can do, when it is hitting the streets, and how much it
              will cost you. Right now, just rev up the interest by registering
              for free, and we will keep you in the loop with all the juicy
              details as they unfold!
            </p>

            <div className=" w-full md:max-w-[1140px]  mx-auto grid  lg:grid-cols-[1fr_auto_1fr]">
              {/* Mobile Slider */}
              <div className="lg:hidden w-full overflow-auto">
                <div
                  ref={sliderRef}
                  className="flex overflow-x-auto  snap-x snap-mandatory scrollbar-hide"
                  onScroll={handleScroll}
                >
                  {bikes.map((bike, index) => (
                    <div
                      key={index}
                      className="w-full   shrink-0 snap-start px-2"
                    >
                      <div
                        className="rounded h-[200px] w-[260px]  flex items-end justify-center p-[30px] text-white saira font-semibold text-center"
                        style={{
                          backgroundImage: `url('${bike.image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <p className="pt-[180 pb-[20px]">{bike.title}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dots */}
                <div className="mt-4 flex justify-center gap-2">
                  {bikes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        sliderRef.current?.scrollTo({
                          left: sliderRef.current.offsetWidth * index,
                          behavior: "smooth",
                        });
                      }}
                      className={`h-2 w-2  rounded-full transition-all ${
                        activeSlide === index ? "bg-black" : "bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
              {/* LEFT */}
              <div className="hidden md:flex flex-col my-auto   pr-[20px] uppercase">
                <div className="flex max-w-[1140px] max-w-[1140px]">
                  <div
                    className="rounded mr-[11px] relative w-[50%] text-white saira font-semibold text-center  h-max bg-black   "
                    style={{
                      backgroundImage: `url('/ZCR Page/ZCR Section 5 Image 1.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  >
                    {/* <img src="/ZCR Page/ZCR Section 5 Image 1.png" alt="" className=""/> */}
                    <p className=" bottom-2  pt-[120px] pb-[20px] ">
                      {" "}
                      ZITTO CRUISER
                    </p>
                  </div>
                  <div
                    className="rounded saira  mr-[11px] w-[50%] font-semibold relative text-center text-white bg-black  "
                    style={{
                      backgroundImage: `url('/ZCR Page/ZCR Section 5 Image 2.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  >
                    {/* <img src="/ZCR Page/ZCR Section 5 Image 1.png" alt="" className=""/> */}
                    <p className=" bottom-2 w-full pt-[120px] pb-[20px]">
                      {" "}
                      Zitto Naked Sport
                    </p>
                  </div>
                </div>
                <div className=" flex max-w-[1140px] pt-[20px]">
                  <div
                    className="rounrounded w-[50%] mr-[11px] saira font-semibold relative text-center text-white bg-black  "
                    style={{
                      backgroundImage: `url('/ZCR Page/ZCR Section 5 Image 3.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  >
                    {/* <img src="/ZCR Page/ZCR Section 5 Image 1.png" alt="" className=""/> */}
                    <p className="  bottom-2 w-full pt-[120px] pb-[20px] ">
                      {" "}
                      Zitto Supersport
                    </p>
                  </div>
                  <div
                    className="rounded w-[50%] saira mr-[11px] font-semibold relative text-center text-white bg-black  "
                    style={{
                      backgroundImage: `url('/ZCR Page/ZCR Section 5 Image 4.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  >
                    {/* <img src="/ZCR Page/ZCR Section 5 Image 1.png" alt="" className=""/> */}
                    <p className=" bottom-2 w-full pt-[120px] pb-[20px]">
                      {" "}
                      Zitto Adventure Tourer
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-[1px] bg-white" />

              {/* RIGHT */}
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center px-4 mt-8 md:mt-0">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-bold saira mb-2">Registered Successfully!</h3>
                  <p className="text-[#9F9F9F] text-sm dm-sans">Thank you for your interest. We will keep you in the loop with all the updates.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="min-w-0 gap-2 w-full mt-6 md:mt-0 px-[5px] flex flex-col md:pl-[20px] text-[#9F9F9F]">
                  <div className="flex gap-2 md:gap-2 md:flex-col">
                  <input
                    name="name"
                    required
                    className="w-full text-[12px] leading-0 m-0 bg-white rounded p-3 text-black"
                    placeholder="Name"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-[12px] leading-0 m-0 bg-white rounded p-3 text-black"
                    placeholder="Email ID"
                  />
                  </div>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full text-[12px] leading-0 m-0 bg-white rounded p-3 text-black"
                    placeholder="Phone Number"
                  />
                  <div className="m-0 leading-0">
                    <p className="text-[10px] leading-[20px] text-[#1F2A30]">
                      Choose your products
                    </p>
                    <select
                      name="product"
                      required
                      className="w-full appearance-auto outline-0 text-[12px] bg-white rounded p-3 text-black"
                    >
                      <option value="">Select a Product</option>
                      <option value="Zitto Cruiser">Zitto Cruiser</option>
                      <option value="Zitto Naked Sport">Zitto Naked Sport</option>
                      <option value="Zitto Supersport">Zitto Supersport</option>
                      <option value="Zitto Adventure Tourer">Zitto Adventure Tourer</option>
                    </select>
                  </div>
                  <div className="m-0 leading-0">
                    <p className="text-[10px] leading-[20px] text-[#1F2A30]">
                      Select Country
                    </p>
                    <input
                      name="country"
                      required
                      className="w-full text-[12px] leading-0 m-0 bg-white rounded p-3 text-black"
                      placeholder="Country"
                    />
                  </div>
                  <div className="m-0 leading-0">
                    <p className="text-[10px] leading-[20px] text-[#1F2A30]">
                      States
                    </p>
                    <input
                      name="state"
                      required
                      className="w-full text-[12px] leading-0 m-0 bg-white rounded p-3 text-black"
                      placeholder="State"
                    />
                  </div>
                  <div className="text-[12px] leading-[20px] dm-sans text-[#1F2A30] ">
                    <input type="checkbox" required /> By checking this box, you're
                    agreeing to receive updates from Zitto via email /
                    WhatsApp.You can opt out at any time by sending us a message
                  </div> 

                   <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`ms-auto rounded flex w-max min-h-[40px] items-center px-[15px] text-white bg-[#202C32] text-[16px] md:text-[20px] dm-sans font-semibold ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black transition-colors'}`}
                  >
                    {isSubmitting ? 'Registering...' : 'Register Interest'}
                    {!isSubmitting && (
                      <span className="ml-[25px] flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 29 29" fill="none">
                          <path d="M14.4974 15.709L4.83073 9.66732V21.7507H15.7057V24.1673H4.83073C4.16615 24.1673 3.59722 23.9307 3.12396 23.4574C2.65069 22.9842 2.41406 22.4152 2.41406 21.7507V7.25065C2.41406 6.58607 2.65069 6.01714 3.12396 5.54388C3.59722 5.07062 4.16615 4.83398 4.83073 4.83398H24.1641C24.8286 4.83398 25.3976 5.07062 25.8708 5.54388C26.3441 6.01714 26.5807 6.58607 26.5807 7.25065V15.709H24.1641V9.66732L14.4974 15.709ZM14.4974 13.2923L24.1641 7.25065H4.83073L14.4974 13.2923ZM22.9557 27.7923L21.2641 26.1007L23.1672 24.1673H18.1224V21.7507H23.1672L21.2339 19.8173L22.9557 18.1257L27.7891 22.959L22.9557 27.7923ZM4.83073 9.66732V22.959V15.709V15.7996V7.25065V9.66732Z" fill="white"></path>
                        </svg>
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,

    document.body,
  );
}
