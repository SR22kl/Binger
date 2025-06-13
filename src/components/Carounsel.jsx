import dayjs from "dayjs";
import { useSelector } from "react-redux";
import Genres from "./Genres";
import Img from "./LazyImag";
import RatingCircle from "./RatingCircle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useNavigate } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";
import posterfallback from "../assets/no-poster.png";

const Carounsel = ({ data, loading, endpoint }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  return (
    <>
      <Carousel className="md:w-full max-w-[400px] md:max-w-[94rem] relative">
        <CarouselContent className="-ml-1">
          {loading
            ? // Render SkeletonCard for each CarouselItem during loading
              Array(data?.length || 6) // Use data length if available, otherwise default to 6
                .fill(null)
                .map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 basis-1/3 md:basis-1/6 px-[8px]"
                  >
                    <SkeletonCard
                      aspect="media" // Use appropriate aspect ratio for media content
                      title // Include title placeholder
                      rating // Include rating placeholder
                    />
                  </CarouselItem>
                ))
            : // Render actual content when data is loaded
              data?.map((item, index) => {
                const posterUrl = item?.poster_path
                  ? url?.poster + item?.poster_path
                  : "";

                return (
                  <CarouselItem
                    key={index}
                    className=" pl-1 basis-1/3 md:basis-1/6 px-[8px]"
                  >
                    <div
                      className="flex flex-col w-full h-full items-center justify-center border rounded-md hover:opacity-70 transition-opacity duration-1000 "
                      onClick={() =>
                        navigate(
                          `/details/${item?.media_type || endpoint}/${item?.id}`
                        )
                      }
                    >
                      <Img
                        src={posterUrl || posterfallback}
                        className="w-full h-full object-cover object-center rounded-md"
                        alt="Movie Poster"
                      />
                      <Genres
                        className={`hidden md:flex relative -top-[45px] left-8 text-white gap-[5px] text-[12px] whitespace-nowrap`}
                        data={item?.genre_ids.slice(0, 2)}
                      />
                      <RatingCircle
                        className="text-[20px] bg-white rounded-[50%] p-[2px] w-[30%] relative md:-top-10 right-8 -top-6  md:right-14 text-white md:w-[30%]"
                        rating={item?.vote_average.toFixed(1)}
                      />
                      <div className="flex flex-col w-full relative -top-2 md:-top-5 px-2 text-center ">
                        <span className="w-full text-[12px] md:text-[20px] text-white opacity-80 overflow-hidden">
                          {item?.title
                            ? item.title.length > 13
                              ? `${item.title.substring(0, 15)}...`
                              : item.title
                            : item?.name
                            ? item.name.length > 13
                              ? `${item.name.substring(0, 15)}...`
                              : item.name
                            : null}
                        </span>
                        <span className=" w-full text-[12px] text-white opacity-50">
                          {dayjs(
                            item?.release_date || item?.first_air_date
                          ).format("MMM D, YYYY")}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
        </CarouselContent>

        <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 hidden md:flex" />
        <CarouselNext className="absolute top-1/2 right-3 transform -translate-y-1/2 hidden md:flex" />
      </Carousel>
    </>
  );
};

export default Carounsel;
