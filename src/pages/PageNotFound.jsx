import ContentWrapper from "@/components/ContentWrapper";
import Navbar from "@/components/Navbar";
import React from "react";
import noPgae from "../assets/no-results.png"
import Img from "@/components/LazyImag";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <ContentWrapper>
        <h1 className="text-white font-mono text-[16px] md:text-[24px]">PageNotFound</h1>
        <Img className="md:w-full md:h-full" src={noPgae}/>
      </ContentWrapper>
    </>
  );
};

export default PageNotFound;
