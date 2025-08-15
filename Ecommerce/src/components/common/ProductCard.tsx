import React from "react";
import Rating from "../ui/Rating";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";

type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
  // Helper function to get age range badge color
  const getAgeRangeBadgeColor = (ageRange: string) => {
    if (ageRange.includes("3-5")) return "bg-green-100 text-green-700";
    if (ageRange.includes("6-8")) return "bg-blue-100 text-blue-700";
    if (ageRange.includes("9-12")) return "bg-purple-100 text-purple-700";
    if (ageRange.includes("13+")) return "bg-orange-100 text-orange-700";
    return "bg-gray-100 text-gray-700";
  };

  // Helper function to get STEM category badge color
  const getStemCategoryColor = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes("science")) return "bg-emerald-100 text-emerald-700";
    if (lowerCategory.includes("tech")) return "bg-cyan-100 text-cyan-700";
    if (lowerCategory.includes("engineering")) return "bg-amber-100 text-amber-700";
    if (lowerCategory.includes("math")) return "bg-indigo-100 text-indigo-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <Link
      href={`/shop/product/${data.id}/${data.title.split(" ").join("-")}`}
      className="flex flex-col items-start aspect-auto group"
    >
      <div className="bg-gradient-to-br from-[#F8FAFC] to-[#EEF2FF] rounded-[16px] lg:rounded-[24px] w-full lg:max-w-[295px] aspect-square mb-3 xl:mb-4 overflow-hidden relative border border-slate-200/50">
        <Image
          src={data.srcUrl}
          width={295}
          height={298}
          className="rounded-md w-full h-full object-contain group-hover:scale-105 transition-all duration-300 p-4"
          alt={data.title}
          priority
        />
        
        {/* Age Range Badge */}
        {data.ageRange && (
          <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium ${getAgeRangeBadgeColor(data.ageRange)}`}>
            Ages {data.ageRange}
          </div>
        )}
        
        {/* STEM Category Badge */}
        {data.stemCategory && (
          <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium ${getStemCategoryColor(data.stemCategory)}`}>
            {data.stemCategory}
          </div>
        )}
        
        {/* Educational Level Indicator */}
        {data.educationalLevel && (
          <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-600 border border-white/50">
            {data.educationalLevel}
          </div>
        )}
      </div>

      <div className="w-full">
        <strong className="text-slate-900 xl:text-xl font-semibold line-clamp-2 mb-1">
          {data.title}
        </strong>
        
        {/* Learning Objectives or Brief Description */}
        {data.learningObjectives && (
          <p className="text-slate-600 text-sm mb-2 line-clamp-2">
            Develops: {data.learningObjectives.slice(0, 2).join(", ")}
          </p>
        )}

        <div className="flex items-center mb-2 xl:mb-3">
          <Rating
            initialValue={data.rating}
            allowFraction
            SVGclassName="inline-block"
            emptyClassName="fill-gray-200"
            fillClassName="fill-yellow-400"
            size={16}
            readonly
          />
          <span className="text-slate-700 text-xs xl:text-sm ml-2 pb-0.5 xl:pb-0">
            {data.rating.toFixed(1)}
            <span className="text-slate-500">/5</span>
          </span>
          {data.reviewCount && (
            <span className="text-slate-500 text-xs ml-1">
              ({data.reviewCount})
            </span>
          )}
        </div>

        {/* Skills/Benefits Tags */}
        {data.keySkills && data.keySkills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {data.keySkills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center space-x-2 xl:space-x-2.5">
          {data.discount.percentage > 0 ? (
            <span className="font-bold text-slate-900 text-lg xl:text-xl">
              {`$${Math.round(
                data.price - (data.price * data.discount.percentage) / 100
              )}`}
            </span>
          ) : data.discount.amount > 0 ? (
            <span className="font-bold text-slate-900 text-lg xl:text-xl">
              {`$${data.price - data.discount.amount}`}
            </span>
          ) : (
            <span className="font-bold text-slate-900 text-lg xl:text-xl">
              ${data.price}
            </span>
          )}
          
          {data.discount.percentage > 0 && (
            <span className="font-medium text-slate-400 line-through text-sm xl:text-base">
              ${data.price}
            </span>
          )}
          
          {data.discount.amount > 0 && (
            <span className="font-medium text-slate-400 line-through text-sm xl:text-base">
              ${data.price}
            </span>
          )}
          
          {data.discount.percentage > 0 ? (
            <span className="font-medium text-[10px] xl:text-xs py-1 px-2.5 rounded-full bg-red-50 text-red-600 border border-red-100">
              {`-${data.discount.percentage}%`}
            </span>
          ) : (
            data.discount.amount > 0 && (
              <span className="font-medium text-[10px] xl:text-xs py-1 px-2.5 rounded-full bg-red-50 text-red-600 border border-red-100">
                {`-$${data.discount.amount}`}
              </span>
            )
          )}
        </div>

        {/* Educational Value Indicator */}
        {data.educationalValue && (
          <div className="mt-2 flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            <span className="text-xs text-slate-600 font-medium">
              {data.educationalValue}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;