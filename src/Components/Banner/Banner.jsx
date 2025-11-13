import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3200,
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
              <motion.div
                className="max-w-md md:max-w-xl"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <h1 className="mb-4 text-xl md:text-5xl font-bold">
                  All Your Payments.
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    <Typewriter
                      words={["One Smart Platform."]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                <motion.p
                  className="mb-6 text-sm md:text-lg leading-relaxed"
                  variants={textVariants}
                  transition={{ delay: 0.3 }}
                >
                  Manage every transaction effortlessly. From bills to balances,
                  PayUp brings your payments together in one simple, secure
                  dashboard.
                </motion.p>
                <motion.div variants={textVariants} transition={{ delay: 0.5 }}>
                  <Link
                    to={"/bills"}
                    className="btn primary-btn border-0 btn-sm mb-5 md:btn-lg"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero md:min-h-[80vh] bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/wFpbD1jm/photo-1616803140344-6682afb13cda.jpg')",
            }}
          >
            <div className="hero-overlay bg-black/60"></div>
            <div className="hero-content text-neutral-content text-center px-4 sm:px-6 md:px-10">
              <motion.div
                className="max-w-md md:max-w-xl"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <h1 className="mb-4 text-xl md:text-5xl font-bold">
                  Your Finances,{" "}
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    <Typewriter
                      words={["Wherever You Are"]}
                      loop={0}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                <motion.p
                  className="mb-6 text-sm md:text-lg leading-relaxed"
                  variants={textVariants}
                  transition={{ delay: 0.3 }}
                >
                  Whether at home or on the go, PayUp keeps you connected.
                  Access your account and make payments instantly from any
                  device.
                </motion.p>
                <motion.div variants={textVariants} transition={{ delay: 0.5 }}>
                  <Link
                    to={"/bills"}
                    className="btn primary-btn border-0 btn-sm mb-5 md:btn-lg"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero md:min-h-[80vh] bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/rGFhMdtW/close-up-coin-pile-near-banknote-stack.jpg')",
            }}
          >
            <div className="hero-overlay bg-black/60"></div>
            <div className="hero-content text-neutral-content text-center px-4 sm:px-6 md:px-10">
              <motion.div
                className="max-w-md md:max-w-xl"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <h1 className="mb-4 text-xl md:text-5xl font-bold">
                  Empowering Smarter{" "}
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    <Typewriter
                      words={[" Money Habits.", " Financial Choices."]}
                      loop={0}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                <motion.p
                  className="mb-6 text-sm md:text-lg leading-relaxed"
                  variants={textVariants}
                  transition={{ delay: 0.3 }}
                >
                  PayUp isn’t just about payments — it’s about progress. Build
                  financial confidence with tools that simplify and support your
                  growth.
                </motion.p>
                <motion.div variants={textVariants} transition={{ delay: 0.5 }}>
                  <Link
                    to={"/bills"}
                    className="btn primary-btn border-0 btn-sm mb-5 md:btn-lg"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
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
