"use client";

import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="pt-[8vh]">
      {/* Desktop */}
      <div className="hidden  2xl:block bg-gradient-to-b from-[#ECFDFF]">
        <div className=" max-w-[85%] mx-auto">
          <div className="pt-[10vh] flex space-x-4 justify-center">
            <h2 className="text-[2.5vw] font-T1 font-black text-gray-500">
              The
            </h2>
            <h2 className="text-[2.5vw] font-T1 font-black text-[#008080]">
              Gallery
            </h2>
            <h2 className="text-[2.5vw] font-T1 font-black text-gray-500">
              of
            </h2>
          </div>
          <div className=" flex space-x-4 justify-center">
            <h2 className="text-[2.5vw] font-T1 font-black  text-[#008080]">
              ARTS
            </h2>
            <h2 className="text-[2.5vw] font-T1 font-black text-gray-500">
              & creative
            </h2>
            <h2 className="text-[2.5vw] font-T1 font-black text-[#008080]">
              innovation
            </h2>
          </div>

          <div className="flex justify-center items-center space-x-4 pt-2">
            <div className="w-[20%] h-[1.5px] bg-gray-500"></div>
            <div>
              <p className="font-T1 text-[1vw] text-black font-medium">
                YOU DREAM IT, WE BUILD IT
              </p>
            </div>

            <div className="w-[20%] h-[1.5px] bg-gray-500"></div>
          </div>

          <div className="flex justify-center pt-4">
            <div className="max-w-[50%] ">
              <p className="text-center font-T2 text-[1.2vw] text-black tracking-normal">
                We are architects of digital dreams. From conception to
                creation, we build exceptional digital experiences. Let&apos;s
                transform your vision into reality together.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/home%20hero.png?alt=media&token=a3fe21c1-6765-4be4-bc36-4faae5a4acf7"
            alt="Home Hero"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="select-none"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>
      </div>
      {/* Desktop */}

      {/* Laptop */}

      <div className="hidden 2xl:hidden lg:block bg-gradient-to-b from-[#ECFDFF]">
        <div className=" max-w-[85%] mx-auto">
          <div className="pt-[10vh] flex space-x-4 justify-center">
            <h2 className="text-[2.5vw] font-T1 font-black text-gray-500">
              The
            </h2>
            <h2 className="text-[2.5vw] font-T1 font-black text-[#008080]">
              Gallery
            </h2>
            <h2 className="text-[2.5vw] font-T1 font-black text-gray-500">
              of
            </h2>
          </div>
          <div className=" flex space-x-4 justify-center">
            <h2 className="text-[2.5vw] font-T1 font-black  text-[#008080]">
              ARTS
            </h2>
            <h2 className="text-[2.5vw] font-T1 font-black text-gray-500">
              & creative
            </h2>
            <h2 className="text-[2.5vw] font-T1 font-black text-[#008080]">
              innovation
            </h2>
          </div>

          <div className="flex justify-center items-center space-x-4 pt-2">
            <div className="w-[20%] h-[1.5px] bg-gray-500"></div>
            <div>
              <p className="font-T1 text-[1vw] text-black font-medium">
                YOU DREAM IT, WE BUILD IT
              </p>
            </div>

            <div className="w-[20%] h-[1.5px] bg-gray-500"></div>
          </div>

          <div className="flex justify-center pt-4">
            <div className="max-w-[50%] ">
              <p className="text-center font-T2 text-[1.2vw] text-black tracking-normal">
                We are architects of digital dreams. From conception to
                creation, we build exceptional digital experiences. Let&apos;s
                transform your vision into reality together.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/home%20hero.png?alt=media&token=a3fe21c1-6765-4be4-bc36-4faae5a4acf7"
            alt="Home Hero"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="select-none"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>
      </div>
      {/* Laptop */}

      {/* Tab */}

      <div className="hidden 2xl:hidden lg:hidden  md:block bg-gradient-to-b from-[#ECFDFF]">
        <div>
          <div className=" max-w-[90%] mx-auto pt-[10vh] flex space-x-4 justify-center">
            <h2 className="text-[6vw] font-T1 font-black text-gray-500">The</h2>
            <h2 className="text-[6vw] font-T1 font-black text-[#008080]">
              Gallery
            </h2>
            <h2 className="text-[6vw] font-T1 font-black text-gray-500">of</h2>
          </div>
          <div className=" flex space-x-4 justify-center">
            <h2 className="text-[6vw] font-T1 font-black  text-[#008080]">
              ARTS
            </h2>
            <h2 className="text-[6vw] font-T1 font-black text-gray-500">
              & creative
            </h2>
            <h2 className="text-[6vw] font-T1 font-black text-[#008080]">
              innovation
            </h2>
          </div>

          <div className="flex justify-center items-center space-x-4 pt-2">
            <div className="w-[16%] h-[1.5px] bg-gray-500"></div>
            <div>
              <p className="font-T1 text-[2.8vw] text-black font-medium">
                YOU DREAM IT, WE BUILD IT
              </p>
            </div>

            <div className="w-[16%] h-[1.5px] bg-gray-500"></div>
          </div>

          <div className="flex justify-center pt-4">
            <div className="max-w-[85%] mx-auto">
              <p className="text-center font-T2 text-[3.8vw] text-gray-500 tracking-normal">
                We are architects of digital dreams. From conception to
                creation, we build exceptional digital experiences. Let&apos;s
                transform your vision into reality together.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/mhero%20(2).png?alt=media&token=8c9bd2b2-5bd4-40c9-898f-5c0cc8cfe059"
            alt="Home Hero"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="select-none"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>
      </div>

      {/* Tab */}

      {/* Mobile */}

      <div className="md:hidden bg-gradient-to-b from-[#ECFDFF]">
        <div>
          <div className=" max-w-[90%] mx-auto pt-[10vh] flex space-x-4 justify-center">
            <h2 className="text-[6vw] font-T1 font-black text-gray-500">The</h2>
            <h2 className="text-[6vw] font-T1 font-black text-[#008080]">
              Gallery
            </h2>
            <h2 className="text-[6vw] font-T1 font-black text-gray-500">of</h2>
          </div>
          <div className=" flex space-x-4 justify-center">
            <h2 className="text-[6vw] font-T1 font-black  text-[#008080]">
              ARTS
            </h2>
            <h2 className="text-[6vw] font-T1 font-black text-gray-500">
              & creative
            </h2>
            <h2 className="text-[6vw] font-T1 font-black text-[#008080]">
              innovation
            </h2>
          </div>

          <div className="flex justify-center items-center space-x-4 pt-2">
            <div className="w-[16%] h-[1.5px] bg-gray-500"></div>
            <div>
              <p className="font-T1 text-[2.8vw] text-black font-medium">
                YOU DREAM IT, WE BUILD IT
              </p>
            </div>

            <div className="w-[16%] h-[1.5px] bg-gray-500"></div>
          </div>

          <div className="flex justify-center pt-4">
            <div className="max-w-[85%] mx-auto">
              <p className="text-center font-T2 text-[3.8vw] text-gray-500 tracking-normal">
                We are architects of digital dreams. From conception to
                creation, we build exceptional digital experiences. Let&apos;s
                transform your vision into reality together.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/mhero%20(2).png?alt=media&token=8c9bd2b2-5bd4-40c9-898f-5c0cc8cfe059"
            alt="Home Hero"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="select-none"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>
      </div>

      {/* Mobile */}
    </div>
  );
}

export default Hero;
