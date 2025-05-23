import React from 'react'
import Footer from "../components/Footer";
import Link from 'next/link';

function page() {
  return (
    <div>
          <div className="max-w-[85%] mx-auto pt-24">
          <h1 className="text-2xl font-T1 text-[#008080] font-semibold mb-8">Refund Policy</h1>

      {/* Eligibility for Refunds */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">1. Eligibility for Refunds</h2>
        <p className="text-gray-600 font-T2">
          Refunds may be considered under the following circumstances:
        </p>
        <ul className="list-disc ml-6 text-gray-600 font-T2">
          <li>If the service provided does not meet the agreed-upon scope or expectations.</li>
          <li>If there is a significant delay in delivering the service that was not communicated in advance.</li>
          <li>If there was an error in the payment process that led to incorrect charges.</li>
          <li>If the client cancels the project before any substantial work has been started.</li>
        </ul>
      </section>

      {/* Non-Refundable Services */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">2. Non-Refundable Services</h2>
        <p className="text-gray-600 font-T2">
          Refunds will not be provided for:
        </p>
        <ul className="list-disc ml-6 text-gray-600 font-T2">
          <li>Services that have been fully completed and delivered as agreed upon.</li>
          <li>Any partial service where significant work has already been done.</li>
          <li>Change of mind after work has commenced.</li>
          <li>Delay caused by the client’s failure to provide necessary information or feedback within the agreed timeline.</li>
          <li>Any digital service with clearly defined timelines and milestones, once those milestones are met.</li>
        </ul>
      </section>

      {/* Process for Requesting a Refund */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">3. Process for Requesting a Refund</h2>
        <p className="text-gray-600 font-T2">
          To request a refund, please contact us at <Link href="mailto:info@zenth.in" className="text-blue-500">info@zenth.in</Link> with the following information:
        </p>
        <ul className="list-disc ml-6 text-gray-600 font-T2">
          <li>Your name and contact details.</li>
          <li>The details of the service provided, including project name and timeline.</li>
          <li>A description of why you are requesting the refund.</li>
        </ul>
        <p className="text-gray-600 font-T2">
          Our team will review your request and respond within 7 business days. If approved, the refund will be processed through the original payment method within 14 business days.
        </p>
      </section>

      {/* Amendments */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">4. Amendments</h2>
        <p className="text-gray-600 font-T2">
          Zenthtech reserves the right to update or modify this Refund Policy at any time. Any changes will be posted on this page, and your continued use of our services will constitute your acceptance of those changes.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-6">
        <h2 className="text-xl font-T1 text-gray-800 font-semibold mb-2">5. Contact Information</h2>
        <p className="text-gray-600 font-T2">
          For further inquiries regarding our refund policy, please email us at <Link href="mailto:info@zenth.in" className="text-blue-500">info@zenth.in</Link>.
        </p>
      </section>
    </div>
    <Footer/>
    </div>
  )
}

export default page
