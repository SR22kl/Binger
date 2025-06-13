import ContentWrapper from "@/components/ContentWrapper";
import DetailSkeleton from "@/components/DetailSkeleton";
import Genres from "@/components/Genres";
import Img from "@/components/LazyImag";
import RatingCircle from "@/components/RatingCircle";
import VideoPopUp from "@/components/VideoPopUp";
import useFetch from "@/hook/useFetch";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import noposter from "../assets/no-poster.png";
import playbtn from "../assets/playbtn.gif";
import watchbtn from "../assets/play.gif";
import { Button } from "@/components/ui/button";
const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const navigate = useNavigate();

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  console.log(data);

  const { url } = useSelector((state) => state.home);
  const Genre = data?.genres?.map((g) => g.id);
  //   console.log(Genres)

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  const director = crew?.filter((f) => f?.job === "Director");
  const writer = crew?.filter((f) => f?.job === "Story" || f?.job === "Writer");

  return (
    <>
      <div className="w-full  bg-[#04152D] pt-[150px] mb-[50px] md:mb-0 md:pt-[120px] md:min-h-[700px]">
        {!loading ? (
          <>
            {!!data && (
              <React.Fragment>
                <div className="w-full h-full absolute top-0 left-0 opacity-10 overflow-hidden">
                  <Img
                    className="w-full h-full object-cover object-center"
                    src={url?.backdrop + data?.backdrop_path}
                    alt={data?.id}
                  />
                </div>
                <div className="md:flex hidden w-full h-[350px] absolute bottom-0 left-0 bg-gradient-to-b from-transparent via-transparent to-blue-900 "></div>
                <ContentWrapper>
                  <div
                    className="flex flex-col  relative gap-[25px] md:gap-[50px] md:flex-row"
                    id="content"
                  >
                    <div className="flex-shrink-0" id="left">
                      {data?.poster_path ? (
                        <Img
                          className="w-full block rounded-[12px] md:max-w-[350px]"
                          src={url.backdrop + data?.poster_path}
                        />
                      ) : (
                        <Img src={noposter} />
                      )}
                    </div>
                    <div className="text-white text-center " id="right">
                      <div
                        className="text-3xl md:text-4xl md:text-left"
                        id="title"
                      >
                        {`${data?.name || data?.title} (${dayjs(
                          data?.release_date
                        ).format("YYYY")})`}
                      </div>
                      <div
                        className="text-[16px] leading-[24px] mb-[15px] md:text-left font-sans italic opacity-50 md:text-xl"
                        id="subtitle"
                      >
                        {data?.tagline}
                      </div>
                      <Genres
                        className="flex relative items-center justify-center  md:justify-normal text-[13px] md:text-[15px] text-white gap-[8px] md:gap-[10px] opacity-80 mb-[15px]"
                        data={Genre}
                      />
                      <div
                        className="flex flex-row w-full gap-[30px] justify-center md:justify-normal mb-[15px]"
                        id="row"
                      >
                        <RatingCircle
                          className={`bg-transparent rounded-[50%] p-[2px] w-[18%] relative text-white md:w-[10%] md:mt-[6px] mt-[5px] opacity-80`}
                          rating={data?.vote_average || "NA"}
                        />
                        <div
                          className="flex items-center gap-[15px] md:text-left cursor-pointer justify-center text-center"
                          id="playbtn"
                          onClick={() => {
                            setShow(true);
                            setVideoId(video?.key);
                          }}
                        >
                          <Img
                            className="max-w-[65px] md:mt-1 md:max-w-[75px]"
                            src={playbtn}
                          />
                          <span className="text-[16px] text-gray-400 md:text-[25px] hover:text-red-400">
                            Watch Trailer!
                          </span>
                        </div>
                      </div>

                      <div
                        className="flex flex-col w-full mb-[20px] text-left md:mb-[10px]"
                        id="overview"
                      >
                        <h2 className="text-2xl md:text-3xl font-semibold text-white md:mb-[5px]">
                          Overview
                        </h2>
                        <span className="md:text-base md:font-sans md:p-1 opacity-80">
                          {data?.overview || "NA"}
                        </span>
                      </div>
                      <div
                        className="flex gap-[5px] md:gap-[20px] border-b-[2px] border-b-[#ffffff19] md:py-2"
                        id="info"
                      >
                        {data?.status && (
                          <div
                            className="flex flex-wrap mr-[10px] gap-[5px]"
                            id="infoItem"
                          >
                            <span className="font-semibold ">Status: </span>
                            <span className="opacity-60">{data?.status}</span>
                          </div>
                        )}
                        {data?.release_date && (
                          <div
                            className="flex flex-wrap mr-[10px] gap-[5px]"
                            id="infoItem"
                          >
                            <span className="font-semibold">
                              Release Date:{" "}
                            </span>
                            <span className="opacity-60">
                              {dayjs(data?.release_date).format("MMM D, YYYY")}
                            </span>
                          </div>
                        )}
                        {data?.runtime && (
                          <div
                            className="flex flex-wrap mr-[10px] gap-[5px]"
                            id="infoItem"
                          >
                            <span className="font-semibold">Runtime: </span>
                            <span className="opacity-60">
                              {toHoursAndMinutes(data?.runtime)}
                            </span>
                          </div>
                        )}
                      </div>
                      {director?.length > 0 && (
                        <div
                          className="flex flex-wrap gap-[5px] border-b-[2px] border-b-[#ffffff19] py-1"
                          id="directorInfo"
                        >
                          <span className="font-semibold">Director:</span>
                          <span>
                            {director.map((d, i) => (
                              <span className="opacity-60" key={i}>
                                {d.name}
                                {director.length - 1 !== i && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      )}
                      {writer?.length > 0 && (
                        <div
                          className="flex flex-wrap gap-[5px] border-b-[2px] border-b-[#ffffff19] py-1"
                          id="writerInfo"
                        >
                          <span className="font-semibold">Writer: </span>
                          <span className="opacity-60">
                            {writer?.map((w, i) => (
                              <span key={i}>
                                {w.name}
                                {writer.length - 1 !== i && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      )}
                      {data?.created_by?.length > 0 && (
                        <div
                          className="flex flex-wrap gap-[5px] border-b-[2px] border-b-[#ffffff19] py-1"
                          id="creatorInfo"
                        >
                          <span className="font-semibold">Creator: </span>
                          <span className="opacity-60">
                            {data?.created_by.map((c, i) => (
                              <span key={i}>
                                {c.name}
                                {data?.created_by.length - 1 !== i && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      )}
                      <div
                        className="flex w-full justify-center mt-[14px] md:justify-normal mb-[15px] md:mt-[20px]"
                        id="row"
                      >
                        <div
                          className="flex items-center gap-[5px] md:text-left cursor-pointer justify-center text-center hover:scale-105 duration-300 ease-in-out"
                          id="playbtn"
                          onClick={() =>
                            navigate(`/player/${mediaType}/${data?.id}`)
                          }
                        >
                          <Button className="font-semibold text-[16px] md:text-[18px] bg-gradient-to-t from-blue-700 to-cyan-600 ">
                            Watch Now !
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <VideoPopUp
                    show={show}
                    setShow={setShow}
                    videoId={videoId}
                    setVideoId={setVideoId}
                  />
                </ContentWrapper>
              </React.Fragment>
            )}
          </>
        ) : (
          <>
            <DetailSkeleton />
          </>
        )}
      </div>
    </>
  );
};

export default DetailsBanner;
