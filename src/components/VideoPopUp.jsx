import React, { useState, useRef } from "react";
import ReactPlayer from "react-player/youtube";

const VideoPopUp = ({ show, setShow, videoId }) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 ease-in-out ${
            show && "opacity-100"
          }`}
        >
          <div
            className={`relative border w-[400px] md:w-[750px] h-[200px] md:h-[400px] bg-transparent rounded-lg  transform scale-95 opacity-0 transition-all duration-300 ease-in-out ${
              show && "scale-100 opacity-100"
            }`}
          >
            <button
              className="absolute -top-8 md:-right-4 right-0 text-white hover:opacity-80"
              onClick={handleClose}
            >
              ❌
            </button>
            <div className="w-full h-full border-gray-300 rounded-lg overflow-hidden">
              <ReactPlayer
                url={`https://www.youtube.com/embed/${
                  videoId || "No trailer available"
                }`}
                width="100%"
                height="100%"
                controls
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopUp;
