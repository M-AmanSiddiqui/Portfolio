// import { useState } from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { My_Cv } from "../assets/My CV/Muhammad Aman CV-2.pdf";

// const Hero = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

//   const handleResumeClick = () => {
//     setIsModalOpen(true); // Open modal
//   };

//   const closeModal = () => {
//     setIsModalOpen(false); // Close modal
//   };

//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = My_Cv; // Replace with your actual CV path
//     link.download = My_Cv; // You can change the filename here
//     link.click();
//   };

//   const handleView = () => {
//     window.open(My_Cv, '_blank'); // Open CV in a new tab
//   };

//   return (
//     <section className="relative w-full h-screen mx-auto">
//       <div
//         className={`absolute inset-0 top-[100px] md:top-[120px] max-w-4xl sm:max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Aman</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I am a web developer who builds <br className="sm:block hidden" />
//             user interfaces and web applications
//           </p>

//           {/* Social Links + Resume Button */}
//           <div className="flex items-center space-x-3 mt-4">
//             <button
//               className="p-2 bg-[#915EFF] text-white rounded-lg hover:bg-[#7a4ee0] z-40"
//               onClick={() => window.open("https://github.com/M-AmanSiddiqui", "_blank")}
//             >
//               <FaGithub size={24} />
//             </button>

//             <button
//               onClick={() => window.open("https://www.linkedin.com/in/aman-siddiqui-a1a201328/", "_blank")}
//               className="p-2 bg-[#915EFF] text-white rounded-lg hover:bg-[#7a4ee0] transition-all z-40"
//             >
//               <FaLinkedin size={24} />
//             </button>

//             <button
//               onClick={handleResumeClick} // Open Modal
//               className="bg-[#915EFF] z-40 px-4 py-2 rounded-xl text-white font-semibold hover:bg-[#7a4ee0] transition"
//             >
//               My Resume
//             </button>
//           </div>
//         </div>
//       </div>

//       <ComputersCanvas />

//       {/* Modal */}
//    {/* Modal */}
// {isModalOpen && (
//   <div className="fixed inset-0 bg-[#11132d] bg-opacity-50 flex justify-center items-center z-50">
//     <div className="p-6 rounded-lg w-3/4 sm:w-1/3 lg:w-1/4 bg-black bg-opacity-80">
//       <h2 className="text-center text-2xl font-semibold text-[#915EFF]">My Resume</h2>
//       <div className="mt-4 flex justify-center space-x-4">
//         <button
//           onClick={handleDownload}
//           className="bg-[#915EFF] text-white px-4 py-2 rounded-lg hover:bg-[#7a4ee0]"
//         >
//           Download CV
//         </button>
//         <button
//           onClick={handleView}
//           className="bg-[#915EFF] text-white px-4 py-2 rounded-lg hover:bg-[#7a4ee0]"
//         >
//           View CV
//         </button>
//       </div>
//       <div className="mt-4 flex justify-center">
//         <button
//           onClick={closeModal}
//           className="text-center w-56 bg-[#7a4ee0] text-white px-4 py-2 rounded-lg"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   </div>
// )}

//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import My_Cv from "../assets/My Cv/Muhammad Aman CV-2.pdf"; // Ensure this path is correct

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleResumeClick = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const handleDownload = () => {
    if (My_Cv) {
      const link = document.createElement("a");
      link.href = My_Cv;
      link.download = "Aman_Siddiqui_Resume.pdf"; // You can set a custom name for the file
      link.click();
    } else {
      console.error("CV file not found!");
    }
  };

  const handleView = () => {
    if (My_Cv) {
      const link = document.createElement("a");
      link.href = My_Cv;
      link.target = "_blank"; // Open in a new tab
      link.click();
    } else {
      console.error("CV file not found!");
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[100px] md:top-[120px] max-w-4xl sm:max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Aman</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a web developer who builds <br className="sm:block hidden" />
            user interfaces and web applications
          </p>

          {/* Social Links + Resume Button */}
          <div className="flex items-center space-x-3 mt-4">
            <button
              className="p-2 bg-[#915EFF] text-white rounded-lg hover:bg-[#7a4ee0] z-40"
              onClick={() => window.open("https://github.com/M-AmanSiddiqui", "_blank")}
            >
              <FaGithub size={24} />
            </button>

            <button
              onClick={() => window.open("https://www.linkedin.com/in/aman-siddiqui-a1a201328/", "_blank")}
              className="p-2 bg-[#915EFF] text-white rounded-lg hover:bg-[#7a4ee0] transition-all z-40"
            >
              <FaLinkedin size={24} />
            </button>

            <button
              onClick={handleResumeClick} // Open Modal
              className="bg-[#915EFF] z-40 px-4 py-2 rounded-xl text-white font-semibold hover:bg-[#7a4ee0] transition"
            >
              My Resume
            </button>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#11132d] bg-opacity-50 flex justify-center items-center z-50">
          <div className="p-6 rounded-lg w-3/4 sm:w-1/3 lg:w-1/4 bg-black bg-opacity-80">
            <h2 className="text-center text-2xl font-semibold text-[#915EFF]">My Resume</h2>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={handleDownload}
                className="bg-[#915EFF] text-white px-4 py-2 rounded-lg hover:bg-[#7a4ee0]"
              >
                Download CV
              </button>
              <button
                onClick={handleView}
                className="bg-[#915EFF] text-white px-4 py-2 rounded-lg hover:bg-[#7a4ee0]"
              >
                View CV
              </button>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={closeModal}
                className="text-center w-56 bg-[#7a4ee0] text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
