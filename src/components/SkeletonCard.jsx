import { Skeleton } from "./ui/skeleton";

const SkeletonCard = ({ aspect = "media", title, rating }) => {
  return (
    <div className="flex flex-col space-y-3 ">
      {/* Image placeholder */}
      <Skeleton
        className={`h-[250px] w-[125px] md:h-[425px] md:w-[240px] rounded-xl px-[10px] bg-blue-900 ${
          aspect === "media" ? "aspect-[16/9]" : ""
        }`}
      />

      {/* Title and Rating placeholders */}
      <div className="space-y-2">
        {title && <Skeleton className="h-5 md:w-[240px] w-[125px]  bg-blue-900" />}
        {rating && <Skeleton className="h-5 md:w-[240px] w-[125px] bg-blue-900" />}
      </div>
    </div>
  );
};

export default SkeletonCard;
