import React, { useState } from "react";
import SEO from "../../components/SEO";
import Footer from "../landing/home/components/Footer";

const CareerSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    console.log(123);
    alert("Started");
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
        "https://formsubmit.co/ajax/hptr056@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        },
      );

      const data = await response.json();

      if (data.success === "false" || data.success === false) {
        alert(
          "Formsubmit Message : " +
            (data.message || "Please check your email to activate the form"),
        );
      } else {
        setIsSuccess(true);
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-white min-h-screen flex flex-col ">
      <SEO
        title="Submit Application - Zitto Motors"
        description="Apply for a position at Zitto Motors."
        path="/career-submission"
      />

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
          <div className="mb-[10px] flex-col gap-2">
            <label className="text-[12px] text-gray-500">Full name</label>
            <input
              name="Name"
              type="text"
              placeholder="Example : Ravi Kumar"
              className="w-full border border-gray-200 rounded-[3px] px-4 py-2.5 text-[12px] outline-none focus:border-gray-400 placeholder:text-gray-400"
            />
          </div>
          
          <div className="mb-[10px] flex-col gap-2">
            <label className="text-[12px] text-gray-500">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Example : ravi@zitto.com"
              className="w-full border border-gray-200 rounded-[3px] px-4 py-2.5 text-[12px] outline-none focus:border-gray-400 placeholder:text-gray-400"
            />
          </div>
          <div className="mb-[10px] flex-col gap-2">
            <label className="text-[12px] text-gray-500">Phone number</label>
            <input
              name="phone"
              type="tel"
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
              name="file"
              required
              type="file"
              accept=".pdf,.docx"
              className="w-full text-[12px] text-gray-500 file:mr-3 file:py-1 file:px-3 file:rounded-[2px] file:border file:border-gray-300 file:text-[12px] file:bg-[#f8f9fa] hover:file:bg-[#e9ecef] cursor-pointer"
            />
          </div>
          <button
            type="submit"
            className="w-fit bg-[#1e293b] min-h-[59px] hover:bg-black text-white font-semibold text-[18px] px-[20px] py-3 rounded-[2px] transition-colors mt-2"
          >
            Submit Application
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CareerSubmission;
