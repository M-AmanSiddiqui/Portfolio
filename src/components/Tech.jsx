import React, { useState } from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../hoc";
import { skills } from "../constants/index";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const getInitials = (name) =>
  name
    .split(/[\s.-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const SkillIcon = ({ skill, failedIcons, onError }) => {
  const showIcon = skill.icon && !failedIcons[skill.name];

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] p-3 transition duration-300 group-hover:border-[#00cea8]/30 group-hover:bg-[#915EFF]/10 sm:h-[72px] sm:w-[72px]">
      {showIcon ? (
        <img
          src={skill.icon}
          alt={skill.name}
          loading="lazy"
          onError={() => onError(skill.name)}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
        />
      ) : (
        <span className="text-lg font-black text-[#00cea8]">
          {getInitials(skill.name)}
        </span>
      )}
    </div>
  );
};

const Skills = () => {
  const [failedIcons, setFailedIcons] = useState({});

  const handleIconError = (name) => {
    setFailedIcons((current) => ({
      ...current,
      [name]: true,
    }));
  };

  return (
    <>
      <motion.div variants={textVariant()} className="mx-auto max-w-3xl text-center">
        <h2 className={styles.sectionHeadText}>Skills</h2>
        <p className={`${styles.sectionSubText} mt-2`}>
          Technologies I specialize in
        </p>
      </motion.div>

      <div className="mt-10 grid w-full grid-cols-2 gap-3 xs:grid-cols-3 sm:grid-cols-4 md:mt-14 md:grid-cols-5 md:gap-4 lg:grid-cols-6 xl:grid-cols-7">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="modern-surface group flex min-h-[128px] flex-col items-center justify-center rounded-xl p-3 text-center transition duration-300 hover:-translate-y-2 hover:border-[#915EFF]/50 sm:min-h-[144px] sm:p-4"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.45,
              delay: Math.min(index * 0.02, 0.45),
            }}
          >
            <SkillIcon
              skill={skill}
              failedIcons={failedIcons}
              onError={handleIconError}
            />
            <p className="mt-3 min-h-[40px] text-[13px] font-semibold leading-5 text-white sm:text-[14px]">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
