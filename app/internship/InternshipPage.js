"use client";

import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";

function InternshipPage() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden  2xl:block  ">
        <div className=" bg-white w-full">
          <div className="max-w-[85%] mx-auto">
            <div className="pt-[70px] flex justify-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/internship.png?alt=media&token=1194dfa0-c1ea-4d43-994c-c796b7fdf8f5"
                alt="Intership"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "30%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="pt-6">
              <h2 className="font-T1 font-bold text-center  text-[#008080] text-[1.8vw] tracking-wide">
                Internship Program 2025 -{" "}
                <span className="font-T1 font-bold text-black">Now Open!</span>
              </h2>
              <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1.1vw] tracking-wide">
                We&apos;re offering a hands-on internship for passionate
                learners across
              </p>
            </div>

            <div className="pt-10">
              <div className="flex justify-around pt-8">
                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern1.png?alt=media&token=7a0f809f-d72f-4d25-8541-04bf0637d723"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[1.2vw] tracking-wide">
                    Development
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                    Front-End & Full Stack Development
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern2.png?alt=media&token=38acfdcd-dd09-40ab-ace9-ec00f9712681"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[1.2vw] tracking-wide">
                    UI & UX Design
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                    Smooth, smart, user-first <br />
                    design
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern3.png?alt=media&token=666f6168-443c-4794-8db6-547ed69e3380"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[1.2vw] tracking-wide">
                    Visual Editors
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                    Crafting magic with 2D, 3D, <br />
                    VFX
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern4.png?alt=media&token=41afffb6-ead6-4b69-946b-e28b0862fed1"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[1.2vw] tracking-wide">
                    Marketing Executives
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                    Drive brand growth through smart marketing
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full mt-10 h-[1px] bg-gray-300 "></div>
          </div>
        </div>

        <div className="bg-[#ECFDFF] w-full mt-[60px]">
          <div className="max-w-[85%] mx-auto">
            <div className="pt-10">
              <h2 className="font-T1 font-bold text-center  text-black text-[1.8vw] tracking-wide">
                Our{" "}
                <span className="font-T1 font-bold text-[#008080]">
                  Solutions
                </span>
              </h2>
              <p className="font-T2 pt-2 font-light text-gray-500  text-center text-[1.1vw] tracking-wide">
                Your Path to Digital Success
              </p>
            </div>

            <div>
              <div className="flex justify-around pt-12">
                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern%20qr.png?alt=media&token=39f9495d-5701-42e3-9545-621b49ce497a"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "50%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <Link
                    href="https://docs.google.com/forms/d/1AC1zvssRLythhFJI3C45f5wXlPkmNORagJieqgjLs6A/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#008080] mt-4 font-T3 hover:bg-transparent text-[1vw] text-white font-semibold hover:text-[#008080] py-1 px-4  border border-transparent hover:border-[#008080] rounded">
                      Apply Now
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern5.png?alt=media&token=ae05af75-9c5d-4d8a-ad06-a4d60b6d1078"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "16%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-8 font-extrabold text-center  text-black text-[1.2vw] tracking-wide">
                    What You&apos;ll Learn
                  </h2>
                  <p className="font-T2 pt-4 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                    You&apos;ll work on real projects, talk to clients, and
                    learn how teams work together.
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern6.png?alt=media&token=76c0f1bd-94c4-4dee-9cf3-e812e1ab4e3d"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "16%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-8 font-extrabold text-center  text-black text-[1.2vw] tracking-wide">
                    Additional Info
                  </h2>
                  <p className="font-T2 pt-4 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                    Internship is 3 to 6 months. Bring your own laptop (min 8GB
                    RAM). No stipend.
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern7.png?alt=media&token=5bfcd869-2049-4f44-bf13-e43a322a5360"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "16%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-8 font-extrabold text-center  text-black text-[1.2vw] tracking-wide">
                    Why Choose Us
                  </h2>
                  <p className="font-T2 pt-4 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                    You&apos;ll get real work experience, helpful guidance, and
                    a chance for a full-time job.
                  </p>
                </div>
              </div>
            </div>

            {/* 
          <div className="pt-4">
            <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
              Apply now and take the first step toward building your future.
              Application link open until.
            </p>

            <div className="flex justify-center pt-2 gap-4 items-center">
              <p className="font-T2  font-light text-gray-500 text-center text-[1vw] tracking-wide">
                Don&apos;t miss out!{" "}
              </p>

              <Link
                href="https://docs.google.com/forms/d/1AC1zvssRLythhFJI3C45f5wXlPkmNORagJieqgjLs6A/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-transparent  font-T3 hover:bg-[#008080] text-[1vw] text-[#008080] font-semibold hover:text-white py-1 px-2  border border-[#008080] hover:border-transparent rounded">
                  Apply Now
                </button>
              </Link>
            </div>
          </div> */}
          </div>

          <Footer />
        </div>
      </div>
      {/* Desktop */}

      {/* Laptop */}

      <div className="hidden 2xl:hidden lg:block ">
        <div className=" bg-white w-full">
          <div className="max-w-[85%] mx-auto">
            <div className="pt-[70px] flex justify-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/internship.png?alt=media&token=1194dfa0-c1ea-4d43-994c-c796b7fdf8f5"
                alt="Intership"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "30%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="pt-6">
              <h2 className="font-T1 font-bold text-center  text-[#008080] text-[1.8vw] tracking-wide">
                Internship Program 2025 -{" "}
                <span className="font-T1 font-bold text-black">Now Open!</span>
              </h2>
              <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1.1vw] tracking-wide">
                We&apos;re offering a hands-on internship for passionate
                learners across
              </p>
            </div>

            <div className="pt-10">
              <div className="flex justify-around pt-8">
                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern1.png?alt=media&token=7a0f809f-d72f-4d25-8541-04bf0637d723"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[1.2vw] tracking-wide">
                    Development
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                    Front-End & Full Stack Development
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern2.png?alt=media&token=38acfdcd-dd09-40ab-ace9-ec00f9712681"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[1.2vw] tracking-wide">
                    UI & UX Design
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                    Smooth, smart, user-first design
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern3.png?alt=media&token=666f6168-443c-4794-8db6-547ed69e3380"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[1.2vw] tracking-wide">
                    Visual Editors
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                    Crafting magic with 2D, 3D, <br />
                    VFX
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern4.png?alt=media&token=41afffb6-ead6-4b69-946b-e28b0862fed1"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[1.2vw] tracking-wide">
                    Marketing Executives
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                    Drive brand growth through smart marketing
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full mt-10 h-[1px] bg-gray-300 "></div>
          </div>
        </div>

        <div className="bg-[#ECFDFF] w-full mt-[60px]">
          <div className="max-w-[85%] mx-auto">
            <div className="pt-10">
              <h2 className="font-T1 font-bold text-center  text-black text-[1.8vw] tracking-wide">
                Our{" "}
                <span className="font-T1 font-bold text-[#008080]">
                  Solutions
                </span>
              </h2>
              <p className="font-T2 pt-2 font-light text-gray-500  text-center text-[1.1vw] tracking-wide">
                Your Path to Digital Success
              </p>
            </div>

            <div>
              <div className="flex justify-around pt-12">
                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern%20qr.png?alt=media&token=39f9495d-5701-42e3-9545-621b49ce497a"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "50%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <Link
                    href="https://docs.google.com/forms/d/1AC1zvssRLythhFJI3C45f5wXlPkmNORagJieqgjLs6A/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#008080] mt-4 font-T3 hover:bg-transparent text-[1vw] text-white font-semibold hover:text-[#008080] py-1 px-4  border border-transparent hover:border-[#008080] rounded">
                      Apply Now
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern5.png?alt=media&token=ae05af75-9c5d-4d8a-ad06-a4d60b6d1078"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "16%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-8 font-extrabold text-center  text-black text-[1.2vw] tracking-wide">
                    What You&apos;ll Learn
                  </h2>
                  <p className="font-T2 pt-4 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                    You&apos;ll work on real projects, talk to clients, and
                    learn how teams work together.
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern6.png?alt=media&token=76c0f1bd-94c4-4dee-9cf3-e812e1ab4e3d"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "16%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-8 font-extrabold text-center  text-black text-[1.2vw] tracking-wide">
                    Additional Info
                  </h2>
                  <p className="font-T2 pt-4 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                    Internship is 3 to 6 months. Bring your own laptop (min 8GB
                    RAM). No stipend.
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center w-[25%]">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern7.png?alt=media&token=5bfcd869-2049-4f44-bf13-e43a322a5360"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "16%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-8 font-extrabold text-center  text-black text-[1.2vw] tracking-wide">
                    Why Choose Us
                  </h2>
                  <p className="font-T2 pt-4 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
                    You&apos;ll get real work experience, helpful guidance, and
                    a chance for a full-time job.
                  </p>
                </div>
              </div>
            </div>

            {/* 
          <div className="pt-4">
            <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
              Apply now and take the first step toward building your future.
              Application link open until.
            </p>

            <div className="flex justify-center pt-2 gap-4 items-center">
              <p className="font-T2  font-light text-gray-500 text-center text-[1vw] tracking-wide">
                Don&apos;t miss out!{" "}
              </p>

              <Link
                href="https://docs.google.com/forms/d/1AC1zvssRLythhFJI3C45f5wXlPkmNORagJieqgjLs6A/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-transparent  font-T3 hover:bg-[#008080] text-[1vw] text-[#008080] font-semibold hover:text-white py-1 px-2  border border-[#008080] hover:border-transparent rounded">
                  Apply Now
                </button>
              </Link>
            </div>
          </div> */}
          </div>

          <Footer />
        </div>
      </div>
      {/* Laptop */}

      {/* Tab */}

      <div className="hidden 2xl:hidden lg:hidden  md:block  ">
        <div className=" bg-white w-full">
          <div className="max-w-[90%] mx-auto">
            <div className="pt-[70px] flex justify-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/internship.png?alt=media&token=1194dfa0-c1ea-4d43-994c-c796b7fdf8f5"
                alt="Intership"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "80%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="pt-10">
              <h2 className="font-T1 font-bold text-center  text-[#008080] text-[6.4vw] tracking-wide">
                Internship Program 2025 -{" "}
                <span className="font-T1 font-bold text-black">Now Open!</span>
              </h2>
              <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[3.4vw] tracking-wide">
                We&apos;re offering a hands-on internship for passionate
                learners across
              </p>
            </div>

            <div className="flex flex-col justify-center items-center pt-12">
              <div className="flex justify-between">
                <div className="flex flex-col justify-center items-center h-[50vw] w-[48%] ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern1.png?alt=media&token=7a0f809f-d72f-4d25-8541-04bf0637d723"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "30%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[3.9vw] tracking-wide">
                    Development
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500  text-center text-[3.2vw] tracking-wide">
                    Front-End & Full Stack Development
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center  h-[50vw] w-[48%] ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern2.png?alt=media&token=38acfdcd-dd09-40ab-ace9-ec00f9712681"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "34%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[3.9vw] tracking-wide">
                    UI & UX Design
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500  text-center text-[3.2vw] tracking-wide">
                    Smooth, smart, user-first design
                  </p>
                </div>
              </div>

              <div className="flex justify-between pt-10 ">
                <div className="flex flex-col justify-center items-center h-[50vw] w-[48%] ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern3.png?alt=media&token=666f6168-443c-4794-8db6-547ed69e3380"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "30%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[3.9vw] tracking-wide">
                    Visual Editors
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500  text-center text-[3.2vw] tracking-wide">
                    Crafting magic with 2D, 3D, VFX
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center h-[50vw] w-[48%] ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern4.png?alt=media&token=41afffb6-ead6-4b69-946b-e28b0862fed1"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "28%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[3.9vw] tracking-wide">
                    Marketing Executives
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500  text-center text-[3.2vw] tracking-wide">
                    Drive brand growth through smart marketing
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full mt-10 h-[1px] bg-gray-300 "></div>
          </div>
        </div>

        <div className="bg-[#ECFDFF] w-full mt-[60px]">
          <div className="max-w-[85%] mx-auto">
            <div className="pt-10">
              <h2 className="font-T1 font-bold text-center  text-black text-[6.4vw] tracking-wide">
                Our{" "}
                <span className="font-T1 font-bold text-[#008080]">
                  Solutions
                </span>
              </h2>
              <p className="font-T2 pt-2 font-light text-gray-500  text-center text-[3.4vw] tracking-wide">
                Your Path to Digital Success
              </p>
            </div>

            <div>
              <div className="flex flex-col justify-center items-center pt-8">
                <div className="flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern%20qr.png?alt=media&token=39f9495d-5701-42e3-9545-621b49ce497a"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "70%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <Link
                    href="https://docs.google.com/forms/d/1AC1zvssRLythhFJI3C45f5wXlPkmNORagJieqgjLs6A/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#008080] mt-4 font-T3 hover:bg-transparent text-[3.8vw] text-white font-semibold hover:text-[#008080] py-1 px-4  border border-transparent hover:border-[#008080] rounded">
                      Apply Now
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col justify-center items-center pt-14">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern5.png?alt=media&token=ae05af75-9c5d-4d8a-ad06-a4d60b6d1078"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "12%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-extrabold text-center  text-black text-[3.9vw] tracking-wide">
                    What You&apos;ll Learn
                  </h2>
                  <p className="font-T2 pt-4 font-light text-gray-500 pl-8 pr-8 text-center text-[3.2vw] tracking-wide">
                    You&apos;ll work on real projects, talk to clients, and
                    learn how teams work together.
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center pt-10">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern6.png?alt=media&token=76c0f1bd-94c4-4dee-9cf3-e812e1ab4e3d"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "12%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-extrabold text-center  text-black text-[3.9vw] tracking-wide">
                    Additional Info
                  </h2>
                  <p className="font-T2 pt-4 font-light text-gray-500 pl-8 pr-8 text-center text-[3.2vw] tracking-wide">
                    Internship is 3 to 6 months. Bring your own laptop (min 8GB
                    RAM). No stipend.
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center pt-10">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern7.png?alt=media&token=5bfcd869-2049-4f44-bf13-e43a322a5360"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "12%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-extrabold text-center  text-black text-[3.9vw] tracking-wide">
                    Why Choose Us
                  </h2>
                  <p className="font-T2 pt-4 font-light text-gray-500 pl-8 pr-8 text-center text-[3.2vw] tracking-wide">
                    You&apos;ll get real work experience, helpful guidance, and
                    a chance for a full-time job.
                  </p>
                </div>
              </div>
            </div>

            {/* 
          <div className="pt-4">
            <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
              Apply now and take the first step toward building your future.
              Application link open until.
            </p>

            <div className="flex justify-center pt-2 gap-4 items-center">
              <p className="font-T2  font-light text-gray-500 text-center text-[1vw] tracking-wide">
                Don&apos;t miss out!{" "}
              </p>

              <Link
                href="https://docs.google.com/forms/d/1AC1zvssRLythhFJI3C45f5wXlPkmNORagJieqgjLs6A/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-transparent  font-T3 hover:bg-[#008080] text-[1vw] text-[#008080] font-semibold hover:text-white py-1 px-2  border border-[#008080] hover:border-transparent rounded">
                  Apply Now
                </button>
              </Link>
            </div>
          </div> */}
          </div>

          <Footer />
        </div>
      </div>

      {/* Tab */}

      {/* Mobile */}

      <div className="md:hidden   ">
        <div className=" bg-white w-full">
          <div className="max-w-[90%] mx-auto">
            <div className="pt-[70px] flex justify-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/internship.png?alt=media&token=1194dfa0-c1ea-4d43-994c-c796b7fdf8f5"
                alt="Intership"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "80%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="pt-10">
              <h2 className="font-T1 font-bold text-center  text-[#008080] text-[6.4vw] tracking-wide">
                Internship Program 2025 -{" "}
                <span className="font-T1 font-bold text-black">Now Open!</span>
              </h2>
              <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[3.4vw] tracking-wide">
                We&apos;re offering a hands-on internship for passionate
                learners across
              </p>
            </div>

            <div className="flex flex-col justify-center items-center pt-12">
              <div className="flex justify-between">
                <div className="flex flex-col justify-center items-center h-[50vw] w-[48%] ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern1.png?alt=media&token=7a0f809f-d72f-4d25-8541-04bf0637d723"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "30%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[3.9vw] tracking-wide">
                    Development
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500  text-center text-[3.2vw] tracking-wide">
                    Front-End & Full Stack Development
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center  h-[50vw] w-[48%] ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern2.png?alt=media&token=38acfdcd-dd09-40ab-ace9-ec00f9712681"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "34%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[3.9vw] tracking-wide">
                    UI & UX Design
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500  text-center text-[3.2vw] tracking-wide">
                    Smooth, smart, user-first design
                  </p>
                </div>
              </div>

              <div className="flex justify-between pt-10 ">
                <div className="flex flex-col justify-center items-center h-[50vw] w-[48%] ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern3.png?alt=media&token=666f6168-443c-4794-8db6-547ed69e3380"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "30%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[3.9vw] tracking-wide">
                    Visual Editors
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500  text-center text-[3.2vw] tracking-wide">
                    Crafting magic with 2D, 3D, VFX
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center h-[50vw] w-[48%] ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern4.png?alt=media&token=41afffb6-ead6-4b69-946b-e28b0862fed1"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "28%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-6 font-extrabold text-center  text-black text-[3.9vw] tracking-wide">
                    Marketing Executives
                  </h2>
                  <p className="font-T2 pt-2 font-light text-gray-500  text-center text-[3.2vw] tracking-wide">
                    Drive brand growth through smart marketing
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full mt-10 h-[1px] bg-gray-300 "></div>
          </div>
        </div>

        <div className="bg-[#ECFDFF] w-full mt-[60px]">
          <div className="max-w-[85%] mx-auto">
            <div className="pt-10">
              <h2 className="font-T1 font-bold text-center  text-black text-[6.4vw] tracking-wide">
                Our{" "}
                <span className="font-T1 font-bold text-[#008080]">
                  Solutions
                </span>
              </h2>
              <p className="font-T2 pt-2 font-light text-gray-500  text-center text-[3.4vw] tracking-wide">
                Your Path to Digital Success
              </p>
            </div>

            <div>
              <div className="flex flex-col justify-center items-center pt-8">
                <div className="flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern%20qr.png?alt=media&token=39f9495d-5701-42e3-9545-621b49ce497a"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "70%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <Link
                    href="https://docs.google.com/forms/d/1AC1zvssRLythhFJI3C45f5wXlPkmNORagJieqgjLs6A/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#008080] mt-4 font-T3 hover:bg-transparent text-[3.8vw] text-white font-semibold hover:text-[#008080] py-1 px-4  border border-transparent hover:border-[#008080] rounded">
                      Apply Now
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col justify-center items-center pt-14">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern5.png?alt=media&token=ae05af75-9c5d-4d8a-ad06-a4d60b6d1078"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "12%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-extrabold text-center  text-black text-[3.9vw] tracking-wide">
                    What You&apos;ll Learn
                  </h2>
                  <p className="font-T2 pt-4 font-light text-gray-500 pl-8 pr-8 text-center text-[3.2vw] tracking-wide">
                    You&apos;ll work on real projects, talk to clients, and
                    learn how teams work together.
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center pt-10">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern6.png?alt=media&token=76c0f1bd-94c4-4dee-9cf3-e812e1ab4e3d"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "12%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-extrabold text-center  text-black text-[3.9vw] tracking-wide">
                    Additional Info
                  </h2>
                  <p className="font-T2 pt-4 font-light text-gray-500 pl-8 pr-8 text-center text-[3.2vw] tracking-wide">
                    Internship is 3 to 6 months. Bring your own laptop (min 8GB
                    RAM). No stipend.
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center pt-10">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/intern7.png?alt=media&token=5bfcd869-2049-4f44-bf13-e43a322a5360"
                    alt="Intership Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "12%", height: "auto" }}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-extrabold text-center  text-black text-[3.9vw] tracking-wide">
                    Why Choose Us
                  </h2>
                  <p className="font-T2 pt-4 font-light text-gray-500 pl-8 pr-8 text-center text-[3.2vw] tracking-wide">
                    You&apos;ll get real work experience, helpful guidance, and
                    a chance for a full-time job.
                  </p>
                </div>
              </div>
            </div>

            {/* 
          <div className="pt-4">
            <p className="font-T2 pt-2 font-light text-gray-500 pl-8 pr-8 text-center text-[1vw] tracking-wide">
              Apply now and take the first step toward building your future.
              Application link open until.
            </p>

            <div className="flex justify-center pt-2 gap-4 items-center">
              <p className="font-T2  font-light text-gray-500 text-center text-[1vw] tracking-wide">
                Don&apos;t miss out!{" "}
              </p>

              <Link
                href="https://docs.google.com/forms/d/1AC1zvssRLythhFJI3C45f5wXlPkmNORagJieqgjLs6A/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-transparent  font-T3 hover:bg-[#008080] text-[1vw] text-[#008080] font-semibold hover:text-white py-1 px-2  border border-[#008080] hover:border-transparent rounded">
                  Apply Now
                </button>
              </Link>
            </div>
          </div> */}
          </div>

          <Footer />
        </div>
      </div>

      {/* Mobile */}
    </div>
  );
}

export default InternshipPage;
