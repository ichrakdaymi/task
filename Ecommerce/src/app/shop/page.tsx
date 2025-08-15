'use client'
import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import Filters from "@/components/shop-page/filters";
import { FiSliders, FiGrid, FiList } from "react-icons/fi";
import { newArrivalsData, relatedProductData, topSellingData } from "../page";
import ProductCard from "@/components/common/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

export default function STEMShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // STEM category data - you can replace with actual data
  const stemCategories = [
    { value: 'all', label: 'All Categories', count: 156 },
    { value: 'science', label: 'Science Kits', count: 42 },
    { value: 'technology', label: 'Technology', count: 38 },
    { value: 'engineering', label: 'Engineering', count: 35 },
    { value: 'mathematics', label: 'Mathematics', count: 28 },
    { value: 'robotics', label: 'Robotics', count: 13 },
    { value: 'puzzle ', label: 'puzzle ', count: 13 }

  ];

  const currentCategory = stemCategories.find(cat => cat.value === selectedCategory);

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop />
        
        {/* Featured STEM Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">🚀 STEM Learning Adventures</h2>
              <p className="text-slate-600">Discover hands-on kits that make science, technology, engineering & math exciting!</p>
            </div>
          {/*   <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-xs text-slate-500">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4.8</div>
                <div className="text-xs text-slate-500">Avg Rating</div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="flex md:space-x-5 items-start">
          {/* Filters Sidebar */}
          <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filters</span>
              <FiSliders className="text-2xl text-black/40" />
            </div>

            {/* STEM Categories Quick Filter */}
            <div className="space-y-3">
              <h3 className="font-semibold text-sm text-slate-800">STEM Categories</h3>
              <div className="space-y-2">
                {stemCategories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === category.value
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.label}</span>
                      <span className="text-xs text-slate-400">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-slate-200" />
            {/* <Filters /> */}
          </div>

          {/* Main Content */}
          <div className="flex flex-col w-full space-y-5">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
              <div className="flex items-center justify-between mb-4 lg:mb-0">
                <div>
                  <h1 className="font-bold text-2xl md:text-[32px] capitalize">
                    {currentCategory?.label || 'STEM Products'}
                  </h1>
                  <p className="text-sm text-slate-500 mt-1">
                    Educational kits designed to inspire young minds
                  </p>
                </div>
              
              </div>
              
              <div className="flex flex-col sm:items-center sm:flex-row gap-4">
                {/* Results Count */}
                <span className="text-sm md:text-base text-black/60">
                  Showing 1-10 of {currentCategory?.count || 156} Products
                </span>
                
                {/* View Mode Toggle */}
                {/* <div className="flex items-center border border-slate-200 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-slate-100 text-slate-900' : 'text-slate-400'
                    }`}
                  >
                    <FiGrid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-slate-100 text-slate-900' : 'text-slate-400'
                    }`}
                  >
                    <FiList size={16} />
                  </button>
                </div> */}

                {/* Sort Dropdown */}
                <div className="flex items-center">
                  <span className="text-sm text-slate-600 mr-2">Sort by:</span>
                  <Select defaultValue="most-popular">
                    <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="most-popular">Most Popular</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="low-price">Price: Low to High</SelectItem>
                      <SelectItem value="high-price">Price: High to Low</SelectItem>
                      <SelectItem value="age-young">Age: Youngest First</SelectItem>
                      <SelectItem value="age-old">Age: Oldest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Active Filters Display */}
            {selectedCategory !== 'all' && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Active filters:</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  {currentCategory?.label}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="hover:bg-blue-200 rounded-full p-0.5"
                  >
                    <span className="text-xs">×</span>
                  </button>
                </span>
              </div>
            )}

            {/* Products Grid */}
            <div className={`w-full grid gap-4 lg:gap-5 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {[
                ...relatedProductData.slice(1, 4),
                ...newArrivalsData.slice(1, 4),
                ...topSellingData.slice(1, 4),
              ].map((product) => (
                <ProductCard 
                  key={product.id} 
                  data={product} 
                 
                />
              ))}
            </div>

            {/* Educational Value Banner */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-green-800 mb-1">🎓 Educational Excellence</h3>
                  <p className="text-sm text-green-700">All products are curriculum-aligned and educator-approved</p>
                </div>
                <div className="flex items-center space-x-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-green-600">K-12</div>
                    <div className="text-xs text-green-600">Curriculum</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">NGSS</div>
                    <div className="text-xs text-green-600">Aligned</div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-t-black/10" />

            {/* Pagination */}
            <Pagination className="justify-between">
              <PaginationPrevious href="#" className="border border-black/10" />
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="text-black/50 font-medium text-sm"
                    isActive
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="text-black/50 font-medium text-sm"
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="hidden lg:block">
                  <PaginationLink
                    href="#"
                    className="text-black/50 font-medium text-sm"
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className="text-black/50 font-medium text-sm" />
                </PaginationItem>
                <PaginationItem className="hidden lg:block">
                  <PaginationLink
                    href="#"
                    className="text-black/50 font-medium text-sm"
                  >
                    8
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="hidden sm:block">
                  <PaginationLink
                    href="#"
                    className="text-black/50 font-medium text-sm"
                  >
                    9
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="text-black/50 font-medium text-sm"
                  >
                    16
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
              <PaginationNext href="#" className="border border-black/10" />
            </Pagination>
          </div>
        </div>
      </div>
    </main>
  );
}