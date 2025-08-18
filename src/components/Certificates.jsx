// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { achievements } from "../constants";
// import { styles } from "../styles";
// import { RiShareBoxFill } from "react-icons/ri";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";

// function Achievements() {
//   const [selectedCertificate, setSelectedCertificate] = useState(null);
//   const [showFullImage, setShowFullImage] = useState(false);

//   // ✅ Effect to handle scroll disable/enable
//   useEffect(() => {
//     if (selectedCertificate || showFullImage) {
//       document.body.style.overflow = "hidden"; // Disable scroll when modal is open
//     } else {
//       document.body.style.overflow = "auto"; // Enable scroll when modal is closed
//     }

//     return () => {
//       document.body.style.overflow = "auto"; // Reset scroll on unmount
//     };
//   }, [selectedCertificate, showFullImage]);

//   return (
//     <div className="min-h-screen bg-[#0a0a1a] text-white p-10 flex flex-col items-center">
//       <motion.div variants={textVariant()}>
//         <h2 className={`${styles.sectionHeadText} text-center`}>Achievements</h2>
//         <p className={`${styles.sectionSubText} text-center`}>Certifications showcasing my expertise</p>
//       </motion.div>

//       {/* Grid View */}
//       {!selectedCertificate && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10">
//           {achievements.map((cert, index) => (
//             <motion.div
//               key={index}
//               className="relative bg-[#11132d] p-6 rounded-2xl shadow-xl border border-[#915EFF]/50 cursor-pointer 
//                         transition-transform transform hover:scale-105 hover:rotate-2 group overflow-hidden"
//               whileHover={{ scale: 1.05, rotate: 1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setSelectedCertificate(cert)}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-transparent opacity-20 group-hover:opacity-50 transition-opacity"></div>
//               <img src={cert.image} alt={cert.title} className="w-full h-56 object-cover rounded-md mb-4" />
//               <h2 className="text-xl font-semibold text-white relative z-10">{cert.title}</h2>
//               <p className="text-sm text-[#915EFF] relative z-10 mt-2">{cert.provider} - {cert.date}</p>
//               <div className="absolute inset-0 rounded-2xl border-2 border-[#915EFF] opacity-10 group-hover:opacity-30 transition-opacity"></div>
//             </motion.div>
//           ))}
//         </div>
//       )}

//       {/* ✅ Modal */}
//       {selectedCertificate && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 mt-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setSelectedCertificate(null)}
//         >
//           <div className="bg-[#11132d] p-8 rounded-lg shadow-lg text-center max-w-md relative" onClick={(e) => e.stopPropagation()}>
//             {/* 🔍 Click to View Full Image */}
//             <img
//               src={selectedCertificate.image}
//               alt={selectedCertificate.title}
//               className="w-full h-56 object-cover rounded-md mb-4 cursor-pointer"
//               onClick={() => setShowFullImage(true)}
//             />

//             <h2 className="text-2xl font-semibold text-[#915EFF]">{selectedCertificate.title}</h2>
//             <p className="text-white">{selectedCertificate.provider} - {selectedCertificate.date}</p>
//             <p className="text-gray-300 mt-2">{selectedCertificate.description}</p>

//             {/* ✅ View Credential Button */}
//             {selectedCertificate.link && selectedCertificate.link.trim() !== "" ? (
//               <a
//                 href={selectedCertificate.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-4 inline-flex items-center gap-2 border-2 border-white px-4 py-2 rounded-lg text-white"
//               >
//                 View Credential <RiShareBoxFill />
//               </a>
//             ) : (
//               <p className="mt-4 text-gray-400">No Credential Available</p>
//             )}

//             {/* ✅ Close Button */}
//             <button
//   className="mt-4 z-50 bg-[#915EFF] px-4 py-2 rounded-lg text-white hover:bg-[#7a4ee0] block mx-auto pointer-events-auto"
//   onClick={() => setSelectedCertificate(null)}
// >
//   Close
// </button>

//           </div>
//         </motion.div>
//       )}

//       {/* ✅ Full Image Modal */}
//       {showFullImage && selectedCertificate && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setShowFullImage(false)}
//         >
//           <img src={selectedCertificate.image} alt={selectedCertificate.title} className="max-w-full max-h-full object-contain rounded-lg shadow-lg" />
//         </motion.div>
//       )}
//     </div>
//   );
// }

// export default SectionWrapper(Achievements, "achievements");
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { achievements } from "../constants";
import { styles } from "../styles";
import { RiShareBoxFill } from "react-icons/ri";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showFullImage, setShowFullImage] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    document.body.style.overflow =
      selectedCertificate || showFullImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCertificate, showFullImage]);

  const CertificateCard = ({ cert }) => (
    <motion.div
      className="relative bg-[#11132d] p-4 sm:p-6 rounded-2xl shadow-xl border border-[#915EFF]/50 cursor-pointer 
                 transition-transform transform hover:scale-105 hover:rotate-1 group overflow-hidden"
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelectedCertificate(cert)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent opacity-20 group-hover:opacity-50 transition-opacity"></div>
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-52 sm:h-56 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg sm:text-xl font-semibold text-white relative z-10">{cert.title}</h2>
      <p className="text-sm text-[#915EFF] relative z-10 mt-2">{cert.provider} - {cert.date}</p>
      <div className="absolute inset-0 rounded-2xl border-2 border-[#915EFF] opacity-10 group-hover:opacity-30 transition-opacity"></div>
    </motion.div>
  );

  return (
 <div className="bg-[#0a0a1a] text-white px-4 sm:px-6 md:px-10 py-6 sm:py-10 flex flex-col items-center">


      {/* Heading & Subtext */}
      <motion.div variants={textVariant()} className="w-full max-w-6xl">
        <h2 className={`${styles.sectionHeadText} text-center text-2xl sm:text-3xl md:text-4xl`}>
          Achievements
        </h2>
        <p className={`${styles.sectionSubText} text-center text-sm sm:text-base mt-4`}>
          Certifications showcasing my expertise
        </p>
      </motion.div>

      {/* Desktop Grid */}
      <div className="mt-10 hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {achievements.map((cert, index) => (
          <CertificateCard key={index} cert={cert} />
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="mt-4 md:hidden w-full max-w-md relative">
        {/* Count / Fraction */}
        <div className={`${styles.sectionSubText} text-center font-semibold mb-4`}>
          {currentSlide} / {achievements.length}
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2000}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        >
          {achievements.map((cert, index) => (
            <SwiperSlide key={index}>
              <CertificateCard cert={cert} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center px-4 py-10 z-40 overflow-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="bg-[#11132d] p-6 sm:p-8 rounded-lg shadow-lg text-center w-full max-w-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full h-auto max-h-60 object-cover rounded-md mb-4 cursor-pointer"
              onClick={() => setShowFullImage(true)}
            />

            <h2 className="text-xl sm:text-2xl font-semibold text-[#915EFF]">
              {selectedCertificate.title}
            </h2>
            <p className="text-white text-sm sm:text-base">
              {selectedCertificate.provider} - {selectedCertificate.date}
            </p>
            <p className="text-gray-300 text-sm mt-2">{selectedCertificate.description}</p>

            <div className="mt-6 space-y-3 w-full">
              {selectedCertificate.link?.trim() ? (
                <a
                  href={selectedCertificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border-2 border-white px-4 py-2 rounded-lg text-white hover:bg-white hover:text-[#11132d] transition text-center"
                >
                  View Credential <RiShareBoxFill className="inline ml-1" />
                </a>
              ) : (
                <p className="text-gray-400">No Credential Available</p>
              )}

              <button
                className="block w-full bg-[#915EFF] px-4 py-2 rounded-lg text-white hover:bg-[#7a4ee0] transition"
                onClick={() => setSelectedCertificate(null)}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Full Image Modal */}
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

export default SectionWrapper(Achievements, "achievements");
