"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import additional styles for pagination if needed

export default function Topics() {
  return (
    <section
      id="topics"
      className="py-16 px-4 md:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Swiper container for mobile */}
      <div className="md:hidden">
        <Swiper
          slidesPerView={1.1} // Shows one card at a time on mobile
          spaceBetween={16} // Space between slides
          loop={true} // Loops the swiper for continuous scrolling
          pagination={{ clickable: true }} // Adds pagination buttons if needed
          navigation={true} // Adds navigation buttons (previous/next)
          className="swiper-container"
        >
          {/* Repeat this section for each card */}
          <SwiperSlide>
            <div className="group relative flex bg-[#487307] flex-col justify-center items-center font-semibold w-full h-[480px] border rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl">
              <span className="text-2xl mb-2 text-[#fffaf1] transition-opacity duration-500 group-hover:opacity-80">
                Nova Agro Forum
              </span>
              <span className="text-6xl font-bold uppercase text-[#fffaf1] leading-snug transform transition-transform duration-700 group-hover:scale-110">
                Нап <br /> рям <br /> ки
              </span>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00000033] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </SwiperSlide>
          {/* Repeat for other cards */}
          <SwiperSlide>
            <div className="group flex flex-col w-full h-[480px] rounded-3xl border overflow-hidden shadow-lg bg-white transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2">
              <div className="relative overflow-hidden h-2/3">
                <Image
                  className="w-full h-full object-cover rounded-t-3xl transform transition-transform duration-700 group-hover:scale-110"
                  src="/default-long.png"
                  alt="combainer"
                  height={232}
                  width={310}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
              <div className="text-gray-700 text-center text-base p-4 flex flex-col justify-center flex-1 transition-all duration-500 group-hover:bg-[#f7f7f7]">
                <span className="font-bold text-2xl block mb-2 transition-colors duration-500 group-hover:text-[#487307]">
                  Сільськогосподарські технології
                </span>
                <p className="transition-opacity duration-500 group-hover:opacity-90">
                  Фермерів і керівників господарств, які прагнуть впроваджувати
                  новітні агротехнології
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group flex flex-col w-full h-[480px] rounded-3xl border overflow-hidden shadow-lg bg-white transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2">
          <div className="text-gray-700 text-center text-base p-4 flex flex-col justify-center flex-1 transition-all duration-500 group-hover:bg-[#f7f7f7]">
            <span className="font-bold text-2xl block mb-2 transition-colors duration-500 group-hover:text-[#487307]">
              IT технології
            </span>
            <p className="transition-opacity duration-500 group-hover:opacity-90">
              Науковців, агроекспертів та викладачів, які працюють над
              впровадженням інновацій
            </p>
          </div>
          <div className="relative overflow-hidden h-2/3">
            <Image
              className="w-full h-full object-cover rounded-t-3xl transform transition-transform duration-700 group-hover:scale-110"
              src="/default-long.png"
              alt="combainer"
              height={232}
              width={310}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group flex flex-col w-full h-[480px] rounded-3xl border overflow-hidden shadow-lg bg-white transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2">
              <div className="relative overflow-hidden h-2/3">
                <Image
                  className="w-full h-full object-cover rounded-t-3xl transform transition-transform duration-700 group-hover:scale-110"
                  src="/default-long.png"
                  alt="combainer"
                  height={232}
                  width={310}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
              <div className="text-gray-700 text-center text-base p-4 flex flex-col justify-center flex-1 transition-all duration-500 group-hover:bg-[#f7f7f7]">
                <span className="font-bold text-2xl block mb-2 transition-colors duration-500 group-hover:text-[#487307]">
                  Сільськогосподарські технології
                </span>
                <p className="transition-opacity duration-500 group-hover:opacity-90">
                  Фермерів і керівників господарств, які прагнуть впроваджувати
                  новітні агротехнології
                </p>
              </div>
            </div>
          </SwiperSlide>{" "}
        </Swiper>
      </div>

      {/* Grid container for desktop */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {/* First Card */}
        <div className="group relative flex bg-[#487307] flex-col justify-center items-center font-semibold w-full h-[480px] border rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl">
          <span className="text-2xl mb-2 text-[#fffaf1] transition-opacity duration-500 group-hover:opacity-80">
            Nova Agro Forum
          </span>
          <span className="text-6xl font-bold uppercase text-[#fffaf1] leading-snug transform transition-transform duration-700 group-hover:scale-110">
            Нап <br /> рям <br /> ки
          </span>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00000033] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Second Card */}
        <div className="group flex flex-col w-full h-[480px] rounded-3xl border overflow-hidden shadow-lg bg-white transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2">
          <div className="relative overflow-hidden h-2/3">
            <Image
              className="w-full h-full object-cover rounded-t-3xl transform transition-transform duration-700 group-hover:scale-110"
              src="/default-long.png"
              alt="combainer"
              height={232}
              width={310}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
          </div>
          <div className="text-gray-700 text-center text-base p-4 flex flex-col justify-center flex-1 transition-all duration-500 group-hover:bg-[#f7f7f7]">
            <span className="font-bold text-2xl block mb-2 transition-colors duration-500 group-hover:text-[#487307]">
              Сільськогосподарські технології
            </span>
            <p className="transition-opacity duration-500 group-hover:opacity-90">
              Фермерів і керівників господарств, які прагнуть впроваджувати
              новітні агротехнології
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className="group flex flex-col w-full h-[480px] rounded-3xl border overflow-hidden shadow-lg bg-white transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2">
          <div className="text-gray-700 text-center text-base p-4 flex flex-col justify-center flex-1 transition-all duration-500 group-hover:bg-[#f7f7f7]">
            <span className="font-bold text-2xl block mb-2 transition-colors duration-500 group-hover:text-[#487307]">
              IT технології
            </span>
            <p className="transition-opacity duration-500 group-hover:opacity-90">
              Науковців, агроекспертів та викладачів, які працюють над
              впровадженням інновацій
            </p>
          </div>
          <div className="relative overflow-hidden h-2/3">
            <Image
              className="w-full h-full object-cover rounded-t-3xl transform transition-transform duration-700 group-hover:scale-110"
              src="/default-long.png"
              alt="combainer"
              height={232}
              width={310}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="group flex flex-col w-full h-[480px] rounded-3xl border overflow-hidden shadow-lg bg-white transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2">
          <div className="relative overflow-hidden h-2/3">
            <Image
              className="w-full h-full object-cover rounded-t-3xl transform transition-transform duration-700 group-hover:scale-110"
              src="/default-long.png"
              alt="combainer"
              height={232}
              width={310}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
          </div>
          <div className="text-gray-700 text-center text-base p-4 flex flex-col justify-center flex-1 transition-all duration-500 group-hover:bg-[#f7f7f7]">
            <span className="font-bold text-2xl block mb-2 transition-colors duration-500 group-hover:text-[#487307]">
              Тваринництво
            </span>
            <p className="transition-opacity duration-500 group-hover:opacity-90">
              Розробників і постачальників агротехніки, добрив, кормів та
              IoT-рішень
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
