import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo-Recolab.png";
import toast from "react-hot-toast";
import { SubscribeNewsLetter } from "../Provider/data-handler";
const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const calculateTimeLeft = (targetDate) => {
    const now = new Date().getTime();
    let diff = targetDate - now;

    if (diff <= 0) {
      let nextMonthDate = new Date();
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

      if (nextMonthDate.getMonth() === 0) {
        nextMonthDate.setFullYear(nextMonthDate.getFullYear() + 1);
      }

      diff = nextMonthDate - now;
    }

    const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0"
    );
    const hours = String(
      Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(
      2,
      "0"
    );

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const targetDate = new Date("September 1, 2025 23:59:59").getTime();

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
    <section className="relative">
      <div className="w-full">
        <div className="w-full md:px-16 px-10 md:pt-16 pt-10 pb-10 bg-white rounded-2xl flex-col justify-end items-center lg:gap-28 md:gap-16 gap-10 inline-flex">
          <div className="flex-col justify-end items-center flex">
            <img src={Logo} alt="pagedone logo" className="object-cover" />
            <div className="flex-col justify-center items-center gap-10 flex">
              <div className="flex-col justify-start items-center gap-2.5 flex">
                <h2 className="text-center text-[#F57D1F] md:text-6xl text-5xl font-bold font-manrope leading-normal">
                  Coming Soon
                </h2>
                <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                  Just 20 days remaining until the big reveal of our new
                  product!
                </p>
              </div>
              <div className="flex items-start justify-center w-full gap-2 count-down-main">
                {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
                  <React.Fragment key={unit}>
                    <div className="timer flex flex-col gap-0.5">
                      <h3
                        className={`countdown-element ${unit} text-center text-[#F57D1F] text-2xl font-bold font-manrope leading-9`}
                      >
                        {timeLeft[unit]}
                      </h3>
                      <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">
                        {unit.toUpperCase()}
                      </p>
                    </div>
                    {unit !== "seconds" && (
                      <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">
                        :
                      </h3>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="w-full flex-col justify-center items-center gap-5 flex">
                <h6 className="text-center text-[#F57D1F] text-base font-semibold leading-relaxed">
                  Launching Date: September 1, 2025
                </h6>
                <div className="justify-center items-center gap-2.5 flex sm:flex-row flex-col">
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
                      <span className="px-1.5">Notify Me</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm font-normal leading-snug">
            Get in touch with us:{" "}
            <a
              href="mailto:mail@pagedone.com"
              className="hover:text-[#F57D1F]-100 transition-all duration-700 ease-in-out"
            >
              contact@recolab.tn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
