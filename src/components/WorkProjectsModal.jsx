// import React from "react";
// import { github } from "../assets";

// const ProjectsModal = ({
//   modalOpen,
//   closeModal,
//   modalImages,
//   modalTitle,
//   modalGithub,
//   startIndex,
//   setStartIndex,
//   zoom,
//   handleZoomIn,
//   handleZoomOut,
//   resetView,
//   isDragging,
//   handleMouseDown,
//   handleMouseMove,
//   handleMouseUp,
//   handleTouchStart,
//   handleTouchMove,
//   handleTouchEnd,
//   pan,
// }) => {
//   if (!modalOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-95"
//       style={{ width: '100vw', height: '100vh', zIndex: 99999 }}
//       onClick={closeModal}
//     >
//       <div
//         className="relative w-full h-full flex flex-col justify-center items-center"
//         style={{ width: '100vw', height: '100vh', position: 'relative', zIndex: 100000 }}
//         onClick={(e) => e.stopPropagation()}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         onMouseLeave={handleMouseUp}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         {/* Close Button */}
//         <button
//           onClick={(e) => { e.stopPropagation(); closeModal(); }}
//           className="absolute top-5 right-5 w-14 h-14 flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-[100001] text-xl font-bold cursor-pointer border-2 border-white/20 backdrop-blur-sm"
//         >
//           ✖
//         </button>

//         {/* GitHub Button */}
//         {modalGithub && (
//           <div
//             onClick={(e) => { e.stopPropagation(); window.open(modalGithub, "_blank"); }}
//             className="absolute top-5 left-5 black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer shadow-lg z-[100001] hover:scale-110 transition"
//           >
//             <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
//           </div>
//         )}

//         {/* Zoom Controls */}
//         <div className="absolute bottom-6 right-6 flex flex-col gap-3 z-[100001]">
//           <button onClick={(e) => { e.stopPropagation(); handleZoomIn(); }} className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-600 text-white shadow-lg hover:scale-110 transition text-lg font-bold cursor-pointer">➕</button>
//           <button onClick={(e) => { e.stopPropagation(); handleZoomOut(); }} className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg hover:scale-110 transition text-lg font-bold cursor-pointer">➖</button>
//           <button onClick={(e) => { e.stopPropagation(); resetView(); }} className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-600 text-white shadow-lg hover:scale-110 transition text-lg font-bold cursor-pointer">🔄</button>
//         </div>

//         {/* Image Counter */}
//         <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-[100001]">
//           <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
//             {startIndex + 1} / {modalImages.length}
//           </div>
//         </div>

//         {/* Image Viewer */}
//         <div
//           className="flex-1 w-full flex justify-center items-center overflow-hidden"
//           style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default', padding: '200px 40px 120px 40px' }}
//         >
//           <div className="flex justify-center items-center w-full h-full" style={{ minHeight: 'calc(100vh - 200px)', maxHeight: 'calc(100vh - 200px)' }}>
//             <img
//               src={modalImages[startIndex]}
//               alt={modalTitle}
//               className="max-w-full max-h-full object-contain select-none"
//               style={{
//                 transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
//                 transformOrigin: "center center",
//                 transition: isDragging ? 'none' : 'transform 0.3s ease-out',
//               }}
//               draggable={false}
//             />
//           </div>
//         </div>

//         {/* Navigation Arrows */}
//         {modalImages.length > 1 && (
//           <>
//             <button onClick={(e) => { e.stopPropagation(); setStartIndex(prev => prev === 0 ? modalImages.length - 1 : prev - 1); }}
//               className="absolute left-5 top-1/2 transform -translate-y-1/2 z-[100001] w-12 h-12 flex items-center justify-center rounded-full bg-black bg-opacity-70 text-white hover:bg-opacity-90 transition shadow-lg text-xl font-bold cursor-pointer">‹</button>
//             <button onClick={(e) => { e.stopPropagation(); setStartIndex(prev => prev === modalImages.length - 1 ? 0 : prev + 1); }}
//               className="absolute right-5 top-1/2 transform -translate-y-1/2 z-[100001] w-12 h-12 flex items-center justify-center rounded-full text-white hover:bg-opacity-90 transition shadow-lg text-xl font-bold cursor-pointer">›</button>
//           </>
//         )}

//         {/* Bottom Close Button */}
//         <button
//           onClick={(e) => { e.stopPropagation(); closeModal(); }}
//           className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-36 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-300 z-[100001] text-sm font-semibold cursor-pointer border border-white/20 backdrop-blur-sm"
//         >
//           Close Modal
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectsModal;
import React, { useState, useRef, useEffect } from "react";
import { github } from "../assets";

const ProjectsModal = ({
  modalOpen,
  closeModal,
  modalImages,
  modalTitle,
  modalGithub,
  startIndex,
  setStartIndex,
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0, startX: 0, startY: 0, offsetX: 0, offsetY: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const currentMedia = modalImages[startIndex];
  const isVideo = currentMedia && (currentMedia.endsWith(".mp4") || currentMedia.endsWith(".webm"));

  // Video autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (isVideo && video) {
      video.play().catch(() => {});
      video.muted = isMuted;
      setIsPlaying(!video.paused);
    }
    setZoom(1);
    setPan({ x: 0, y: 0, startX: 0, startY: 0, offsetX: 0, offsetY: 0 });
  }, [startIndex, isVideo, isMuted]);

  // Zoom handlers
  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoom((z) => Math.min(z + 0.2, 3));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoom((z) => Math.max(z - 0.2, 1));
    setPan({ x: 0, y: 0, startX: 0, startY: 0, offsetX: 0, offsetY: 0 });
  };

  // Drag / Pan handlers
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setPan((p) => ({ ...p, startX: e.clientX, startY: e.clientY, offsetX: p.x, offsetY: p.y }));
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - pan.startX;
    const dy = e.clientY - pan.startY;
    setPan((p) => ({ ...p, x: p.offsetX + dx, y: p.offsetY + dy }));
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setPan((p) => ({ ...p, startX: touch.clientX, startY: touch.clientY, offsetX: p.x, offsetY: p.y }));
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const dx = touch.clientX - pan.startX;
    const dy = touch.clientY - pan.startY;
    setPan((p) => ({ ...p, x: p.offsetX + dx, y: p.offsetY + dy }));
  };

  const handleTouchEnd = () => setIsDragging(false);

  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-[99999] flex justify-center items-center" onClick={closeModal}>
      <div
        className="relative w-full h-full flex flex-col justify-center items-center"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close Button */}
        <button onClick={(e) => { e.stopPropagation(); closeModal(); }} className="absolute top-5 right-5 w-14 h-14 flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-[100001] text-xl font-bold cursor-pointer border-2 border-white/20 backdrop-blur-sm">✖</button>

        {/* GitHub */}
        {modalGithub && (
          <div onClick={(e) => { e.stopPropagation(); window.open(modalGithub, "_blank"); }} className="absolute top-5 left-5 black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer shadow-lg z-[100001] hover:scale-110 transition">
            <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
          </div>
        )}

        {/* Zoom */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-3 z-[100001]">
          <button onClick={handleZoomIn} className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:scale-110 transition text-lg font-bold">➕</button>
          <button onClick={handleZoomOut} className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white shadow-lg hover:scale-110 transition text-lg font-bold">➖</button>
        </div>

        {/* Media Counter */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-[100001]">
          <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">{startIndex + 1} / {modalImages.length}</div>
        </div>

        {/* Media Viewer */}
        <div className="flex-1 w-full flex justify-center items-center overflow-hidden">
          {isVideo ? (
            <div className="flex justify-center items-center w-full h-full" style={{ transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`, transformOrigin: "center center", transition: isDragging ? "none" : "transform 0.3s ease-out" }}>
              <video ref={videoRef} src={currentMedia} className="w-full max-h-[90vh] object-contain bg-black select-none" draggable={false} muted={isMuted} controls={false} autoPlay />
            </div>
          ) : (
            <img src={currentMedia} alt={modalTitle} className="max-w-full max-h-full object-contain select-none" style={{ transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`, transformOrigin: "center center", transition: isDragging ? "none" : "transform 0.3s ease-out" }} draggable={false} />
          )}
        </div>

        {/* Video Controls */}
        {isVideo && (
          <div className="absolute bottom-36 right-6 flex flex-col gap-3 z-[100001]">
            <button onClick={togglePlayPause} className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:scale-110 transition text-lg font-bold cursor-pointer">{isPlaying ? "⏸" : "▶"}</button>
            <button onClick={toggleMute} className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 text-white shadow-lg hover:scale-110 transition text-lg font-bold cursor-pointer">{isMuted ? "🔇" : "🔊"}</button>
          </div>
        )}

        {/* Navigation */}
        {modalImages.length > 1 && <>
          <button onClick={(e) => { e.stopPropagation(); setStartIndex(prev => prev === 0 ? modalImages.length - 1 : prev - 1); }} className="absolute left-5 top-1/2 transform -translate-y-1/2 z-[100001] w-12 h-12 flex items-center justify-center rounded-full bg-black bg-opacity-70 text-white hover:bg-opacity-90 transition shadow-lg text-xl font-bold cursor-pointer">‹</button>
          <button onClick={(e) => { e.stopPropagation(); setStartIndex(prev => prev === modalImages.length - 1 ? 0 : prev + 1); }} className="absolute right-5 top-1/2 transform -translate-y-1/2 z-[100001] w-12 h-12 flex items-center justify-center rounded-full text-white hover:bg-opacity-90 transition shadow-lg text-xl font-bold cursor-pointer">›</button>
        </>}

        {/* Bottom Close */}
        <button onClick={(e) => { e.stopPropagation(); closeModal(); }} className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-36 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-300 z-[100001] text-sm font-semibold cursor-pointer border border-white/20 backdrop-blur-sm">Close Modal</button>
      </div>
    </div>
  );
};

export default ProjectsModal;
