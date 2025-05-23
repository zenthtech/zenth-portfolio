import React from 'react'
import Footer from "../components/Footer";
import Link from 'next/link';

function page() {
  return (
    <div>
        <div className="max-w-[85%] mx-auto pt-24">
        <h1 className="text-2xl font-T1 text-[#008080] font-semibold mb-8">Terms & Conditions</h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-600 font-T2 ">
          Welcome to Zenthtech's website (<Link href="https://www.zenth.in/" className="text-blue-500">https://www.zenth.in/</Link>). By accessing or using our website, you agree to comply with these Terms and Conditions. Please read them carefully.
        </p>
      </section>

      {/* Eligibility */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">2. Eligibility</h2>
        <p className="text-gray-600 font-T2">
          By using this website, you confirm that you are at least 15 years old or have received permission from a parent or guardian if you are younger. Our website is also for students, but any use by minors should be under appropriate supervision.
        </p>
      </section>

      {/* Use of Website */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">3. Use of Website</h2>
        <p className="text-gray-600 font-T2">
          You agree to use the website for lawful purposes and not to engage in any activity that could harm or disrupt the functionality of the website. You are responsible for ensuring the accuracy of any information you provide.
        </p>
      </section>

      {/* Payments */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">4. Payments</h2>
        <p className="text-gray-600 font-T2">
          We accept payments via UPI. Please ensure that all billing information provided is accurate. Payments are processed securely, and we do not store your payment details.
        </p>
      </section>

      {/* Shipping and Delivery */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">5. Shipping and Delivery</h2>
        <p className="text-gray-600 font-T2">
          Zenthtech does not offer shipping or delivery services as we do not sell physical products. Our services are digital and provided online.
        </p>
      </section>

      {/* Third-Party Services */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">6. Third-Party Services</h2>
        <p className="text-gray-600 font-T2">
          We may work with third-party service providers to assist in providing certain services. These third parties may include:
        </p>
        <ul className="list-disc ml-6 text-gray-600 font-T2">
          <li>Google Analytics: Tracks website traffic and usage</li>
          <li>UPI Payment Providers: Facilitates secure payments</li>
        </ul>
      </section>

      {/* Intellectual Property */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">7. Intellectual Property</h2>
        <p className="text-gray-600 font-T2">
          All content on the website, including text, graphics, logos, images, and software, is the property of Zenthtech or its licensors and is protected by copyright laws. You may not reproduce, distribute, or exploit any content without written permission.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">8. Limitation of Liability</h2>
        <p className="text-gray-600 font-T2">
          Zenthtech is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of the website or services.
        </p>
      </section>

      {/* Amendments */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">9. Amendments</h2>
        <p className="text-gray-600 font-T2">
          We reserve the right to update these Terms and Conditions at any time. Your continued use of the website signifies your acceptance of any changes.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">10. Contact</h2>
        <p className="text-gray-600 font-T2">
          If you have any questions regarding these Terms and Conditions, please contact us at <Link href="mailto:info@zenth.in" className="text-blue-500">info@zenth.in</Link>.
        </p>
      </section>
    </div>

    <Footer/>
    </div>
  )
}

export default page
