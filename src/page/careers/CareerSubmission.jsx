import React from 'react'
import Footer from '../landing/home/components/Footer'

const CareerSubmission = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col pt-[80px] md:pt-[120px]">
      
      <div className="flex-grow w-full max-w-[800px] mx-auto px-6 py-16 md:py-24">
        <h1 className="text-[#1e293b] text-[20px] md:text-[22px] font-medium mb-1">Submit your application</h1>
        <p className="text-[#64748b] text-[13px] mb-10">Please fill all fields</p>

        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-[13px] text-gray-500">Full name</label>
            <input 
              type="text" 
              placeholder="Example : Ravi Kumar" 
              className="w-full border border-gray-200 rounded-[3px] px-4 py-2.5 text-[14px] outline-none focus:border-gray-400 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13px] text-gray-500">Email</label>
            <input 
              type="email" 
              placeholder="Example : ravi@zitto.com" 
              className="w-full border border-gray-200 rounded-[3px] px-4 py-2.5 text-[14px] outline-none focus:border-gray-400 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13px] text-gray-500">Phone number</label>
            <input 
              type="tel" 
              placeholder="Example : +91 9876575420" 
              className="w-full border border-gray-200 rounded-[3px] px-4 py-2.5 text-[14px] outline-none focus:border-gray-400 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2 mb-2">
            <label className="text-[13px] text-gray-500">Resume</label>
            <input 
              type="file" 
              className="w-full text-[13px] text-gray-500 file:mr-3 file:py-1 file:px-3 file:rounded-[2px] file:border file:border-gray-300 file:text-[13px] file:bg-[#f8f9fa] hover:file:bg-[#e9ecef] cursor-pointer"
            />
          </div>

          <button 
            type="submit" 
            className="w-fit bg-[#1e293b] hover:bg-black text-white font-semibold text-[14px] px-6 py-3 rounded-[2px] transition-colors mt-2"
          >
            Submit Application
          </button>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default CareerSubmission
