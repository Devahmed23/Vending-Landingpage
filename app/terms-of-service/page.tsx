import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <main id="top" className="min-h-screen bg-gradient-to-b from-[#f7fbff] to-[#eef8f7] pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* TOP BADGE */}
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm text-sky-600 mb-6">
            Legal
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-6 leading-tight">
            Terms of <span className="text-cyan-500">Service</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-3xl leading-8 mb-14">
           Welcome to Vend Savvy LLC. These Terms of Service (“Terms”) govern your access to and use of the Vend Savvy LLC platform, including all features, dashboards, reports, and services provided.
          </p>

          {/* CARD */}
          <div className="rounded-[32px] border border-cyan-100 bg-white/80 backdrop-blur p-8 md:p-12 shadow-[0_10px_60px_rgba(0,0,0,0.05)]">

            <div className="space-y-12">

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  1. Acceptance of Terms
                </h2>

                <p className="text-gray-600 leading-8">
                  By accessing or using Vend Savvy LLC, you agree to be legally bound by these Terms. If you do not agree, you must not use the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  2. Eligibility
                </h2>

                <p className="text-gray-600 leading-8">
                  You must be at least 18 years old and capable of entering into a legally binding agreement. By using the Service, you represent that you meet these requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  3. Description of Service
                </h2>

                <p className="text-gray-600 leading-8">
                  Vend Savvy LLC provides a SaaS platform that allows users to manage vending operations, track revenue and expenses, monitor inventory, generate financial reports, and manage vendor/property relationships. You agree to use the platform only for lawful business purposes. 
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  4. Account Registration & Security 
                </h2>

                <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6">
                  <li>You agree to provide accurate and complete information.</li>
                  <li>You are responsible for safeguarding your login credentials.</li>
                  <li>You are responsible for all activity under your account.</li>              
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  5. Subscription Plans & Billing 
                </h2>

                <p className="text-gray-600 leading-8">
                  By subscribing, you agree to pay all applicable fees.
                </p>
                <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6">
                  <li>Vend Savvy LLC operates on a subscription-based model.</li>
                  <li>Fees are billed on a recurring basis (monthly or annually).</li>
                  <li>Failure to pay may result in suspension or termination.</li>
                  <li> Pricing may change with prior notice.</li>              
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  6. User Responsibilities
                </h2>
                <p className="text-gray-600 leading-8">
                  You agree that you will: 
                </p>

                <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6">
                  <li>Use the platform only for lawful purposes</li>
                  <li>Not misuse, hack, or disrupt the system</li>
                  <li>Maintain accurate business and financial records</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  7. Data Accuracy
                </h2>

                <p className="text-gray-600 leading-8">
                  While Vend Savvy LLC strives to provide accurate and reliable financial reports, calculations, and summaries, these outputs are dependent on the accuracy of the data you provide. Vend Savvy LLC disclaims any liability arising from errors, omissions, or inaccuracies in data entered by you. 
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  8. Data Ownership & Usage
                </h2>
                
                <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6">
                  <li>You retain ownership of your data. </li>
                  <li>You grant Vend Savvy LLC permission to process and store your data to provide the Service.</li>
                  <li>We may use aggregated, anonymized data for analytics and improvements. </li>
                 
                </ul>
              </section>

               <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  9. Financial Reporting Disclaimer
                </h2>

                <p className="text-gray-600 leading-8">
                  Vend Savvy LLC provides tools for tracking and reporting financial data. We do not guarantee accuracy of reports if incorrect data is entered. The platform does not provide financial, legal, or tax advice. 
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  10. Third-Party Services 
                </h2>

                <p className="text-gray-600 leading-8">
                  Vend Savvy LLC may integrate with third-party services (e.g., payment processors). We are not responsible for third-party performance or policies. 
                </p>
              </section>

               <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  11. Intellectual Propert 
                </h2>

                <p className="text-gray-600 leading-8">
                  All platform content, software, and branding are owned by Vend Savvy LLC. You may not copy, distribute, or reverse engineer any part of the Service. 
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  12. Limitation of Liability 
                </h2>

                <p className="text-gray-600 leading-8">
                 To the maximum extent permitted by law: 
                </p>
                <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6">
                  <li>Vend Savvy LLC is not liable for indirect, incidental, or consequential damages</li>
                  <li>We are not responsible for business losses, lost profits, or data inaccuracies </li>
                                  
                </ul>
              </section>

               <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  13. Indemnification  
                </h2>

                <p className="text-gray-600 leading-8">
                  You agree to indemnify and hold harmless Vend Savvy LLC from any claims, damages, or liabilities arising from your use of the platform or violation of these Terms.
                </p>
              </section>

               <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  14. Termination   
                </h2>

                <p className="text-gray-600 leading-8">
                  Vend Savvy LLC reserves the right to suspend or terminate your account at its sole discretion, with or without notice, for reasons including but not limited to: 
                </p>
                <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6 mb-4">
                  <li>Violation of Terms of Service or Privacy Policy  </li>
                  <li>Use of the platform for illegal, fraudulent, or unauthorized purposes</li> 
                  <li>Non-payment of subscription fees</li>
                  <li>Providing false, inaccurate, or incomplete information</li> 
                  <li>Failure to comply with applicable laws or regulations </li>                             
                </ul>
                 <strong className="text-black">
      Important Notes:
    </strong>
     <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6 mb-4">
                  <li>Termination does not automatically refund subscription fees unless eligible under the Refund Policy (see Refund Section)  </li>
                  <li>Users remain responsible for any outstanding charges incurred prior to termination</li>                           
                </ul>
                <p className="text-gray-600 leading-8 mb-4">
                  Upon termination, your access to Vend Savvy LLC services will cease. Vend Savvy LLC may retain your data for legal or regulatory purposes. Any unpaid fees will remain due and payable. Users are responsible for exporting or saving any data prior to termination.  
                </p>
                <strong className="text-black">
      Reactivation
    </strong>
     <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6 mb-4">
                  <li>Users may reactivate terminated accounts by resubscribing, subject to availability and updated terms  </li>
                  <li>Previously saved data may not be restored unless Vend Savvy LLC specifically permits</li>                           
                </ul>
              </section>
               <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  15.  Cancellation  
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  You may cancel your subscription at any time by accessing the subscription settings in your account. Cancellation will terminate future billing but will not entitle you to a refund of fees already paid except as expressly provided in the Refund Policyt. 
                </p>
                <p className="text-gray-600 leading-8 mb-4">
                 Vend Savvy LLC reserves the right to cancel or suspend your subscription at its sole discretion for non-payment, violations of the Terms of Service, or illegal activity. 
                </p>
                <p className="text-gray-600 leading-8 mb-4">
                 Subscription cancellations are effective at the end of the current billing cycle. No prorated refunds will be issued for partial periods unless eligible under the Refund Policy. Users are responsible for completing cancellation before the next billing date to avoid additional charges.  
                </p>
                 <p className="text-gray-600 leading-8 mb-4">
                 After cancellation, access to Vend Savvy LLC services will remain until the end of the current billing period. Vend Savvy LLC may retain your data for legal, tax, or audit purposes. Users are responsible for exporting any important information prior to cancellation.  
                </p>
                <strong className="text-black">
      Important Disclaimers 
    </strong>
     <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6 mb-4">
                  <li>Cancellation does not absolve users from outstanding charges</li>
                  <li>Vend Savvy LLC is not responsible for data loss after cancellation</li>
                  <li>Refunds are subject to the conditions outlined in the Refund Policy</li>                           
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  16. Refund Request:  
                </h2>

                <p className="text-gray-600 leading-8">
                  Refunds are eligible only for subscriptions that have not been actively used within two (2) months of payment. Active use is defined as any login or entry of data into the Vend Savvy LLC platform, including but not limited to sales, expenses, machines, locations, or reports 

Usage includes any of the following:
                </p>
                <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6 mb-4">
                  <li>Logging into the dashboard</li>
                  <li>Adding machines or locations</li>
                  <li>Recording sales or expenses</li> 
                  <li>Accessing reports</li>                           
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  17. Data Retention & Deletion  
                </h2>

                <p className="text-gray-600 leading-8">
                 Upon termination, your data may be retained for a limited period and then deleted in accordance with our policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  18. Modifications to Service  
                </h2>

                <p className="text-gray-600 leading-8">
                 We reserve the right to modify, update, or discontinue any part of the Service at any time. 
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  19. Updates to Terms   
                </h2>

                <p className="text-gray-600 leading-8">
                 These Terms may be updated periodically. Continued use of the platform constitutes acceptance of the updated Terms. 
                </p>
              </section>

               <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  20. Governing Law    
                </h2>

                <p className="text-gray-600 leading-8">
                 These Terms shall be governed by the laws of the State of Florida, United States.  
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  21. Contact Information     
                </h2>

                <p className="text-gray-600 leading-8">
                 For questions, contact: [support@vendingsavvy.com] 
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                Acknowledgement:     
                </h2>

                <p className="text-gray-600 leading-8">
                 By creating an account, checking the acceptance box, or using Vend Savvy LLC, you acknowledge that you have read, understood, and agree to these Terms of Service. 
                </p>
              </section>
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
  
  <Link href="#top" className="rounded-full bg-cyan-500 hover:bg-cyan-600 transition-colors text-white px-8 py-3 font-medium text-center">
    Back to Top
  </Link>

</div>


            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}