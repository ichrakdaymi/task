import React from "react";

const Companies = () => {
  return (
    <section className="w-full bg-white py-[50px] justify-center items-center p-4">
      <div className="md:max-w-[1100px] m-auto max-w-[400px]">
        <h1 className="text-center text-xl font-bold text-[#536e90] mb-8">
          Fueling Our Launch with Expert Support
        </h1>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 lg:gap-x-12">
          <img
            src="/smu_logo.png"
            alt="company1"
            className="h-[100px] object-contain mx-auto"
          />
          <img
            src="/totalEnergies_logo.png"
            alt="company2"
            className="h-[100px] object-contain mx-auto"
          />
          <img
            src="/westerwella_logo.png"
            alt="company3"
            className="h-[100px] object-contain mx-auto"
          />
          <img
            src="/coworky_logo.png"
            alt="company4"
            className="h-[100px] object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Companies;
