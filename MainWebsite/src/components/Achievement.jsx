import React from "react";
import { FaGraduationCap, FaTrophy } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { GiChampions } from "react-icons/gi";

const Achievement = () => {
  return (
    <section id="achievements" className="w-full bg-white p-5">
      <div className="md:max-w-[1100px] m-auto grid md:grid-cols-2 max-w-[400px]">
        <div className="flex flex-col justify-start gap-4">
          <h1 className="md:leading-[42px] py-2 text-3xl font-semibold">
            Our <span className="text-[#74E291]">Achievements</span>
          </h1>
          <p className=" text-[#536e96] text-2x1">
           Driven by purpose, recognized for impact our journey is just beginning.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="py-6 flex">
              <div className="p-4 bg-[#e9f8f3] rounded-xl">
                <MdConstruction size={30} style={{ color: "#F57D1F" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">100th</h1>
                <p className="text-[#60737a]">
                  Top 100 Impactful Startups TotalEnergies
                </p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#e9f8f3] rounded-xl">
                <FaTrophy size={30} style={{ color: "#F57D1F" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">3rd</h1>
                <p className="text-[#60737a]">
                  3rd Place Cap’Innov Challenge Innovi
                </p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#e9f8f3] rounded-xl">
                <GiChampions size={30} style={{ color: "#F57D1F" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">1st</h1>
                <p className="text-[#60737a]">
                  Tunisian Champion CYE Challenge JCI Tunisia
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border justify-center items-center">
          <img
            src="/element3.jpg"
            alt="hero"
            className="md:order-last m-auto order-first rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievement;
