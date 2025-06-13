import ContentWrapper from "@/components/ContentWrapper";
import Img from "@/components/LazyImag";
import React, { useState } from "react";
import playBtn from "../assets/play.gif";
import VideoPopUp from "@/components/VideoPopUp";
import { Skeleton } from "@/components/ui/skeleton";

const VideoSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  // console.log(data);

  const skeleton = () => {
    return (
      <>
        <div id="skItem">
          <div id="thumSk">
            <Skeleton className=" w-[135px] h-[80px] mb-[15px] md:w-[250px] md:h-[150px] md:mb-[15px] overflow-hidden bg-blue-900" />
          </div>
          <div id="row1Sk">
            <Skeleton className="md:w-[250px] h-[20px] bg-blue-900 mb-[10px]" />
          </div>
          <div id="row2Sk">
            <Skeleton className="md:w-[250px] h-[20px] bg-blue-900" />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="relative mb-[50px]" id="videoSection">
        <ContentWrapper>
          <div className="text-white text-[24px] mb-[25px]" id="sectionHeading">
            {data?.results[0]?.key ? (
              <>
                <span>Related Video:</span>
              </>
            ) : (
              <span>{""}</span>
            )}
          </div>
          {!loading ? (
            <>
              <div
                className="flex gap-[10px] md:gap-[20px] -mr-[20px] -ml-[20px] px-[15px] overflow-y-hidden md:m-0 md:p-0 cursor-pointer"
                id="videos"
              >
                {data?.results?.map((v) => (
                  <div
                    key={v.id}
                    className=" text-white text-center md:px-[5px] hover:opacity-70 transition-opacity duration-1000"
                    id="videoItem"
                    onClick={() => {
                      setVideoId(v?.key);
                      setShow(true);
                    }}
                  >
                    <div class="relative w-[135px] h-[80px] mb-[15px] md:w-[250px] md:h-[150px] md:mb-[15px] overflow-hidden">
                      <div class="absolute inset-0 w-full h-full rounded-lg">
                        <Img
                          src={
                            `https://img.youtube.com/vi/${v.key}/mqdefault.jpg` ||
                            "NA"
                          }
                          className="border w-full h-full rounded-lg object-cover z-0"
                          id="trailerThub"
                        />
                      </div>
                      <div className="opacity-80">
                        <Img
                          className="w-[40px] mt-[20px] md:w-[70px] md:mt-[35px] z-10"
                          src={playBtn}
                          id="playbtn"
                        />
                      </div>
                    </div>

                    <div
                      className="flex justify-center md:w-[250px] text-[12px] md:text-[16px] md:leading-[24px]"
                      id="videoTitle"
                    >
                      {v?.name || "NA"}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex gap-[10px] md:gap-[20px] -mr-[20px] -ml-[20px] px-[15px] overflow-y-hidden md:m-0 md:p-0">
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
            </div>
          )}
        </ContentWrapper>
        <VideoPopUp show={show} setShow={setShow} videoId={videoId} />
      </div>
    </>
  );
};

export default VideoSection;
