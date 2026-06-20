import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import ProjectCard from "./WorkProjectCard";
import ProjectsModal from "./WorkProjectsModal";

const Works = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [modalGithub, setModalGithub] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (images, title, githubLink, index = 0) => {
    setModalImages(images);
    setModalTitle(title);
    setModalGithub(githubLink);
    setModalOpen(true);
    setStartIndex(index);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImages([]);
    setModalTitle("");
  };

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "unset";

    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [modalOpen]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="mt-4 max-w-3xl text-[15px] leading-7 text-secondary sm:text-[17px] sm:leading-[30px]">
        Following projects showcase my skills and experience through real-world examples.
      </div>

      <div className="mt-12 hidden flex-wrap justify-center gap-5 md:flex lg:mt-16 lg:gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            index={index}
            {...project}
            openModal={openModal}
          />
        ))}
      </div>

      <div className="mt-10 w-full md:hidden">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
            {currentSlide + 1} / {projects.length}
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true, dynamicBullets: true }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          className="w-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.name} className="flex justify-center">
              <div className="w-full max-w-[360px]">
                <ProjectCard index={index} {...project} openModal={openModal} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ProjectsModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        modalImages={modalImages}
        modalTitle={modalTitle}
        modalGithub={modalGithub}
        startIndex={startIndex}
        setStartIndex={setStartIndex}
      />
    </>
  );
};

export default SectionWrapper(Works, "projects");
