import React from 'react'
import Footer from "../components/Footer";
import Link from 'next/link';
function page() {
  return (
    <div>
         <div className="max-w-[85%] mx-auto pt-24">
      <h1 className="text-2xl font-T1 text-[#008080] font-semibold mb-8">Privacy Policy</h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-600 font-T2">
          Zenthtech values your privacy and is committed to protecting your personal data. This Privacy Policy outlines the types of information we collect, why we collect it, and how we use and protect it.
        </p>
      </section>

      {/* Information We Collect */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">2. Information We Collect</h2>
        <p className="text-gray-600 font-T2">
          We collect the following personal information when you interact with our website:
        </p>
        <ul className="list-disc ml-6 text-gray-600 font-T2">
          <li><strong>Personal Information:</strong> Name, email address, phone number, and billing details, which you provide when you inquire about our services.</li>
          <li><strong>Usage Information:</strong> Information related too your interaction with our website, such as IP address, browser type, and pages visited, is collected for analytical purposes.</li>
          <li><strong>Cookies:</strong> We use cookies to enhance your experience and track your browsing behavior.</li>
        </ul>
      </section>

      {/* How We Use Your Data */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">3. How We Use Your Data</h2>
        <p className="text-gray-600 font-T2">
          We use your personal data to:
        </p>
        <ul className="list-disc ml-6 text-gray-600 font-T2">
          <li>Provide and improve our services.</li>
          <li>Process payments via UPI.</li>
          <li>Respond to your inquiries or requests.</li>
          <li>Analyze website traffic via Google Analytics.</li>
        </ul>
        <p className="text-gray-600 font-T2">
          We do not collect technical data from users and do not use your information for unsolicited marketing unless you opt in.
        </p>
      </section>

      {/* Data Retention */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">4. Data Retention</h2>
        <p className="text-gray-600 font-T2">
          We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required by law.
        </p>
      </section>

      {/* Third-Party Services */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">5. Third-Party Services</h2>
        <p className="text-gray-600 font-T2">
          We work with third-party service providers, including Google Analytics (for traffic analysis) and UPI (for payment processing). These third parties are required to protect your personal data and may not use it for any other purpose.
        </p>
      </section>

      {/* Children's Privacy */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">6. Children's Privacy</h2>
        <p className="text-gray-600 font-T2">
          Our website is not directed toward children under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us to have it removed.
        </p>
      </section>

      {/* International Users */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">7. International Users</h2>
        <p className="text-gray-600 font-T2">
          Our website operates from India. If you are accessing our website from outside India, please note that your information will be processed in accordance with Indian data protection laws.
        </p>
      </section>

      {/* Copyright */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">8. Copyright</h2>
        <p className="text-gray-600 font-T2">
          All visual media, including images, graphics, and videos, are the property of Zenthtech's Visual Department and are protected by copyright laws. Unauthorized use, reproduction, or distribution of any media is strictly prohibited. If you wish to use any content, please contact us for written permission.
        </p>
      </section>

      {/* Your Rights */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">9. Your Rights</h2>
        <p className="text-gray-600 font-T2">
          You have the right to request access to the personal data we hold about you, request corrections, or ask us to delete it. To exercise these rights, please email us at privacy@zenth.in.
        </p>
      </section>

      {/* Changes to the Privacy Policy */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">10. Changes to the Privacy Policy</h2>
        <p className="text-gray-600 font-T2">
          Zenthtech reserves the right to modify this Privacy Policy at any time. Changes will be posted on this page, and your continued use of the website will constitute acceptance of those changes.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">11. Contact Information</h2>
        <p className="text-gray-600 font-T2">
          For any questions or concerns regarding this Privacy Policy, please contact us at <Link href="mailto:info@zenth.in" className="text-blue-500">info@zenth.in</Link>.
        </p>
      </section>
    </div>
    <Footer/>
    </div>
  )
}

export default page
