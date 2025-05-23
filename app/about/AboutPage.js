
"use client";

import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";

function AboutPage() {
    return (

    
        <div>
          {/* Desktop */}
          <div className="hidden  2xl:block ">
            <div className="bg-[#ECFDFF] w-full">
              <div className="max-w-[85%] mx-auto">
                <div className="pt-40 w-full flex justify-center">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about.png?alt=media&token=97f2b2e0-4a9f-43da-947a-d05a00dddb89"
                    alt="About"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "70%", height: "auto" }}
                    className="select-none "
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
                <div className="flex justify-center pt-10 pb-16">
                  <div className="w-[60%] ">
                    <p className="font-T2 font-medium text-center text-[1.2vw] text-gray-600">
                      We believe in the power of digital innovation to transform
                      businesses. Our passion lies in creating tailored solutions
                      that not only meet the needs of our clients but also set them
                      apart in a crowded marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="bg-white w-full pb-20">
              <div className="max-w-[85%] mx-auto">
                <div className="flex justify-between pt-20">
                  <div className="w-[30%]">
                    <p className="font-T2 font-semibold text-[#008080] text-[1vw]">
                      Know Us Better
                    </p>
                    <h2 className="font-T1 font-bold text-black text-[1.5vw] pt-2">
                      Discover How We Transform Ideas into Impact
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-[1vw] pt-4 tracking-normal ">
                      We don&apos;t just follow trends—we create them. Our
                      innovative approach unlocks new opportunities for businesses
                      to grow, thrive, and stand out in a competitive landscape.
                    </p>
    
                    <Link href='/contact'>
                    <button className="bg-[#008080] font-T3 hover:bg-[#ffffff] text-white font-semibold hover:text-black py-2 px-4 mt-6 hover:border hover:border-black  rounded">
                      Contact Us
                    </button>
                    </Link>
                  </div>
    
                  <div className=" w-[60%] flex justify-evenly">
                    <div className=" w-[27%]">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e1.png?alt=media&token=8fda403a-2574-4865-a402-b2364dc41434"
                        alt="zenth About"
                        width={40}
                        height={40}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
    
                      <h2 className="font-T1 font-bold text-black text-[1.5vw] pt-4">
                        Our Approach
                      </h2>
                      <p className="font-T2 font-normal text-gray-600 text-[1vw] pt-4 tracking-normal">
                        We tailor our strategies to align perfectly with your
                        business goals, ensuring every step we take leads to
                        success.
                      </p>
                    </div>
    
                    <div className=" w-[27%] ">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e2.png?alt=media&token=2705c09d-0fd5-4472-8518-c355c0f187e3"
                        alt="zenth About"
                        width={40}
                        height={40}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
    
                      <h2 className="font-T1 font-bold text-black text-[1.5vw] pt-4">
                        Our Expertise
                      </h2>
                      <p className="font-T2 font-normal text-gray-600 text-[1vw] pt-4 tracking-normal">
                        Leveraging innovative solutions and deep industry knowledge,
                        we bring excellence to every project we undertake.
                      </p>
                    </div>
    
                    <div className=" w-[27%]">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e3.png?alt=media&token=5f4081e3-6c86-4fed-8e72-51154e34dfa3"
                        alt="zenth About"
                        width={40}
                        height={40}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
    
                      <h2 className="font-T1 font-bold text-black text-[1.5vw] pt-4">
                        Our Impact
                      </h2>
                      <p className="font-T2 font-normal text-gray-600 text-[1vw] pt-4 tracking-normal">
                        We deliver measurable results that drive growth, enhance
                        brand visibility, and leave a lasting positive impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="bg-[#ECFDFF] w-full pb-20">
              <div className="max-w-[85%] mx-auto ">
                <div className="flex justify-center pt-16 space-x-4">
                  <h1 className="text-[2.6vw] font-T1 font-bold text-[#008080]">
                    Our
                  </h1>
                  <h1 className="text-[2.6vw] font-T1 font-bold text-gray-500">
                    Journey
                  </h1>
                  <h1 className="text-[2.6vw] font-T1 font-bold text-[#008080]">
                    Unfolds
                  </h1>
                </div>
                <div className="flex justify-center">
                  <div className="w-[50%]">
                    <p className="text-[1vw] font-T2 font-medium text-center text-gray-600">
                      We&apos;re just getting started, but our vision and passion
                      are driving us toward greatness. Explore the milestones that
                      have already defined our path.
                    </p>
                  </div>
                </div>
    
                <div className="pt-20">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20year.png?alt=media&token=812b43b8-2aa3-4975-9242-004f3eb83004"
                    alt="zenth About"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="select-none "
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </div>
            </div>
    
            <div className="bg-white w-full ">
              <div className="max-w-[90%] mx-auto">
                <div className="flex justify-center pt-16 space-x-4">
                  <h1 className="text-[2.6vw] font-T1 font-bold text-gray-500">
                    What&apos;s
                  </h1>
                  <h1 className="text-[2.6vw] font-T1 font-bold text-[#008080]">
                    Next?
                  </h1>
                </div>
                <div className="flex justify-center">
                  <div className="w-[50%]">
                    <p className="text-[1vw] font-T2 font-medium text-center text-gray-600">
                      Our journey has just started, and we&apos;re committed to
                      innovation, growth, and making a greater impact as we move
                      forward.
                    </p>
                  </div>
                </div>
    
                <div className="pt-16 pb-10">
                  <div className="flex justify-evenly">
                    <div className=" h-[250px] w-[20%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[4px_4px_4px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e4.png?alt=media&token=9ed8db78-e433-4586-b2db-d92afde88f2e"
                        alt="zenth About"
                        width={70}
                        height={70}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                      <h2 className="font-T1 font-bold  text-black text-[1.5vw] pt-4">
                        New Horizons
                      </h2>
                      <p className="font-T2 font-normal text-center text-gray-600 text-[1vw] p-3 tracking-normal">
                        Expanding our services to new industries and markets.
                      </p>
                    </div>
    
                    <div className=" h-[250px] w-[20%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[4px_4px_4px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e5.png?alt=media&token=2c60a58e-f6e9-4256-8a32-9faaae59b91c"
                        alt="zenth About"
                        width={70}
                        height={70}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                      <h2 className="font-T1 font-bold  text-black text-[1.5vw] pt-4">
                        Innovation Labs
                      </h2>
                      <p className="font-T2 font-normal text-center text-gray-600 text-[1vw] p-3 tracking-normal">
                        Launching an R&D wing to pioneer cutting-edge solutions.
                      </p>
                    </div>
    
                    <div className=" h-[250px] w-[20%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[4px_4px_4px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e6.png?alt=media&token=af6dca1a-6ab6-411f-ba82-ad443382cf43"
                        alt="zenth About"
                        width={70}
                        height={70}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                      <h2 className="font-T1 font-bold  text-black text-[1.5vw] pt-4">
                        Global Reach
                      </h2>
                      <p className="font-T2 font-normal text-center text-gray-600 text-[1vw] p-3 tracking-normal">
                        Opening offices across major global hubs to serve a wider
                        audience.
                      </p>
                    </div>
                  </div>
    
                  <div className="flex justify-evenly pt-20">
                    <div className=" h-[250px] w-[20%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[4px_4px_4px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e7.png?alt=media&token=6d4986bd-d5a7-4b00-a4c0-eeb2b0b7224b"
                        alt="zenth About"
                        width={70}
                        height={70}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                      <h2 className="font-T1 font-bold  text-black text-[1.5vw] pt-4">
                        Sustainability Goals
                      </h2>
                      <p className="font-T2 font-normal text-center text-gray-600 text-[1vw] p-3 tracking-normal">
                        Committing to eco-friendly practices in all our operations.
                      </p>
                    </div>
    
                    <div className=" h-[250px] w-[20%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[4px_4px_4px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e8.png?alt=media&token=86b90ebd-8850-4df9-8479-4cfe0dd5adc0"
                        alt="zenth About"
                        width={70}
                        height={70}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                      <h2 className="font-T1 font-bold  text-black text-[1.5vw] pt-4">
                        Community Impact
                      </h2>
                      <p className="font-T2 font-normal text-center text-gray-600 text-[1vw] p-3 tracking-normal">
                        Giving back through initiatives that support local
                        communities and foster social responsibility.
                      </p>
                    </div>
    
                    <div className=" h-[250px] w-[20%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[4px_4px_4px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e9.png?alt=media&token=35e9dd1b-e1e4-4168-92d4-4a403fd231c1"
                        alt="zenth About"
                        width={70}
                        height={70}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                      <h2 className="font-T1 font-bold  text-black text-[1.5vw] pt-4">
                        Future Ventures
                      </h2>
                      <p className="font-T2 font-normal p-3 text-center text-gray-600 text-[1vw]  tracking-normal">
                        Exploring new technologies and partnerships to stay ahead in
                        a rapidly evolving landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <Footer />
          </div>
          {/* Desktop */}
    
          {/* Laptop */}
    
          <div className="hidden 2xl:hidden lg:block">
            <div className="bg-[#ECFDFF] w-full">
              <div className="max-w-[85%] mx-auto">
                <div className="pt-40 w-full flex justify-center">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about.png?alt=media&token=97f2b2e0-4a9f-43da-947a-d05a00dddb89"
                    alt="About"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "70%", height: "auto" }}
                    className="select-none "
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
                <div className="flex justify-center pt-10 pb-16">
                  <div className="w-[60%] ">
                    <p className="font-T2 font-medium text-center text-[1.2vw] text-gray-600">
                      We believe in the power of digital innovation to transform
                      businesses. Our passion lies in creating tailored solutions
                      that not only meet the needs of our clients but also set them
                      apart in a crowded marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="bg-white w-full pb-20">
              <div className="max-w-[85%] mx-auto">
                <div className="flex justify-between pt-20">
                  <div className="w-[30%]">
                    <p className="font-T2 font-semibold text-[#008080] text-[1vw]">
                      Know Us Better
                    </p>
                    <h2 className="font-T1 font-bold text-black text-[1.5vw] pt-2">
                      Discover How We Transform Ideas into Impact
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-[1vw] pt-4 tracking-normal ">
                      We don&apos;t just follow trends—we create them. Our
                      innovative approach unlocks new opportunities for businesses
                      to grow, thrive, and stand out in a competitive landscape.
                    </p>
                    <Link href='/contact'>
                    <button className="bg-[#008080] font-T3 hover:bg-[#ffffff] text-white font-semibold hover:text-black py-2 px-4 mt-6 hover:border hover:border-black  rounded">
                      Contact Us
                    </button>
                    </Link>
                  </div>
    
                  <div className=" w-[60%] flex justify-evenly">
                    <div className=" w-[27%]">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e1.png?alt=media&token=8fda403a-2574-4865-a402-b2364dc41434"
                        alt="zenth About"
                        width={40}
                        height={40}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
    
                      <h2 className="font-T1 font-bold text-black text-[1.5vw] pt-4">
                        Our Approach
                      </h2>
                      <p className="font-T2 font-normal text-gray-600 text-[1vw] pt-4 tracking-normal">
                        We tailor our strategies to align perfectly with your
                        business goals, ensuring every step we take leads to
                        success.
                      </p>
                    </div>
    
                    <div className=" w-[27%] ">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e2.png?alt=media&token=2705c09d-0fd5-4472-8518-c355c0f187e3"
                        alt="zenth About"
                        width={40}
                        height={40}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
    
                      <h2 className="font-T1 font-bold text-black text-[1.5vw] pt-4">
                        Our Expertise
                      </h2>
                      <p className="font-T2 font-normal text-gray-600 text-[1vw] pt-4 tracking-normal">
                        Leveraging innovative solutions and deep industry knowledge,
                        we bring excellence to every project we undertake.
                      </p>
                    </div>
    
                    <div className=" w-[27%]">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e3.png?alt=media&token=5f4081e3-6c86-4fed-8e72-51154e34dfa3"
                        alt="zenth About"
                        width={40}
                        height={40}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
    
                      <h2 className="font-T1 font-bold text-black text-[1.5vw] pt-4">
                        Our Impact
                      </h2>
                      <p className="font-T2 font-normal text-gray-600 text-[1vw] pt-4 tracking-normal">
                        We deliver measurable results that drive growth, enhance
                        brand visibility, and leave a lasting positive impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="bg-[#ECFDFF] w-full pb-20">
              <div className="max-w-[85%] mx-auto ">
                <div className="flex justify-center pt-16 space-x-4">
                  <h1 className="text-[2.6vw] font-T1 font-bold text-[#008080]">
                    Our
                  </h1>
                  <h1 className="text-[2.6vw] font-T1 font-bold text-gray-500">
                    Journey
                  </h1>
                  <h1 className="text-[2.6vw] font-T1 font-bold text-[#008080]">
                    Unfolds
                  </h1>
                </div>
                <div className="flex justify-center">
                  <div className="w-[50%]">
                    <p className="text-[1vw] font-T2 font-medium text-center text-gray-600">
                      We&apos;re just getting started, but our vision and passion
                      are driving us toward greatness. Explore the milestones that
                      have already defined our path.
                    </p>
                  </div>
                </div>
    
                <div className="pt-20">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20year.png?alt=media&token=812b43b8-2aa3-4975-9242-004f3eb83004"
                    alt="zenth About"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="select-none "
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </div>
            </div>
    
            <div className="bg-white w-full ">
              <div className="max-w-[90%] mx-auto">
                <div className="flex justify-center pt-16 space-x-4">
                  <h1 className="text-[2.6vw] font-T1 font-bold text-gray-500">
                    What&apos;s
                  </h1>
                  <h1 className="text-[2.6vw] font-T1 font-bold text-[#008080]">
                    Next?
                  </h1>
                </div>
                <div className="flex justify-center">
                  <div className="w-[50%]">
                    <p className="text-[1vw] font-T2 font-medium text-center text-gray-600">
                      Our journey has just started, and we&apos;re committed to
                      innovation, growth, and making a greater impact as we move
                      forward.
                    </p>
                  </div>
                </div>
    
                <div className="pt-16 pb-10">
                  <div className="flex justify-evenly">
                    <div className=" h-[250px] w-[20%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[4px_4px_4px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e4.png?alt=media&token=9ed8db78-e433-4586-b2db-d92afde88f2e"
                        alt="zenth About"
                        width={70}
                        height={70}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                      <h2 className="font-T1 font-bold  text-black text-[1.5vw] pt-4">
                        New Horizons
                      </h2>
                      <p className="font-T2 font-normal text-center text-gray-600 text-[1vw] p-3 tracking-normal">
                        Expanding our services to new industries and markets.
                      </p>
                    </div>
    
                    <div className=" h-[250px] w-[20%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[4px_4px_4px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e5.png?alt=media&token=2c60a58e-f6e9-4256-8a32-9faaae59b91c"
                        alt="zenth About"
                        width={70}
                        height={70}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                      <h2 className="font-T1 font-bold  text-black text-[1.5vw] pt-4">
                        Innovation Labs
                      </h2>
                      <p className="font-T2 font-normal text-center text-gray-600 text-[1vw] p-3 tracking-normal">
                        Launching an R&D wing to pioneer cutting-edge solutions.
                      </p>
                    </div>
    
                    <div className=" h-[250px] w-[20%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[4px_4px_4px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e6.png?alt=media&token=af6dca1a-6ab6-411f-ba82-ad443382cf43"
                        alt="zenth About"
                        width={70}
                        height={70}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                      <h2 className="font-T1 font-bold  text-black text-[1.5vw] pt-4">
                        Global Reach
                      </h2>
                      <p className="font-T2 font-normal text-center text-gray-600 text-[1vw] p-3 tracking-normal">
                        Opening offices across major global hubs to serve a wider
                        audience.
                      </p>
                    </div>
                  </div>
    
                  <div className="flex justify-evenly pt-20">
                    <div className=" h-[250px] w-[20%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[4px_4px_4px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e7.png?alt=media&token=6d4986bd-d5a7-4b00-a4c0-eeb2b0b7224b"
                        alt="zenth About"
                        width={70}
                        height={70}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                      <h2 className="font-T1 font-bold  text-black text-[1.5vw] pt-4">
                        Sustainability Goals
                      </h2>
                      <p className="font-T2 font-normal text-center text-gray-600 text-[1vw] p-3 tracking-normal">
                        Committing to eco-friendly practices in all our operations.
                      </p>
                    </div>
    
                    <div className=" h-[250px] w-[20%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[4px_4px_4px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e8.png?alt=media&token=86b90ebd-8850-4df9-8479-4cfe0dd5adc0"
                        alt="zenth About"
                        width={70}
                        height={70}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                      <h2 className="font-T1 font-bold  text-black text-[1.5vw] pt-4">
                        Community Impact
                      </h2>
                      <p className="font-T2 font-normal text-center text-gray-600 text-[1vw] p-3 tracking-normal">
                        Giving back through initiatives that support local
                        communities and foster social responsibility.
                      </p>
                    </div>
    
                    <div className=" h-[250px] w-[20%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[4px_4px_4px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e9.png?alt=media&token=35e9dd1b-e1e4-4168-92d4-4a403fd231c1"
                        alt="zenth About"
                        width={70}
                        height={70}
                        className="select-none "
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                      <h2 className="font-T1 font-bold  text-black text-[1.5vw] pt-4">
                        Future Ventures
                      </h2>
                      <p className="font-T2 font-normal p-3 text-center text-gray-600 text-[1vw]  tracking-normal">
                        Exploring new technologies and partnerships to stay ahead in
                        a rapidly evolving landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <Footer />
          </div>
          {/* Laptop */}
    
          {/* Tab */}
    
          <div className="hidden 2xl:hidden lg:hidden  md:block">
            <div className="bg-gradient-to-b  from-[#ECFDFF] w-full">
              <div className="flex justify-center space-x-2 pt-40">
                <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">So</h1>
                <h1 className="text-[7vw] font-T1 font-bold text-gray-500">Who</h1>
                <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">We</h1>
                <h1 className="text-[7vw] font-T1 font-bold text-gray-500">Are</h1>
              </div>
    
              <div className="flex justify-center  pt-4">
                <div className="w-[80%] ">
                  <p className="font-T2 font-medium text-center text-[3.8vw] text-gray-600">
                    We believe in the power of digital innovation to transform
                    businesses. Our passion lies in creating tailored solutions that
                    not only meet the needs of our clients but also set them apart
                    in a crowded marketplace.
                  </p>
                </div>
              </div>
    
              <div className="w-full flex justify-center">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about.png?alt=media&token=97f2b2e0-4a9f-43da-947a-d05a00dddb89"
                  alt="About"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "85%", height: "auto" }}
                  className="select-none "
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </div>
            </div>
    
            <div className="bg-gradient-to-b from-[#ffffff] to-[#ECFDFF] w-full pb-16">
              <div className="max-w-[90%] mx-auto">
                <div className=" flex flex-col justify-center items-center pt-24">
                  <p className="font-T2 text-center font-semibold text-[#008080] text-[4vw]">
                    Know Us Better
                  </p>
                  <h2 className="font-T1 font-bold text-center text-black text-[4.5vw] pt-2">
                    Discover How We Transform <br />
                    Ideas into Impact
                  </h2>
                  <p className="font-T2 font-normal text-center text-gray-600 text-[3.8vw] pt-4 tracking-normal ">
                    We don&apos;t just follow trends—we create them. Our innovative
                    approach unlocks new opportunities for businesses to grow,
                    thrive, and stand out in a competitive landscape.
                  </p>
                  <Link href='/contact'>
                  <button className="bg-[#008080]  text-center font-T3  text-white font-semibold  py-2 px-4 mt-6   rounded">
                    Contact Us
                  </button>
                  </Link>
                </div>
    
                <div></div>
    
                <div className="flex flex-col justify-center items-center">
                  <div className=" mt-16 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e1.png?alt=media&token=8fda403a-2574-4865-a402-b2364dc41434"
                      alt="zenth About"
                      width={40}
                      height={40}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Our Approach
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      We tailor our strategies to align perfectly with your business
                      goals, ensuring every step we take leads to success.
                    </p>
                  </div>
    
                  <div className=" mt-10 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e2.png?alt=media&token=2705c09d-0fd5-4472-8518-c355c0f187e3"
                      alt="zenth About"
                      width={40}
                      height={40}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Our Expertise
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      Leveraging innovative solutions and deep industry knowledge,
                      we bring excellence to every project we undertake.
                    </p>
                  </div>
    
                  <div className=" mt-10 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e3.png?alt=media&token=5f4081e3-6c86-4fed-8e72-51154e34dfa3"
                      alt="zenth About"
                      width={40}
                      height={40}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Our Impact
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      We deliver measurable results that drive growth, enhance brand
                      visibility, and leave a lasting positive impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="bg-gradient-to-b  from-[#ECFDFF] pb-10">
              <div className="max-w-[90%] mx-auto">
                <div className="flex justify-center pt-16 space-x-2">
                  <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                    Our
                  </h1>
                  <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                    Journey
                  </h1>
                  <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                    Unfolds
                  </h1>
                </div>
                <div className="flex justify-center">
                  <div className="p-2">
                    <p className="text-[3.4vw] font-T2 font-medium text-center text-gray-600">
                      We&apos;re just getting started, but our vision and passion
                      are driving us toward greatness. Explore the milestones that
                      have already defined our path.
                    </p>
                  </div>
                </div>
    
                <div className="pt-20">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20year%20mobile.png?alt=media&token=e49e38f0-f2a0-443a-92fa-c69b46e16595"
                    alt="zenth About"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="select-none "
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </div>
            </div>
    
            <div className="bg-gradient-to-b from-[#ffffff] to-[#ECFDFF] w-full ">
              <div className="max-w-[90%] mx-auto ">
                <div className="flex justify-center pt-16 space-x-2">
                  <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                    What&apos;s
                  </h1>
                  <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                    Next?
                  </h1>
                </div>
                <div className="flex justify-center">
                  <div className="p-2">
                    <p className="text-[3.4vw] font-T2 font-medium text-center text-gray-600">
                      Our journey has just started, and we&apos;re committed to
                      innovation, growth, and making a greater impact as we move
                      forward.
                    </p>
                  </div>
                </div>
    
                <div className="flex flex-col justify-center items-center">
                  <div className=" mt-16 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)] ">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e4.png?alt=media&token=9ed8db78-e433-4586-b2db-d92afde88f2e"
                      alt="zenth About"
                      width={70}
                      height={70}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      New Horizons
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      Expanding our services to new industries and markets.
                    </p>
                  </div>
    
                  <div className=" mt-8 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)]">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e5.png?alt=media&token=2c60a58e-f6e9-4256-8a32-9faaae59b91c"
                      alt="zenth About"
                      width={70}
                      height={70}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Innovation Labs
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      Launching an R&D wing to pioneer cutting-edge solutions.
                    </p>
                  </div>
    
                  <div className=" mt-8 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)] ">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e6.png?alt=media&token=af6dca1a-6ab6-411f-ba82-ad443382cf43"
                      alt="zenth About"
                      width={70}
                      height={70}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Global Reach
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      Opening offices across major global hubs to serve a wider
                      audience.
                    </p>
                  </div>
    
                  <div className=" mt-8 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)]">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e7.png?alt=media&token=6d4986bd-d5a7-4b00-a4c0-eeb2b0b7224b"
                      alt="zenth About"
                      width={70}
                      height={70}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Sustainability Goals
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      Committing to eco-friendly practices in all our operations.
                    </p>
                  </div>
    
                  <div className=" mt-8 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)] ">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e8.png?alt=media&token=86b90ebd-8850-4df9-8479-4cfe0dd5adc0"
                      alt="zenth About"
                      width={70}
                      height={70}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Community Impact
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      Giving back through initiatives that support local communities
                      and foster social responsibility.
                    </p>
                  </div>
    
                  <div className=" mt-8 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)] ">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e9.png?alt=media&token=35e9dd1b-e1e4-4168-92d4-4a403fd231c1"
                      alt="zenth About"
                      width={70}
                      height={70}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Future Ventures
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      Exploring new technologies and partnerships to stay ahead in a
                      rapidly evolving landscape.
                    </p>
                  </div>
                </div>
              </div>
    
              <Footer />
            </div>
          </div>
    
          {/* Tab */}
    
          {/* Mobile */}
    
          <div className="md:hidden ">
            <div className="bg-[#ECFDFF] w-full pb-10">
        
    
    
              <div className="w-full flex justify-center pt-28">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about.png?alt=media&token=97f2b2e0-4a9f-43da-947a-d05a00dddb89"
                  alt="About"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "85%", height: "auto" }}
                  className="select-none "
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </div>
<div className="max-w-[90%] mx-auto">


              <div className=" flex flex-col justify-center items-center pt-12">
                  <p className="font-T2 text-center font-semibold text-[#008080] text-[4vw]">
                    Know Us Better
                  </p>
                  <h2 className="font-T1 font-bold text-center text-black text-[4.5vw] pt-2">
                  Turning Ideas into Impact
                  </h2>
                  <p className="font-T2 pl-2 pr-2 font-normal text-center text-gray-600 text-[3.8vw] pt-4 tracking-normal ">
                  We create smart solutions that help businesses grow and stand out.
                  </p>
                  <Link href='/contact'>
                  <button className="bg-[#008080]  text-center font-T3  text-white font-semibold  py-2 px-4 mt-6   rounded">
                    Contact Us
                  </button>
                  </Link>
                </div>
                </div>

            </div>
    
            <div className="bg-white w-full pb-16">
              <div className="max-w-[90%] mx-auto">
          
    
               
    
                <div className="flex flex-col justify-center items-center">
                  <div className=" mt-16 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e1.png?alt=media&token=8fda403a-2574-4865-a402-b2364dc41434"
                      alt="zenth About"
                      width={40}
                      height={40}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Our Approach
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      We tailor our strategies to align perfectly with your business
                      goals, ensuring every step we take leads to success.
                    </p>
                  </div>
    
                  <div className=" mt-10 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e2.png?alt=media&token=2705c09d-0fd5-4472-8518-c355c0f187e3"
                      alt="zenth About"
                      width={40}
                      height={40}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Our Expertise
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      Leveraging innovative solutions and deep industry knowledge,
                      we bring excellence to every project we undertake.
                    </p>
                  </div>
    
                  <div className=" mt-10 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)] hover:translate-y-[-6px] transition-transform duration-500 ease-in-out">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e3.png?alt=media&token=5f4081e3-6c86-4fed-8e72-51154e34dfa3"
                      alt="zenth About"
                      width={40}
                      height={40}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Our Impact
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      We deliver measurable results that drive growth, enhance brand
                      visibility, and leave a lasting positive impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="bg-[#ECFDFF] pb-10">
              <div className="max-w-[90%] mx-auto">
                <div className="flex justify-center pt-16 space-x-2">
                  <h1 className="text-[6vw] font-T1 font-bold text-[#008080]">
                    Our
                  </h1>
                  <h1 className="text-[6vw] font-T1 font-bold text-gray-500">
                    Journey
                  </h1>
                  <h1 className="text-[6vw] font-T1 font-bold text-[#008080]">
                    Unfolds
                  </h1>
                </div>
                <div className="flex justify-center">
                  <div className="p-2">
                    <p className="text-[3.4vw] font-T2 font-medium text-center text-gray-600">
                      We&apos;re just getting started, but our vision and passion
                      are driving us toward greatness. Explore the milestones that
                      have already defined our path.
                    </p>
                  </div>
                </div>
    
                <div className="pt-20">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20year%20mobile.png?alt=media&token=e49e38f0-f2a0-443a-92fa-c69b46e16595"
                    alt="zenth About"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="select-none "
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </div>
            </div>
    
            <div className="bg-white w-full ">
              <div className="max-w-[90%] mx-auto ">
                <div className="flex justify-center pt-16 space-x-2">
                  <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                    What&apos;s
                  </h1>
                  <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                    Next?
                  </h1>
                </div>
                <div className="flex justify-center">
                  <div className="p-2">
                    <p className="text-[3.4vw] font-T2 font-medium text-center text-gray-600">
                      Our journey has just started, and we&apos;re committed to
                      innovation, growth, and making a greater impact as we move
                      forward.
                    </p>
                  </div>
                </div>
    
                <div className="flex flex-col justify-center items-center">
                  <div className=" mt-16 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)] ">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e4.png?alt=media&token=9ed8db78-e433-4586-b2db-d92afde88f2e"
                      alt="zenth About"
                      width={70}
                      height={70}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      New Horizons
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      Expanding our services to new industries and markets.
                    </p>
                  </div>
    
                  <div className=" mt-8 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)]">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e5.png?alt=media&token=2c60a58e-f6e9-4256-8a32-9faaae59b91c"
                      alt="zenth About"
                      width={70}
                      height={70}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Innovation Labs
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      Launching an R&D wing to pioneer cutting-edge solutions.
                    </p>
                  </div>
    
                  <div className=" mt-8 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)] ">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e6.png?alt=media&token=af6dca1a-6ab6-411f-ba82-ad443382cf43"
                      alt="zenth About"
                      width={70}
                      height={70}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Global Reach
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      Opening offices across major global hubs to serve a wider
                      audience.
                    </p>
                  </div>
    
                  <div className=" mt-8 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)]">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e7.png?alt=media&token=6d4986bd-d5a7-4b00-a4c0-eeb2b0b7224b"
                      alt="zenth About"
                      width={70}
                      height={70}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Sustainability Goals
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      Committing to eco-friendly practices in all our operations.
                    </p>
                  </div>
    
                  <div className=" mt-8 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)] ">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e8.png?alt=media&token=86b90ebd-8850-4df9-8479-4cfe0dd5adc0"
                      alt="zenth About"
                      width={70}
                      height={70}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Community Impact
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      Giving back through initiatives that support local communities
                      and foster social responsibility.
                    </p>
                  </div>
    
                  <div className=" mt-8 h-[250px] w-[70%] flex flex-col justify-center items-center bg-white border-[1px] border-[#F5F5F5] rounded-lg shadow-[6px_6px_12px_0px_rgba(80,78,78,0.3)] ">
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/zenth%20about%20e9.png?alt=media&token=35e9dd1b-e1e4-4168-92d4-4a403fd231c1"
                      alt="zenth About"
                      width={70}
                      height={70}
                      className="select-none "
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
    
                    <h2 className="font-T1 font-bold text-black text-[4.5vw] pt-4">
                      Future Ventures
                    </h2>
                    <p className="font-T2 font-normal text-gray-600 text-center text-[3.5vw] p-4 tracking-normal">
                      Exploring new technologies and partnerships to stay ahead in a
                      rapidly evolving landscape.
                    </p>
                  </div>
                </div>
              </div>
    
              <Footer />
            </div>
          </div>
    
          {/* Mobile */}
        </div>
      );
}

export default AboutPage
