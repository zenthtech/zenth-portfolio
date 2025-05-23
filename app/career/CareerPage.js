"use client";

import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";

function CareerPage() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden  2xl:block bg-white ">
        <div className="max-w-[85%] mx-auto h-screen">
          <div className="pt-[150px] flex justify-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/career.png?alt=media&token=71d5cc3d-b2c9-40f9-b3e8-61b58ff6dc07"
              alt="Intership"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "40%", height: "auto" }}
              className="select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          <div className="pt-10">
            <h2 className="font-T1 font-semibold text-center  text-[#008080] text-[1.5vw] tracking-wide">
              Your Seat is reserved
            </h2>
            <p className="font-T2 font-semibold text-gray-600  text-center text-[2vw] tracking-wide">
              Join our team soon!
            </p>
          </div>
        </div>

        <Footer />
      </div>
      {/* Desktop */}

      {/* Laptop */}

      <div className="hidden 2xl:hidden lg:block bg-white ">
        <div className="max-w-[85%] mx-auto">
          <div className="pt-[150px] flex justify-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/career.png?alt=media&token=71d5cc3d-b2c9-40f9-b3e8-61b58ff6dc07"
              alt="Intership"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "35%", height: "auto" }}
              className="select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          <div className="pt-10">
            <h2 className="font-T1 font-semibold text-center  text-[#008080] text-[1.5vw] tracking-wide">
              Your Seat is reserved
            </h2>
            <p className="font-T2 font-semibold text-gray-600  text-center text-[2vw] tracking-wide">
              Join our team soon!
            </p>
          </div>
        </div>
        <Footer />
      </div>
      {/* Laptop */}

      {/* Tab */}

      <div className="hidden 2xl:hidden lg:hidden  md:block  bg-white ">
        <div className="max-w-[90%] mx-auto h-screen">
          <div className="pt-[150px] flex justify-center items-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/career.png?alt=media&token=71d5cc3d-b2c9-40f9-b3e8-61b58ff6dc07"
              alt="Intership"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "85%", height: "auto" }}
              className="select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          <div className="pt-10">
            <h2 className="font-T1 font-semibold text-center  text-[#008080] text-[5vw] tracking-wide">
              Your Seat is reserved
            </h2>
            <p className="font-T2 font-semibold text-gray-600  text-center text-[6vw] tracking-wide">
              Join our team soon!
            </p>
          </div>
        </div>
        <Footer />
      </div>

      {/* Tab */}

      {/* Mobile */}

      <div className="md:hidden  bg-white ">
        <div className="max-w-[90%] mx-auto h-screen">
          <div className="pt-[150px] flex justify-center items-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/career.png?alt=media&token=71d5cc3d-b2c9-40f9-b3e8-61b58ff6dc07"
              alt="Intership"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "85%", height: "auto" }}
              className="select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          <div className="pt-10">
            <h2 className="font-T1 font-semibold text-center  text-[#008080] text-[5vw] tracking-wide">
              Your Seat is reserved
            </h2>
            <p className="font-T2 font-semibold text-gray-600  text-center text-[6vw] tracking-wide">
              Join our team soon!
            </p>
          </div>
        </div>
        <Footer />
      </div>

      {/* Mobile */}
    </div>
  );
}

export default CareerPage
