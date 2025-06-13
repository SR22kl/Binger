import React from "react";
import profile from "..//assets/avatar.png";
import ContentWrapper from "@/components/ContentWrapper";
import { useSelector } from "react-redux";
import Img from "@/components/LazyImag";
import { Skeleton } from "@/components/ui/skeleton";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  //   console.log(data);

  const skeleton = () => {
    return (
      <>
        <div id="skItem">
          <Skeleton
            className="w-[125px] h-[165px] rounded-lg mb-[15px] md:w-[175px] md:h-[215px] md:mb-[25px] bg-blue-900"
            id="pictureSkelton"
          />
          <Skeleton
            className="w-full h-[20px] rounded-[10px] mb-[10px] bg-blue-900"
            id="row1Skelton"
          />
          <Skeleton
            className="w-[75%] h-[20px] rounded-[10px] mx-auto bg-blue-900"
            id="row2Skeleton"
          />
        </div>
      </>
    );
  };
  return (
    <>
      <div className="relative mb-[30px]" id="castSection">
        <ContentWrapper>
          <div className="text-white text-[24px] mb-[25px]" id="sectionHeading">
            The Cast:
          </div>
          {!loading ? (
            <>
              <div
                className="flex gap-[20px] md:gap-[10px] overflow-y-hidden -mr-[20px] -ml-[20px] px-[20px] md:m-0 md:p-0"
                id="listItems"
              >
                {data?.map((i) => {
                  let imgUrl = i?.profile_path
                    ? url?.profile + i?.profile_path
                    : profile;

                  return (
                    <>
                      <div
                        className="text-center text-white hover:opacity-80 transition-opacity duration-1000"
                        id="listItem"
                      >
                        <div
                          className="w-[125px] h-[165px] rounded-lg overflow-hidden mb-[15px] md:w-[175px] md:h-[215px] md:mb-[25px]"
                          id="profileImg"
                        >
                          <Img
                            className="w-full h-full object-cover object-top block"
                            src={imgUrl}
                          />
                        </div>
                        <div
                          className="text-[14px] leading-[20px] font-semibold md:text-[18px] md:leading-[24px]"
                          id="name"
                        >
                          {i?.name || "NA"}
                        </div>
                        <div
                          className="text-[12px] leading-[20px] opacity-50 md:text-[16px] md:leading-[24px]"
                          id="character"
                        >
                          {i?.character || "NA"}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          ) : (
            <div
              className="flex gap-[20px] md:gap-[10px] overflow-y-hidden -mr-[20px] -ml-[20px] px-[20px] md:m-0 md:p-0"
              id="castSkelton"
            >
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
            </div>
          )}
        </ContentWrapper>
      </div>
    </>
  );
};

export default Cast;
