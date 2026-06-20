import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ edu }) => {
  const [showPoints, setShowPoints] = useState(false);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(145deg, rgba(21, 16, 48, 0.95), rgba(12, 11, 31, 0.96))",
        border: "1px solid rgba(0, 206, 168, 0.18)",
        borderRadius: "20px",
        boxShadow: "0 22px 70px rgba(0, 0, 0, 0.28)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(0, 206, 168, 0.28)" }}
      date={edu.date}
      iconStyle={{
        background: edu.iconBg,
        border: "4px solid rgba(0, 206, 168, 0.25)",
        boxShadow: "0 0 35px rgba(0, 206, 168, 0.22)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={edu.icon}
            alt={edu.institution}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[22px] sm:text-[24px] font-bold leading-tight">{edu.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {edu.institution}
        </p>
      </div>

      {/* Desktop: Always show points | Mobile: Toggle points */}
      <ul
        className={`mt-5 list-disc ml-5 space-y-2 
          hidden md:block`} // md+ par hamesha visible
      >
        {edu.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className="text-white-100 text-[14px] leading-6 pl-1"
          >
            {point}
          </li>
        ))}
      </ul>

      {/* Mobile Version with Toggle */}
      <div className="md:hidden mt-3">
        {showPoints && (
          <ul className="list-disc ml-5 space-y-2">
            {edu.points.map((point, index) => (
              <li
                key={`education-point-mobile-${index}`}
                className="text-white-100 text-[14px] leading-6 pl-1"
              >
                {point}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => setShowPoints(!showPoints)}
          className="mt-4 rounded-full border border-[#00cea8]/30 px-4 py-2 text-sm text-[#b5fff2] transition hover:bg-[#00cea8]/10"
        >
          {showPoints ? "Show Less" : "Show More"}
        </button>
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
       
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
         <p className={`${styles.sectionSubText} text-center`}>
          What I have learned so far
        </p>
      </motion.div>

      <div className="mt-12 flex flex-col sm:mt-16 lg:mt-20">
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
