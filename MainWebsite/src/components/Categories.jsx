import React from 'react';
import CategoryCard from './CategoryCard';
import {
  FaRobot,
  FaGamepad,
  FaTools,
  FaFlask,
  FaLaptopCode,
  FaCubes,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen
} from 'react-icons/fa';

const Categories = () => {
  return (
    <section className='w-full bg-[#F0F8F7] p-5'>
      <div className='md:max-w-[1100px] m-auto max-w-[400px]'>
        <h1 className='md:leading-[72px] text-3xl font-bold'>
          Our <span className='text-[#74E291]'>Smart Learning Services</span>
        </h1>
        <p className="text-lg text-gray-600">
          Revolutionizing education through engaging, personalized, and smart tools.
        </p>
        <div className='grid md:grid-cols-3 py-12 gap-4'>
          <CategoryCard icon={<FaLaptopCode size={30} />} title={'Smart Learning Kits'} />
          <CategoryCard icon={<FaGamepad size={30} />} title={'Gamified Lessons'} />
          <CategoryCard icon={<FaRobot size={30} />} title={'AI Tutor Bot'} />
          <CategoryCard icon={<FaTools size={30} />} title={'Hands-On Tools'} />
          <CategoryCard icon={<FaFlask size={30} />} title={'STEM Training'} />
          <CategoryCard icon={<FaCubes size={30} />} title={'Interactive Prototyping'} />
          <CategoryCard icon={<FaUserGraduate size={30} />} title={'Personalized Learning'} />
          <CategoryCard icon={<FaChalkboardTeacher size={30} />} title={'Workshop Hosting'} />
          <CategoryCard icon={<FaBookOpen size={30} />} title={'Curriculum Design'} />
        </div>
      </div>
    </section>
  );
};

export default Categories;
