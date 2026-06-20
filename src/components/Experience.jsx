import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const [showPoints, setShowPoints] = useState(false);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(145deg, rgba(21, 16, 48, 0.95), rgba(12, 11, 31, 0.96))",
        border: "1px solid rgba(145, 94, 255, 0.22)",
        borderRadius: "20px",
        boxShadow: "0 22px 70px rgba(0, 0, 0, 0.28)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(145, 94, 255, 0.35)" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        border: "4px solid rgba(145, 94, 255, 0.35)",
        boxShadow: "0 0 35px rgba(145, 94, 255, 0.35)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[22px] sm:text-[24px] font-bold leading-tight">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* Desktop: Always show points */}
      <ul className="mt-5 list-disc ml-5 space-y-2 hidden md:block">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] leading-6 pl-1"
          >
            {point}
          </li>
        ))}
      </ul>

      {/* Mobile: Toggle points */}
      <div className="md:hidden mt-3">
        {showPoints && (
          <ul className="list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-mobile-${index}`}
                className="text-white-100 text-[14px] leading-6 pl-1"
              >
                {point}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => setShowPoints(!showPoints)}
          className="mt-4 rounded-full border border-[#915EFF]/35 px-4 py-2 text-sm text-[#c9b8ff] transition hover:bg-[#915EFF]/15"
        >
          {showPoints ? "Show Less" : "Show More"}
        </button>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
      </motion.div>

      <div className="mt-12 flex flex-col sm:mt-16 lg:mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
