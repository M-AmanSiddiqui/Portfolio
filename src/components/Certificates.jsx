import React, { useState } from "react";
import { motion } from "framer-motion";
import { certificates } from "../constants";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-[#915EFF]">My Achievements</h1>

      {/* Grid Tab Dikhe Jab Modal Na Ho */}
      {!selectedCertificate && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="relative bg-[#11132d] p-6 rounded-2xl shadow-xl border border-[#915EFF]/50 cursor-pointer 
                        transition-transform transform hover:scale-105 hover:rotate-2 group overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#915EFF] opacity-20 
                              group-hover:opacity-50 transition-opacity"></div>
              <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold text-[#915EFF] relative z-10">{cert.title}</h2>
              <p className="text-sm text-white relative z-10">{cert.provider} - {cert.date}</p>
              <div className="absolute inset-0 rounded-2xl border-2 border-[#915EFF] opacity-10 
                              group-hover:opacity-30 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal Jab Certificate Select Ho */}
      {selectedCertificate && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCertificate(null)} // Modal click pe close ho jaye
        >
          <div className="bg-[#11132d] p-8 rounded-lg shadow-lg text-center max-w-md" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCertificate.image} alt={selectedCertificate.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-[#915EFF]">{selectedCertificate.title}</h2>
            <p className="text-white">{selectedCertificate.provider} - {selectedCertificate.date}</p>
            <p className="text-gray-300 mt-2">{selectedCertificate.description}</p>

            {/* Close Button */}
            <button
              className="mt-4 bg-[#915EFF] px-4 py-2 rounded-lg text-white hover:bg-[#7a4ee0]"
              onClick={() => setSelectedCertificate(null)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Certificates;
