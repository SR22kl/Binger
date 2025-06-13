import ContentWrapper from "@/components/ContentWrapper";
import MediaCard from "@/components/MediaCard";
import Navbar from "@/components/Navbar";
import PaginationEx from "@/components/PaginationEx";
import { Skeleton } from "@/components/ui/skeleton";
import useFetch from "@/hook/useFetch";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";

let filters = {};

const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

const Explore = () => {
  const { mediaType } = useParams();
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null); // State to store selected genre
  const [sortBy, setSortBy] = useState(null); // State to store selected sort option

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const { data: genresData } = useFetch(`/genre/${mediaType}/list`);
  // console.log(genresData);

  const handleGenreChange = (selectedGenra) => {
    setSelectedGenre(selectedGenra ? selectedGenra.id : null);
    // Refetch data with updated filters
    const url = buildFetchUrl();
    setData(null); // Reset data state before refetching - Optional
    useFetch(url);
  };

  const handleSortByChange = (selectedOption) => {
    setSortBy(selectedOption ? selectedOption.value : null);
    // Refetch data with updated filters
    const url = buildFetchUrl();
    setData(null); // Reset data state before refetching
    useFetch(url);
  };

  const buildFetchUrl = () => {
    let url = `/discover/${mediaType}?page=${page}`;
    if (selectedGenre) {
      url += `&with_genres=${selectedGenre}`;
    }
    if (sortBy) {
      url += `&sort_by=${sortBy}`;
    }
    return url;
  };

  const { data, loading } = useFetch(buildFetchUrl());
  // console.log(data);

  const ExploreSk = () => {
    return (
      <>
        <div id="skItem">
          <Skeleton
            className="w-[142px] h-[255px] rounded-lg md:w-[210px] md:h-[300px]  mb-[5px] bg-blue-900"
            id="pictureSkelton"
          />
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div id="explorePage">
        <ContentWrapper>
          <div className="flex justify-between mb-[30px]" id="pageHeader">
            <div
              className="text-white justify-center text-[15px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-mono"
              id="pageTitel"
            >
              <span>{`${
                mediaType === "tv" ? "Explore Tv-Shows" : "Explore Movies"
              }`}</span>
            </div>
            <div className="flex gap-[5px]" id="fitler">
              <Select
                name="genres"
                options={genresData?.genres}
                placeholder="Select Genres"
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                onChange={handleGenreChange}
                className="react-select-container genresDD text-[10px] md:text-[18px] font-semibold md:font-normal"
                classNamePrefix="react-select"
              />
              <Select
                name="sortby"
                options={sortbyData}
                placeholder="Sort By"
                onChange={handleSortByChange}
                className="react-select-container sortbyDD text-[10px] md:text-[18px] font-semibold md:font-normal"
                classNamePrefix="react-select"
              />
            </div>
          </div>
          {!loading ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-[10px] mt-3">
                {data?.results.map((item, index) => {
                  return (
                    <MediaCard key={index} data={item} mediaType={mediaType} />
                  );
                })}
              </div>
              <div className="flex items-center justify-center mt-[20px] w-full h-full rounded-lg ">
                <div className="bg-gradient-to-t from-blue-500 to-cyan-500 rounded-lg border">
                  <PaginationEx
                    currentPage={page}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-[10px] mt-3">
                <div className="flex flex-col">
                  <div className="md:flex hidden gap-[15px] rounded-lg mb-[20px] relative ">
                    {ExploreSk()}
                    {ExploreSk()}
                    {ExploreSk()}
                    {ExploreSk()}
                    {ExploreSk()}
                  </div>
                  <div className="md:flex hidden gap-[15px] rounded-lg mb-[20px] relative ">
                    {ExploreSk()}
                    {ExploreSk()}
                    {ExploreSk()}
                    {ExploreSk()}
                    {ExploreSk()}
                  </div>
                  <div className="md:flex hidden gap-[15px] rounded-lg mb-[20px] relative ">
                    {ExploreSk()}
                    {ExploreSk()}
                    {ExploreSk()}
                    {ExploreSk()}
                    {ExploreSk()}
                  </div>
                  <div className="md:flex hidden gap-[15px] rounded-lg mb-[20px] relative ">
                    {ExploreSk()}
                    {ExploreSk()}
                    {ExploreSk()}
                    {ExploreSk()}
                    {ExploreSk()}
                  </div>
                  <div className="md:hidden flex gap-[15px] rounded-lg mb-[20px] relative ">
                    {ExploreSk()}
                    {ExploreSk()}
                  </div>
                  <div className="md:hidden flex gap-[15px] rounded-lg mb-[20px] relative ">
                    {ExploreSk()}
                    {ExploreSk()}
                  </div>
                </div>
              </div>
            </>
          )}
        </ContentWrapper>
      </div>
    </>
  );
};

export default Explore;
