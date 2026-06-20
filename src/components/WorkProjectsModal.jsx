import React, { useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaMinus,
  FaPause,
  FaPlay,
  FaPlus,
  FaTimes,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

import { github } from "../assets";

const isVideoAsset = (item = "") => item.endsWith(".mp4") || item.endsWith(".webm");

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
  const [pan, setPan] = useState({
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const currentMedia = modalImages[startIndex];
  const isVideo = isVideoAsset(currentMedia);

  useEffect(() => {
    const video = videoRef.current;
    if (isVideo && video) {
      video.muted = isMuted;
      video.play().catch(() => {});
      setIsPlaying(!video.paused);
    }

    setZoom(1);
    setPan({ x: 0, y: 0, startX: 0, startY: 0, offsetX: 0, offsetY: 0 });
  }, [startIndex, isVideo, isMuted]);

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoom((value) => Math.min(value + 0.2, 3));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoom((value) => Math.max(value - 0.2, 1));
    if (zoom <= 1.2) {
      setPan({ x: 0, y: 0, startX: 0, startY: 0, offsetX: 0, offsetY: 0 });
    }
  };

  const handleMouseDown = (e) => {
    if (zoom <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    setPan((value) => ({
      ...value,
      startX: e.clientX,
      startY: e.clientY,
      offsetX: value.x,
      offsetY: value.y,
    }));
  };

  const handleMouseMove = (e) => {
    if (!isDragging || zoom <= 1) return;
    const dx = e.clientX - pan.startX;
    const dy = e.clientY - pan.startY;
    setPan((value) => ({
      ...value,
      x: value.offsetX + dx,
      y: value.offsetY + dy,
    }));
  };

  const handleTouchStart = (e) => {
    if (zoom <= 1) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setPan((value) => ({
      ...value,
      startX: touch.clientX,
      startY: touch.clientY,
      offsetX: value.x,
      offsetY: value.y,
    }));
  };

  const handleTouchMove = (e) => {
    if (!isDragging || zoom <= 1) return;
    const touch = e.touches[0];
    const dx = touch.clientX - pan.startX;
    const dy = touch.clientY - pan.startY;
    setPan((value) => ({
      ...value,
      x: value.offsetX + dx,
      y: value.offsetY + dy,
    }));
  };

  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.muted = false;
      setIsMuted(false);
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
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050816]/95 backdrop-blur-xl"
      onClick={closeModal}
    >
      <div
        className="relative flex h-full w-full flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
          className="absolute right-5 top-5 z-[100001] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur-md transition hover:scale-110 hover:bg-[#915EFF]/50"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {modalGithub && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(modalGithub, "_blank");
            }}
            className="absolute left-5 top-5 z-[100001] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-[#915EFF]/50"
            aria-label="Open source code"
          >
            <img src={github} alt="source code" className="h-1/2 w-1/2 object-contain" />
          </button>
        )}

        <div className="absolute left-1/2 top-5 z-[100001] -translate-x-1/2">
          <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
            {startIndex + 1} / {modalImages.length}
          </div>
        </div>

        <div className="flex h-full w-full items-center justify-center overflow-hidden px-4 py-24">
          {isVideo ? (
            <video
              ref={videoRef}
              src={currentMedia}
              className="max-h-full max-w-full select-none bg-black object-contain"
              style={{
                transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
                transformOrigin: "center center",
                transition: isDragging ? "none" : "transform 0.3s ease-out",
              }}
              draggable={false}
              muted={isMuted}
              controls={false}
              autoPlay
            />
          ) : (
            <img
              src={currentMedia}
              alt={modalTitle}
              className="max-h-full max-w-full select-none object-contain"
              style={{
                transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
                transformOrigin: "center center",
                transition: isDragging ? "none" : "transform 0.3s ease-out",
              }}
              draggable={false}
            />
          )}
        </div>

        <div className="absolute bottom-6 right-6 z-[100001] flex flex-col gap-3">
          <button
            onClick={handleZoomIn}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-[#00cea8]/40"
            aria-label="Zoom in"
          >
            <FaPlus />
          </button>
          <button
            onClick={handleZoomOut}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-[#ff6ec7]/40"
            aria-label="Zoom out"
          >
            <FaMinus />
          </button>
        </div>

        {isVideo && (
          <div className="absolute bottom-36 right-6 z-[100001] flex flex-col gap-3">
            <button
              onClick={togglePlayPause}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-[#915EFF]/50"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button
              onClick={toggleMute}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-[#915EFF]/50"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>
        )}

        {modalImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setStartIndex((value) => (value === 0 ? modalImages.length - 1 : value - 1));
              }}
              className="absolute left-5 top-1/2 z-[100001] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md transition hover:bg-[#915EFF]/50"
              aria-label="Previous media"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setStartIndex((value) => (value === modalImages.length - 1 ? 0 : value + 1));
              }}
              className="absolute right-5 top-1/2 z-[100001] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md transition hover:bg-[#915EFF]/50"
              aria-label="Next media"
            >
              <FaChevronRight />
            </button>
          </>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
          className="absolute bottom-6 left-1/2 z-[100001] flex h-12 w-36 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-gradient-to-r from-[#00cea8] via-[#915EFF] to-[#ff6ec7] text-sm font-semibold text-white shadow-2xl transition hover:scale-105"
        >
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default ProjectsModal;
