import React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

function DetailSkeleton() {
  return (
    <div className="w-full bg-[#04152D] pt-[1px] mb-[50px] md:mb-0 md:pt-[5px] md:min-h-[700px]">
      <div className="w-full h-full absolute top-0 left-0 opacity-10 overflow-hidden">
        <div className="w-full h-full object-cover object-center bg-gray-700 animate-pulse" />
      </div>
      <div className="md:flex hidden w-full h-[350px] absolute bottom-0 left-0 bg-gradient-to-b from-transparent via-transparent to-blue-900"></div>
      <div className="container">
        <div className="flex flex-col relative gap-[25px] md:gap-[50px] items-center md:px-52 md:flex-row">
          <div className="flex-shrink-0">
            <Skeleton className="w-[280px] h-[25rem] bg-blue-900 rounded-[12px] md:w-[350px] md:h-[480px] " />
          </div>
          <div className="text-white text-center">
            <h3 className="text-3xl md:text-4xl md:text-left">
              <Skeleton className="w-64 h-6  bg-blue-900" />
            </h3>
            <p className="text-[16px] leading-[24px] mb-[15px] md:text-left font-sans italic opacity-50">
              <Skeleton className="w-48 h-3 bg-blue-900" />
            </p>
            <div className="flex flex-row w-full gap-[30px] justify-center md:justify-normal mb-[15px]">
              <Skeleton className="h-10 w-10 rounded-full bg-blue-900" />
              <div className="flex items-center gap-[15px] md:text-left cursor-pointer justify-center text-center">
                <Skeleton className="h-6 w-6 bg-blue-900 rounded-full" />
                <span className="text-[20px] text-gray-400 md:text-[25px]">
                  <Skeleton className="w-12 h-4 bg-blue-900" />
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full mb-[20px] text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                <Skeleton className="w-48 h-4 bg-blue-900" />
              </h2>
              <p className="md:text-base md:font-sans md:p-1 opacity-50">
                <Skeleton className="w-64 h-4 bg-blue-900" />
              </p>
            </div>
            <div className="flex gap-[5px] md:gap-[20px] border-b-[2px] border-b-[#ffffff19] md:py-2">
              <div className="flex flex-wrap mr-[10px] gap-[5px]">
                <span className="font-semibold">
                  <Skeleton className="w-24 h-4 bg-blue-900" />
                </span>
              </div>
              <div className="flex flex-wrap mr-[10px] gap-[5px]">
                <span className="font-semibold">
                  <Skeleton className="w-24 h-4 bg-blue-900" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSkeleton;
