import ContentWrapper from "@/components/ContentWrapper";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const MediaPlayer = () => {
  const { playerId } = useParams();

  const movieUrl = `https://vidsrc.xyz/embed/movie/${playerId}`;

  return (
    <>
      <Navbar />
      <ContentWrapper>
        <div className="flex items-center size-full  justify-center mb-[25px] mt-[40px]">
          <div className="border rounded">
            <iframe
              title="movie-player"
              width="100%"
              height="auto"
              src={movieUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg w-[360px] h-[220px] md:w-[800px] md:h-[450px]"
            />
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default MediaPlayer;
