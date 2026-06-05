import React, { useState } from 'react'
import SEO from '../../components/SEO'
import Footer from '../landing/home/components/Footer'
import { Home, Briefcase, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'

const jobs = [
  {
    id: 1,
    jobId: 'AUTOMOTIVE_DESIGN_INTERN',
    title: "Automotive Design Intern",
    location: "Remote",
    type: "Internship",
    shortDesc: "Support the development of performance electric motorcycles through innovative and production-ready design concepts.",
    highlight: "Important: This is NOT an engineering position. This role is strictly for Automotive / Transportation / Industrial Design students or graduates.",
    openPositions: "Internship - Multiple",
    jobSummary: "Collaborate with designers and engineers to create compelling electric motorcycle designs balancing aesthetics, aerodynamics, and functionality.",
    responsibilities: [
      "Create sketches, renderings, and digital models",
      "Collaborate with engineering and aerodynamics teams",
      "Develop detailed CAD surface models",
      "Research design trends and technologies",
      "Prepare presentations for stakeholder reviews"
    ],
    qualifications: [
      "Degree in Transportation / Industrial Design",
      "Strong creative and artistic skills",
      "Proficiency in Alias, Rhino, Blender, Adobe Suite",
      "Understanding of surface modeling"
    ],
    confirmations: [
      "I am a Transportation / Automotive / Industrial Design student or recent graduate",
      "I understand this is a DESIGN role and not an engineering position",
      "I have a portfolio containing sketches, renderings, or clay/digital modeling and not using CV/Other irrelevant document to fill the portfolio upload option.",
      "I understand that applications without a portfolio will be rejected and my profile might get permanently barred from applying to any other position in the company."
    ]
  },
  {
    id: 2,
    jobId: 'EMBEDDED_ELECTRONICS_INTERN',
    title: "Embedded Systems & Power Electronics Intern",
    location: "Onsite - Bangalore",
    type: "Internship",
    shortDesc: "Work on embedded firmware and EV electronic systems powering next-generation electric motorcycles.",
    highlight: "This is an onsite-only position in Bangalore. Do not apply if you are not currently in Bangalore.",
    openPositions: null,
    jobSummary: null,
    responsibilities: [
      "Assist in circuit design and PCB layout",
      "Support prototyping, validation, and system testing",
      "Develop embedded firmware in C/C++",
      "Work on motor controllers, BMS, and EV subsystems",
      "Troubleshoot electronic and firmware issues",
      "Participate in debugging and performance optimization",
      "Develop and debug communication protocols with strong emphasis on CAN",
      "Document design processes and validation results"
    ],
    qualifications: [
      "Pursuing Electrical / Electronics / Embedded Systems Engineering",
      "Strong fundamentals in digital and analog circuits",
      "Proficiency in C/C++ for embedded systems",
      "Knowledge of microcontrollers and RTOS concepts",
      "Strong working knowledge of CAN is mandatory",
      "Experience with PCB design tools is a plus",
      "Understanding of EV systems is advantageous"
    ],
    confirmations: []
  },
  {
    id: 3,
    jobId: 'AI_INTERN',
    title: "Artificial Intelligence (AI) Intern – EV Powertrain Systems",
    location: "Onsite - Bangalore",
    type: "Internship",
    shortDesc: "Integrate advanced Machine Learning algorithms and edge AI intelligence into core EV electronics like the BMS and MCU.",
    highlight: "This is a hybrid position.",
    openPositions: null,
    jobSummary: "Work at the intersection of AI and embedded software to deploy intelligent predictive models directly onto our electric motorcycle's electronic control units.",
    responsibilities: [
      "Develop and deploy TinyML / edge ML models tailored for resource-constrained microcontrollers (MCU)",
      "Implement AI algorithms within the Battery Management System (BMS) for real-time State of Charge (SoC), State of Health (SoH) tracking, and predictive thermal management",
      "Optimize motor control unit (MCU) efficiency and torque profiles using real-time predictive modeling",
      "Collaborate with the embedded electronics team to map sensor data pipelines to AI inputs",
      "Simulate, test, and validate model behavior against physical motorcycle runtime constraints"
    ],
    qualifications: [
      "Fresher or Pursuing Computer Science / Electronics / Robotics Engineering or related technical field with a heavy focus on Machine Learning. This is an internship position, do not apply if you are already employed.",
      "Hands-on experience with TinyML frameworks (TensorFlow Lite for Microcontrollers, Edge Impulse, etc.)",
      "Strong mathematical and programming foundations in Python and embedded C/C++",
      "Familiarity with processing time-series data from sensors (current, voltage, temperature, speed)",
      "Basic understanding of EV powertrain architecture, BMS logic, and MCU behaviors is highly preferred"
    ],
    confirmations: [
      "I am currently a fresher or student and not holding full-time active employment.",
      "I understand that my resume/portfolio submission must be strictly in PDF format.",
      "I acknowledge that any application containing non-PDF links or formats (.doc, .png, .zip, etc.) will be automatically rejected."
    ]
  }
];

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-[0_0px_20px_rgba(0,0,0,0.06)] border border-gray-100 p-8 relative group hover:shadow-[0_0px_25px_rgba(0,0,0,0.1)] transition-shadow">
      <h3 className="text-[#1e293b] text-[20px] font-bold mb-4 pr-16">{job.title}</h3>
      <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
         <div className="flex items-center gap-2"><Home size={16} /> <span className="text-[13px] font-medium">{job.location}</span></div>
         <div className="flex items-center gap-2"><Briefcase size={16} /> <span className="text-[13px] font-medium">{job.type}</span></div>
      </div>
      <p className="text-[#475569] text-[14px] mb-5 leading-relaxed">{job.shortDesc}</p>
      <p className="text-[#E33B42] text-[13px] font-semibold">{job.highlight}</p>
      
      <button 
        onClick={() => setExpanded(!expanded)}
        className="absolute top-8 right-8 w-11 h-11 bg-[#d4c3b3] hover:bg-[#c4b3a3] flex items-center justify-center rounded-[2px] transition-colors"
        aria-expanded={expanded}
        aria-label={expanded ? "Collapse details" : "Expand details"}
      >
        {expanded ? <Minus size={26} className="text-white" /> : <Plus size={26} className="text-white" />}
      </button>

      {expanded && (
        <div className="mt-8 pt-8 border-t border-gray-100 animate-in fade-in duration-300">
          {job.openPositions && (
            <div className="mb-6">
              <p className="text-[13px] text-[#475569]"><span className="font-semibold text-[#1e293b]">Open Positions:</span> {job.openPositions}</p>
            </div>
          )}

          {job.jobSummary && (
            <div className="mb-6">
              <h4 className="text-[14px] font-semibold text-[#1e293b] mb-2">Job Summary:</h4>
              <p className="text-[13px] text-[#475569] leading-relaxed">{job.jobSummary}</p>
            </div>
          )}

          {job.responsibilities && job.responsibilities.length > 0 && (
            <div className="mb-6">
              <h4 className="text-[14px] font-semibold text-[#1e293b] mb-3">Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-2">
                {job.responsibilities.map((req, idx) => (
                  <li key={idx} className="text-[13px] text-[#475569] pl-1">{req}</li>
                ))}
              </ul>
            </div>
          )}

          {job.qualifications && job.qualifications.length > 0 && (
            <div className="mb-6">
              <h4 className="text-[14px] font-semibold text-[#1e293b] mb-3">Qualifications:</h4>
              <ul className="list-disc pl-5 space-y-2">
                {job.qualifications.map((qual, idx) => (
                  <li key={idx} className="text-[13px] text-[#475569] pl-1">{qual}</li>
                ))}
              </ul>
            </div>
          )}

          {job.confirmations && job.confirmations.length > 0 && (
            <div className="mb-8 pt-4 border-t border-gray-100">
              <h4 className="text-[14px] font-semibold text-[#1e293b] mb-4">Before applying please confirm:</h4>
              <div className="space-y-3">
                {job.confirmations.map((conf, idx) => (
                  <label key={idx} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#E33B42] focus:ring-[#E33B42]" />
                    <span className="text-[13px] text-[#475569] leading-snug group-hover:text-[#1e293b] transition-colors">{conf}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <Link to={`/career-submission?job=${job.jobId}`} className="inline-block bg-[#8e959b] hover:bg-[#7a8187] text-white px-6 py-2.5 rounded-[3px] text-[14px] font-medium transition-colors">
            Apply Now &rarr;
          </Link>
        </div>
      )}
    </div>
  );
};

const CareersPage = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <SEO 
        title="Careers at Zitto Motors" 
        description="Join the Zitto Motors team. We are hiring passionate engineers and designers to build the future of motorcycles." 
        path="/careers" 
      />
      {/* Hero Section */}
      <div className="relative w-full h-[65vh] flex flex-col items-center justify-center mt-[70px]">
         <div 
           className="absolute inset-0 bg-cover bg-center" 
           style={{ backgroundImage: "url('/Careers%20Page/Careers%20Hero%20image.png')" }}
         >
            <div className="absolute inset-0 bg-black/60"></div>
         </div>
         
         <div className="relative z-10 w-full px-4 flex flex-col items-center pt-10">
            <h1 className="text-white text-6xl md:text-[80px] font-bold tracking-wide mb-12">CAREER</h1>
            
            <div className="w-full max-w-2xl flex flex-col md:flex-row gap-3">
              <input 
                type="text" 
                placeholder="Search for a job (Eg. 'Mechanical Intern')" 
                className="flex-1 bg-transparent border border-white/70 text-white placeholder:text-gray-300 px-5 py-3.5 rounded-[3px] outline-none focus:border-white transition-colors text-[15px]"
              />
              <button className="bg-white text-black px-10 py-3.5 rounded-[3px] font-medium hover:bg-gray-100 transition-colors text-[15px]">
                Search
              </button>
            </div>
         </div>
      </div>

      {/* Jobs Listing Section */}
      <div className="w-full bg-white py-20 px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-6">
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CareersPage
