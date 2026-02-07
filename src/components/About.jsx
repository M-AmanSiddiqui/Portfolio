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
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
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
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       I am a Full Stack Web Developer and AI & Data Science Engineer dedicated to building modern,
        intelligent web applications. With expertise in React, Node.js, and the MERN stack,
         I focus on creating scalable, high-performance, and user-friendly solutions.

        Beyond coding, I leverage AI and Data Science to extract insights from data,
        automate complex workflows, and develop smart applications that drive real impact.
        I love combining creativity with technology to solve problems and help clients bring their ideas to life.

      </motion.p>

      {/* Desktop view */}
      <div className="mt-20 hidden md:grid grid-cols-4 gap-8 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* Mobile view: Swiper slider */}
      <div className="mt-20 md:hidden w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2000} // slow continuous move
          className="rounded-[20px] custom-purple" 
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
