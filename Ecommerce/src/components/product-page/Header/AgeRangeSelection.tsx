'use client';
import React, { useState, useMemo } from "react";
import { Product } from "@/types/product.types";

interface AgeRangeSelectionProps {
  data: Product;
  onAgeRangeChange?: (ageRange: string, productId: number) => void;
}

const AGE_RANGE_INFO: Record<string, { color: string; description: string }> = {
  "3-5": {
    color: "bg-green-100 text-green-700 border-green-200 hover:bg-green-200",
    description: "Perfect for preschoolers developing fine motor skills and basic concepts",
  },
  "6-8": {
    color: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200",
    description: "Ideal for early elementary students building foundational STEM knowledge",
  },
  "9-12": {
    color: "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200",
    description: "Great for middle schoolers ready for more complex problem-solving",
  },
  "13+": {
    color: "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200",
    description: "Designed for teens who can handle advanced concepts and independent learning",
  },
};

const AgeRangeSelection = ({ data, onAgeRangeChange }: AgeRangeSelectionProps) => {
  const availableAgeRanges = useMemo(() => {
    const parts = data.ageRange
      .split("-") // handle slashes, commas, or pipes
      .map((r) => r.trim())
      .filter((r) => r !== "");

    // remove duplicates (just in case)
    const uniqueRanges = Array.from(new Set(parts));

    return uniqueRanges.map((ageRange) => ({
      ageRange,
      productId: data.id,
    }));
  }, [data.ageRange, data.id]);

  const [selectedAgeRange, setSelectedAgeRange] = useState<string>(
    availableAgeRanges[0]?.ageRange || ""
  );

  const getAgeRangeBadgeColor = (ageRange: string, isSelected: boolean) => {
    const config = AGE_RANGE_INFO[ageRange];
    if (!config) {
      return isSelected
        ? "bg-gray-500 text-white border-gray-500"
        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200";
    }

    return isSelected
      ? config.color.replace("100", "500").replace("700", "white").replace("200", "500")
      : config.color;
  };

  const handleAgeRangeSelect = (ageRange: string) => {
    setSelectedAgeRange(ageRange);
    onAgeRangeChange?.(ageRange, data.id);
  };

  if (availableAgeRanges.length <= 1) {
    return null;
  }

  const selectedInfo = AGE_RANGE_INFO[selectedAgeRange];

  return (
    <div className="mb-5">
      <h4 className="text-sm font-semibold text-slate-800 mb-3">Select Age Range:</h4>
      <div className="flex flex-wrap gap-2">
        {availableAgeRanges.map((item) => {
          const isSelected = selectedAgeRange === item.ageRange;
          return (
            <button
              key={item.ageRange}
              onClick={() => handleAgeRangeSelect(item.ageRange)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 ${getAgeRangeBadgeColor(item.ageRange, isSelected)}`}
            >
              Ages {item.ageRange}
            </button>
          );
        })}
      </div>

      <div className="mt-3 p-3 bg-slate-50 rounded-lg">
        <p className="text-sm text-slate-600">
          <span className="font-medium">Selected:</span> Ages {selectedAgeRange}
        </p>
        <p className="text-xs text-slate-500 mt-1">
          {selectedInfo?.description ?? "No description available for this age range."}
        </p>
      </div>
    </div>
  );
};

export default AgeRangeSelection;
