import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-[#f7fbff] to-[#eef8f7] pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* TOP BADGE */}
          <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm text-cyan-600 mb-6">
            Privacy
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-6 leading-tight">
            Privacy <span className="text-cyan-500">Policy</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-3xl leading-8 mb-14">
            Your privacy matters to us. This page explains how
            Vend Savvy collects, uses, and protects your information.
          </p>

          {/* CARD */}
          <div className="rounded-[32px] border border-cyan-100 bg-white/80 backdrop-blur p-8 md:p-12 shadow-[0_10px_60px_rgba(0,0,0,0.05)]">

            <div className="space-y-12">

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  1. Information We Collect
                </h2>

                <p className="text-gray-600 leading-8">
                 We collect personal information (name, email, business info) and operational data (sales, expenses, inventory).  By using Vend Savvy, you acknowledge and agree that we may collect personal, business, and technical information necessary to provide our services effectively. 

                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  2. How We Use Information
                </h2>
                <p className="text-gray-600 leading-8 mb-4">
                 Your data is used to provide dashboards, financial reports, analytics, and platform functionality. 
                </p>
                <p className="text-gray-600 leading-8">
                 Vend Savvy uses collected information for the following purposes: 
                </p>

                <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6">
                  <li>To provide, maintain, and improve services  </li>
                  <li>To generate accurate financial, sales, and tax reports  </li>
                  <li>To communicate account updates, promotional offers, or support messages </li>
                  <li>To prevent fraud, illegal activity, or violations of the Terms of Service </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  3. Data Sharing
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  We do not sell your data. We may share data with payment processors and service providers necessary to operate the platform.
                </p>
                <p className="text-gray-600 leading-8">
                 Data may be shared in limited circumstances:
                </p>

                <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6">
  
  <li>
    <strong className="text-black">
      With service providers:
    </strong>{" "}
    for hosting, analytics, or payment processing
  </li>

  <li>
    <strong className="text-black">
      Legal requirements:
    </strong>{" "}
    if required by law, regulation, or legal process
  </li>

  <li>
    <strong className="text-black">
      Business transfers:
    </strong>{" "}
    in the event of merger, acquisition, or sale of assets
  </li>

</ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  4. Data Security
                </h2>

                <p className="text-gray-600 leading-8">
                 Vend Savvy implements reasonable administrative, technical, and physical safeguards to protect your information. However, no system is completely secure, and we cannot guarantee absolute security 

                </p>
              </section>

               <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  5. User Control
                </h2>

                <p className="text-gray-600 leading-8">
                 You may update or delete your information at any time through your account settings. You may access, update, or request deletion of your data in accordance with applicable laws. Vend Savvy reserves the right to retain certain information for legal, tax, or auditing purposes. 

                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  6. Cookies & Tracking
                </h2>

                <p className="text-gray-600 leading-8">
                  We may use cookies and analytics tools to improve user experience. By using Vend Savvy, you acknowledge that we may use cookies and similar technologies to monitor usage and improve functionality. You may manage cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  7. Changes to Privacy Policy 
                </h2>

                <p className="text-gray-600 leading-8">
                  Vend Savvy may modify this Privacy Acknowledgement from time to time. Your continued use of the platform constitutes acceptance of any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Acknowledgement:  
                </h2>

                <p className="text-gray-600 leading-8">
                  By accessing or using Vend Savvy, you acknowledge that you have read, understood, and agree to this Privacy Acknowledgement, and consent to the collection, use, storage, and disclosure of your information as described herein. 
                </p>
              </section>
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
  
  <button className="rounded-full bg-cyan-500 hover:bg-cyan-600 transition-colors text-white px-8 py-3 font-medium">
    Accept Terms
  </button>

  <button className="rounded-full border border-cyan-200 hover:border-cyan-400 transition-colors px-8 py-3 font-medium text-black">
    Decline
  </button>

</div>


            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}