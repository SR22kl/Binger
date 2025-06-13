import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import noPoster from "../assets/no-poster.png";
import Img from "./LazyImag";
import RatingCircle from "./RatingCircle";
import Genres from "./Genres";
import dayjs from "dayjs";

const MediaCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const posterUrl = data?.poster_path
    ? url.poster + data?.poster_path
    : noPoster;

  return (
    <>
      <div
        className="flex flex-col border cursor-pointer rounded-lg mb-[15px] relative hover:scale-105 duration-300 ease-in-out"
        id="mtCard"
        onClick={() =>
          navigate(`/details/${data?.media_type || mediaType}/${data?.id}`)
        }
      >
        <div className="relative" id="posterBlock">
          <Img
            className="rounded-lg w-[100%] h-[100%] top-0 left-0 overflow-hidden"
            src={posterUrl}
            id="posterImg"
          />
          {!fromSearch && (
            <React.Fragment>
              <RatingCircle
                className={
                  "w-[30%] bg-white rounded-[50%]  absolute ml-[10px] -mt-[30px]"
                }
                rating={data?.vote_average.toFixed(1) || "NA"}
              />
              <Genres
                className={
                  "flex gap-[5px] text-white text-[12px]  md:text-[14px] absolute top-3 right-2"
                }
                data={data?.genre_ids.slice(0, 2)}
              />
            </React.Fragment>
          )}
        </div>
        <div
          className="text-white text-center mt-[40px] flex flex-col"
          id="textBlock"
        >
          <span id="titel">{data?.title || data?.name}</span>
          <span className="opacity-60" id="date">
            {dayjs(data?.release_date).format("MMM D, YYYY")}
          </span>
        </div>
      </div>
    </>
  );
};

export default MediaCard;
