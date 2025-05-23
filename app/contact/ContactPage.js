"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Link from "next/link";
import Accordion from "../components/Accordion";

function ContactPage() {
  const [openIndex, setOpenIndex] = useState(null); // Track the currently open accordion

  const handleToggle = (index) => {
    // Toggle the accordion if the same index is clicked, else open the clicked one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Desktop */}
      <div className="hidden  2xl:block ">
        <div className="bg-white ">
          <div className="max-w-[85%] mx-auto">
            <div className="flex justify-center pt-40">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%201.png?alt=media&token=8bb0e9f5-4a69-4789-bd8c-7236afe41fc1"
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

            <div className="flex flex-col justify-center items-center pt-8">
              <h2 className="text-center font-T1 font-semibold text-[1.5vw] text-[#008080]">
                Let&apos;s Build Something Amazing Together
              </h2>

              <div className="w-[60%] pt-2">
                <p className="text-center font-T2 font-medium text-[1.1vw] text-gray-600">
                  Got an idea or need assistance with your project? We&apos;re
                  here to help! Let&apos;s collaborate to create custom
                  solutions that elevate your brand. Whether it&apos;s a quick
                  chat or detailed discussion, we&apos;re always excited to
                  connect with you.
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-evenly pt-[20vh]">
                <div
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&to=info@zenth.in&su=Enquiry Regarding Opportunities at Zenth Tech",
                      "_blank"
                    )
                  }
                  className="h-[200px] w-[25%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center "
                >
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e1.png?alt=media&token=18cd72a2-1210-40ec-8039-09c006a24eb2"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[1.5vw]">
                    Sales
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[1.2vw]">
                    info@zenth.in
                  </p>
                </div>

                <div className="h-[200px] w-[25%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e2.png?alt=media&token=ae0a84db-e45d-407e-9380-1bd71cc86a8b"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[1.5vw]">
                    Support
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[1.2vw]">
                    +91 9488 219 213
                  </p>
                </div>

                <div className="h-[200px] w-[25%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e3.png?alt=media&token=8a0c218b-c569-42ff-9b1d-a03e00814071"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[1.5vw]">
                    Business Hours
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[1.2vw]">
                    Mon - Sat : 09:00AM - 06:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#E3F4F5] h-[200px] w-full mt-[100px] flex items-center justify-center">
          <div className="max-w-[85%] w-full flex items-center justify-evenly">
            <h2 className="text-center font-T1 font-semibold text-gray-800 text-[2vw]">
              Zenth Makes your work Easier
            </h2>

            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20wh.png?alt=media&token=8745859d-3bdf-4476-9231-43e89bbf704e"
              alt="Whatsapp"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "20%", height: "auto" }}
              className="select-none cursor-pointer"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
              onClick={() => {
                window.open("https://wa.me/919488219213?text=Hi Zenth Tech, I'm interested in exploring opportunities with your team – whether it's about your services, a collaboration, or career and internship options. Please let me know the next steps.", "_blank");
              }}
            />
          </div>
        </div>

        <div className="bg-white mt-20">
          <div className="max-w-[85%] mx-auto">
            <div className="flex justify-center">
              <h1 className="text-[3vw] font-T1 text-center font-bold text-gray-600">
                Frequently Asked Questions
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center pt-20">
              <Accordion
                title="What services do you offer?"
                content="We provide a wide range of digital services, including software development, web design, UI/UX, mobile apps, and digital marketing. Contact our sales team to find the best solution for your business."
                isOpen={openIndex === 0} // Check if this accordion is open
                onToggle={() => handleToggle(0)} // Toggle when clicked
              />
              <Accordion
                title="How do I get started with a project?"
                content="Simply reach out to our sales team with your project details, and we'll help you take the next steps toward success."
                isOpen={openIndex === 1} // Check if this accordion is open
                onToggle={() => handleToggle(1)} // Toggle when clicked
              />
              <Accordion
                title="What is the typical project timeline?"
                content="While project timelines depend on the scope and complexity, we ensure timely delivery without compromising quality."
                isOpen={openIndex === 2} // Check if this accordion is open
                onToggle={() => handleToggle(2)} // Toggle when clicked
              />

              <Accordion
                title="Can you customize solutions based on my needs?"
                content="Absolutely. We create tailored strategies to meet your unique business objectives, ensuring maximum impact and growth."
                isOpen={openIndex === 3} // Check if this accordion is open
                onToggle={() => handleToggle(3)} // Toggle when clicked
              />

              <Accordion
                title="How can I contact you for support?"
                content="Our team is available 24/7 to assist you. Feel free to reach us via email, phone, or through our contact form."
                isOpen={openIndex === 4} // Check if this accordion is open
                onToggle={() => handleToggle(4)} // Toggle when clicked
              />
            </div>
          </div>

          <Footer />
        </div>
      </div>
      {/* Desktop */}

      {/* Laptop */}

      <div className="hidden 2xl:hidden lg:block">
        <div className="bg-white ">
          <div className="max-w-[85%] mx-auto">
            <div className="flex justify-center pt-40">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%201.png?alt=media&token=8bb0e9f5-4a69-4789-bd8c-7236afe41fc1"
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

            <div className="flex flex-col justify-center items-center pt-8">
              <h2 className="text-center font-T1 font-semibold text-[1.5vw] text-[#008080]">
                Let&apos;s Build Something Amazing Together
              </h2>

              <div className="w-[60%] pt-2">
                <p className="text-center font-T2 font-medium text-[1.1vw] text-gray-600">
                  Got an idea or need assistance with your project? We&apos;re
                  here to help! Let&apos;s collaborate to create custom
                  solutions that elevate your brand. Whether it&apos;s a quick
                  chat or detailed discussion, we&apos;re always excited to
                  connect with you.
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-evenly pt-[20vh]">
                <div
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&to=info@zenth.in&su=Enquiry Regarding Opportunities at Zenth Tech",
                      "_blank"
                    )
                  }
                  className="h-[200px] w-[25%] cursor-pointer border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center "
                >
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e1.png?alt=media&token=18cd72a2-1210-40ec-8039-09c006a24eb2"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[1.5vw]">
                    Sales
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[1.2vw]">
                    info@zenth.in
                  </p>
                </div>

                <div className="h-[200px] w-[25%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e2.png?alt=media&token=ae0a84db-e45d-407e-9380-1bd71cc86a8b"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[1.5vw]">
                    Support
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[1.2vw]">
                    +91 9488 219 213
                  </p>
                </div>

                <div className="h-[200px] w-[25%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e3.png?alt=media&token=8a0c218b-c569-42ff-9b1d-a03e00814071"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[1.5vw]">
                    Business Hours
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[1.2vw]">
                    Mon - Sat : 09:00AM - 06:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#E3F4F5] h-[200px] w-full mt-[100px] flex items-center justify-center">
          <div className="max-w-[85%] w-full flex items-center justify-evenly">
            <h2 className="text-center font-T1 font-semibold text-gray-800 text-[2vw]">
              Zenth Makes your work Easier
            </h2>

            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20wh.png?alt=media&token=8745859d-3bdf-4476-9231-43e89bbf704e"
              alt="Home About"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "20%", height: "auto" }}
              className="select-none cursor-pointer"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
              onClick={() => {
                window.open("https://wa.me/919488219213?text=Hi Zenth Tech, I'm interested in exploring opportunities with your team – whether it's about your services, a collaboration, or career and internship options. Please let me know the next steps.", "_blank");
              }}
            />
          </div>
        </div>

        <div className="bg-white mt-20">
          <div className="max-w-[85%] mx-auto">
            <div className="flex justify-center">
              <h1 className="text-[3vw] font-T1 font-bold text-gray-600">
                Frequently Asked Questions
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center pt-20">
              <Accordion
                title="What services do you offer?"
                content="We provide a wide range of digital services, including software development, web design, UI/UX, mobile apps, and digital marketing. Contact our sales team to find the best solution for your business."
                isOpen={openIndex === 0} // Check if this accordion is open
                onToggle={() => handleToggle(0)} // Toggle when clicked
              />
              <Accordion
                title="How do I get started with a project?"
                content="Simply reach out to our sales team with your project details, and we'll help you take the next steps toward success."
                isOpen={openIndex === 1} // Check if this accordion is open
                onToggle={() => handleToggle(1)} // Toggle when clicked
              />
              <Accordion
                title="What is the typical project timeline?"
                content="While project timelines depend on the scope and complexity, we ensure timely delivery without compromising quality."
                isOpen={openIndex === 2} // Check if this accordion is open
                onToggle={() => handleToggle(2)} // Toggle when clicked
              />

              <Accordion
                title="Can you customize solutions based on my needs?"
                content="Absolutely. We create tailored strategies to meet your unique business objectives, ensuring maximum impact and growth."
                isOpen={openIndex === 3} // Check if this accordion is open
                onToggle={() => handleToggle(3)} // Toggle when clicked
              />

              <Accordion
                title="How can I contact you for support?"
                content="Our team is available 24/7 to assist you. Feel free to reach us via email, phone, or through our contact form."
                isOpen={openIndex === 4} // Check if this accordion is open
                onToggle={() => handleToggle(4)} // Toggle when clicked
              />
            </div>
          </div>

          <Footer />
        </div>
      </div>
      {/* Laptop */}

      {/* Tab */}

      <div className="hidden 2xl:hidden lg:hidden  md:block">
        <div className="bg-white ">
          <div className="max-w-[95%] mx-auto">
            <div className="flex justify-center pt-28">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%201.png?alt=media&token=8bb0e9f5-4a69-4789-bd8c-7236afe41fc1"
                alt="Home About"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "90%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex flex-col justify-center items-center pt-8">
              <h2 className="text-center font-T1 font-semibold text-[4.5vw] text-[#008080]">
                Let&apos;s Build Something Amazing Together
              </h2>

              <div className="w-[95%] pt-2">
                <p className="text-center font-T2 font-medium text-[3.6vw] text-gray-600">
                  Got an idea or need assistance with your project? We&apos;re
                  here to help! Let&apos;s collaborate to create custom
                  solutions that elevate your brand. Whether it&apos;s a quick
                  chat or detailed discussion, we&apos;re always excited to
                  connect with you.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col justify-center items-center pt-[10vh] space-y-10">
                <div
                  onClick={() => {
                    window.location.href = "mailto:info@zenth.in?subject=Enquiry Regarding Opportunities at Zenth Tech";
                  }}
                  className="h-[200px] w-[70%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center "
                >
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e1.png?alt=media&token=18cd72a2-1210-40ec-8039-09c006a24eb2"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[4.5vw]">
                    Sales
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[3.8vw]">
                    info@zenth.in
                  </p>
                </div>

                <div 
                    onClick={() => {
                    window.location.href = "tel:+919488219213";
                  }}
                className="h-[200px] w-[70%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e2.png?alt=media&token=ae0a84db-e45d-407e-9380-1bd71cc86a8b"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[4.5vw]">
                    Support
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[3.8vw]">
                    +91 9488 219 213
                  </p>
                </div>

                <div className="h-[200px] w-[70%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e3.png?alt=media&token=8a0c218b-c569-42ff-9b1d-a03e00814071"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[4.5vw]">
                    Business Hours
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[3.8vw]">
                    Mon - Sat : 09:00AM - 06:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#E3F4F5] w-full mt-20 flex  items-center justify-center">
          <div className="max-w-[90%] w-full flex flex-col items-center justify-center space-y-6 pt-16 pb-16">
            <h2 className="text-center font-T1 font-semibold text-gray-800 text-[5vw]">
              Zenth Makes your work Easier
            </h2>

            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20wh.png?alt=media&token=8745859d-3bdf-4476-9231-43e89bbf704e"
              alt="Home About"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "60%", height: "auto" }}
              className="select-none "
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
              onClick={() => {
                window.open("https://wa.me/919488219213?text=Hi Zenth Tech, I'm interested in exploring opportunities with your team – whether it's about your services, a collaboration, or career and internship options. Please let me know the next steps.", "_blank");
              }}
            />
          </div>
        </div>

        <div className="bg-white mt-20">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center ">
              <h1 className="text-[8vw] text-center font-T1 font-bold text-gray-600">
                Frequently Asked Questions
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center pt-20">
              <Accordion
                title="What services do you offer?"
                content="We provide a wide range of digital services, including software development, web design, UI/UX, mobile apps, and digital marketing. Contact our sales team to find the best solution for your business."
                isOpen={openIndex === 0} // Check if this accordion is open
                onToggle={() => handleToggle(0)} // Toggle when clicked
              />
              <Accordion
                title="How do I get started with a project?"
                content="Simply reach out to our sales team with your project details, and we'll help you take the next steps toward success."
                isOpen={openIndex === 1} // Check if this accordion is open
                onToggle={() => handleToggle(1)} // Toggle when clicked
              />
              <Accordion
                title="What is the typical project timeline?"
                content="While project timelines depend on the scope and complexity, we ensure timely delivery without compromising quality."
                isOpen={openIndex === 2} // Check if this accordion is open
                onToggle={() => handleToggle(2)} // Toggle when clicked
              />

              <Accordion
                title="Can you customize solutions based on my needs?"
                content="Absolutely. We create tailored strategies to meet your unique business objectives, ensuring maximum impact and growth."
                isOpen={openIndex === 3} // Check if this accordion is open
                onToggle={() => handleToggle(3)} // Toggle when clicked
              />

              <Accordion
                title="How can I contact you for support?"
                content="Our team is available 24/7 to assist you. Feel free to reach us via email, phone, or through our contact form."
                isOpen={openIndex === 4} // Check if this accordion is open
                onToggle={() => handleToggle(4)} // Toggle when clicked
              />
            </div>
          </div>

          <Footer />
        </div>
      </div>

      {/* Tab */}

      {/* Mobile */}

      <div className="md:hidden ">
        <div className="bg-white ">
          <div className="max-w-[95%] mx-auto">
            <div className="flex justify-center pt-28">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%201.png?alt=media&token=8bb0e9f5-4a69-4789-bd8c-7236afe41fc1"
                alt="Home About"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "90%", height: "auto" }}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>

            <div className="flex flex-col justify-center items-center pt-8">
              <h2 className="text-center font-T1 font-semibold text-[4.5vw] text-[#008080]">
                Let&apos;s Build Something Amazing Together
              </h2>

              <div className="w-[95%] pt-2">
                <p className="text-center font-T2 font-medium text-[3.6vw] text-gray-600">
                  Got an idea or need assistance with your project? We&apos;re
                  here to help! Let&apos;s collaborate to create custom
                  solutions that elevate your brand. Whether it&apos;s a quick
                  chat or detailed discussion, we&apos;re always excited to
                  connect with you.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col justify-center items-center pt-[10vh] space-y-10">
                <div
                  onClick={() => {
                    window.location.href = "mailto:info@zenth.in?subject=Enquiry Regarding Opportunities at Zenth Tech";
                  }}
                  className="h-[200px] w-[70%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center "
                >
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e1.png?alt=media&token=18cd72a2-1210-40ec-8039-09c006a24eb2"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[4.5vw]">
                    Sales
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[3.8vw]">
                    info@zenth.in
                  </p>
                </div>

                <div 
                
                   onClick={() => {
                    window.location.href = "tel:+919488219213";
                  }}

                className="h-[200px] w-[70%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e2.png?alt=media&token=ae0a84db-e45d-407e-9380-1bd71cc86a8b"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[4.5vw]">
                    Support
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[3.8vw]">
                    +91 9488 219 213
                  </p>
                </div>

                <div className="h-[200px] w-[70%] border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20e3.png?alt=media&token=8a0c218b-c569-42ff-9b1d-a03e00814071"
                    alt="Contact Sales"
                    width={70}
                    height={70}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />

                  <h2 className="font-T1 pt-4 font-semibold text-gray-800 text-[4.5vw]">
                    Business Hours
                  </h2>
                  <p className="font-T2 pt-2 font-medium text-gray-600 text-[3.8vw]">
                    Mon - Sat : 09:00AM - 06:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#E3F4F5] w-full mt-20 flex  items-center justify-center">
          <div className="max-w-[90%] w-full flex flex-col items-center justify-center space-y-6 pt-16 pb-16">
            <h2 className="text-center font-T1 font-semibold text-gray-800 text-[5vw]">
              Zenth Makes your work Easier
            </h2>

            <Image
              src="https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/contact%20wh.png?alt=media&token=8745859d-3bdf-4476-9231-43e89bbf704e"
              alt="Home About"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "60%", height: "auto" }}
              className="select-none "
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
              onClick={() => {
                window.open("https://wa.me/919488219213?text=Hi Zenth Tech, I'm interested in exploring opportunities with your team – whether it's about your services, a collaboration, or career and internship options. Please let me know the next steps.", "_blank");
              }}
            />
          </div>
        </div>

        <div className="bg-white mt-20">
          <div className="max-w-[90%] mx-auto">
            <div className="flex justify-center ">
              <h1 className="text-[8vw] text-center font-T1 font-bold text-gray-600">
                Frequently Asked Questions
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center pt-20">
              <Accordion
                title="What services do you offer?"
                content="We provide a wide range of digital services, including software development, web design, UI/UX, mobile apps, and digital marketing. Contact our sales team to find the best solution for your business."
                isOpen={openIndex === 0} // Check if this accordion is open
                onToggle={() => handleToggle(0)} // Toggle when clicked
              />
              <Accordion
                title="How do I get started with a project?"
                content="Simply reach out to our sales team with your project details, and we'll help you take the next steps toward success."
                isOpen={openIndex === 1} // Check if this accordion is open
                onToggle={() => handleToggle(1)} // Toggle when clicked
              />
              <Accordion
                title="What is the typical project timeline?"
                content="While project timelines depend on the scope and complexity, we ensure timely delivery without compromising quality."
                isOpen={openIndex === 2} // Check if this accordion is open
                onToggle={() => handleToggle(2)} // Toggle when clicked
              />

              <Accordion
                title="Can you customize solutions based on my needs?"
                content="Absolutely. We create tailored strategies to meet your unique business objectives, ensuring maximum impact and growth."
                isOpen={openIndex === 3} // Check if this accordion is open
                onToggle={() => handleToggle(3)} // Toggle when clicked
              />

              <Accordion
                title="How can I contact you for support?"
                content="Our team is available 24/7 to assist you. Feel free to reach us via email, phone, or through our contact form."
                isOpen={openIndex === 4} // Check if this accordion is open
                onToggle={() => handleToggle(4)} // Toggle when clicked
              />
            </div>
          </div>

          <Footer />
        </div>
      </div>

      {/* Mobile */}
    </div>
  );
}

export default ContactPage;
