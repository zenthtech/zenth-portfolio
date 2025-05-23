

import React from "react";
import AboutPage from "./AboutPage";

export const metadata = {
  title: "About Zenth Tech | Shinever Infotech Pvt Ltd",
  description: "Learn more about Zenth Tech and Shinever Infotech, your trusted partner in IT and digital solutions. We specialize in custom software, UI/UX design, and digital transformation.",
  keywords: ["Zenth Tech", "Shinever Infotech", "About Zenth Tech", "Custom Software", "IT Services", "Digital Transformation", "Web Development", "Mobile Apps"],
  openGraph: {
    title: "About Zenth Tech | Shinever Infotech Pvt Ltd",
    description: "Zenth Tech, powered by Shinever Infotech, specializes in custom software, digital marketing, and IT solutions.",
    url: "https://www.zenth.in/about",
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
  return <AboutPage/>
}

export default page;
