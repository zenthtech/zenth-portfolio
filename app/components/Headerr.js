"use client";

import React from "react";
import { useState, useEffect ,useRef} from "react";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Headerr() {
  const navRef = useRef(null); // Ref for the nav menu
  const [navMobile, setNavMobile] = useState(false);

  // Close the mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavMobile(false); // Close the menu
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    router.push("/contact"); // Adjust the path if your contact page is at a different route
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      {/* Desktop */}
      <div
        className={`hidden  2xl:block fixed  h-[10vh] w-full z-50 ${
          isScrolled ? " bg-[#ECFDFF] shadow-lg" : "bg-[#ECFDFF]"
        }`}
      >
        <div className="container max-w-[85%] mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Group%20294.png?alt=media&token=fc14671e-d575-401e-91d8-90930bb84607"
                  alt="Zenth Tech"
                  width={180}
                  height={0}
                  className="select-none"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </Link>
            </div>

            <div className="">
              <Nav />
            </div>

            <div>
              <button
                onClick={handleClick}
                className="before:ease relative h-12 w-[120px] overflow-hidden border rounded-md border-[#008080] before:absolute before:left-0 before:-ml-2 text-[#008080] before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-[#008080] before:transition-all before:duration-300 hover:text-white  hover:before:-rotate-180"
              >
                <span className="relative z-10">Let&apos;s talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop */}

      {/* Laptop */}
      <div
        className={`hidden 2xl:hidden lg:block fixed  h-[10vh] w-full z-50 ${
          isScrolled ? " bg-[#ECFDFF] shadow-lg" : "bg-[#ECFDFF]"
        }`}
      >
        <div className=" max-w-[85%] mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Group%20294.png?alt=media&token=fc14671e-d575-401e-91d8-90930bb84607"
                  alt="Zenth Tech"
                  width={150}
                  height={0}
                  className="select-none"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </Link>
            </div>

            <div className="">
              <Nav />
            </div>

            <div>
              <button
                onClick={handleClick}
                className="before:ease relative h-10 w-[120px] overflow-hidden border rounded-md border-[#008080] before:absolute before:left-0 before:-ml-2 text-[#008080] before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-[#008080] before:transition-all before:duration-300 hover:text-white  hover:before:-rotate-180"
              >
                <span className="relative z-10">Let&apos;s talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop */}

      {/* Tab */}
      <div
        className={`hidden 2xl:hidden lg:hidden  md:block fixed h-[8vh] w-full z-50 ${
          isScrolled ? " bg-[#ECFDFF] shadow-lg" : "bg-[#ECFDFF]"
        }`}
      >
        <div className="container max-w-[90%] mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center">
              <Image
                src="/fav.png"
                alt="Zenth Tech"
                width={40}
                height={0}
                className="select-none"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            <div
              className={`${
                navMobile ? "max-h-72" : "max-h-0"
              }  absolute top-24  bg-teal-700 w-[180px] h-auto right-0 rounded-lg transition-all overflow-hidden  duration-200 shadow-lg ease-in text-right  pr-4`}
            >
              <NavMobile />
            </div>

            <div
              onClick={() => setNavMobile(!navMobile)}
              className=" text-2xl text-primary cursor-pointer"
            >
              {navMobile ? <IoMdClose /> : <CiMenuBurger />}
            </div>
          </div>
        </div>
      </div>

      {/* Tab */}

      {/* Mobile */}
      <div
      className={`md:hidden fixed h-[8vh] w-full z-50 ${
        isScrolled ? "bg-[#ECFDFF] shadow-lg" : "bg-[#ECFDFF]"
      }`}
    >
      <div className="container max-w-[90%] mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Group%20294.png?alt=media&token=fc14671e-d575-401e-91d8-90930bb84607"
                alt="Zenth Tech"
                width={130}
                height={0}
                className="select-none"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </Link>
          </div>

          <div
            ref={navRef} // Attach the ref here
            className={`${
              navMobile ? "max-h-72" : "max-h-0"
            } absolute top-[70px] bg-teal-700 w-[150px] right-0 rounded-lg transition-all overflow-hidden duration-200 shadow-lg ease-in text-right pr-4`}
          >
            <NavMobile />
          </div>

          <div
            onClick={() => setNavMobile(!navMobile)}
            className="text-2xl text-primary cursor-pointer"
          >
            {navMobile ? <IoMdClose /> : <CiMenuBurger />}
          </div>
        </div>
      </div>
    </div>

      {/* Mobile */}
    </header>
  );
}

export default Headerr;
