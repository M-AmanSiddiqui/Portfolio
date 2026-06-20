import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ---- ServiceCard ----
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="mx-auto w-full max-w-[270px]" tiltMaxAngleX={12} tiltMaxAngleY={12}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      whileHover={{ y: -8 }}
      className="w-full green-pink-gradient rounded-[20px] p-[1px] shadow-card"
    >
      <div className="modern-surface relative flex min-h-[240px] flex-col items-center justify-center gap-6 overflow-hidden rounded-[20px] px-6 py-7 sm:min-h-[270px] sm:px-8">
        <motion.div
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#915EFF]/18 to-transparent"
          animate={{ opacity: [0.35, 0.75, 0.35], scale: [1, 1.15, 1] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        />
        <motion.div
          className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#915EFF]/40 bg-[#151030] shadow-[0_0_35px_rgba(145,94,255,0.28)]"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.15,
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00cea8]/20 via-[#915eff]/25 to-[#ff6ec7]/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
          <img
            src={icon}
            alt={title}
            className="relative z-10 w-16 h-16 object-contain drop-shadow-[0_0_14px_rgba(145,94,255,0.6)]"
          />
        </motion.div>
        <h3 className="relative z-10 text-center text-[18px] font-bold leading-[26px] text-white sm:text-[20px] sm:leading-[28px]">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// ---- About ----
const About = () => {
  return (
    <>
      {/* Heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Paragraph */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[15px] leading-7 text-secondary sm:text-[17px] sm:leading-[30px]"
      >
        I am a Software Engineer and AI Engineer focused on building scalable
        software, AI-powered applications, SaaS platforms, and automation
        solutions. I specialize in designing and developing modern digital
        products that combine performance, reliability, and exceptional user
        experiences.
        <br />
        <br />
        From architecture and development to deployment and optimization, I
        enjoy turning complex ideas into impactful solutions that solve real
        business problems. My interests include Artificial Intelligence,
        Generative AI, Product Engineering, Automation, and emerging
        technologies that drive innovation and growth.
      </motion.p>

      {/* Desktop view */}
      <div className="mt-14 hidden grid-cols-2 gap-5 md:grid lg:mt-20 lg:grid-cols-4 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* Mobile view: Swiper slider */}
      <div className="mt-10 w-full md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={650}
          className="custom-purple rounded-[20px] pb-8"
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.title}>
              <div className="px-2">
                <ServiceCard index={index} {...service} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
