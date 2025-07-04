import Navbar from "@/components/Navbar";
import React from "react";
import { useParams } from "react-router-dom";
import DetailsBanner from "./DetailsBanner";
import useFetch from "@/hook/useFetch";
import Cast from "./Cast";
import VideoSection from "./VideoSection";
import Similar from "./Similar";
import Recommendation from "./Recommendation";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  // console.log(credits)

  return (
    <>
      <Navbar className={"fixed w-full z-1 opacity-80"} />
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideoSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </>
  );
};

export default Details;
