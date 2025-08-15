import { Button } from "@/components/ui/button";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReviewCard from "@/components/common/ReviewCard";
import { reviewsData } from "@/app/page";
import Link from "next/link";

const ReviewsContent = () => {
  return (
    <section>
      <div className="flex items-center justify-between flex-col sm:flex-row mb-5 sm:mb-6">
        {/* Heading */}
        <div className="flex items-center mb-4 sm:mb-0">
          <h3 className="text-xl sm:text-2xl font-bold text-[#F57D1F] mr-2">
            All Reviews
          </h3>
          <span className="text-sm sm:text-base text-black/60">(451)</span>
        </div>

        {/* Sort + Write Button */}
        <div className="flex items-center space-x-2.5">
          <Select defaultValue="latest">
            <SelectTrigger className="min-w-[120px] font-medium text-xs sm:text-base px-4 py-3 sm:px-5 sm:py-4 text-black bg-[#F0F0F0] border-none rounded-full h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="most-relevant">Most Relevant</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>

          <Button
            type="button"
            className="sm:min-w-[166px] px-4 py-3 sm:px-5 sm:py-4 rounded-full bg-[#F57D1F] hover:bg-[#e86f12] text-white font-medium text-xs sm:text-base h-12"
          >
            Write a Review
          </Button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 sm:mb-9">
        {reviewsData.map((review) => (
          <ReviewCard key={review.id} data={review} isAction isDate />
        ))}
      </div>

      {/* Load More */}
      <div className="w-full px-4 sm:px-0 text-center">
        <Link
          href="#"
          className="inline-block w-[230px] px-11 py-4 border rounded-full text-[#F57D1F] border-[#F57D1F] hover:bg-[#F57D1F] hover:text-white transition-all font-medium text-sm sm:text-base"
        >
          Load More Reviews
        </Link>
      </div>
    </section>
  );
};

export default ReviewsContent;
