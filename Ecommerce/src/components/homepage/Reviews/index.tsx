"use client";

import React from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import ReviewCard from "@/components/common/ReviewCard";
import { Review } from "@/types/review.types";

type ReviewsProps = { data: Review[] };

const Reviews = ({ data }: ReviewsProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isClient = useIsClient();

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (!isClient) return null;

  return (
    <section className="overflow-hidden">
      <motion.div
        initial={{ x: "100px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          className="relative w-full mb-6 md:mb-9"
        >
          {/* Heading + Arrows */}
          <div className="relative flex items-end sm:items-center max-w-frame mx-auto mb-6 md:mb-10 px-4 xl:px-0">
            <motion.h2
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className={cn([
                integralCF.className,
                "text-[28px] sm:text-[32px] md:text-5xl leading-tight capitalize mr-auto",
                "text-[#F57D1F]", // Primary brand color
              ])}
            >
              Our Happy Customers
            </motion.h2>
            <div className="flex items-center space-x-1 ml-2">
              <CarouselPrevious
                variant="ghost"
                className="text-xl sm:text-2xl text-[#F57D1F] hover:text-[#d96a1b]"
              >
                <FaArrowLeft />
              </CarouselPrevious>
              <CarouselNext
                variant="ghost"
                className="text-xl sm:text-2xl text-[#F57D1F] hover:text-[#d96a1b]"
              >
                <FaArrowRight />
              </CarouselNext>
            </div>
          </div>

          {/* Review Cards */}
          <CarouselContent>
            {data.map((review, index) => {
              const isBlur =
                data.length >= 6 &&
                (index === (isDesktop ? (current + 2) % count : (current + 1) % count) ||
                 index === (isDesktop ? (current + count - 2) % count : (current + count - 1) % count));

              return (
                <CarouselItem
                  key={review.id}
                  className="w-full max-w-[358px] sm:max-w-[400px] pl-5"
                >
                  <ReviewCard
                    className="h-full"
                    data={review}
                    blurChild={
                      isBlur && (
                        <div className="absolute right-0 top-0 h-full w-full z-10 backdrop-blur-[2px] bg-[#F57D1F]/10" />
                      )
                    }
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Reviews;
