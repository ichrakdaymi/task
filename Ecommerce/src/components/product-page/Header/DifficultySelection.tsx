'use client';
import React, { useState } from "react";
import { Product } from "@/types/product.types";

interface DifficultySelectionProps {
  data: Product;
  onDifficultyChange?: (difficulty: string, productId: number) => void;
}

const DIFFICULTY_INFO: Record<
  string,
  { color: string; activeColor: string; dots: number; description: string }
> = {
  beginner: {
    color: "bg-green-100 text-green-700 border-green-200 hover:bg-green-200",
    activeColor: "bg-green-500 text-white border-green-500",
    dots: 1,
    description:
      "Perfect for first-time learners with step-by-step guidance and simple concepts",
  },
  intermediate: {
    color: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200",
    activeColor: "bg-yellow-500 text-white border-yellow-500",
    dots: 2,
    description:
      "Suitable for those with basic knowledge, introducing more complex challenges",
  },
  advanced: {
    color: "bg-red-100 text-red-700 border-red-200 hover:bg-red-200",
    activeColor: "bg-red-500 text-white border-red-500",
    dots: 3,
    description:
      "Designed for experienced learners ready for sophisticated problem-solving",
  },
};

const normalize = (text: string) => text.toLowerCase().trim();

const DifficultySelection = ({ data, onDifficultyChange }: DifficultySelectionProps) => {
  const difficulty = data.educationalLevel;
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty);

  const isSelected = true;
  const key = normalize(difficulty);
  const info = DIFFICULTY_INFO[key];

  const color = info?.activeColor ?? "bg-gray-500 text-white border-gray-500";
  const dots = info?.dots ?? 1;
  const description =
    info?.description ?? "Tailored learning experience with appropriate challenge level";

  const handleClick = () => {
    onDifficultyChange?.(difficulty, data.id);
  };

  return (
    <div className="mb-5">
      <h4 className="text-sm font-semibold text-slate-800 mb-3">Difficulty Level:</h4>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleClick}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 flex items-center gap-2 ${color}`}
        >
          <span className="text-xs leading-none flex gap-0.5">
            {Array.from({ length: dots }).map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
            ))}
          </span>
          <span className="capitalize">{difficulty}</span>
        </button>
      </div>

      <div className="mt-3 p-3 bg-slate-50 rounded-lg">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-slate-700">Selected:</span>
          <span className="capitalize text-sm text-slate-600">{selectedDifficulty}</span>
          <span className="text-xs text-slate-400 flex gap-0.5">
            {Array.from({ length: dots }).map((_, i) => (
              <span key={i} className="inline-block w-1 h-1 rounded-full bg-current" />
            ))}
          </span>
        </div>
        <p className="text-xs text-slate-500">{description}</p>
      </div>
    </div>
  );
};

export default DifficultySelection;
