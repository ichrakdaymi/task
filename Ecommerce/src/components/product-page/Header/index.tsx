import React from "react";
import PhotoSection from "./PhotoSection";
import { Product } from "@/types/product.types";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Rating from "@/components/ui/Rating";
import AddToCardSection from "./AddToCardSection";
import AgeRangeSelection from "./AgeRangeSelection";
import DifficultySelection from "./DifficultySelection";

const Header = ({ data }: { data: Product }) => {
  // Badge color based on age
  const getAgeRangeBadgeColor = (ageRange: string) => {
    if (ageRange.includes("3-5")) return "bg-[#74E291]/20 text-[#74E291] border-[#74E291]/30";
    if (ageRange.includes("6-8")) return "bg-blue-100 text-blue-700 border-blue-200";
    if (ageRange.includes("9-12")) return "bg-purple-100 text-purple-700 border-purple-200";
    if (ageRange.includes("13+")) return "bg-[#F57D1F]/20 text-[#F57D1F] border-[#F57D1F]/30";
    return "bg-gray-100 text-gray-700 border-gray-200";
  };

  // Badge color based on category
  const getStemCategoryColor = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes("science")) return "bg-[#74E291]/20 text-[#74E291] border-[#74E291]/30";
    if (lowerCategory.includes("tech")) return "bg-cyan-100 text-cyan-700 border-cyan-200";
    if (lowerCategory.includes("engineering")) return "bg-[#F57D1F]/20 text-[#F57D1F] border-[#F57D1F]/30";
    if (lowerCategory.includes("math")) return "bg-indigo-100 text-indigo-700 border-indigo-200";
    return "bg-gray-100 text-gray-700 border-gray-200";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Left: Images */}
      <div>
        <PhotoSection data={data} />
      </div>

      {/* Right: Details */}
      <div>
        {/* Title */}
        <h1
          className={cn([
            integralCF.className,
            "text-2xl md:text-[40px] md:leading-[40px] mb-3 capitalize text-[#F57D1F]",
          ])}
        >
          {data.title}
        </h1>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.stemCategory && (
            <span
              className={`px-3 py-1.5 rounded-full text-sm font-medium border ${getStemCategoryColor(
                data.stemCategory
              )}`}
            >
              {data.stemCategory}
            </span>
          )}
          {data.ageRange && (
            <span
              className={`px-3 py-1.5 rounded-full text-sm font-medium border ${getAgeRangeBadgeColor(
                data.ageRange
              )}`}
            >
              Ages {data.ageRange}
            </span>
          )}
          {data.educationalLevel && (
            <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200">
              {data.educationalLevel}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <Rating
            initialValue={data.rating}
            allowFraction
            SVGclassName="inline-block"
            emptyClassName="fill-gray-200"
            fillClassName="fill-[#F57D1F]"
            size={22}
            readonly
          />
          <span className="text-slate-700 text-sm ml-3">
            {data.rating.toFixed(1)}
            <span className="text-slate-500">/5</span>
          </span>
          {data.reviewCount && (
            <span className="text-slate-500 text-sm ml-2">
              ({data.reviewCount} reviews)
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2.5 mb-5">
          <span className="font-bold text-slate-900 text-2xl sm:text-[32px]">
            ${Math.round(data.price - (data.discount.percentage > 0
              ? data.price * data.discount.percentage / 100
              : data.discount.amount || 0))}
          </span>
          {(data.discount.percentage > 0 || data.discount.amount > 0) && (
            <>
              <span className="text-slate-400 line-through text-lg sm:text-xl">
                ${data.price}
              </span>
              <span className="text-xs py-1.5 px-3 rounded-full bg-[#F57D1F]/10 text-[#F57D1F] border border-[#F57D1F]/20 font-medium">
                {data.discount.percentage > 0
                  ? `-${data.discount.percentage}%`
                  : `-$${data.discount.amount}`}
              </span>
            </>
          )}
        </div>

        {/* Educational Value */}
        <div className="mb-5">
          <p className="text-sm sm:text-base text-slate-600 mb-3">
            {data.educationalValue ||
              "An engaging STEM learning experience designed to inspire curiosity and develop critical thinking skills through hands-on exploration and discovery."}
          </p>

          {/* Learning Objectives */}
          {data.learningObjectives?.length > 0 && (
            <div className="mb-3">
              <h4 className="text-sm font-semibold text-slate-800 mb-2">
                What Kids Will Learn:
              </h4>
              <ul className="text-sm text-slate-600 space-y-1">
                {data.learningObjectives.slice(0, 3).map((objective, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#74E291] rounded-full mr-2" />
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Skills */}
          {data.keySkills?.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-800 mb-2">
                Skills Developed:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {data.keySkills.slice(0, 4).map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-[#F57D1F]/10 text-[#F57D1F] rounded-md text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <hr className="h-[1px] border-t-slate-200 mb-5" />

        <AgeRangeSelection data={data} />

        <hr className="h-[1px] border-t-slate-200 my-5" />

        <DifficultySelection data={data} />

        <hr className="hidden md:block h-[1px] border-t-slate-200 my-5" />

        {/* Safety Info */}
        <div className="mb-5 p-3 bg-[#74E291]/10 rounded-lg border border-[#74E291]/20">
          <div className="flex items-center mb-1">
            <svg
              className="w-4 h-4 text-[#74E291] mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium text-[#74E291]">
              Safety Information
            </span>
          </div>
          <p className="text-xs text-[#358F7B]">
            Adult supervision recommended for children under 8. Contains small
            parts. Follow all safety guidelines included with the product.
          </p>
        </div>

        <AddToCardSection data={data} />
      </div>
    </div>
  );
};

export default Header;
