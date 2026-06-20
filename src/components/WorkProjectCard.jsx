import React, { useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaPause,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { fadeIn } from "../utils/motion";
import { github } from "../assets";

const isVideoAsset = (item) => item.endsWith(".mp4") || item.endsWith(".webm");

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images,
  source_code_link,
  live_demo_link,
  openModal,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.muted = false;
      setVideoMuted(false);
      videoRef.current.play();
      setVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setVideoPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    videoRef.current.muted = !videoMuted;
    setVideoMuted(!videoMuted);
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.75)}>
      <Tilt
        options={{ max: 18, scale: 1, speed: 450 }}
        className="modern-surface accent-border w-full rounded-2xl p-3 transition duration-300 hover:-translate-y-2 sm:w-[360px] sm:p-4"
      >
        <div
          className="relative h-[205px] w-full cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black/40 sm:h-[230px] sm:rounded-2xl"
          onClick={() => openModal(images, name, source_code_link, activeIndex)}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop
            autoplay={{ delay: 2200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="h-full w-full bg-black"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {images.map((item, i) => (
              <SwiperSlide key={i}>
                {isVideoAsset(item) ? (
                  <div className="relative h-full w-full">
                    <video
                      ref={videoRef}
                      src={item}
                      muted={videoMuted}
                      playsInline
                      className="h-full w-full bg-black object-contain"
                    />

                    <div className="absolute bottom-3 right-3 flex gap-2">
                      <button
                        onClick={togglePlay}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:bg-[#915EFF]/60"
                        aria-label={videoPlaying ? "Pause video" : "Play video"}
                      >
                        {videoPlaying ? <FaPause size={13} /> : <FaPlay size={13} />}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:bg-[#915EFF]/60"
                        aria-label={videoMuted ? "Unmute video" : "Mute video"}
                      >
                        {videoMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
                      </button>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item}
                    alt={`${name}-${i}`}
                    className="h-full w-full bg-black p-2 object-contain"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute right-3 top-3 z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-[#915EFF]/60"
              aria-label="Open source code"
            >
              <img src={github} alt="source code" className="h-1/2 w-1/2 object-contain" />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[20px] font-bold leading-tight text-white sm:text-[22px]">{name}</h3>
          <p className="mt-3 text-[13px] leading-6 text-secondary sm:text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {live_demo_link && (
          <button
            onClick={() => window.open(live_demo_link, "_blank")}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00cea8] via-[#915EFF] to-[#ff6ec7] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(145,94,255,0.28)] transition hover:-translate-y-1"
          >
            Live Demo <FaExternalLinkAlt size={12} />
          </button>
        )}
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
