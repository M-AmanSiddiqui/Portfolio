import React, { useState } from "react";
import { motion } from "framer-motion";
import { certificates } from "../constants";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-[#915EFF]">My Achievements</h1>
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

      {selectedCertificate && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <motion.div
            className="bg-[#11132d] p-6 rounded-lg shadow-2xl text-center max-w-md relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="absolute inset-0 rounded-lg border-2 border-[#915EFF] opacity-20"></div>
            <img src={selectedCertificate.image} alt={selectedCertificate.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-bold text-[#915EFF]">{selectedCertificate.title}</h2>
            <p className="text-sm text-white mb-4">{selectedCertificate.provider} - {selectedCertificate.date}</p>
            <p className="text-white">{selectedCertificate.description}</p>
            {selectedCertificate.link ? (
              <a 
                href={selectedCertificate.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mt-4 text-[#915EFF] underline hover:text-white transition-colors"
              >
                View Credential
              </a>
            ) : (
              <p className="text-gray-400 mt-4">No credential link available</p>
            )}
            <button 
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition" 
              onClick={() => setSelectedCertificate(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
