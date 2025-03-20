import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
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
  className="p-2 bg-[#915EFF] text-white rounded-lg hover:bg-[#7a4ee0] z-50"
  onClick={() => window.open("https://github.com/M-AmanSiddiqui", "_blank", )}
>
  <FaGithub size={24} />
</button>



            <button
             onClick={() => window.open("https://www.linkedin.com/in/aman-siddiqui-a1a201328/", "_blank", )}
              target="_blank"
             
              className="p-2 bg-[#915EFF] text-white rounded-lg hover:bg-[#7a4ee0] transition-all z-50"
            >
              <FaLinkedin size={24} />
            </button>

            <button className="bg-[#915EFF] z-50 px-4 py-2 rounded-xl text-white font-semibold hover:bg-[#7a4ee0] transition">
              My Resume
            </button>
          </div>
        </div>
      </div>

      <ComputersCanvas />

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
