import React from 'react'

const HeroSection = () => {
  return (
    <section id='home' className='w-full bg-white py-24 px-4'>
      <div className='max-w-[1100px] mx-auto grid md:grid-cols-2 items-center gap-8'>

        {/* Text Section */}
        <div className='flex flex-col gap-6'>
          <p className='text-[#F57D1F] text-4xl md:text-5xl font-bold leading-tight'>
            We turn learning into a magical journey
          </p>
          <h1 className='text-lg md:text-2xl font-medium text-gray-700'>
            where playful <span className='text-[#74E291] font-semibold'>Kits</span> awaken curiosity,
            and every <span className='text-[#74E291] font-semibold'>Hero</span> becomes the hero of their own discovery.
          </h1>
        </div>

        {/* Image Section */}
        <div className='w-full'>
          <img
            src='/element1.jpg'
            alt='Hero Illustration'
            className='rounded-xl shadow-lg w-full object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
