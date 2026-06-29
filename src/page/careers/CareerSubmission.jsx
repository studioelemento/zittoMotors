import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/SEO";
import Footer from "../landing/home/components/Footer";

const CareerSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const position = queryParams.get("job") || "General Application";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const fileInput = form.querySelector('input[name="file"]');

    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Please upload your resume");
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/Info@zittomotors.com",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        },
      );

      if (response.ok) {
        setIsSuccess(true);
        form.reset(); // clear the form
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      <SEO
        title="Submit Application - Zitto Motors"
        description="Apply for a position at Zitto Motors."
        path="/career-submission"
      />

      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center mx-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Successfully Submitted!</h2>
            <p className="text-gray-600 mb-6">Your application has been received. Our team will contact you Soon.</p>
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-[#1e293b] hover:bg-black text-white px-6 py-2 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex-grow w-full dm-sans max-w-[1140px] mx-auto p-[30px] py-[75px] md:py-[85px]">
        <h1 className="text-[#1e293b] text-[20px] md:text-[20px] font-normal mb-[20px]">
          Submit your application
        </h1>
        <p className="text-[#202C32] text-[12px] mb-[20px]">
          Please fill all fields
        </p>

        <form
          className=" flex-col gap-6"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="Position" value={position} />
          <input type="hidden" name="_subject" value={`New Job Application: ${position}`} />
          <div className="mb-[10px] flex-col gap-2">
            <label className="text-[12px] text-gray-500">Full name</label>
            <input
              name="Name"
              type="text"
              required
              placeholder="Example : Ravi Kumar"
              className="w-full border border-gray-200 rounded-[3px] px-4 py-2.5 text-[12px] outline-none focus:border-gray-400 placeholder:text-gray-400"
            />
          </div>
          
          <div className="mb-[10px] flex-col gap-2">
            <label className="text-[12px] text-gray-500">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="Example : ravi@zitto.com"
              className="w-full border border-gray-200 rounded-[3px] px-4 py-2.5 text-[12px] outline-none focus:border-gray-400 placeholder:text-gray-400"
            />
          </div>
          <div className="mb-[10px] flex-col gap-2">
            <label className="text-[12px] text-gray-500">Phone number</label>
            <input
              name="phone"
              type="tel"
              required
              placeholder="Example : +91 9876575420"
              className="w-full border border-gray-200 rounded-[3px] px-4 py-2.5 text-[12px] outline-none focus:border-gray-400 placeholder:text-gray-400"
            />
          </div>
          <div className="mb-[10px] flex-col gap-2 mb-2">
            <label className="text-[12px] text-gray-500">Resume</label>
            <input
              name="file"
              required
              type="file"
              accept=".pdf,.docx"
              className="w-full text-[12px] text-gray-500 file:mr-3 file:py-1 file:px-3 file:rounded-[2px] file:border file:border-gray-300 file:text-[12px] file:bg-[#f8f9fa] hover:file:bg-[#e9ecef] cursor-pointer"
            />
          </div>

                <div className="mb-[10px] flex-col gap-2 mb-2">
            <label className="text-[12px] text-gray-500">Portfolio (Attaching any documents other than your portfolio of renders and sketches will be considered immediate rejection, This is not an engineering position)
</label>
            <input
              name="portfolio"
              type="file"
              accept=".pdf,.docx"
              className="w-full text-[12px] text-gray-500 file:mr-3 file:py-1 file:px-3 file:rounded-[2px] file:border file:border-gray-300 file:text-[12px] file:bg-[#f8f9fa] hover:file:bg-[#e9ecef] cursor-pointer"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-fit min-h-[59px] text-white font-semibold text-[18px] px-[20px] py-3 rounded-[2px] transition-colors mt-2 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1e293b] hover:bg-black'}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CareerSubmission;
