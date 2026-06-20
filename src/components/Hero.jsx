import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaDownload, FaEye, FaGithub, FaLinkedin } from "react-icons/fa";
import My_Cv from "../assets/My Cv/mycv.pdf"

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

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
      link.download = "Aman_Siddiqui_Resume.pdf"; 
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
    <section className="relative mx-auto min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.16)_0%,rgba(5,8,22,0.72)_82%)]" />
      <div
        className={`absolute inset-0 top-[96px] mx-auto flex max-w-4xl flex-row items-start gap-4 sm:max-w-7xl md:top-[125px] ${styles.paddingX}`}
      >
        <div className="mt-4 flex flex-col items-center justify-center sm:mt-5">
          <div className="h-5 w-5 rounded-full bg-[#00cea8] shadow-[0_0_28px_rgba(0,206,168,0.8)]" />
          <div className="violet-gradient h-44 w-1 sm:h-80" />
        </div>

        <div className="max-w-4xl min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-flex max-w-full items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-medium leading-5 text-secondary backdrop-blur-md sm:px-4 sm:text-sm"
          >
            Software Engineering | AI Systems | SaaS Products
          </motion.div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#00cea8] via-[#915EFF] to-[#ff6ec7] bg-clip-text text-transparent">
              Aman
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 max-w-3xl text-white-100`}>
            Software Engineer & AI Engineer <br className="sm:block hidden" />
            Building Scalable AI Systems, <br className="sm:block hidden" />
            SaaS Products, and Modern Digital Solutions
          </p>



          {/* Social Links + Resume Button */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              className="z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-[#915EFF]/35 sm:h-12 sm:w-12"
              onClick={() => window.open("https://github.com/M-AmanSiddiqui", "_blank")}
              aria-label="Open GitHub profile"
            >
              <FaGithub size={24} />
            </button>

            <button
              onClick={() => window.open("https://www.linkedin.com/in/aman-siddiqui-a1a201328/", "_blank")}
              className="z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-[#915EFF]/35 sm:h-12 sm:w-12"
              aria-label="Open LinkedIn profile"
            >
              <FaLinkedin size={24} />
            </button>

            <button
              onClick={handleResumeClick} // Open Modal
              className="z-40 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-gradient-to-r from-[#00cea8] via-[#915EFF] to-[#ff6ec7] px-5 py-2.5 font-semibold text-white shadow-[0_16px_40px_rgba(145,94,255,0.35)] transition hover:-translate-y-1 sm:px-6 sm:py-3"
            >
              <FaDownload />
              My Resume
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#050816]/80 backdrop-blur-xl flex justify-center items-center z-50 px-4">
          <div className="modern-surface accent-border w-full max-w-md rounded-2xl p-6">
            <h2 className="text-center text-2xl font-semibold text-[#915EFF]">My Resume</h2>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#915EFF] px-4 py-3 text-white transition hover:bg-[#7a4ee0]"
              >
                <FaDownload />
                Download CV
              </button>
              <button
                onClick={handleView}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white transition hover:bg-white/15"
              >
                <FaEye />
                View CV
              </button>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={closeModal}
                className="text-center w-full rounded-xl bg-[#11132d] px-4 py-3 text-white transition hover:bg-[#1d1836]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-8 flex w-full items-center justify-center xs:bottom-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border border-white/20 bg-white/5 flex justify-center items-start p-2 backdrop-blur-md">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-[#00cea8] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
