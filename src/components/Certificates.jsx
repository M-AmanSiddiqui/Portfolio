import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiShareBoxFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { achievements } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showFullImage, setShowFullImage] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    document.body.style.overflow =
      selectedCertificate || showFullImage ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCertificate, showFullImage]);

  const CertificateCard = ({ cert }) => (
    <motion.button
      type="button"
      className="modern-surface accent-border group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl p-3 text-left transition duration-300 hover:-translate-y-2 hover:border-[#915EFF]/50 sm:p-4"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setSelectedCertificate(cert)}
    >
      <div className="mb-4 flex h-44 w-full items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white p-2 sm:h-52">
        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <h2 className="relative z-10 text-base font-semibold leading-6 text-white sm:text-lg">
        {cert.title}
      </h2>
      <p className="relative z-10 mt-2 text-sm leading-5 text-[#c9b8ff]">
        {cert.provider} - {cert.date}
      </p>
    </motion.button>
  );

  return (
    <div className="flex w-full flex-col items-center text-white">
      <motion.div variants={textVariant()} className="w-full max-w-6xl text-center">
        <h2 className={styles.sectionHeadText}>Achievements</h2>
        <p className={`${styles.sectionSubText} mt-2`}>
          Certifications showcasing my expertise
        </p>
      </motion.div>

      <div className="mt-10 hidden w-full max-w-6xl grid-cols-1 gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((cert) => (
          <CertificateCard key={cert.title} cert={cert} />
        ))}
      </div>

      <div className="mt-8 w-full max-w-sm md:hidden">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
            {currentSlide} / {achievements.length}
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={650}
          pagination={{ clickable: true, dynamicBullets: true }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
          className="pb-10"
        >
          {achievements.map((cert) => (
            <SwiperSlide key={cert.title} className="h-auto">
              <CertificateCard cert={cert} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedCertificate && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]/95 p-3 backdrop-blur-xl sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="modern-surface accent-border max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-2xl p-4 text-center sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="flex w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-2"
              onClick={() => setShowFullImage(true)}
            >
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-h-[48svh] w-full object-contain"
              />
            </button>

            <h2 className="mt-5 text-xl font-semibold leading-7 text-white sm:text-2xl">
              {selectedCertificate.title}
            </h2>
            <p className="mt-2 text-sm text-[#c9b8ff] sm:text-base">
              {selectedCertificate.provider} - {selectedCertificate.date}
            </p>
            <p className="mt-3 text-sm leading-6 text-secondary">
              {selectedCertificate.description}
            </p>

            <div className="mt-6 grid w-full gap-3 sm:grid-cols-2">
              {selectedCertificate.link?.trim() ? (
                <a
                  href={selectedCertificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00cea8] via-[#915EFF] to-[#ff6ec7] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(145,94,255,0.28)] transition hover:-translate-y-1"
                >
                  View Credential <RiShareBoxFill />
                </a>
              ) : (
                <div className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-secondary">
                  Credential link not added
                </div>
              )}

              <button
                type="button"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                onClick={() => setSelectedCertificate(null)}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {showFullImage && selectedCertificate && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 p-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowFullImage(false)}
        >
          <img
            src={selectedCertificate.image}
            alt={selectedCertificate.title}
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
          />
        </motion.div>
      )}
    </div>
  );
}

export default SectionWrapper(Achievements, "achievements");
