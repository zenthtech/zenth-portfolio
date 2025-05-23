"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hservice() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden  2xl:block bg-gradient-to-b from-[#ffffff] to-[#C7E9EC]">
        <div className=" pt-[10vh] max-w-[90%] mx-auto ">
          <div className="flex justify-center space-x-4">
            <h1 className="text-[3vw] font-T1 font-bold text-gray-500">Our</h1>
            <h1 className="text-[3vw] font-T1 font-bold text-[#008080]">
              Solution
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-[1.2vw] font-T2 font-medium text-black">
              Your Path to Digital Success
            </p>
          </div>

          <div className="flex justify-evenly pt-16">
            <div className="relative pb-4  w-[24%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice%201.png?alt=media&token=4e5f35c4-370a-4bb3-9b88-c197cea82adf"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[1.5vw] font-T1 font-semibold text-gray-800">
                Custom Software
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[0.9vw] pl-4 pr-4">
                We create software solutions tailored to your business, ensuring
                efficiency and fostering growth.
              </p>

              <Link href="/service#software">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[24%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/h%20service%202.png?alt=media&token=84e1aa09-27a9-477a-89ad-b9344e798c10"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[1.5vw] font-T1 font-semibold text-gray-800">
                Web Solutions
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[0.9vw] pl-4 pr-4">
                We design responsive, user-friendly websites that enhance your
                brand&apos;s online presence effectively.
              </p>

              <Link href="/service#web">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[24%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/h%20sevice%203.png?alt=media&token=c395155b-f87a-4a92-b122-a6afc0c65bc9"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[1.5vw] font-T1 font-semibold text-gray-800">
                Mobile Apps
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[0.9vw] pl-4 pr-4">
                Develop intuitive mobile apps that engage your audience on iOS
                and Android platforms seamlessly.
              </p>
              <Link href="/service#app">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-evenly pt-20">
            <div className="relative pb-4  w-[24%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice4.png?alt=media&token=ccbadd81-8343-40d4-90d8-a74f94fa8eeb"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[1.5vw] font-T1 font-semibold text-gray-800">
                Digital Marketing
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[0.9vw] pl-4 pr-4">
                Boost your brand with targeted digital marketing strategies,
                including SEO and social media campaigns.
              </p>
              <Link href="/service#marketing">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[24%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice%20uiux.png?alt=media&token=11ba20b5-a405-44eb-9eef-af5a3856479f"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[1.5vw] font-T1 font-semibold text-gray-800">
                UI/UX Design
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[0.9vw] pl-4 pr-4">
                Design visually appealing, user-friendly interfaces that improve
                the experience and effectiveness of your products.
              </p>
              <Link href="/service#ui/ux">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[24%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice6.png?alt=media&token=f7932550-e0d0-4323-9b2f-6a09208e8dd4"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[1.5vw] font-T1 font-semibold text-gray-800">
                Visual Media
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[0.9vw] pl-4 pr-4">
                Capture your brand&apos;s essence with professional photography
                and videography for events and promotions.
              </p>
              <Link href="/service#visual">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop */}

      {/* Laptop */}

      <div className="hidden 2xl:hidden lg:block bg-gradient-to-b from-[#ffffff] to-[#C7E9EC]">
        <div className="pt-[20vh] max-w-[85%] mx-auto ">
          <div className="flex justify-center space-x-4">
            <h1 className="text-[3vw] font-T1 font-bold text-gray-500">Our</h1>
            <h1 className="text-[3vw] font-T1 font-bold text-[#008080]">
              Solution
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-[1.2vw] font-T2 font-medium text-black">
              Your Path to Digital Success
            </p>
          </div>

          <div className="flex justify-evenly pt-16">
            <div className="relative pb-4  w-[24%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice%201.png?alt=media&token=4e5f35c4-370a-4bb3-9b88-c197cea82adf"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[1.5vw] font-T1 font-semibold text-gray-800">
                Custom Software
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[1vw] pl-4 pr-4">
                We create software solutions tailored to your business, ensuring
                efficiency and fostering growth.
              </p>
              <Link href="/service#lapsoftware">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-gray-500 font-semibold hover:text-white  py-2 px-4 text-[1vw] mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[24%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/h%20service%202.png?alt=media&token=84e1aa09-27a9-477a-89ad-b9344e798c10"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[1.5vw] font-T1 font-semibold text-gray-800">
                Web Solutions
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[1vw] pl-4 pr-4">
                We design responsive, user-friendly websites that enhance your
                brand&apos;s online presence effectively.
              </p>
              <Link href="/service#lapweb">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-gray-500 font-semibold hover:text-white text-[1vw] py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[24%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/h%20sevice%203.png?alt=media&token=c395155b-f87a-4a92-b122-a6afc0c65bc9"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[1.5vw] font-T1 font-semibold text-gray-800">
                Mobile Apps
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[1vw] pl-4 pr-4">
                Develop intuitive mobile apps that engage your audience on iOS
                and Android platforms seamlessly.
              </p>
              <Link href="/service#lapapp">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-gray-500 font-semibold hover:text-white text-[1vw] py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-evenly pt-20">
            <div className="relative pb-4  w-[24%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice4.png?alt=media&token=ccbadd81-8343-40d4-90d8-a74f94fa8eeb"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[1.5vw] font-T1 font-semibold text-gray-800">
                Digital Marketing
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[1vw] pl-4 pr-4">
                Boost your brand with targeted digital marketing strategies,
                including SEO and social media campaigns.
              </p>
              <Link href="/service#lapmarketing">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[24%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice%20uiux.png?alt=media&token=11ba20b5-a405-44eb-9eef-af5a3856479f"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[1.5vw] font-T1 font-semibold text-gray-800">
                UI/UX Design
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[1vw] pl-4 pr-4">
                Design visually appealing, user-friendly interfaces that improve
                the experience and effectiveness of your products.
              </p>
              <Link href="/service#lapui/ux">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-[1vw] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[24%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice6.png?alt=media&token=f7932550-e0d0-4323-9b2f-6a09208e8dd4"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[1.5vw] font-T1 font-semibold text-gray-800">
                Visual Media
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[1vw] pl-4 pr-4">
                Capture your brand&apos;s essence with professional photography
                and videography for events and promotions.
              </p>
              <Link href="/service#lapvisual">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-[1vw] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop */}

      {/* Tab */}

      <div className="hidden 2xl:hidden lg:hidden  md:block bg-gradient-to-b from-[#ffffff] to-[#C7E9EC]">
        <div className=" pt-[10vh] max-w-[90%] mx-auto ">
          <div className="flex justify-center space-x-4">
            <h1 className="text-[8vw] font-T1 font-bold text-gray-500">Our</h1>
            <h1 className="text-[8vw] font-T1 font-bold text-[#008080]">
              Solution
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-[4vw] font-T2 font-medium text-black">
              Your Path to Digital Success
            </p>
          </div>

          <div className="flex flex-col justify-center items-center space-y-14 pt-16">
            <div className="relative pb-4  w-[80%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice%201.png?alt=media&token=4e5f35c4-370a-4bb3-9b88-c197cea82adf"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[6vw] font-T1 font-semibold text-gray-800">
                Custom Software
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[3.5vw] pl-4 pr-4">
                We create software solutions tailored to your business, ensuring
                efficiency and fostering growth.
              </p>

              <Link href="/service#tabsoftware">
                <button className="bg-transparent font-T3 text-[3.5vw] hover:bg-[#008080] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[80%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/h%20service%202.png?alt=media&token=84e1aa09-27a9-477a-89ad-b9344e798c10"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[6vw] font-T1 font-semibold text-gray-800">
                Web Solutions
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[3.5vw] pl-4 pr-4">
                We design responsive, user-friendly websites that enhance your
                brand&apos;s online presence effectively.
              </p>
              <Link href="/service#tabweb">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-gray-500 font-semibold hover:text-white text-[3.5vw] py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[80%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/h%20sevice%203.png?alt=media&token=c395155b-f87a-4a92-b122-a6afc0c65bc9"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[6vw] font-T1 font-semibold text-gray-800">
                Mobile Apps
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[3.5vw] pl-4 pr-4">
                Develop intuitive mobile apps that engage your audience on iOS
                and Android platforms seamlessly.
              </p>
              <Link href="/service#tabapp">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-gray-500 font-semibold hover:text-white text-[3.5vw] py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[80%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice4.png?alt=media&token=ccbadd81-8343-40d4-90d8-a74f94fa8eeb"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[6vw] font-T1 font-semibold text-gray-800">
                Digital Marketing
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[3.5vw] pl-4 pr-4">
                Boost your brand with targeted digital marketing strategies,
                including SEO and social media campaigns.
              </p>

              <Link href="/service#tabmarketing">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-[3.5vw]  text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[80%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice%20uiux.png?alt=media&token=11ba20b5-a405-44eb-9eef-af5a3856479f"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[6vw] font-T1 font-semibold text-gray-800">
                UI/UX Design
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[3.5vw] pl-4 pr-4">
                Design visually appealing, user-friendly interfaces that improve
                the experience and effectiveness of your products.
              </p>
              <Link href="/service#tabui/ux">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-[3.5vw] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[80%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice6.png?alt=media&token=f7932550-e0d0-4323-9b2f-6a09208e8dd4"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[6vw] font-T1 font-semibold text-gray-800">
                Visual Media
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[3.5vw] pl-4 pr-4">
                Capture your brand&apos;s essence with professional photography
                and videography for events and promotions.
              </p>
              <Link href="/service#tabvisual">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-[3.5vw] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tab */}

      {/* Mobile */}

      <div className="md:hidden bg-gradient-to-b from-[#ffffff] to-[#C7E9EC]">
        <div className=" pt-[10vh] max-w-[90%] mx-auto ">
          <div className="flex justify-center space-x-4">
            <h1 className="text-[8vw] font-T1 font-bold text-gray-500">Our</h1>
            <h1 className="text-[8vw] font-T1 font-bold text-[#008080]">
              Solution
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-[4vw] font-T2 font-medium text-black">
              Your Path to Digital Success
            </p>
          </div>

          <div className="flex flex-col justify-center items-center space-y-14 pt-16">
            <div className="relative pb-4  w-[80%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice%201.png?alt=media&token=4e5f35c4-370a-4bb3-9b88-c197cea82adf"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[6vw] font-T1 font-semibold text-gray-800">
                Custom Software
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[3.5vw] pl-4 pr-4">
                We create software solutions tailored to your business, ensuring
                efficiency and fostering growth.
              </p>

              <Link href="/service#mobsoftware">
                <button className="bg-transparent font-T3 text-[3.5vw] hover:bg-[#008080] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[80%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/h%20service%202.png?alt=media&token=84e1aa09-27a9-477a-89ad-b9344e798c10"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[6vw] font-T1 font-semibold text-gray-800">
                Web Solutions
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[3.5vw] pl-4 pr-4">
                We design responsive, user-friendly websites that enhance your
                brand&apos;s online presence effectively.
              </p>
              <Link href="/service#mobweb">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-gray-500 font-semibold hover:text-white text-[3.5vw] py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[80%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/h%20sevice%203.png?alt=media&token=c395155b-f87a-4a92-b122-a6afc0c65bc9"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[6vw] font-T1 font-semibold text-gray-800">
                Mobile Apps
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[3.5vw] pl-4 pr-4">
                Develop intuitive mobile apps that engage your audience on iOS
                and Android platforms seamlessly.
              </p>
              <Link href="/service#mobapp">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-gray-500 font-semibold hover:text-white text-[3.5vw] py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[80%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice4.png?alt=media&token=ccbadd81-8343-40d4-90d8-a74f94fa8eeb"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[6vw] font-T1 font-semibold text-gray-800">
                Digital Marketing
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[3.5vw] pl-4 pr-4">
                Boost your brand with targeted digital marketing strategies,
                including SEO and social media campaigns.
              </p>

              <Link href="/service#mobmarketing">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-[3.5vw]  text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[80%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice%20uiux.png?alt=media&token=11ba20b5-a405-44eb-9eef-af5a3856479f"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[6vw] font-T1 font-semibold text-gray-800">
                UI/UX Design
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[3.5vw] pl-4 pr-4">
                Design visually appealing, user-friendly interfaces that improve
                the experience and effectiveness of your products.
              </p>
              <Link href="/service#mobui/ux">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-[3.5vw] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>

            <div className="relative pb-4  w-[80%] bg-[#DDF2F3] border-[1px] border-[#CDE3E5] rounded-lg shadow-[-30px_26px_22px_0px_rgba(80,78,78,0.2)] flex flex-col items-center ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/hservice6.png?alt=media&token=f7932550-e0d0-4323-9b2f-6a09208e8dd4"
                alt="Home Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
                className="relative select-none -top-8"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <h2 className="text-[6vw] font-T1 font-semibold text-gray-800">
                Visual Media
              </h2>
              <p className="mt-2 font-T2 text-center text-gray-500 text-[3.5vw] pl-4 pr-4">
                Capture your brand&apos;s essence with professional photography
                and videography for events and promotions.
              </p>
              <Link href="/service#mobvisual">
                <button className="bg-transparent font-T3 hover:bg-[#008080] text-[3.5vw] text-gray-500 font-semibold hover:text-white py-2 px-4 mt-4 border border-gray-500 hover:border-transparent rounded">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
    </div>
  );
}

export default Hservice;
