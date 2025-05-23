
import React from "react";
import CareerPage from "./CareerPage";


export const metadata = {
  title: "Careers at Zenth Tech | Shinever Infotech Pvt Ltd",
  description: "Join Zenth Tech and Shinever Infotech for exciting career opportunities in technology, software development, digital marketing, and more.",
  keywords: ["Careers at Zenth Tech", "Shinever Infotech Jobs", "Tech Careers", "IT Jobs", "Software Development Jobs", "Digital Marketing Careers"],
  openGraph: {
    title: "Careers at Zenth Tech | Shinever Infotech Pvt Ltd",
    description: "Explore job openings at Zenth Tech, where we nurture talent and innovation.",
    url: "https://www.zenth.in/career",
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
  return <CareerPage/>
}

export default page;
