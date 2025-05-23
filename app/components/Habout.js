"use client";

import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import Link from "next/link";

function Habout() {
  const { ref: desktopRef, inView: desktopInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: laptopRef, inView: laptopInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: mobileRef, inView: mobileInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div>
      {/* Desktop */}
      <div className="hidden  2xl:block bg-gradient-to-b from-[#C7E9EC]">
        <div className="max-w-[85%] mx-auto pt-[20vh]">
          <div className="flex justify-evenly">
            <div className="w-[45%]">
              <div className="flex justify-center">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/h%20about.png?alt=media&token=7c55a327-8bae-4e0c-a2cb-c0c7dbf61c30"
                  alt="Home About"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "70%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </div>

              <div>
                <div className="flex justify-evenly pt-8">
                  <div
                    ref={desktopRef}
                    className="flex flex-col justify-center items-center"
                  >
                    {desktopInView && (
                      <CountUp
                        className="text-[2.6vw] font-bold font-T3 text-black"
                        end={10}
                        suffix="+"
                        duration={5}
                      />
                    )}
                    <p className="text-[1.2vw] font-T2 text-gray-600">
                      Happy Clients
                    </p>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    {desktopInView && (
                      <CountUp
                        className="text-[2.6vw] font-bold font-T3 text-black"
                        end={100}
                        suffix="+"
                        duration={5}
                      />
                    )}
                    <p className="text-[1.2vw] font-T2 text-gray-600">
                      Completed projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[45%] ">
              <div className=" flex space-x-4 ">
                <h1 className="text-[3vw] font-T1 font-bold text-[#008080]">
                  Who
                </h1>
                <h1 className="text-[3vw] font-T1 font-bold text-gray-500">
                  we
                </h1>
                <h1 className="text-[3vw] font-T1 font-bold text-[#008080] ">
                  are ?
                </h1>
              </div>

              <div className="">
                <p className="text-[1.2vw] font-T2 font-medium text-black">
                  Innovative digital solution experts
                </p>
              </div>

              <div className="pt-[4vh]">
                <h2 className="text-[1.6vw] text-black font-T1 font-semibold">
                  How Do We Elevate Your Brand?
                </h2>
                <p className="text-[1.3vw] pt-2 text-gray-600 font-T2 font-medium ">
                  We craft tailored digital solutions that amplify your brand’s
                  impact.
                </p>

                <h2 className="text-[1.6vw] pt-6 text-black font-T1 font-semibold">
                  In What Ways Can We Assist You?
                </h2>
                <p className="text-[1.3vw] pt-2 text-gray-600 font-T2 font-medium ">
                  We apply innovative strategies to distinguish your business in
                  the marketplace.
                </p>

                <h2 className="text-[1.6vw] pt-6 text-black font-T1 font-semibold">
                  What Transformations Can You Expect?
                </h2>
                <p className="text-[1.3vw] pt-2 text-gray-600 font-T2 font-medium ">
                  Enhanced customer engagement, elevated brand recognition, and
                  measurable growth.
                </p>
              </div>

              <div className="pt-6">
                <Link href='/about'>
              
                <button className="bg-transparent hover:bg-[#008080] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Discover More
                </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-around items-center pt-[10vh]">
            <div className=" w-[36%] ">
              <h3 className="text-[1.3vw] font-T1 font-semibold text-[#10474F] ">
                WE ARE PARTNERED WITH MORE THAN 10+ COMPANIES AROUND THE NATION
              </h3>
            </div>
            <div className=" w-[60%] ">
              <Marquee
                pauseOnHover={true}
                gradient={true}
                gradientColor="white"
                gradientWidth={30}
                className="cursor-pointer flex justify-between"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client2.png?alt=media&token=6bb3accb-6c7b-495d-a6fc-3c7180716851"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client3.png?alt=media&token=52a98528-703b-4396-9d85-19cdc4bc9cc8"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client1.png?alt=media&token=7544d5fb-a58f-4ae4-aadd-d4af2800131d"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client4.png?alt=media&token=54e578a4-d2c7-48ad-9954-847008e43a2d"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client5.png?alt=media&token=fd8951f5-12f3-4d2a-9c7e-6e13f6fb05ab"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client2.png?alt=media&token=6bb3accb-6c7b-495d-a6fc-3c7180716851"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client3.png?alt=media&token=52a98528-703b-4396-9d85-19cdc4bc9cc8"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client1.png?alt=media&token=7544d5fb-a58f-4ae4-aadd-d4af2800131d"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client4.png?alt=media&token=54e578a4-d2c7-48ad-9954-847008e43a2d"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client5.png?alt=media&token=fd8951f5-12f3-4d2a-9c7e-6e13f6fb05ab"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop */}

      {/* Laptop */}

      <div className="hidden 2xl:hidden lg:block bg-gradient-to-b from-[#C7E9EC]">
        <div className="max-w-[85%] mx-auto pt-[20vh]">
          <div className="flex justify-evenly">
            <div className="w-[45%]">
              <div className="flex justify-center">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/h%20about.png?alt=media&token=7c55a327-8bae-4e0c-a2cb-c0c7dbf61c30"
                  alt="Home About"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "70%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </div>

              <div>
                <div className="flex justify-evenly pt-8">
                  <div
                    ref={laptopRef}
                    className="flex flex-col justify-center items-center"
                  >
                    {laptopInView && (
                      <CountUp
                        className="text-[2.6vw] font-bold font-T3 text-black"
                        end={10}
                        suffix="+"
                        duration={5}
                      />
                    )}
                    <p className="text-[1.2vw] font-T2 text-gray-600">
                      Happy Clients
                    </p>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    {laptopInView && (
                      <CountUp
                        className="text-[2.6vw] font-bold font-T3 text-black"
                        end={100}
                        suffix="+"
                        duration={5}
                      />
                    )}
                    <p className="text-[1.2vw] font-T2 text-gray-600">
                      Completed projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[45%] ">
              <div className=" flex space-x-4 ">
                <h1 className="text-[3vw] font-T1 font-bold text-[#008080]">
                  Who
                </h1>
                <h1 className="text-[3vw] font-T1 font-bold text-gray-500">
                  we
                </h1>
                <h1 className="text-[3vw] font-T1 font-bold text-[#008080] ">
                  are ?
                </h1>
              </div>

              <div className="">
                <p className="text-[1.2vw] font-T2 font-medium text-black">
                  Innovative digital solution experts
                </p>
              </div>

              <div className="pt-[4vh]">
                <h2 className="text-[1.6vw] text-black font-T1 font-semibold">
                  How Do We Elevate Your Brand?
                </h2>
                <p className="text-[1.3vw] pt-2 text-gray-600 font-T2 font-medium ">
                  We craft tailored digital solutions that amplify your brand’s
                  impact.
                </p>

                <h2 className="text-[1.6vw] pt-6 text-black font-T1 font-semibold">
                  In What Ways Can We Assist You?
                </h2>
                <p className="text-[1.3vw] pt-2 text-gray-600 font-T2 font-medium ">
                  We apply innovative strategies to distinguish your business in
                  the marketplace.
                </p>

                <h2 className="text-[1.6vw] pt-6 text-black font-T1 font-semibold">
                  What Transformations Can You Expect?
                </h2>
                <p className="text-[1.3vw] pt-2 text-gray-600 font-T2 font-medium ">
                  Enhanced customer engagement, elevated brand recognition, and
                  measurable growth.
                </p>
              </div>

              <div className="pt-6">
              <Link href='/about'>
                <button className="bg-transparent hover:bg-[#008080] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Discover More
                </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-around items-center pt-[10vh]">
            <div className=" w-[36%] ">
              <h3 className="text-[1.3vw] font-T1  text-[#10474F] font-semibold ">
                WE ARE PARTNERED WITH MORE THAN 10+ COMPANIES AROUND THE NATION
              </h3>
            </div>
            <div className=" w-[60%] ">
              <Marquee
                pauseOnHover={true}
                gradient={true}
                gradientColor="white"
                gradientWidth={30}
                className="cursor-pointer flex justify-between"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client2.png?alt=media&token=6bb3accb-6c7b-495d-a6fc-3c7180716851"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client3.png?alt=media&token=52a98528-703b-4396-9d85-19cdc4bc9cc8"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client1.png?alt=media&token=7544d5fb-a58f-4ae4-aadd-d4af2800131d"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client4.png?alt=media&token=54e578a4-d2c7-48ad-9954-847008e43a2d"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client5.png?alt=media&token=fd8951f5-12f3-4d2a-9c7e-6e13f6fb05ab"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>

                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client2.png?alt=media&token=6bb3accb-6c7b-495d-a6fc-3c7180716851"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client3.png?alt=media&token=52a98528-703b-4396-9d85-19cdc4bc9cc8"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client1.png?alt=media&token=7544d5fb-a58f-4ae4-aadd-d4af2800131d"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client4.png?alt=media&token=54e578a4-d2c7-48ad-9954-847008e43a2d"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client5.png?alt=media&token=fd8951f5-12f3-4d2a-9c7e-6e13f6fb05ab"
                  alt="Home About"
                  width={100}
                  height={100}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl  ml-4 mr-4">-</h1>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop */}

      {/* Tab */}

      <div className="hidden 2xl:hidden lg:hidden  md:block  bg-gradient-to-b from-[#C7E9EC]">
        <div className="max-w-[90%] mx-auto">
          <div className=" pt-10">
            <div>
              <div className=" flex justify-center space-x-4 ">
                <h1 className="text-[8vw] font-T1 font-bold text-[#008080]">
                  Who
                </h1>
                <h1 className="text-[8vw] font-T1 font-bold text-gray-500">
                  we
                </h1>
                <h1 className="text-[8vw] font-T1 font-bold text-[#008080] ">
                  are ?
                </h1>
              </div>

              <div className="flex justify-center">
                <p className="text-[4vw] font-T2 font-medium text-black">
                  Innovative digital solution experts
                </p>
              </div>

              <div className="flex justify-center pt-10">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/h%20about.png?alt=media&token=7c55a327-8bae-4e0c-a2cb-c0c7dbf61c30"
                  alt="Home About"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "75%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </div>

              <div className="flex justify-evenly pt-8">
                <div
                  ref={mobileRef}
                  className="flex flex-col justify-center items-center"
                >
                  {mobileInView && (
                    <CountUp
                      className="text-[8vw] font-bold font-T3 text-black"
                      end={10}
                      suffix="+"
                      duration={5}
                    />
                  )}
                  <p className="text-[3.6vw] font-T2 text-gray-600">
                    Happy Clients
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center">
                  {mobileInView && (
                    <CountUp
                      className="text-[8vw] font-bold font-T3 text-black"
                      end={100}
                      suffix="+"
                      duration={5}
                    />
                  )}
                  <p className="text-[3.6vw] font-T2 text-gray-600">
                    Completed projects
                  </p>
                </div>
              </div>

              <div className="pt-[6vh]">
                <div className="flex flex-col justify-center items-center  space-y-4">
                  <div className="flex items-center justify-center w-full ">
                    <div className="w-[20%]">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/habouticon1.png?alt=media&token=8d8cab13-1a92-4852-84f5-acfc5e556417"
                        alt="Home About"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "80%", height: "auto" }}
                        className="select-none"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                    </div>
                    <div className="w-[70%]">
                      <h2 className="text-[3.8vw] text-black font-T1 font-semibold">
                        How Do We Elevate Your Brand?
                      </h2>
                      <p className="text-[3vw] pt-2 text-gray-600 font-T2 font-medium">
                        We craft tailored digital solutions that amplify your
                        brand’s impact.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-full ">
                    <div className="w-[20%]">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/habouticon2.png?alt=media&token=3bc7f8ce-17d8-48c7-b41d-d94d5daa722e"
                        alt="Home About"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "80%", height: "auto" }}
                        className="select-none"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                    </div>
                    <div className="w-[70%]">
                      <h2 className="text-[3.8vw] text-black font-T1 font-semibold">
                        In What Ways Can We Assist You?
                      </h2>
                      <p className="text-[3vw] pt-2 text-gray-600 font-T2 font-medium">
                        We apply innovative strategies to distinguish your
                        business in the marketplace.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-full ">
                    <div className="w-[20%]">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/habouticon3.png?alt=media&token=65ffc0ab-b689-4df3-8f01-e82862fce517"
                        alt="Home About"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "80%", height: "auto" }}
                        className="select-none"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                    </div>
                    <div className="w-[70%]">
                      <h2 className="text-[3.8vw] text-black font-T1 font-semibold">
                        What Transforms Can You Expect?
                      </h2>
                      <p className="text-[3vw] pt-2 text-gray-600 font-T2 font-medium">
                        Enhanced customer engagement, elevated brand
                        recognition, and measurable growth.
                      </p>
                    </div>
                  </div>
                  <div className="">
                  <Link href='/about'>
                    <button className="bg-transparent hover:bg-[#008080] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                      Discover More
                    </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <h3 className="text-[4vw] font-T1 text-center font-semibold text-[#10474F] ">
                  WE ARE PARTNERED WITH MORE THAN 10+ COMPANIES AROUND THE
                  NATION
                </h3>
                <div className="pt-6">
                  <Marquee
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor="white"
                    gradientWidth={30}
                    className="cursor-pointer flex justify-between"
                  >
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client2.png?alt=media&token=6bb3accb-6c7b-495d-a6fc-3c7180716851"
                      alt="Home About"
                      width={100}
                      height={100}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="flex justify-center items-center">
                      <h1 className="text-3xl ml-4 mr-4">-</h1>
                    </div>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client3.png?alt=media&token=52a98528-703b-4396-9d85-19cdc4bc9cc8"
                      alt="Home About"
                      width={100}
                      height={100}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="flex justify-center items-center">
                      <h1 className="text-3xl  ml-4 mr-4">-</h1>
                    </div>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client1.png?alt=media&token=7544d5fb-a58f-4ae4-aadd-d4af2800131d"
                      alt="Home About"
                      width={100}
                      height={100}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="flex justify-center items-center">
                      <h1 className="text-3xl  ml-4 mr-4">-</h1>
                    </div>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client4.png?alt=media&token=54e578a4-d2c7-48ad-9954-847008e43a2d"
                      alt="Home About"
                      width={100}
                      height={100}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="flex justify-center items-center">
                      <h1 className="text-3xl  ml-4 mr-4">-</h1>
                    </div>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client5.png?alt=media&token=fd8951f5-12f3-4d2a-9c7e-6e13f6fb05ab"
                      alt="Home About"
                      width={100}
                      height={100}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="flex justify-center items-center">
                      <h1 className="text-3xl  ml-4 mr-4">-</h1>
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab */}

      {/* Mobile */}

      <div className="md:hidden bg-gradient-to-b from-[#C7E9EC]">
        <div className="max-w-[90%] mx-auto">
          <div className=" pt-10">
            <div>
              <div className=" flex justify-center space-x-4 ">
                <h1 className="text-[8vw] font-T1 font-bold text-[#008080]">
                  Who
                </h1>
                <h1 className="text-[8vw] font-T1 font-bold text-gray-500">
                  we
                </h1>
                <h1 className="text-[8vw] font-T1 font-bold text-[#008080] ">
                  are ?
                </h1>
              </div>

              <div className="flex justify-center">
                <p className="text-[4vw] font-T2 font-medium text-black">
                  Innovative digital solution experts
                </p>
              </div>

              <div className="flex justify-center pt-10">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/h%20about.png?alt=media&token=7c55a327-8bae-4e0c-a2cb-c0c7dbf61c30"
                  alt="Home About"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "75%", height: "auto" }}
                  className="select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </div>

              <div className="flex justify-evenly pt-8">
                <div
                  ref={mobileRef}
                  className="flex flex-col justify-center items-center"
                >
                  {mobileInView && (
                    <CountUp
                      className="text-[8vw] font-bold font-T3 text-black"
                      end={10}
                      suffix="+"
                      duration={5}
                    />
                  )}
                  <p className="text-[3.6vw] font-T2 text-gray-600">
                    Happy Clients
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center">
                  {mobileInView && (
                    <CountUp
                      className="text-[8vw] font-bold font-T3 text-black"
                      end={100}
                      suffix="+"
                      duration={5}
                    />
                  )}
                  <p className="text-[3.6vw] font-T2 text-gray-600">
                    Completed projects
                  </p>
                </div>
              </div>

              <div className="pt-[6vh]">
                <div className="flex flex-col justify-center items-center  space-y-4">
                  <div className="flex items-center justify-center w-full ">
                    <div className="w-[20%]">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/habouticon1.png?alt=media&token=8d8cab13-1a92-4852-84f5-acfc5e556417"
                        alt="Home About"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "80%", height: "auto" }}
                        className="select-none"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                    </div>
                    <div className="w-[70%]">
                      <h2 className="text-[3.8vw] text-black font-T1 font-semibold">
                        How Do We Elevate Your Brand?
                      </h2>
                      <p className="text-[3vw] pt-2 text-gray-600 font-T2 font-medium">
                        We craft tailored digital solutions that amplify your
                        brand’s impact.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-full ">
                    <div className="w-[20%]">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/habouticon2.png?alt=media&token=3bc7f8ce-17d8-48c7-b41d-d94d5daa722e"
                        alt="Home About"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "80%", height: "auto" }}
                        className="select-none"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                    </div>
                    <div className="w-[70%]">
                      <h2 className="text-[3.8vw] text-black font-T1 font-semibold">
                        In What Ways Can We Assist You?
                      </h2>
                      <p className="text-[3vw] pt-2 text-gray-600 font-T2 font-medium">
                        We apply innovative strategies to distinguish your
                        business in the marketplace.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-full ">
                    <div className="w-[20%]">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/habouticon3.png?alt=media&token=65ffc0ab-b689-4df3-8f01-e82862fce517"
                        alt="Home About"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "80%", height: "auto" }}
                        className="select-none"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                    </div>
                    <div className="w-[70%]">
                      <h2 className="text-[3.8vw] text-black font-T1 font-semibold">
                        What Transforms Can You Expect?
                      </h2>
                      <p className="text-[3vw] pt-2 text-gray-600 font-T2 font-medium">
                        Enhanced customer engagement, elevated brand
                        recognition, and measurable growth.
                      </p>
                    </div>
                  </div>
                  <div className="">
                  <Link href='/about'>
                    <button className="bg-transparent hover:bg-[#008080] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                      Discover More
                    </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <h3 className="text-[4vw] font-T1 text-center font-semibold text-[#10474F] ">
                  WE ARE PARTNERED WITH MORE THAN 10+ COMPANIES AROUND THE
                  NATION
                </h3>
                <div className="pt-6">
                  <Marquee
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor="white"
                    gradientWidth={30}
                    className="cursor-pointer flex justify-between"
                  >
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client2.png?alt=media&token=6bb3accb-6c7b-495d-a6fc-3c7180716851"
                      alt="Home About"
                      width={100}
                      height={100}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="flex justify-center items-center">
                      <h1 className="text-3xl ml-4 mr-4">-</h1>
                    </div>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client3.png?alt=media&token=52a98528-703b-4396-9d85-19cdc4bc9cc8"
                      alt="Home About"
                      width={100}
                      height={100}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="flex justify-center items-center">
                      <h1 className="text-3xl  ml-4 mr-4">-</h1>
                    </div>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client1.png?alt=media&token=7544d5fb-a58f-4ae4-aadd-d4af2800131d"
                      alt="Home About"
                      width={100}
                      height={100}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="flex justify-center items-center">
                      <h1 className="text-3xl  ml-4 mr-4">-</h1>
                    </div>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client4.png?alt=media&token=54e578a4-d2c7-48ad-9954-847008e43a2d"
                      alt="Home About"
                      width={100}
                      height={100}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="flex justify-center items-center">
                      <h1 className="text-3xl  ml-4 mr-4">-</h1>
                    </div>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/client5.png?alt=media&token=fd8951f5-12f3-4d2a-9c7e-6e13f6fb05ab"
                      alt="Home About"
                      width={100}
                      height={100}
                      className="select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="flex justify-center items-center">
                      <h1 className="text-3xl  ml-4 mr-4">-</h1>
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
    </div>
  );
}

export default Habout;
