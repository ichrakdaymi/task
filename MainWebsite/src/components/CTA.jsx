import React from "react";
import cta from "../assets/cta.png";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="w-full bg-white py-24 p-4 items-center">
      <div className="md:max-w-[1100px] m-auto grid md:grid-cols-2 gap-8 max-w-[400px]">
        <img
          src="/kido.jpg"
          alt="hero"
          className="w-[500px] mx-auto rounded-md"
        />
        <div className="flex flex-col justify-start gap-4">
          <div>
            <h1 className="md:leading-[42px] py-8 md:text-3xl text-lg font-semibold">
              RecoLab 
              <span className="text-[#F57D1F]"> Smart Learning </span> for
              Curious Young Explorers
            </h1>
            <p className="py-2 text-lg text-gray-900">
              Discover interactive kits and creative lessons that make education
              fun, meaningful, and accessible.
            </p>
            <Link to="/coming-soon">
              <button className="max-[780px]:w-full px-8 text-white py-3 bg-[#F57D1F]">
                Join us for free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
