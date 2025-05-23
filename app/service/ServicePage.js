"use client";

import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";

function ServicePage() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden  2xl:block ">
        <div className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%20bg%201.png?alt=media&token=3295c06d-c1e6-4e1c-a4bd-8e1974a02d06')] bg-cover bg-center">
          <div className="max-w-[85%] mx-auto">
            <div
              id="software"
              className="flex justify-center items-center pt-28"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%201.png?alt=media&token=83f66f03-98b1-4717-a633-12d974eb64e0"
                alt="Home About"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "35%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex justify-center space-x-4">
              <h1 className="text-[2.5vw] font-T1 font-bold text-[#008080]">
                Custom
              </h1>
              <h1 className="text-[2.5vw] font-T1 font-bold text-gray-500">
                Software
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[1vw] font-T2 font-medium text-gray-600 text-center">
                We create software solutions tailored to your business, ensuring{" "}
                <br />
                efficiency and fostering growth.
              </p>
            </div>

            <div className="flex justify-evenly pt-16">
              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Bespoke Software <br /> Design
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Enhanced customer engagement, elevated brand recognition, and
                  measurable growth.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Full-Stack <br /> Development
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Comprehensive development services covering both front-end and
                  back-end, delivering robust and reliable applications.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  API <br /> Integration
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Seamless API integration that connects your systems and
                  enhances your software&apos;s functionality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="web"
          className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Web%20Solution%20(1).png?alt=media&token=2c6e9462-b551-41ed-bef0-fb8b1950008f')] bg-cover bg-center"
        >
          <div className="max-w-[85%] mx-auto">
            <div className="flex justify-center items-center pt-16">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%202.png?alt=media&token=0255eb8e-0338-4fb6-aaba-816c801abdfb"
                alt="Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "35%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex justify-center space-x-4">
              <h1 className="text-[2.5vw] font-T1 font-bold text-[#008080]">
                Web
              </h1>
              <h1 className="text-[2.5vw] font-T1 font-bold text-gray-500">
                Solutions
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[1vw] font-T2 font-medium text-gray-600 text-center">
                We design responsive, user-friendly websites that enhance your
                brand&apos;s
                <br />
                online presence effectively.
              </p>
            </div>

            <div className="flex justify-evenly pt-16">
              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Responsive <br /> Web Design
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Crafting websites that look great and work well on all
                  devices, providing a seamless user experience.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Static & Dynamic <br /> Websites
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Creating static and dynamic websites with engaging visuals and
                  interactive features, providing real-time updates.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  E-commerce <br /> Development
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Building secure and user-friendly online stores that drive
                  sales and enhance customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%20bg%203.png?alt=media&token=155d34e1-26dc-430f-9527-ce39377e347c')] bg-cover bg-center">
          <div className="max-w-[85%] mx-auto">
            <div id="app" className="flex justify-center items-center pt-28">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%203.png?alt=media&token=e07e9519-ff85-4dae-bc09-461b1bccbb3a"
                alt="Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "35%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex justify-center space-x-4 pt-16">
              <h1 className="text-[2.5vw] font-T1 font-bold text-[#008080]">
                Mobile
              </h1>
              <h1 className="text-[2.5vw] font-T1 font-bold text-gray-500">
                Apps
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[1vw] font-T2 font-medium text-gray-600 text-center">
                Develop intuitive mobile apps that engage your audience on iOS
                and Android
                <br />
                platforms seamlessly.
              </p>
            </div>

            <div className="flex justify-evenly pt-20">
              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  iOS & Android <br /> Apps
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Crafting websites that look great and work well on all
                  devices, providing a seamless user experience.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Cross-Platform <br /> Development
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Building apps that work seamlessly across different devices,
                  reducing development time and cost.{" "}
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  App <br /> Maintenance
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Providing continuous support and updates to keep your mobile
                  apps running smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%20bg%204.png?alt=media&token=a8d2d9a0-6d9c-4cc9-90c4-5c105629fd75')] bg-cover bg-center">
          <div className="max-w-[85%] mx-auto">
            <div
              id="marketing"
              className="flex justify-center items-center pt-20"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%204.png?alt=media&token=f213aed1-dc34-41ec-a198-efc2d6ba42d5"
                alt="Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "35%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex justify-center space-x-4 pt-6">
              <h1 className="text-[2.5vw] font-T1 font-bold text-[#008080]">
                Digital
              </h1>
              <h1 className="text-[2.5vw] font-T1 font-bold text-gray-500">
                Marketing
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[1vw] font-T2 font-medium text-gray-600 text-center">
                Boost your brand with targeted digital marketing strategies,
                including SEO
                <br />
                and social media campaigns.
              </p>
            </div>

            <div className="flex justify-evenly pt-20">
              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  SEO <br /> Optimization
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Boosting your website’s visibility on search engines to
                  attract more visitors and drive growth.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Social Media <br /> Campaigns
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Creating and managing social media strategies that connect
                  with your audience and build brand loyalty.{" "}
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Content <br /> Marketing
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Developing engaging content that resonates with your target
                  audience and promotes your brand.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/UI%20%26%20UX%20Design.png?alt=media&token=4e2a884b-5328-492d-9a17-e0f3a403710e')] bg-cover bg-center">
          <div className="max-w-[85%] mx-auto">
            <div id="ui/ux" className="flex justify-center items-center pt-20">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%20uiux.png?alt=media&token=ad30c2f2-7543-458d-b38b-1c127c3b2f27"
                alt="Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "35%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex justify-center space-x-4 pt-6">
              <h1 className="text-[2.5vw] font-T1 font-bold text-[#008080]">
                UI/UX
              </h1>
              <h1 className="text-[2.5vw] font-T1 font-bold text-gray-500">
                Design
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[1vw] font-T2 font-medium text-gray-600 text-center">
                Design visually appealing, user-friendly interfaces that improve
                the
                <br />
                experience and effectiveness of your products.
              </p>
            </div>

            <div className="flex justify-evenly pt-20">
              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  User Interface <br /> Design
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Designing intuitive interfaces that are visually appealing and
                  easy to navigate for a better user experience.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  User Experience <br /> Research
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Conducting thorough research to understand user needs and
                  create designs that meet their expectations.{" "}
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Prototyping <br /> & Testing
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Developing prototypes and conducting tests to ensure the
                  design works as intended before launch.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%20bg%206.png?alt=media&token=46d0c16b-ed15-4d73-b79d-5485e1530f60')] bg-cover bg-center">
          <div className="max-w-[85%] mx-auto">
            <div id="visual" className="flex justify-center items-center pt-20">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%206.png?alt=media&token=5b4e807f-5a97-454e-b4e3-6e3d8030e2cc"
                alt="Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "35%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex justify-center space-x-4 pt-6">
              <h1 className="text-[2.5vw] font-T1 font-bold text-[#008080]">
                Visual
              </h1>
              <h1 className="text-[2.5vw] font-T1 font-bold text-gray-500">
                Media
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[1vw] font-T2 font-medium text-gray-600 text-center">
                Capture your brand&apos;s essence with professional photography
                and
                <br />
                videography for events and promotions.
              </p>
            </div>

            <div className="flex justify-evenly pt-20">
              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Graphic & <br /> Motion Design
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Crafting striking visuals and dynamic motion graphics that
                  effectively communicate your brand’s message across all
                  platforms.{" "}
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Photography <br /> Services
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Offering professional photography that showcases your
                  products, services, and events in the best light.{" "}
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Video <br /> Production
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Producing high-quality videos that engage viewers and
                  effectively convey your brand’s story.{" "}
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
      {/* Desktop */}

      {/* Laptop */}

      <div className="hidden 2xl:hidden lg:block">
        <div className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%20bg%201.png?alt=media&token=3295c06d-c1e6-4e1c-a4bd-8e1974a02d06')] bg-cover bg-center">
          <div className="max-w-[85%] mx-auto">
            <div
              id="lapsoftware"
              className="flex justify-center items-center pt-28"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%201.png?alt=media&token=83f66f03-98b1-4717-a633-12d974eb64e0"
                alt="Home About"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "35%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex justify-center space-x-4">
              <h1 className="text-[2.5vw] font-T1 font-bold text-[#008080]">
                Custom
              </h1>
              <h1 className="text-[2.5vw] font-T1 font-bold text-gray-500">
                Software
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[1vw] font-T2 font-medium text-gray-600 text-center">
                We create software solutions tailored to your business, ensuring{" "}
                <br />
                efficiency and fostering growth.
              </p>
            </div>

            <div className="flex justify-evenly pt-16">
              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Bespoke Software <br /> Design
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Enhanced customer engagement, elevated brand recognition, and
                  measurable growth.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Full-Stack <br /> Development
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Comprehensive development services covering both front-end and
                  back-end, delivering robust and reliable applications.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  API <br /> Integration
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Seamless API integration that connects your systems and
                  enhances your software&apos;s functionality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Web%20Solution%20(1).png?alt=media&token=2c6e9462-b551-41ed-bef0-fb8b1950008f')] bg-cover bg-center">
          <div className="max-w-[85%] mx-auto">
            <div id="lapweb" className="flex justify-center items-center pt-16">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%202.png?alt=media&token=0255eb8e-0338-4fb6-aaba-816c801abdfb"
                alt="Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "35%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex justify-center space-x-4">
              <h1 className="text-[2.5vw] font-T1 font-bold text-[#008080]">
                Web
              </h1>
              <h1 className="text-[2.5vw] font-T1 font-bold text-gray-500">
                Solutions
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[1vw] font-T2 font-medium text-gray-600 text-center">
                We design responsive, user-friendly websites that enhance your
                brand&apos;s
                <br />
                online presence effectively.
              </p>
            </div>

            <div className="flex justify-evenly pt-16">
              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Responsive <br /> Web Design
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Crafting websites that look great and work well on all
                  devices, providing a seamless user experience.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Static & Dynamic <br /> Websites
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Creating static and dynamic websites with engaging visuals and
                  interactive features, providing real-time updates.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  E-commerce <br /> Development
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Building secure and user-friendly online stores that drive
                  sales and enhance customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%20bg%203.png?alt=media&token=155d34e1-26dc-430f-9527-ce39377e347c')] bg-cover bg-center">
          <div className="max-w-[85%] mx-auto">
            <div id="lapapp" className="flex justify-center items-center pt-28">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%203.png?alt=media&token=e07e9519-ff85-4dae-bc09-461b1bccbb3a"
                alt="Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "35%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex justify-center space-x-4 pt-16">
              <h1 className="text-[2.5vw] font-T1 font-bold text-[#008080]">
                Mobile
              </h1>
              <h1 className="text-[2.5vw] font-T1 font-bold text-gray-500">
                Apps
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[1vw] font-T2 font-medium text-gray-600 text-center">
                Develop intuitive mobile apps that engage your audience on iOS
                and Android
                <br />
                platforms seamlessly.
              </p>
            </div>

            <div className="flex justify-evenly pt-20">
              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  iOS & Android <br /> Apps
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Crafting websites that look great and work well on all
                  devices, providing a seamless user experience.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Cross-Platform <br /> Development
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Building apps that work seamlessly across different devices,
                  reducing development time and cost.{" "}
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  App <br /> Maintenance
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Providing continuous support and updates to keep your mobile
                  apps running smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%20bg%204.png?alt=media&token=a8d2d9a0-6d9c-4cc9-90c4-5c105629fd75')] bg-cover bg-center">
          <div className="max-w-[85%] mx-auto">
            <div
              id="lapmarketing"
              className="flex justify-center items-center pt-20"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%204.png?alt=media&token=f213aed1-dc34-41ec-a198-efc2d6ba42d5"
                alt="Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "35%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex justify-center space-x-4 pt-6">
              <h1 className="text-[2.5vw] font-T1 font-bold text-[#008080]">
                Digital
              </h1>
              <h1 className="text-[2.5vw] font-T1 font-bold text-gray-500">
                Marketing
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[1vw] font-T2 font-medium text-gray-600 text-center">
                Boost your brand with targeted digital marketing strategies,
                including SEO
                <br />
                and social media campaigns.
              </p>
            </div>

            <div className="flex justify-evenly pt-20">
              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  SEO <br /> Optimization
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Boosting your website’s visibility on search engines to
                  attract more visitors and drive growth.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Social Media <br /> Campaigns
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Creating and managing social media strategies that connect
                  with your audience and build brand loyalty.{" "}
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Content <br /> Marketing
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Developing engaging content that resonates with your target
                  audience and promotes your brand.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/UI%20%26%20UX%20Design.png?alt=media&token=4e2a884b-5328-492d-9a17-e0f3a403710e')] bg-cover bg-center">
          <div className="max-w-[85%] mx-auto">
            <div
              id="lapui/ux"
              className="flex justify-center items-center pt-20"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%20uiux.png?alt=media&token=ad30c2f2-7543-458d-b38b-1c127c3b2f27"
                alt="Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "35%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex justify-center space-x-4 pt-6">
              <h1 className="text-[2.5vw] font-T1 font-bold text-[#008080]">
                UI/UX
              </h1>
              <h1 className="text-[2.5vw] font-T1 font-bold text-gray-500">
                Design
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[1vw] font-T2 font-medium text-gray-600 text-center">
                Design visually appealing, user-friendly interfaces that improve
                the
                <br />
                experience and effectiveness of your products.
              </p>
            </div>

            <div className="flex justify-evenly pt-20">
              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  User Interface <br /> Design
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Designing intuitive interfaces that are visually appealing and
                  easy to navigate for a better user experience.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  User Experience <br /> Research
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Conducting thorough research to understand user needs and
                  create designs that meet their expectations.{" "}
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Prototyping <br /> & Testing
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Developing prototypes and conducting tests to ensure the
                  design works as intended before launch.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%20bg%206.png?alt=media&token=46d0c16b-ed15-4d73-b79d-5485e1530f60')] bg-cover bg-center">
          <div className="max-w-[85%] mx-auto">
            <div
              id="lapvisual"
              className="flex justify-center items-center pt-20"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%206.png?alt=media&token=5b4e807f-5a97-454e-b4e3-6e3d8030e2cc"
                alt="Service"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "35%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex justify-center space-x-4 pt-6">
              <h1 className="text-[2.5vw] font-T1 font-bold text-[#008080]">
                Visual
              </h1>
              <h1 className="text-[2.5vw] font-T1 font-bold text-gray-500">
                Media
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[1vw] font-T2 font-medium text-gray-600 text-center">
                Capture your brand&apos;s essence with professional photography
                and
                <br />
                videography for events and promotions.
              </p>
            </div>

            <div className="flex justify-evenly pt-20">
              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Graphic & <br /> Motion Design
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Crafting striking visuals and dynamic motion graphics that
                  effectively communicate your brand’s message across all
                  platforms.{" "}
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Photography <br /> Services
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Offering professional photography that showcases your
                  products, services, and events in the best light.
                </p>
              </div>

              <div className="h-[250px] w-[25%]">
                <h2 className="text-[1.5vw] text-gray-800 font-T1 font-semibold text-center">
                  Video <br /> Production
                </h2>
                <p className="text-[1vw] pt-4 text-gray-600 font-T2 text-center font-medium">
                  Producing high-quality videos that engage viewers and
                  effectively convey your brand&apos;s story.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      {/* Laptop */}

      {/* Tab */}

      <div className="hidden 2xl:hidden lg:hidden  md:block">
        <div id="tabsoftware" className="bg-white">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center items-center pt-28">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%201.png?alt=media&token=83f66f03-98b1-4717-a633-12d974eb64e0"
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

            <div className="flex justify-center space-x-4">
              <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                Custom
              </h1>
              <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                Software
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[3.4vw] font-T2 pt-2 font-medium text-gray-600 text-center">
                We create software solutions tailored to your business, ensuring
                efficiency and fostering growth.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6 pt-16">
              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Bespoke Software Design
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  We create custom software tailored to your specific business
                  needs, helping you achieve your goals efficiently.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Full-Stack Development
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Comprehensive development services covering both front-end and
                  back-end, delivering robust and reliable applications.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  API Integration
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Seamless API integration that connects your systems and
                  enhances your software&apos;s functionality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="tabweb" className="bg-[#E3F4F5] mt-20 pb-20">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center items-center pt-16">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%202.png?alt=media&token=0255eb8e-0338-4fb6-aaba-816c801abdfb"
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

            <div className="flex justify-center space-x-4">
              <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                Web
              </h1>
              <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                Solutions
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[3.4vw] font-T2 pt-2 font-medium text-gray-600 text-center">
                We design responsive, user-friendly websites that enhance your
                brand&apos;s online presence effectively.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6 pt-16">
              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Responsive Web Design
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Crafting websites that look great and work well on all
                  devices, providing a seamless user experience.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Static & Dynamic Websites
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Creating static and dynamic websites with engaging visuals and
                  interactive features, providing real-time updates.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  E-commerce Development
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Building secure and user-friendly online stores that drive
                  sales and enhance customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="tabapp" className="bg-white pb-20">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center items-center pt-16">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%203.png?alt=media&token=e07e9519-ff85-4dae-bc09-461b1bccbb3a"
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

            <div className="flex justify-center space-x-4">
              <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                Mobile
              </h1>
              <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                Apps
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[3.4vw] font-T2 pt-2 font-medium text-gray-600 text-center">
                Develop intuitive mobile apps that engage your audience on iOS
                and Android platforms seamlessly.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6 pt-16">
              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  iOS & Android Apps
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Crafting websites that look great and work well on all
                  devices, providing a seamless user experience.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Cross-Platform Development
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Building apps that work seamlessly across different devices,
                  reducing development time and cost.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  App Maintenance
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Providing continuous support and updates to keep your mobile
                  apps running smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="tabmarketing" className="bg-[#E3F4F5] pb-20">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center items-center pt-16">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%204.png?alt=media&token=f213aed1-dc34-41ec-a198-efc2d6ba42d5"
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

            <div className="flex justify-center space-x-4">
              <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                Digital
              </h1>
              <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                Marketing
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[3.4vw] font-T2 pt-2 font-medium text-gray-600 text-center">
                Boost your brand with targeted digital marketing strategies,
                including SEO and social media campaigns.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6 pt-16">
              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  SEO Optimization
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Boosting your website’s visibility on search engines to
                  attract more visitors and drive growth.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Social Media Campaigns
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Creating and managing social media strategies that connect
                  with your audience and build brand loyalty.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Content Marketing
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Developing engaging content that resonates with your target
                  audience and promotes your brand.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="tabui/ux" className="bg-white pb-20">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center items-center pt-16">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%20uiux.png?alt=media&token=ad30c2f2-7543-458d-b38b-1c127c3b2f27"
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

            <div className="flex justify-center space-x-4">
              <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                UI/UX
              </h1>
              <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                Design
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[3.4vw] font-T2 pt-2 font-medium text-gray-600 text-center">
                Design visually appealing, user-friendly interfaces that improve
                the experience and effectiveness of your products.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6 pt-16">
              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  User Interface Design
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Designing intuitive interfaces that are visually appealing and
                  easy to navigate for a better user experience.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  User Experience Research
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Conducting thorough research to understand user needs and
                  create designs that meet their expectations.{" "}
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Prototyping & Testing
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Developing prototypes and conducting tests to ensure the
                  design works as intended before launch.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="tabvisual" className="bg-[#E3F4F5] ">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center items-center pt-16">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%206.png?alt=media&token=5b4e807f-5a97-454e-b4e3-6e3d8030e2cc"
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

            <div className="flex justify-center space-x-4">
              <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                Visual
              </h1>
              <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                Media
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[3.4vw] font-T2 pt-2 font-medium text-gray-600 text-center">
                Capture your brand&apos;s essence with professional photography
                and videography for events and promotions.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6 pt-16">
              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Graphic & Motion Design
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Crafting striking visuals and dynamic motion graphics that
                  effectively communicate your brand’s message across all
                  platforms.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Photography Services
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Offering professional photography that showcases your
                  products, services, and events in the best light.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Video Production
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Producing high-quality videos that engage viewers and
                  effectively convey your brand’s story.
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
        <div id="mobsoftware" className="bg-white">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center items-center pt-28">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%201.png?alt=media&token=83f66f03-98b1-4717-a633-12d974eb64e0"
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

            <div className="flex justify-center space-x-4">
              <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                Custom
              </h1>
              <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                Software
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[3.4vw] font-T2 pt-2 font-medium text-gray-600 text-center">
                We create software solutions tailored to your business, ensuring
                efficiency and fostering growth.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6 pt-16">
              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Bespoke Software Design
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  We create custom software tailored to your specific business
                  needs, helping you achieve your goals efficiently.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Full-Stack Development
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Comprehensive development services covering both front-end and
                  back-end, delivering robust and reliable applications.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  API Integration
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Seamless API integration that connects your systems and
                  enhances your software&apos;s functionality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="mobweb" className="bg-[#E3F4F5] mt-20 pb-20">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center items-center pt-16">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%202.png?alt=media&token=0255eb8e-0338-4fb6-aaba-816c801abdfb"
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

            <div className="flex justify-center space-x-4">
              <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                Web
              </h1>
              <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                Solutions
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[3.4vw] font-T2 pt-2 font-medium text-gray-600 text-center">
                We design responsive, user-friendly websites that enhance your
                brand&apos;s online presence effectively.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6 pt-16">
              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Responsive Web Design
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Crafting websites that look great and work well on all
                  devices, providing a seamless user experience.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Static & Dynamic Websites
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Creating static and dynamic websites with engaging visuals and
                  interactive features, providing real-time updates.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  E-commerce Development
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Building secure and user-friendly online stores that drive
                  sales and enhance customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="mobapp" className="bg-white pb-20">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center items-center pt-16">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%203.png?alt=media&token=e07e9519-ff85-4dae-bc09-461b1bccbb3a"
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

            <div className="flex justify-center space-x-4">
              <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                Mobile
              </h1>
              <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                Apps
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[3.4vw] font-T2 pt-2 font-medium text-gray-600 text-center">
                Develop intuitive mobile apps that engage your audience on iOS
                and Android platforms seamlessly.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6 pt-16">
              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  iOS & Android Apps
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Crafting websites that look great and work well on all
                  devices, providing a seamless user experience.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Cross-Platform Development
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Building apps that work seamlessly across different devices,
                  reducing development time and cost.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  App Maintenance
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Providing continuous support and updates to keep your mobile
                  apps running smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="mobmarketing" className="bg-[#E3F4F5] pb-20">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center items-center pt-16">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%204.png?alt=media&token=f213aed1-dc34-41ec-a198-efc2d6ba42d5"
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

            <div className="flex justify-center space-x-4">
              <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                Digital
              </h1>
              <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                Marketing
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[3.4vw] font-T2 pt-2 font-medium text-gray-600 text-center">
                Boost your brand with targeted digital marketing strategies,
                including SEO and social media campaigns.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6 pt-16">
              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  SEO Optimization
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Boosting your website’s visibility on search engines to
                  attract more visitors and drive growth.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Social Media Campaigns
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Creating and managing social media strategies that connect
                  with your audience and build brand loyalty.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Content Marketing
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Developing engaging content that resonates with your target
                  audience and promotes your brand.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="mobui/ux" className="bg-white pb-20">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center items-center pt-16">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%20uiux.png?alt=media&token=ad30c2f2-7543-458d-b38b-1c127c3b2f27"
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

            <div className="flex justify-center space-x-4">
              <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                UI/UX
              </h1>
              <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                Design
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[3.4vw] font-T2 pt-2 font-medium text-gray-600 text-center">
                Design visually appealing, user-friendly interfaces that improve
                the experience and effectiveness of your products.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6 pt-16">
              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  User Interface Design
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Designing intuitive interfaces that are visually appealing and
                  easy to navigate for a better user experience.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  User Experience Research
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Conducting thorough research to understand user needs and
                  create designs that meet their expectations.{" "}
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-gray-200  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Prototyping & Testing
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Developing prototypes and conducting tests to ensure the
                  design works as intended before launch.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="mobvisual" className="bg-[#E3F4F5] ">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center items-center pt-16">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/service%206.png?alt=media&token=5b4e807f-5a97-454e-b4e3-6e3d8030e2cc"
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

            <div className="flex justify-center space-x-4">
              <h1 className="text-[7vw] font-T1 font-bold text-[#008080]">
                Visual
              </h1>
              <h1 className="text-[7vw] font-T1 font-bold text-gray-500">
                Media
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[3.4vw] font-T2 pt-2 font-medium text-gray-600 text-center">
                Capture your brand&apos;s essence with professional photography
                and videography for events and promotions.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6 pt-16">
              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Graphic & Motion Design
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Crafting striking visuals and dynamic motion graphics that
                  effectively communicate your brand’s message across all
                  platforms.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Photography Services
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Offering professional photography that showcases your
                  products, services, and events in the best light.
                </p>
              </div>

              <div className=" h-[200px] w-[75%] flex flex-col justify-center items-center border-2 border-[#CDE3E5]  p-4 rounded-lg">
                <h2 className="text-[4.8vw] text-gray-800 font-T1 font-semibold text-center">
                  Video Production
                </h2>
                <p className="text-[3.6vw] pt-2 text-gray-600 font-T2 text-center font-medium">
                  Producing high-quality videos that engage viewers and
                  effectively convey your brand’s story.
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

export default ServicePage
