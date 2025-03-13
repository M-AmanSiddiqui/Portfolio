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
            className="relative bg-[#11132d] p-4 rounded-2xl shadow-lg border border-[#915EFF]/50 cursor-pointer 
                      transition-transform transform hover:scale-105 group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCertificate(cert)}
          >
            {/* Certificate Image */}
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="w-full h-48 object-cover rounded-lg border border-[#915EFF]/40 shadow-lg"
            />

            {/* Title & Provider */}
            <h2 className="text-lg font-semibold text-[#915EFF] mt-3">{cert.title}</h2>
            <p className="text-sm text-gray-300">{cert.provider} - {cert.date}</p>
          </motion.div>
        ))}
      </div>

      {/* Certificate Popup */}
      {selectedCertificate && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <motion.div
            className="bg-[#11132d] p-6 rounded-lg shadow-2xl text-center max-w-lg relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="absolute inset-0 rounded-lg border-2 border-[#915EFF] opacity-20"></div>

            {/* Certificate Full Image */}
            <img 
              src={selectedCertificate.image} 
              alt={selectedCertificate.title} 
              className="w-full h-64 object-contain rounded-lg border border-[#915EFF]/40 shadow-lg"
            />

            <h2 className="text-2xl font-bold text-[#915EFF] mt-4">{selectedCertificate.title}</h2>
            <p className="text-sm text-white mb-4">{selectedCertificate.provider} - {selectedCertificate.date}</p>
            <p className="text-gray-300">{selectedCertificate.description}</p>

            {/* View Credential Button */}
            {selectedCertificate.link ? (
              <a 
                href={selectedCertificate.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mt-4 px-4 py-2 bg-[#915EFF] text-white rounded-lg hover:bg-white hover:text-[#915EFF] transition"
              >
                View Credential
              </a>
            ) : (
              <p className="mt-4 text-gray-400">Credential not available</p>
            )}

            {/* Close Button */}
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
