
import React from "react";
import ContactPage from "./ContactPage";

export const metadata = {
  title: "Contact Zenth Tech | Shinever Infotech Pvt Ltd",
  description: "Get in touch with Zenth Tech and Shinever Infotech for custom software development, web design, and digital marketing services.",
  keywords: ["Contact Zenth Tech", "Shinever Infotech Contact", "Tech Support", "IT Consulting", "Digital Marketing Queries", "Software Development Inquiries"],
  openGraph: {
    title: "Contact Zenth Tech | Shinever Infotech Pvt Ltd",
    description: "Reach out to Zenth Tech and Shinever Infotech for your custom software and digital solutions.",
    url: "https://www.zenth.in/contact",
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
  return <ContactPage/>
  
}

export default page;
