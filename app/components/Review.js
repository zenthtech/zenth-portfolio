"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Footer from "./Footer";
import Image from "next/image";

function Review() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden  2xl:block bg-gradient-to-b from-[#ffffff] to-[#C7E9EC]">
        <div className="pt-4 max-w-[85%] mx-auto">
          <div className="flex justify-center space-x-4">
            <h1 className="text-[3vw] font-T1 font-bold text-[#008080]">
              Words
            </h1>
            <h1 className="text-[3vw] font-T1 font-bold text-gray-500">of</h1>
            <h1 className="text-[3vw] font-T1 font-bold text-[#008080]">
              Praise
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-[1.2vw] font-T2 font-medium text-black">
              Transforming Visions into Reality
            </p>
          </div>

          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className=" mySwiper "
            >
              <SwiperSlide className="">
                {({ isActive }) => (
                  <div className={`${isActive ? "-translate-y-[30px]" : ""}`}>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%201.png?alt=media&token=a3533011-2730-4725-8714-f7831ba71662"
                      alt="review"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className=" select-none pt-20"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide className="">
                {({ isActive }) => (
                  <div className={` ${isActive ? "-translate-y-[30px]" : ""}`}>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%202.png?alt=media&token=37106c39-ce75-4b78-bb2d-63cd000866e7"
                      alt="review"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className=" select-none pt-20"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide className="">
                {({ isActive }) => (
                  <div className={` ${isActive ? "-translate-y-[30px]" : ""}`}>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%203.png?alt=media&token=dc5dd3cb-c703-46e1-ad59-770bc294e0a3"
                      alt="review"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className=" select-none pt-20"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide className="">
                {({ isActive }) => (
                  <div className={`${isActive ? "-translate-y-[30px]" : ""}`}>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%204.png?alt=media&token=da0374be-0efe-4021-87ba-2bbe0fe18812"
                      alt="review"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className=" select-none pt-20"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide className="">
                {({ isActive }) => (
                  <div className={` ${isActive ? "-translate-y-[30px]" : ""}`}>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%205.png?alt=media&token=d38d386c-66f0-4e96-aa86-3c533af74da2"
                      alt="review"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className=" select-none pt-20"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                  </div>
                )}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Footer />
      </div>
      {/* Desktop */}

      {/* Laptop */}

      <div className="hidden 2xl:hidden lg:block bg-gradient-to-b from-[#ffffff] to-[#C7E9EC]">
        <div className="pt-4 max-w-[85%] mx-auto">
          <div className="flex justify-center space-x-4">
            <h1 className="text-[3vw] font-T1 font-bold text-[#008080]">
              Words
            </h1>
            <h1 className="text-[3vw] font-T1 font-bold text-gray-500">of</h1>
            <h1 className="text-[3vw] font-T1 font-bold text-[#008080]">
              Praise
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-[1.2vw] font-T2 font-medium text-black">
              Transforming Visions into Reality
            </p>
          </div>

          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className=" mySwiper "
            >
              <SwiperSlide className="">
                {({ isActive }) => (
                  <div className={`${isActive ? "-translate-y-[30px]" : ""}`}>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%201.png?alt=media&token=a3533011-2730-4725-8714-f7831ba71662"
                      alt="review"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className=" select-none pt-10"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide className="">
                {({ isActive }) => (
                  <div className={` ${isActive ? "-translate-y-[30px]" : ""}`}>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%202.png?alt=media&token=37106c39-ce75-4b78-bb2d-63cd000866e7"
                      alt="review"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className=" select-none pt-10"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide className="">
                {({ isActive }) => (
                  <div className={` ${isActive ? "-translate-y-[30px]" : ""}`}>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%203.png?alt=media&token=dc5dd3cb-c703-46e1-ad59-770bc294e0a3"
                      alt="review"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className=" select-none pt-10"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide className="">
                {({ isActive }) => (
                  <div className={`${isActive ? "-translate-y-[30px]" : ""}`}>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%204.png?alt=media&token=da0374be-0efe-4021-87ba-2bbe0fe18812"
                      alt="review"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className=" select-none pt-10"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide className="">
                {({ isActive }) => (
                  <div className={` ${isActive ? "-translate-y-[30px]" : ""}`}>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%205.png?alt=media&token=d38d386c-66f0-4e96-aa86-3c533af74da2"
                      alt="review"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className=" select-none pt-10"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                  </div>
                )}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <Footer />
      </div>
      {/* Laptop */}

      {/* Tab */}

      <div className="hidden 2xl:hidden lg:hidden  md:block bg-gradient-to-b from-[#ffffff] to-[#C7E9EC]">
        <div className="max-w-[90%] mx-auto pt-20">
          <div className="flex justify-center space-x-4">
            <h1 className="text-[8vw] font-T1 font-bold text-[#008080]">
              Words
            </h1>
            <h1 className="text-[8vw] font-T1 font-bold text-gray-500">of</h1>
            <h1 className="text-[8vw] font-T1 font-bold text-[#008080]">
              Praise
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-[4vw] font-T2 font-medium text-black">
              Transforming Visions into Reality
            </p>
          </div>

          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className=" mySwiper "
            >
              <SwiperSlide className="">
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%201.png?alt=media&token=a3533011-2730-4725-8714-f7831ba71662"
                    alt="review"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className=" select-none pt-10"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="">
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%202.png?alt=media&token=37106c39-ce75-4b78-bb2d-63cd000866e7"
                    alt="review"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className=" select-none pt-10"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="">
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%203.png?alt=media&token=dc5dd3cb-c703-46e1-ad59-770bc294e0a3"
                    alt="review"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className=" select-none pt-10"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="">
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%204.png?alt=media&token=da0374be-0efe-4021-87ba-2bbe0fe18812"
                    alt="review"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className=" select-none pt-10"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%205.png?alt=media&token=d38d386c-66f0-4e96-aa86-3c533af74da2"
                    alt="review"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className=" select-none pt-10"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <Footer />
      </div>

      {/* Tab */}

      {/* Mobile */}

      <div className="md:hidden bg-gradient-to-b from-[#ffffff] to-[#C7E9EC]">
        <div className="max-w-[90%] mx-auto pt-20">
          <div className="flex justify-center space-x-4">
            <h1 className="text-[8vw] font-T1 font-bold text-[#008080]">
              Words
            </h1>
            <h1 className="text-[8vw] font-T1 font-bold text-gray-500">of</h1>
            <h1 className="text-[8vw] font-T1 font-bold text-[#008080]">
              Praise
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-[4vw] font-T2 font-medium text-black">
              Transforming Visions into Reality
            </p>
          </div>

          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className=" mySwiper "
            >
              <SwiperSlide className="">
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%201.png?alt=media&token=a3533011-2730-4725-8714-f7831ba71662"
                    alt="review"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className=" select-none pt-10"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="">
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%202.png?alt=media&token=37106c39-ce75-4b78-bb2d-63cd000866e7"
                    alt="review"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className=" select-none pt-10"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="">
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%203.png?alt=media&token=dc5dd3cb-c703-46e1-ad59-770bc294e0a3"
                    alt="review"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className=" select-none pt-10"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="">
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%204.png?alt=media&token=da0374be-0efe-4021-87ba-2bbe0fe18812"
                    alt="review"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className=" select-none pt-10"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/reveiw%205.png?alt=media&token=d38d386c-66f0-4e96-aa86-3c533af74da2"
                    alt="review"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className=" select-none pt-10"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <Footer />
      </div>

      {/* Mobile */}
    </div>
  );
}

export default Review;
