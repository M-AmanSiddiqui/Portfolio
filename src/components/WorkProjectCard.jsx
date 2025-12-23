// import React from "react";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import { fadeIn } from "../utils/motion";
// import { github } from "../assets";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   images,
//   source_code_link,
//   live_demo_link,
//   openModal,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
//         <div className="relative w-full h-[230px] cursor-pointer" onClick={() => openModal(images, name, source_code_link)}>
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             spaceBetween={10}
//             slidesPerView={1}
//             loop={true}
//             autoplay={{ delay: 2000, disableOnInteraction: false }}
//             pagination={{ clickable: true }}
//             className="w-full h-full rounded-2xl bg-black"
//           >
//             {images.map((img, i) => (
//               <SwiperSlide key={i}>
//                 <img
//                   src={img}
//                   alt={`${name}-${i}`}
//                   className="w-full h-full object-contain rounded-2xl p-2 bg-black"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* GitHub Button */}
//           <div className="absolute top-2 right-2 z-20">
//             <div
//               onClick={(e) => {
//                 e.stopPropagation();
//                 window.open(source_code_link, "_blank");
//               }}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg"
//             >
//               <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
//             </div>
//           </div>
//         </div>

//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[24px]">{name}</h3>
//           <p className="mt-2 text-secondary text-[14px]">{description}</p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
//               #{tag.name}
//             </p>
//           ))}
//         </div>

//         {live_demo_link && (
//           <button
//             onClick={() => window.open(live_demo_link, "_blank")}
//             className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-semibold shadow-md hover:opacity-90 transition"
//           >
//             🚀 Live Demo
//           </button>
//         )}
//       </Tilt>
//     </motion.div>
//   );
// };

// export default ProjectCard;
import React, { useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { github } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

  const videoRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
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
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* CARD CLICK */}
        <div
          className="relative w-full h-[230px] cursor-pointer"
          onClick={() =>
            openModal(images, name, source_code_link, activeIndex)
          }
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="w-full h-full rounded-2xl bg-black"
            onSlideChange={(swiper) =>
              setActiveIndex(swiper.realIndex)
            }
          >
            {images.map((item, i) => (
              <SwiperSlide key={i}>
                {item.endsWith(".mp4") || item.endsWith(".webm") ? (
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      src={item}
                      muted={videoMuted}
                      playsInline
                      className="w-full h-full object-contain rounded-2xl bg-black"
                      
                    />

                    {/* SMALL VIDEO CONTROLS */}
                    <div className="absolute bottom-2 right-2 flex gap-2">
                      <button
                        onClick={togglePlay}
                        className="bg-black bg-opacity-60 text-white px-2 py-1 rounded"
                      >
                        {videoPlaying ? "⏸" : "▶"}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="bg-black bg-opacity-60 text-white px-2 py-1 rounded"
                      >
                        {videoMuted ? "🔇" : "🔊"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item}
                    alt={`${name}-${i}`}
                    className="w-full h-full object-contain rounded-2xl p-2 bg-black"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* GITHUB ICON */}
          <div className="absolute top-2 right-2 z-20">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description}
          </p>
        </div>

        {/* TAGS */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {/* LIVE DEMO */}
        {live_demo_link && (
          <button
            onClick={() => window.open(live_demo_link, "_blank")}
            className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-semibold shadow-md hover:opacity-90 transition"
          >
            🚀 Live Demo
          </button>
        )}
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
