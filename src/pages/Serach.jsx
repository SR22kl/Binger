import ContentWrapper from "@/components/ContentWrapper";
import MediaCard from "@/components/MediaCard";
import Navbar from "@/components/Navbar";
import PaginationEx from "@/components/PaginationEx";
import Spinner from "@/components/Spinner";
import useFetch from "@/hook/useFetch";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import noResults from "../assets/no-results.png";
import Img from "@/components/LazyImag";

const Serach = () => {
  const { query } = useParams();
  // console.log(query)
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const { data, loading } = useFetch(
    `/search/multi?query=${query}&page=${page}`
  );

  // console.log(data);

  return (
    <>
      <Navbar />
      <div id="searchPage">
        {loading && <Spinner id="loader" />}
        {!loading && (
          <ContentWrapper>
            {data?.results?.length > 0 ? (
              <>
                <div className="flex justify-between mb-[30px]" id="pageHeader">
                  <div
                    className="text-white text-[20px] md:text-[30px] font-mono"
                    id="pageTitel"
                  >
                    {`Search ${
                      data?.total_results > 1 ? "results" : "result"
                    } for '${query}'`}
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-[10px] mt-3">
                  {data?.results.map((item, index) => {
                    if (item.media_type === "person") return;
                    return (
                      <MediaCard key={index} data={item} fromSearch={true} />
                    );
                  })}
                </div>
                {data?.total_results > 20 && (
                  <div className="flex items-center justify-center mt-[20px] w-full h-full rounded-lg ">
                    <div className="bg-gradient-to-t from-blue-500 to-cyan-500 border rounded-lg">
                      <PaginationEx
                        currentPage={page}
                        onPageChange={handlePageChange}
                      />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div id="resultSection">
                  <span className="text-white font-mono text-[16px] md:text-[24px]" id="resultNotFound">{`Sorry, Results for "${query}" not found!`}</span>
                  <Img src={noResults} />
                </div>
              </>
            )}
          </ContentWrapper>
        )}
      </div>
    </>
  );
};

export default Serach;
