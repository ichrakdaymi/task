import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from '../assets/Logo-Recolab.png';
import { SubscribeNewsLetter } from '../Provider/data-handler';
import toast from 'react-hot-toast';

const Footer = () => {
   const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
   const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }

    setLoading(true);
    const result = await SubscribeNewsLetter(email);
    setLoading(false);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message || "Subscribed successfully!");
      setEmail("");
    }
  };

  return (
    <section className='w-full bg-white py-24 p-4'>
      <div className='md:max-w-[1100px] m-auto grid md:grid-cols-5 max-[768px]:md:grid-cols-6 gap-8 max-w-[400px]'>
        <div className='col-span-1'>
          <img src={Logo} alt='logo-footer' className='h-[120px]' />
          <h3 className="font-bold text-2xl mt-10">Contact us</h3>
          <h3 className="py-2 text-[#60737a]">Call: +216 50 956 800</h3>
          <h3 className="py-2 text-[#60737a]">We are here to inspire kids in STEM and robotics through interactive learning kits.</h3>
          <h3 className="py-2 text-[#363a3d]">Email: contact@recolab.tn</h3>

          <div className="flex gap-4 py-4">
            <a href="https://www.facebook.com/profile.php?id=61557891688135" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-[#e9f8f3] cursor-pointer">
              <FaFacebook size={25} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-[#e9f8f3] cursor-pointer">
              <FaTwitter size={25} />
            </a>
            <a href="https://www.linkedin.com/company/recolab-technologies" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-[#e9f8f3] cursor-pointer">
              <FaLinkedin size={25} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-[#e9f8f3] cursor-pointer">
              <FaYoutube size={25} />
            </a>
          </div>
        </div>

        <div className='col-span-1'>
          <h3 className="font-bold text-2xl mt-10">Explore</h3>
          <ul className="py-3 text-[#60737a]">
            <li className="py-2">Home</li>
            <li className="py-2">About us</li>
            <li className="py-2">Courses</li>
            <li className="py-2">Contact us</li>
          </ul>
        </div>

        <div className='col-span-1'>
          <h3 className="font-bold text-2xl mt-10">Categories</h3>
        <ul className="py-3 text-[#60737a]">
            <li className="py-2">EdTech (Educational Technology)</li>
            <li className="py-2">STEM Education</li>
            <li className="py-2">Early Childhood Learning</li>
            <li className="py-2">AI & Educational Software</li>
            <li className="py-2">Social Impact Startup</li>
            <li className="py-2">STEAM (STEM + Arts)</li>
            <li className="py-2">Tech for Kids</li>
            <li className="py-2">Inclusive Learning Solutions</li>
          </ul>
        </div>

        <div className='col-span-2'>
          <h3 className="font-bold text-2xl mt-10">Subscribe</h3>
          <h3 className="py-2 text-[#60737a]">
            Stay updated with our latest STEM kits, courses, and innovations!
          </h3>
          <form className='input-box-shadow flex items-center bg-transparent gap-2'>
             <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-80 focus:outline-none px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed h-10 bg-white rounded-lg border border-gray-200 justify-start items-center gap-1.5 inline-flex"
                    placeholder="Type your mail..."
                  />

                  <button
                    onClick={handleSubscribe}
                    disabled={loading}
                    className="sm:w-fit w-full px-3.5 py-2 bg-[#F57D1F] hover:bg-[#e56c0f] transition-all duration-300 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex text-white text-sm font-medium leading-6 whitespace-nowrap"
                  >
                    {loading ? (
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                    ) : (
                      <span className="px-1.5">Subscribe</span>
                    )}
                  </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
