<<<<<<< HEAD
// import React from "react";

// import { SectionWrapper } from "../hoc";
// import { skills } from "../constants/index";
// import { motion } from "framer-motion";
// import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../styles";

// import { textVariant } from "../utils/motion";

// const Skills = () => {
//   return (
//     <>   
//     <motion.div variants={textVariant()}>
//   <h2 className={`${styles.sectionHeadText} text-center`}>
//     Skills
//   </h2>
//   <p className={`${styles.sectionSubText} text-center`}>
//     Technologies I specialize in
//   </p>
// </motion.div>

// <div className="flex justify-center mt-16 px-4">
//   <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 max-w-[1200px] w-full">
//     {skills.map((skill) => (
//       <div key={skill.name} className="flex flex-col items-center">
//         <div className="w-20 h-20">
//           <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
//         </div>
//         <p className="mt-2 text-white text-lg font-bold">{skill.name}</p>
//       </div>
//     ))}
//   </div>
// </div>


//     </>

//   );
// };

// export default SectionWrapper(Skills, "skills");
import React, { useState } from "react";
=======
import React from "react";

>>>>>>> fde8f28716165f065ac9d902411d0134126401c2
import { SectionWrapper } from "../hoc";
import { skills } from "../constants/index";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
<<<<<<< HEAD
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Skills = () => {
  const [current, setCurrent] = useState(1);
  const total = skills.length;

  return (
    <>
      {/* Heading */}
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I specialize in
        </p>
      </motion.div>

      {/* ✅ Counter Heading ke neeche */}
      <p className={`${styles.sectionSubText} text-center mt-4 md:hidden`}>
        {current} / {total}
      </p>

      {/* ✅ Desktop Grid */}
      <div className="hidden md:flex justify-center mt-16 px-4">
        <div className="grid gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 max-w-[1200px] w-full">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, // row by row left→right sequence
              }}
            >
              <div className="w-20 h-20">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2 text-white text-lg font-bold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Mobile Swiper */}
      <div className="mt-8 md:hidden w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={"auto"}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2000}
          className="w-full"
          onRealIndexChange={(swiper) => setCurrent(swiper.realIndex + 1)} // ✅ fix
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="!w-[150px]">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="mt-2 text-white text-lg font-bold">
                  {skill.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
=======

import { styles } from "../styles";

import { textVariant } from "../utils/motion";

const Skills = () => {
  return (
    <>   
    <motion.div variants={textVariant()}>
  <h2 className={`${styles.sectionHeadText} text-center`}>
    Skills
  </h2>
  <p className={`${styles.sectionSubText} text-center`}>
    Technologies I specialize in
  </p>
</motion.div>

<div className="flex justify-center mt-16 px-4">
  <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 max-w-[1200px] w-full">
    {skills.map((skill) => (
      <div key={skill.name} className="flex flex-col items-center">
        <div className="w-20 h-20">
          <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
        </div>
        <p className="mt-2 text-white text-lg font-bold">{skill.name}</p>
      </div>
    ))}
  </div>
</div>


    </>

>>>>>>> fde8f28716165f065ac9d902411d0134126401c2
  );
};

export default SectionWrapper(Skills, "skills");
