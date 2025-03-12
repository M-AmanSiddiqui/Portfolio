import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";

import { textVariant } from "../utils/motion";

const Tech = () => {
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
      {technologies.map((technology) => (
        <div key={technology.name} className='flex flex-col items-center'>
          <div className='w-28 h-28'>
            <BallCanvas icon={technology.icon} />
          </div>
          <p className="mt-2 text-white text-lg font-bold">{technology.name}</p> 
        </div>
      ))}
    </div></>

  );
};

export default SectionWrapper(Tech, "");
