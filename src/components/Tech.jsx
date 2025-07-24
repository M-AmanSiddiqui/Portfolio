import React from "react";

import { SectionWrapper } from "../hoc";
import { skills } from "../constants/index";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

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

  );
};

export default SectionWrapper(Skills, "skills");
