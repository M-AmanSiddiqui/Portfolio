import React, { useState } from "react";
import { motion } from "framer-motion";
import { certificates } from "../constants";
import { styles } from "../styles";
import { RiShareBoxFill } from "react-icons/ri";

import { textVariant } from "../utils/motion";
function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showFullImage, setShowFullImage] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white p-10 flex flex-col items-center">
       <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
       Achievements
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
        Certifications showcasing my expertise
        </p>
      </motion.div>
      {/* Grid View */}
      {!selectedCertificate && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="relative bg-[#11132d] p-6 rounded-2xl shadow-xl border border-[#915EFF]/50 cursor-pointer 
                        transition-transform transform hover:scale-105 hover:rotate-2 group overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent  opacity-20 
                              group-hover:opacity-50 transition-opacity"></div>
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-white relative z-10">{cert.title}</h2>
              <p className="text-sm  text-[#915EFF] relative z-10">{cert.provider} - {cert.date}</p>
              <div className="absolute inset-0 rounded-2xl border-2 border-[#915EFF] opacity-10 
                              group-hover:opacity-30 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedCertificate && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="bg-[#11132d] p-8 rounded-lg shadow-lg text-center max-w-md relative" onClick={(e) => e.stopPropagation()}>
            
            {/* 🔍 Click to View Full Image */}
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full h-56 object-cover rounded-md mb-4 cursor-pointer"
              onClick={() => setShowFullImage(true)}
            />
            
            <h2 className="text-2xl font-semibold text-[#915EFF]">{selectedCertificate.title}</h2>
            <p className="text-white">{selectedCertificate.provider} - {selectedCertificate.date}</p>
            <p className="text-gray-300 mt-2">{selectedCertificate.description}</p>

           {/* ✅ View Credential Button */}
{/* ✅ Button sirf tabhi dikhai de jab link exist kare aur empty na ho */}
{selectedCertificate.link && selectedCertificate.link.trim() !== "" ? (
  <a
  href={selectedCertificate.link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-flex items-center gap-2 border-2 border-white px-4 py-2 rounded-lg text-white"
>
  View Credential <RiShareBoxFill />
</a>


) : (
  <p className="mt-4 text-gray-400">No Credential Available</p> // 🔥 Jab link na ho toh ye dikhaye
)}
      {/* ✅ Close Button (Now Below Credential Button) */}
            <button
              className="mt-4 bg-[#915EFF] px-4 py-2 rounded-lg text-white hover:bg-[#7a4ee0] block mx-auto"
              onClick={() => setSelectedCertificate(null)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}

      {/* ✅ Full Image Modal */}
      {showFullImage && selectedCertificate && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowFullImage(false)}
        >
          <img
            src={selectedCertificate.image}
            alt={selectedCertificate.title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
          />
        </motion.div>
      )}
    </div>
  );
}

export default Certificates;
