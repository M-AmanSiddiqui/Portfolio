import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { education, experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";

const EducationCard = ({ edu }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={edu.date}
        iconStyle={{ background: edu.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={edu.icon}
              alt={edu.institution}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{edu.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {edu.institution}
          </p>
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {edu.points.map((point, index) => (
            <li
              key={`education-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };
  
  const Education = () => {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have learned so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Education.
          </h2>
        </motion.div>
  
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {education.map((edu, index) => (
              <EducationCard key={`education-${index}`} edu={edu} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    );
  };
  
  export default SectionWrapper(Education, "education");
  