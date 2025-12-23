// import React, { useState, useRef, useEffect } from "react";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// // Custom CSS for better mobile pagination
// const customStyles = `
//   .swiper-pagination-bullet {
//     background: rgba(255, 255, 255, 0.5) !important;
//     opacity: 1 !important;
//     width: 8px !important;
//     height: 8px !important;
//     margin: 0 4px !important;
//   }
//   .swiper-pagination-bullet-active {
//     background: #8b5cf6 !important;
//     transform: scale(1.2) !important;
//   }
//   .swiper-pagination {
//     bottom: 10px !important;
//   }
// `;

// // Inject custom styles
// if (typeof document !== 'undefined') {
//   const styleElement = document.createElement('style');
//   styleElement.textContent = customStyles;
//   document.head.appendChild(styleElement);
// }

// // ---- ProjectCard ----
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
//       <Tilt
//         options={{ max: 45, scale: 1, speed: 450 }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
//       >
//         <div
//           className="relative w-full h-[230px] cursor-pointer"
//           onClick={() => openModal(images, name, source_code_link)}
//         >
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

//           {/* ✅ GitHub Button (top-right) */}
//           <div className="absolute top-2 right-2 z-20">
//             <div
//               onClick={(e) => {
//                 e.stopPropagation();
//                 window.open(source_code_link, "_blank");
//               }}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg"
//             >
//               <img
//                 src={github}
//                 alt="source code"
//                 className="w-1/2 h-1/2 object-contain"
//               />
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

// // ---- Works ----
// const Works = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalImages, setModalImages] = useState([]);
//   const [modalTitle, setModalTitle] = useState("");
//   const [startIndex, setStartIndex] = useState(0);
//   const [zoom, setZoom] = useState(1);
//   const [modalGithub, setModalGithub] = useState("");
//   const [pan, setPan] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const imageRef = useRef(null);
//   const swiperRef = useRef(null);

//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (modalOpen) {
//       document.body.style.overflow = 'hidden';
      
//       // Add ESC key listener
//       const handleEscKey = (e) => {
//         if (e.key === 'Escape') {
//           closeModal();
//         }
//       };
      
//       document.addEventListener('keydown', handleEscKey);
      
//       return () => {
//         document.body.style.overflow = 'unset';
//         document.removeEventListener('keydown', handleEscKey);
//       };
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [modalOpen]);

//   // Auto-slide effect for mobile with Swiper control
//   useEffect(() => {
//     if (window.innerWidth <= 768 && swiperRef.current) { // Only on mobile
//       const interval = setInterval(() => {
//         if (swiperRef.current && swiperRef.current.swiper) {
//           swiperRef.current.swiper.slideNext();
//         }
//       }, 4000); // Change slide every 4 seconds

//       return () => clearInterval(interval);
//     }
//   }, []);

//   const openModal = (images, title, githubLink) => {
//     console.log('Opening modal with:', { images, title, githubLink });
//     console.log('Images array:', images);
//     console.log('Images length:', images?.length);
    
//     if (!images || images.length === 0) {
//       console.error('No images provided to modal');
//       return;
//     }
    
//     setModalImages(images);
//     setModalTitle(title);
//     setModalGithub(githubLink);
//     setModalOpen(true);
//     setStartIndex(0);
//     setZoom(1);
//     setPan({ x: 0, y: 0 });
//     console.log('Modal state set to open, modalOpen:', true);
//   };

//   const closeModal = () => {
//     console.log('Closing modal');
//     setModalOpen(false);
//     setModalImages([]);
//     setModalTitle("");
//     setZoom(1);
//     setPan({ x: 0, y: 0 });
//   };

//   const handleZoomIn = () => {
//     setZoom(prev => Math.min(prev + 0.5, 5));
//     setPan({ x: 0, y: 0 }); // Reset pan when zooming
//   };

//   const handleZoomOut = () => {
//     setZoom(prev => Math.max(prev - 0.5, 1));
//     setPan({ x: 0, y: 0 }); // Reset pan when zooming
//   };

//   const handleMouseDown = (e) => {
//     if (zoom > 1) {
//       setIsDragging(true);
//       setDragStart({
//         x: e.clientX - pan.x,
//         y: e.clientY - pan.y
//       });
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging && zoom > 1) {
//       const newX = e.clientX - dragStart.x;
//       const newY = e.clientY - dragStart.y;
      
//       // Calculate bounds to prevent image from going too far
//       const maxPanX = (zoom - 1) * window.innerWidth / 2;
//       const maxPanY = (zoom - 1) * window.innerHeight / 2;
      
//       setPan({
//         x: Math.max(-maxPanX, Math.min(maxPanX, newX)),
//         y: Math.max(-maxPanY, Math.min(maxPanY, newY))
//       });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleTouchStart = (e) => {
//     if (zoom > 1 && e.touches.length === 1) {
//       setIsDragging(true);
//       setDragStart({
//         x: e.touches[0].clientX - pan.x,
//         y: e.touches[0].clientY - pan.y
//       });
//     }
//   };

//   const handleTouchMove = (e) => {
//     if (isDragging && zoom > 1 && e.touches.length === 1) {
//       e.preventDefault();
//       const newX = e.touches[0].clientX - dragStart.x;
//       const newY = e.touches[0].clientY - dragStart.y;
      
//       // Calculate bounds to prevent image from going too far
//       const maxPanX = (zoom - 1) * window.innerWidth / 2;
//       const maxPanY = (zoom - 1) * window.innerHeight / 2;
      
//       setPan({
//         x: Math.max(-maxPanX, Math.min(maxPanX, newX)),
//         y: Math.max(-maxPanY, Math.min(maxPanY, newY))
//       });
//     }
//   };

//   const handleTouchEnd = () => {
//     setIsDragging(false);
//   };

//   const resetView = () => {
//     setZoom(1);
//     setPan({ x: 0, y: 0 });
//   };

//   const nextSlide = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   const prevSlide = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//       </motion.div>

//       <div className="w-full flex">
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
//         >
//           Following projects showcase my skills and experience through
//           real-world examples of my work. Each project is briefly described with
//           links to code repositories and live demos in it. It reflects my
//           ability to solve complex problems, work with different technologies,
//           and manage projects effectively.
//         </motion.p>
//       </div>

//       {/* Desktop Grid */}
//       <div className="mt-20 hidden md:flex flex-wrap gap-7">
//         {projects.map((project, index) => (
//           <ProjectCard
//             key={`project-${index}`}
//             index={index}
//             {...project}
//             openModal={openModal}
//           />
//         ))}
//       </div>

//       {/* Mobile Enhanced Swiper with Counter and Controls */}
//       <div className="mt-10 md:hidden w-full px-4">
//         {/* Simple Counter Display */}
//         <div className="flex justify-center items-center mb-6">
//           <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full">
//             <span className="text-sm font-medium">{currentSlide + 1}</span>
//             <span className="text-sm mx-2">/</span>
//             <span className="text-sm font-medium">{projects.length}</span>
//           </div>
//         </div>

//         {/* Enhanced Swiper */}
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={16}
//           slidesPerView={1}
//           loop={true}
//           freeMode={false}
//           speed={800}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true
//           }}
//           pagination={{ 
//             clickable: true,
//             dynamicBullets: true,
//             bulletClass: 'swiper-pagination-bullet',
//             bulletActiveClass: 'swiper-pagination-bullet-active'
//           }}
//           onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
//           className="w-full"
//           style={{ height: 'auto', minHeight: '450px' }}
//           ref={swiperRef}
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index} className="!w-full !h-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="w-full h-full flex justify-center"
//               >
//                 <div className="w-full max-w-[350px]">
//                   <ProjectCard index={index} {...project} openModal={openModal} />
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//      {/* ✅ Enhanced Modal */}
// {modalOpen && (
//   <div
//     className="fixed inset-0 bg-black bg-opacity-95"
//     style={{ 
//       width: '100vw', 
//       height: '100vh',
//       position: 'fixed',
//       top: 0, // Cover from top (including header)
//       left: 0,
//       zIndex: 99999
//     }}
//     onClick={closeModal}
//   >
//     {console.log('Modal is rendering, modalOpen:', modalOpen, 'modalImages:', modalImages, 'modalTitle:', modalTitle)}
//     <div
//       className="relative w-full h-full flex flex-col justify-center items-center"
//       style={{ 
//         width: '100vw', 
//         height: '100vh', // Full viewport height
//         position: 'relative',
//         zIndex: 100000
//       }}
//       onClick={(e) => e.stopPropagation()}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseUp}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Close Button - Enhanced */}
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           closeModal();
//         }}
//         className="absolute top-5 right-5 w-14 h-14 flex items-center justify-center 
//                    bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white 
//                    rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-[100001]
//                    text-xl font-bold cursor-pointer border-2 border-white/20 backdrop-blur-sm
//                    hover:shadow-purple-500/50 hover:shadow-lg"
//         title="Close (ESC)"
//       >
//         ✖
//       </button>

//       {/* GitHub Button */}
//       {modalGithub && (
//         <div
//           onClick={(e) => {
//             e.stopPropagation();
//             window.open(modalGithub, "_blank");
//           }}
//           className="absolute top-5 left-5 black-gradient w-12 h-12 rounded-full 
//                      flex justify-center items-center cursor-pointer shadow-lg z-[100001]
//                      hover:scale-110 transition"
//         >
//           <img
//             src={github}
//             alt="source code"
//             className="w-1/2 h-1/2 object-contain"
//           />
//         </div>
//       )}

//       {/* Zoom Controls */}
//       <div className="absolute bottom-6 right-6 flex flex-col gap-3 z-[100001]">
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             handleZoomIn();
//           }}
//           className="w-12 h-12 flex items-center justify-center rounded-full 
//                      bg-gradient-to-r from-green-400 to-emerald-600 text-white 
//                      shadow-lg hover:scale-110 transition text-lg font-bold cursor-pointer"
//         >
//           ➕
//         </button>
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             handleZoomOut();
//           }}
//           className="w-12 h-12 flex items-center justify-center rounded-full 
//                      bg-gradient-to-r from-yellow-400 to-orange-500 text-white 
//                      shadow-lg hover:scale-110 transition text-lg font-bold cursor-pointer"
//         >
//           ➖
//         </button>
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             resetView();
//           }}
//           className="w-12 h-12 flex items-center justify-center rounded-full 
//                      bg-gradient-to-r from-blue-400 to-purple-600 text-white 
//                      shadow-lg hover:scale-110 transition text-lg font-bold cursor-pointer"
//         >
//           🔄
//         </button>
//       </div>

//       {/* Image Counter */}
//       <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-[100001]">
//         <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
//           {startIndex + 1} / {modalImages.length}
//         </div>
//       </div>

//       {/* ✅ Enhanced Image Viewer with Zoom & Pan */}
//       <div
//         ref={imageRef}
//         className="flex-1 w-full flex justify-center items-center overflow-hidden"
//         style={{
//           cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
//           padding: '200px 40px 120px 40px' // Maximum top and bottom padding for complete image visibility
//         }}
//       >
//         <div
//           className="flex justify-center items-center w-full h-full"
//           style={{
//             minHeight: 'calc(100vh - 200px)',
//             maxHeight: 'calc(100vh - 200px)'
//           }}
//         >
//           <img
//             src={modalImages[startIndex]}
//             alt={modalTitle}
//             className="max-w-full max-h-full object-contain select-none"
//             style={{
//               transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
//               transformOrigin: "center center",
//               transition: isDragging ? 'none' : 'transform 0.3s ease-out',
//               userSelect: 'none',
//               WebkitUserSelect: 'none',
//               MozUserSelect: 'none',
//               msUserSelect: 'none',
//               width: 'auto',
//               height: 'auto',
//               maxWidth: '95vw', // Keep side padding balanced
//               maxHeight: '85vh', // Reduced to account for maximum top/bottom padding
//               objectFit: 'contain',
//               objectPosition: 'center'
//             }}
//             draggable={false}
//           />
//         </div>
//       </div>

//       {/* Additional Close Button - Bottom Center */}
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           closeModal();
//         }}
//         className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-36 h-12 flex items-center justify-center 
//                    bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white 
//                    rounded-full shadow-2xl hover:scale-105 transition-all duration-300 z-[100001]
//                    text-sm font-semibold cursor-pointer border border-white/20 backdrop-blur-sm
//                    hover:shadow-purple-500/50 hover:shadow-lg"
//         title="Close Modal"
//       >
//         Close Modal
//       </button>

//       {/* Navigation Arrows */}
//       {modalImages.length > 1 && (
//         <>
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setStartIndex(prev => prev === 0 ? modalImages.length - 1 : prev - 1);
//             }}
//             className="absolute left-5 top-1/2 transform -translate-y-1/2 z-[100001]
//                        w-12 h-12 flex items-center justify-center rounded-full
//                        bg-black bg-opacity-70 text-white hover:bg-opacity-90
//                        transition shadow-lg text-xl font-bold cursor-pointer"
//           >
//             ‹
//           </button>
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setStartIndex(prev => prev === modalImages.length - 1 ? 0 : prev + 1);
//             }}
//             className="absolute right-5 top-1/2 transform -translate-y-1/2 z-[100001]
//                        w-12 h-12 flex items-center justify-center rounded-full
//                        text-white hover:bg-opacity-90
//                        transition shadow-lg text-xl font-bold cursor-pointer"
//           >
//             ›
//           </button>
//         </>
//       )}
//     </div>
//   </div>
// )}

//     </>
//   );
// };

// export default SectionWrapper(Works, "projects");







import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./WorkProjectCard";
import ProjectsModal from "./WorkProjectsModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Works = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [modalGithub, setModalGithub] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const swiperRef = useRef(null);
  const imageRef = useRef(null);

  const openModal = (images, title, githubLink,index = 0) => {
    setModalImages(images);
    setModalTitle(title);
    setModalGithub(githubLink);
    setModalOpen(true);
    setStartIndex(index);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImages([]);
    setModalTitle("");
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 1));
  const resetView = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  const handleMouseDown = (e) => { if (zoom > 1) { setIsDragging(true); setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y }); } };
  const handleMouseMove = (e) => { if (isDragging && zoom > 1) { const newX = e.clientX - dragStart.x; const newY = e.clientY - dragStart.y; const maxX = (zoom - 1) * window.innerWidth / 2; const maxY = (zoom - 1) * window.innerHeight / 2; setPan({ x: Math.max(-maxX, Math.min(maxX, newX)), y: Math.max(-maxY, Math.min(maxY, newY)) }); } };
  const handleMouseUp = () => setIsDragging(false);
  const handleTouchStart = (e) => { if (zoom > 1 && e.touches.length === 1) { setIsDragging(true); setDragStart({ x: e.touches[0].clientX - pan.x, y: e.touches[0].clientY - pan.y }); } };
  const handleTouchMove = (e) => { if (isDragging && zoom > 1 && e.touches.length === 1) { e.preventDefault(); const newX = e.touches[0].clientX - dragStart.x; const newY = e.touches[0].clientY - dragStart.y; const maxX = (zoom - 1) * window.innerWidth / 2; const maxY = (zoom - 1) * window.innerHeight / 2; setPan({ x: Math.max(-maxX, Math.min(maxX, newX)), y: Math.max(-maxY, Math.min(maxY, newY)) }); } };
  const handleTouchEnd = () => setIsDragging(false);

  // Prevent scroll + ESC close
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "unset";
    const handleEsc = (e) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [modalOpen]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="mt-4 text-secondary max-w-3xl">
        Following projects showcase my skills and experience through real-world examples.
      </div>

      {/* Desktop Grid */}
      <div className="mt-16 hidden md:flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} openModal={openModal} />
        ))}
      </div>

      {/* Mobile Swiper */}
<div className="mt-10 md:hidden w-full px-4">
  {/* Slide Counter */}
  <div className="flex justify-center items-center mb-4">
    <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
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
      <SwiperSlide key={index} className="flex justify-center">
        {/* Card wrapper with fixed width */}
        <div className="w-full max-w-[350px]">
          <ProjectCard index={index} {...project} openModal={openModal} />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


      {/* Modal */}
      <ProjectsModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        modalImages={modalImages}
        modalTitle={modalTitle}
        modalGithub={modalGithub}
        startIndex={startIndex}
        setStartIndex={setStartIndex}
        zoom={zoom}
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
        resetView={resetView}
        isDragging={isDragging}
        handleMouseDown={handleMouseDown}
        handleMouseMove={handleMouseMove}
        handleMouseUp={handleMouseUp}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
        pan={pan}
      />
    </>
  );
};

export default SectionWrapper(Works, "projects");
