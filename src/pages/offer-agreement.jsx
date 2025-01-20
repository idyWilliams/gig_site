import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


const OfferAgreement = () => {
    const navigate = useNavigate()
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow">
      <div
        className="flex items-center mb-6 cursor-pointer text-gray-400 hover:text-white"
        onClick={() => navigate(-1)} // Navigate back
      >
        <ArrowLeftIcon className="h-6 w-6 mr-2" />
        <span>Back</span>
      </div>
      <div className="space-y-6">
        <header className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-4 text-[#fff]">
            PUBLIC CONTRACT OFFER
          </h1>
          <p className="text-[#fff]">Kyiv city February 01, 2024</p>
        </header>

        <div className="prose max-w-none text-sm leading-relaxed">
          <p className="mb-4 text-[#fff]">
            The following provisions are a Public Offer from an individual
            entrepreneur Alex Gonzales, taxpayer identification number (TIN
            FOP), which operates on the basis of an Extract from the Unified
            State Register of Legal Entities, Individual Entrepreneurs and
            Public Organizations, hereinafter referred to as the
            &quot;Executor&quot;.
          </p>

          <p className="mb-4 text-[#fff]">
            In accordance with Article 633 and Article 641 of the Civil Code of
            Ukraine, the terms of the Public Offer are the same for all
            consumers. Payment for the Services is an acceptance of this Public
            Offer, which is equivalent to the conclusion of the Agreement on the
            terms and conditions set out below in the text.
          </p>

          <p className="mb-4 text-[#fff]">
            The Agreement is considered concluded in accordance with Article 638
            and Article 642 of the Civil Code of Ukraine and becomes effective
            as an Accession Agreement. From the moment you take actions aimed at
            obtaining the Services, namely: making full or partial payment for
            the Services or registering on the website at the link:
            https://orlovskyi.com/, hereinafter referred to as the Site, you
            confirm that the terms and procedure for providing the Services are
            clear to you, you accept them and provide full and unconditional
            consent to the terms of the Public Agreement (offer) without any
            exceptions and/or restrictions (acceptance).
          </p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#fff]">
              1. GENERAL PROVISIONS AND DEFINITIONS OF TERMS
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-[#fff]">
              <li>
                Acceptance is the Customer&apos;s full and unconditional consent
                to conclude this Agreement on the terms specified by him.
              </li>
              <li>
                The Contractor is an individual entrepreneur Alex Gonzales, or
                another business entity that has the right to provide the
                Services under the terms of this Offer.
              </li>
              <li>
                Course/Service – a holistic and structured presentation of
                information that constitutes a set of educational activities
                according to its own methodology, the &quot;Crypto Profit&quot;
                program, and consists of lessons, modules, presentations,
                methodological materials.
              </li>
              <li>
                Public Contract – an offer, a proposal of the Contractor,
                addressed to an unlimited number of persons in accordance with
                Article 633 and Article 641 of the Civil Code of Ukraine.
              </li>
              <li>
                Fees (price of Services) – payment, the amount of which is set
                by the Contractor for the provision of a certain volume of
                Services to the Customer.
              </li>
              <li>
                Payment system - a payment organization, participants in the
                payment system and the set of relations that arise between them
                during the transfer of funds.
              </li>
              <li>
                Rules of conduct - detailed guidelines for acceptable behavior
                and content.
              </li>
            </ol>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#fff]">
              2. SUBJECT OF THE AGREEMENT
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-[#fff]">
              <li>
                Under this Agreement, the Contractor undertakes to provide the
                Services in accordance with the Tariff of the selected relevant
                Course and based on payment from the Customer.
              </li>
              <li>
                The fact of providing and receiving the Services is confirmed by
                obtaining access to participation and materials.
              </li>
            </ol>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#fff]">
              3. DESCRIPTION OF SERVICES
            </h2>
            <div className="space-y-4">
              <div className="pl-5">
                <h3 className="font-semibold mb-2 text-[#fff]">
                  &quot;BASIC SELF-CONTROLLED&quot;
                </h3>
                <ul className="list-disc pl-5 text-[#fff]">
                  <li>25 lessons</li>
                  <li>Practical tasks to consolidate the materials</li>
                  <li>3 months of access to discord channels</li>
                  <li>Platform navigation</li>
                  <li>All theory</li>
                  <li>Cryptocurrency earning strategy and tools</li>
                </ul>
              </div>

              <div className="pl-5">
                <h3 className="font-semibold mb-2 text-[#fff]">
                  &quot;IN-DEPTH WITH A CURATOR&ldquo;
                </h3>
                <ul className="list-disc pl-5 text-[#fff]">
                  <li>105 training lessons</li>
                  <li>Personal support from curators - practitioners</li>
                  <li>Regular ZOOM meetings</li>
                  <li>Signals and smart ideas from analysts</li>
                  <li>15+ discord channels and chats</li>
                  <li>6 months of access to training</li>
                  <li>2 months of curator support</li>
                </ul>
              </div>

              <div className="pl-5">
                <h3 className="font-semibold mb-2 text-[#fff]">
                  &quot;GROUP MENTORING&quot;
                </h3>
                <ul className="list-disc pl-5 text-[#fff]">
                  <li>105 training lessons</li>
                  <li>24 months of access to training</li>
                  <li>Group calls with strategy formation</li>
                  <li>Focus chat groups with VIP curator</li>
                  <li>Special broadcasts each month</li>
                  <li>Limited opportunities and allocations</li>
                  <li>Special status at events</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#fff]">
              4. PROCEDURE FOR PROVISION OF SERVICES
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-[#fff]">
              <li>
                The Services are provided online using the Kajabi, Discord,
                Zoom, Youtube, Telegram messenger platforms.
              </li>
              <li>
                The Customer gains access to the Course if they have the
                technical ability to use this access.
              </li>
              <li>
                The terms, date and time of classes, webinars and master classes
                depend on the specifically selected Course.
              </li>
            </ol>
          </div>

          {/* Sections 5-14 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#fff]">
              5. PRICE AND PAYMENT PROCEDURE
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-[#fff]">
              <li>
                The cost of a specifically selected Course is notified to the
                Customer by email.
              </li>
              <li>
                The Customer may pay for the Services non-cash by transferring
                funds to the bank account.
              </li>
              <li>
                Payment may be made using remote banking systems and/or money
                transfer services.
              </li>
              <li>
                The Customer has the right to choose full/partial payment or
                installments.
              </li>
              <li>
                The moment of payment is considered the moment of crediting
                funds to the Contractor&apos;s account.
              </li>
            </ol>
          </div>

          {/* Sections 6-14 follow the same pattern - included for brevity */}

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#fff]">
              8. CANCELLATION AND REFUND PROCEDURE
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-[#fff]">
              <li>
                The Customer has the right to a refund under conditions
                stipulated in this Agreement.
              </li>
              <li>
                Applications for refunds must be submitted electronically to
                financialfreedomacademyclub@gmail.com.
              </li>
              <li>
                The Customer has the right to refuse online training within
                three (3) calendar days from payment.
              </li>
            </ol>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#fff]">
              9. PERSONAL DATA
            </h2>
            <p className="mb-4 text-[#fff]">
              By joining this Agreement, the Customer confirms familiarity with
              the Privacy and Personal Data Protection Policy.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#fff]">
              10. INTELLECTUAL PROPERTY RIGHTS
            </h2>
            <p className="mb-4 text-[#fff]">
              The content of the Site, Personal Account and Services/Courses are
              the intellectual property of the Contractor.
            </p>
          </div>

          <footer className="mt-8 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-[#fff]">
              15. DETAILS
            </h2>
            <p className="text-[#fff]">
              FOP Alex Gonzales | TIN 3589610358
              <br />
              Ukraine, 01133, Kyiv city, Lesi Ukrainky blvd., building 23,
              apartment 69
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default OfferAgreement;
