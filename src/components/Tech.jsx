import React from "react";
import { BallCanvas } from "./canvas";
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

     <div className='flex flex-row flex-wrap justify-center gap-10'>
      {skills.map((skills) => (
        <div key={skills.name} className='flex flex-col items-center'>
          <div className='w-28 h-28'>
            <BallCanvas icon={skills.icon} />
          </div>
          <p className="mt-2 text-white text-lg font-bold">{skills.name}</p> 
        </div>
      ))}
    </div></>

  );
};

export default SectionWrapper(Skills, "skills");
