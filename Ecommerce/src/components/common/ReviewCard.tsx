import React from "react";
import Rating from "../ui/Rating";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { Button } from "../ui/button";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Review } from "@/types/review.types";
import { cn } from "@/lib/utils";

type ReviewCardProps = {
  blurChild?: React.ReactNode;
  isAction?: boolean;
  isDate?: boolean;
  data: Review;
  className?: string;
};

const ReviewCard = ({
  blurChild,
  isAction = false,
  isDate = false,
  data,
  className,
}: ReviewCardProps) => {
  return (
    <div
      className={cn([
        "relative bg-white flex flex-col items-start aspect-auto border border-[#e0e0e0] rounded-[20px] p-6 sm:px-8 sm:py-7 overflow-hidden shadow-sm transition hover:shadow-md",
        className,
      ])}
    >
      {blurChild && blurChild}

      {/* Rating & Action */}
      <div className="w-full flex items-center justify-between mb-3 sm:mb-4">
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          size={23}
          readonly
        />
        {isAction && (
          <Button variant="ghost" size="icon">
            <IoEllipsisHorizontal className="text-[#777] text-2xl" />
          </Button>
        )}
      </div>

      {/* User */}
      <div className="flex items-center mb-2 sm:mb-3">
        <strong className="text-[#222] sm:text-xl mr-1">{data.user}</strong>
        <IoIosCheckmarkCircle className="text-[#74E291] text-xl sm:text-2xl" />
      </div>

      {/* Content */}
      <p className="text-sm sm:text-base text-[#444] leading-relaxed">{data.content}</p>

      {/* Date */}
      {isDate && (
        <p className="text-[#888] text-sm font-medium mt-4 sm:mt-6">
          Posted on {data.date}
        </p>
      )}
    </div>
  );
};

export default ReviewCard;
