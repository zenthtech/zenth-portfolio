"use client";

import Image from "next/image";
import React from "react";

function Hwhy() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden  2xl:block bg-gradient-to-b  from-[#C7E9EC]">
        <div className=" pt-[16vh] max-w-[90%] mx-auto ">
          <div className="flex justify-center space-x-4">
            <h1 className="text-[3vw] font-T1 font-bold text-[#008080]">Why</h1>
            <h1 className="text-[3vw] font-T1 font-bold text-gray-500">
              Zenth?
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-[1.2vw] font-T2 font-medium text-black">
              Discovering Solutions & Creating Impact
            </p>
          </div>

          <div className="flex justify-between items-center  h-[780px]">
            <div className="w-[30%] flex flex-col justify-evenly h-full">
              <div className=" w-full h-36 pl-6 pt-4 pr-4 bg-[#C9EAEE] translate-x-[30%] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-18px_15px_22px_0px_rgba(80,78,78,0.2)] cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h2 className="text-[1.3vw] font-semibold font-T1 text-black">
                  Creative Depth
                </h2>
                <p className="text-[1vw] pt-2 font-medium font-T2 text-gray-500">
                  We offer a vast ocean of creativity, tailoring unique
                  solutions to bring your ideas to life.
                </p>
              </div>
              <div className=" w-full h-36 pl-6 pt-4 pr-4 bg-[#C9EAEE] translate-x-[10%] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-18px_15px_22px_0px_rgba(80,78,78,0.2)] cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h2 className="text-[1.3vw] font-semibold font-T1 text-black">
                  Distinctive Outcomes
                </h2>
                <p className="text-[1vw] pt-2 font-medium font-T2 text-gray-500">
                  We help you stay unique in the market, ensuring your business
                  stands out from the competition.
                </p>
              </div>

              <div className=" w-full h-36 pl-6 pt-4 pr-4 bg-[#C9EAEE] translate-x-[30%] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-18px_15px_22px_0px_rgba(80,78,78,0.2)] cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h2 className="text-[1.3vw] font-semibold font-T1 text-black">
                  Comprehensive Solutions
                </h2>
                <p className="text-[1vw] pt-2 font-medium font-T2 text-gray-500">
                  From start to finish, we provide a one-stop solution, handling
                  all aspects of your project seamlessly.
                </p>
              </div>
            </div>

            <div className="w-[30%] flex justify-center items-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Group%20234-1%201.png?alt=media&token=2b0aa2e7-4433-454e-9321-7f8a7e7568cd"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="mx-auto select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="w-[30%] flex flex-col justify-evenly h-full">
              <div className=" w-full h-36 pl-6 pt-4 pr-4 bg-[#C9EAEE] -translate-x-[30%] border-[1px] border-[#CDE3E5] rounded-lg shadow-[18px_15px_22px_0px_rgba(80,78,78,0.2)] cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h2 className="text-[1.3vw] font-semibold font-T1 text-black">
                  Team Excellence
                </h2>
                <p className="text-[1vw] pt-2 font-medium font-T2 text-gray-500">
                  Our skilled team prioritizes your vision, ensuring
                  high-quality work that meets your expectations.
                </p>
              </div>
              <div className=" w-full h-36 pl-6 pt-4 pr-4 bg-[#C9EAEE] -translate-x-[10%] border-[1px] border-[#CDE3E5] rounded-lg shadow-[18px_15px_22px_0px_rgba(80,78,78,0.2)] cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h2 className="text-[1.3vw] font-semibold font-T1 text-black">
                  Client-Centric Approach
                </h2>
                <p className="text-[1vw] pt-2 font-medium font-T2 text-gray-500">
                  Your priorities are our priorities. We work closely with you
                  to deliver results that resonate.
                </p>
              </div>

              <div className=" w-full h-36 pl-6 pt-4 pr-4 bg-[#C9EAEE] -translate-x-[30%] border-[1px] border-[#CDE3E5] rounded-lg shadow-[18px_15px_22px_0px_rgba(80,78,78,0.2)] cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h2 className="text-[1.3vw] font-semibold font-T1 text-black">
                  Speed & Precision
                </h2>
                <p className="text-[1vw] pt-2 font-medium font-T2 text-gray-500">
                  We combine speed with accuracy, ensuring your projects are
                  completed on time without compromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop */}

      {/* Laptop */}

      <div className="hidden 2xl:hidden lg:block bg-gradient-to-b  from-[#C7E9EC]">
        <div className="pt-[16vh] max-w-[85%] mx-auto">
          <div className="flex justify-center space-x-4">
            <h1 className="text-[3vw] font-T1 font-bold text-[#008080]">Why</h1>
            <h1 className="text-[3vw] font-T1 font-bold text-gray-500">
              Zenth?
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-[1.2vw] font-T2 font-medium text-black">
              Discovering Solutions & Creating Impact
            </p>
          </div>

          <div className="flex justify-between items-center  h-[780px]">
            <div className="w-[30%] flex flex-col justify-evenly h-full">
              <div className=" w-full h-36 pl-6 pt-4 pr-4 bg-[#C9EAEE] translate-x-[30%] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-18px_15px_22px_0px_rgba(80,78,78,0.2)] cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h2 className="text-[1.3vw] font-semibold font-T1 text-black">
                  Creative Depth
                </h2>
                <p className="text-[1vw] pt-2 font-medium font-T2 text-gray-500">
                  We offer a vast ocean of creativity, tailoring unique
                  solutions to bring your ideas to life.
                </p>
              </div>
              <div className=" w-full h-36 pl-6 pt-4 pr-4 bg-[#C9EAEE] translate-x-[10%] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-18px_15px_22px_0px_rgba(80,78,78,0.2)] cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h2 className="text-[1.3vw] font-semibold font-T1 text-black">
                  Distinctive Outcomes
                </h2>
                <p className="text-[1vw] pt-2 font-medium font-T2 text-gray-500">
                  We help you stay unique in the market, ensuring your business
                  stands out from the competition.
                </p>
              </div>

              <div className=" w-full h-36 pl-6 pt-4 pr-4 bg-[#C9EAEE] translate-x-[30%] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-18px_15px_22px_0px_rgba(80,78,78,0.2)] cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h2 className="text-[1.3vw] font-semibold font-T1 text-black">
                  Comprehensive Solutions
                </h2>
                <p className="text-[1vw] pt-2 font-medium font-T2 text-gray-500">
                  From start to finish, we provide a one-stop solution, handling
                  all aspects of your project seamlessly.
                </p>
              </div>
            </div>

            <div className="w-[30%] flex justify-center items-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Group%20234-1%201.png?alt=media&token=2b0aa2e7-4433-454e-9321-7f8a7e7568cd"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="mx-auto select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="w-[30%] flex flex-col justify-evenly h-full">
              <div className=" w-full h-36 pl-6 pt-4 pr-4 bg-[#C9EAEE] -translate-x-[30%] border-[1px] border-[#CDE3E5] rounded-lg shadow-[18px_15px_22px_0px_rgba(80,78,78,0.2)] cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h2 className="text-[1.3vw] font-semibold font-T1 text-black">
                  Team Excellence
                </h2>
                <p className="text-[1vw] pt-2 font-medium font-T2 text-gray-500">
                  Our skilled team prioritizes your vision, ensuring
                  high-quality work that meets your expectations.
                </p>
              </div>
              <div className=" w-full h-36 pl-6 pt-4 pr-4 bg-[#C9EAEE] -translate-x-[10%] border-[1px] border-[#CDE3E5] rounded-lg shadow-[18px_15px_22px_0px_rgba(80,78,78,0.2)] cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h2 className="text-[1.3vw] font-semibold font-T1 text-black">
                  Client-Centric Approach
                </h2>
                <p className="text-[1vw] pt-2 font-medium font-T2 text-gray-500">
                  Your priorities are our priorities. We work closely with you
                  to deliver results that resonate.
                </p>
              </div>

              <div className=" w-full h-36 pl-6 pt-4 pr-4 bg-[#C9EAEE] -translate-x-[30%] border-[1px] border-[#CDE3E5] rounded-lg shadow-[18px_15px_22px_0px_rgba(80,78,78,0.2)] cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h2 className="text-[1.3vw] font-semibold font-T1 text-black">
                  Speed & Precision
                </h2>
                <p className="text-[1vw] pt-2 font-medium font-T2 text-gray-500">
                  We combine speed with accuracy, ensuring your projects are
                  completed on time without compromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop */}

      {/* Tab */}

      <div className="hidden 2xl:hidden lg:hidden  md:block bg-gradient-to-b from-[#C7E9EC]">
        <div className="max-w-[90%] mx-auto pt-20">
          <div className="flex justify-center space-x-4">
            <h1 className="text-[8vw] font-T1 font-bold text-[#008080]">Why</h1>
            <h1 className="text-[8vw] font-T1 font-bold text-gray-500">
              Zenth?
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-[4vw] font-T2 font-medium text-black">
              Discovering Solutions & Creating Impact
            </p>
          </div>

          <div>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/home%20why.png?alt=media&token=60d092a5-47a4-4f1e-b296-b63d65c6decb"
              alt="Home Why Choose us"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className=" select-none pt-20"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* Tab */}

      {/* Mobile */}

      <div className="md:hidden bg-gradient-to-b from-[#C7E9EC]">
        <div className="max-w-[90%] mx-auto pt-20">
          <div className="flex justify-center space-x-4">
            <h1 className="text-[8vw] font-T1 font-bold text-[#008080]">Why</h1>
            <h1 className="text-[8vw] font-T1 font-bold text-gray-500">
              Zenth?
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-[4vw] font-T2 font-medium text-black">
              Discovering Solutions & Creating Impact
            </p>
          </div>

          <div>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/home%20why.png?alt=media&token=60d092a5-47a4-4f1e-b296-b63d65c6decb"
              alt="Home Why Choose us"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className=" select-none pt-20"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* Mobile */}
    </div>
  );
}

export default Hwhy;
