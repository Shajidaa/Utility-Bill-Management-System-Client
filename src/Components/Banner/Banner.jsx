import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero md:min-h-[80vh] bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/608CSWYp/close-up-hands-counting-money.jpg')",
            }}
          >
            <div className="hero-overlay bg-black/60"></div>
            <div className="hero-content text-neutral-content text-center px-4 sm:px-6 md:px-10">
              <div className="max-w-md md:max-w-xl">
                <h1 className="mb-4 text-xl  md:text-5xl font-bold">
                  All Your Payments. One Smart Platform
                </h1>
                <p className="mb-6 text-sm md:text-lg leading-relaxed">
                  Manage every transaction effortlessly. From bills to balances,
                  PayUp brings your payments together in one simple, secure
                  dashboard.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero md:min-h-[80vh] bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/rGFhMdtW/close-up-coin-pile-near-banknote-stack.jpg')",
            }}
          >
            <div className="hero-overlay bg-black/60"></div>
            <div className="hero-content text-neutral-content text-center px-4 sm:px-6 md:px-10">
              <div className="max-w-md md:max-w-xl">
                <h1 className="mb-4 text-xl  md:text-5xl font-bold">
                  Your Finances, Wherever You Are
                </h1>
                <p className="mb-6 text-sm  md:text-lg leading-relaxed">
                  Whether at home or on the go, PayUp keeps you connected.
                  Access your account and make payments instantly from any
                  device.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero md:min-h-[80vh] bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/rGFhMdtW/close-up-coin-pile-near-banknote-stack.jpg')",
            }}
          >
            <div className="hero-overlay bg-black/60"></div>
            <div className="hero-content text-neutral-content text-center px-4 sm:px-6 md:px-10">
              <div className="max-w-md md:max-w-xl">
                <h1 className="mb-4 text-xl  md:text-5xl font-bold">
                  Empowering Smarter Money Habits.
                </h1>
                <p className="mb-6 text-sm md:text-lg leading-relaxed">
                  PayUp isn’t just about payments — it’s about progress. Build
                  financial confidence with tools that simplify and support your
                  growth.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress " slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
