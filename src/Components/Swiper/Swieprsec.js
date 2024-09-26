import React, { useState } from "react";
import styles from "./ss.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import { testimonials } from "@/utils/Constants"; // Import testimonials data

const Swieprsec = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide

  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <h1>What Users Say About Agent Coach.ai</h1>
        <p>
          Hear from real estate professionals who have transformed their careers
          with our AI Coach.
        </p>
      </div>
      <div className={styles.swipercon}>
        <Swiper
          slidesPerView={1} // Default slides per view
          spaceBetween={20} // Adjust spacing between slides
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30, // Adjust space between slides for medium screens
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40, // Adjust space between slides for larger screens
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              {({ isActive }) => (
                <div
                  style={{
                    height: "360px",
                  }}
                  className={`flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-br from-[#000362] to-[#07323f] shadow-lg transition-all duration-300 ${
                    isActive ? "scale-[1.00] " : "scale-100 opacity-70"
                  }`}
                >
                  <div className="relative mb-6">
                    <Image
                      src={testimonial.image}
                      alt="Profile picture"
                      width={129}
                      height={129}
                      className="rounded-full"
                    />
                    <Image
                      src={testimonial.icon}
                      alt="Icon"
                      width={51}
                      height={51}
                      className="absolute bottom-0 right-0"
                    />
                  </div>
                  <p className="text-white text-sm mb-4 text-center">
                    {testimonial.text}
                  </p>
                  <div className="text-center">
                    <h3 className="text-[#2f76ff] font-bold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#adadad] text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Swieprsec;
