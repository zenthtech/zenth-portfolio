
import React from "react";
import ServicePage from "./ServicePage";

export const metadata = {
  title: "Why Choose Zenth Tech | Shinever Infotech Pvt Ltd",
  description: "Discover why Zenth Tech, powered by Shinever Infotech, is your best partner for IT and software development services. We focus on delivering innovative solutions that exceed client expectations.",
  keywords: ["Why Choose Zenth Tech", "Shinever Infotech", "IT Services", "Custom Software Development", "Web Solutions", "Mobile App Development"],
  openGraph: {
    title: "Service of Zenth Tech | Shinever Infotech Pvt Ltd",
    description: "Zenth Tech provides tailored IT solutions, driven by quality and client satisfaction.",
    url: "https://www.zenth.in/service",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/zenth-web.appspot.com/o/Group%20136%20(2).png?alt=media&token=a7d78059-53af-44d9-845f-738804651bec",
        width: 1200,
        height: 630,
        alt: "Zenth Tech Logo",
      },
    ],
  },
};


function page() {
  return <ServicePage/>
}

export default page;
