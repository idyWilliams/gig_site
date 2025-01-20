import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


const PrivacyPolicy = () => {
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
            PRIVACY POLICY
          </h1>
          <p className=" text-[#fff]">Effective date: from February 2024</p>
        </header>

        <div className="mb-6">
          <p className="text-lg mb-4 text-[#fff]">
            Welcome to the Privacy Policy of alexgonzales.com
          </p>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="font-medium mb-2">Quick Navigation:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>What this Policy covers</li>
              <li>What data do we collect, use and share?</li>
              <li>User&apos;s consent to the processing of personal data</li>
              <li>Use of cookies</li>
              <li>Processing of personal data</li>
              <li>Protection of personal data</li>
              <li>User Rights</li>
              <li>Policy Changes</li>
            </ol>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#fff]">
            1. What this Policy covers
          </h2>
          <p className="mb-4 text-[#fff]">
            This Policy establishes the procedure for the processing of personal
            data provided by the Individual Entrepreneur Alex Gonzales
            (hereinafter referred to as the Contractor) by customers who use the
            website alexgonzales.com and its individual services to receive or
            provide services (hereinafter referred to as the Users and the Site,
            respectively).
          </p>
          <p className="mb-4 text-[#fff]">
            The Policy has been developed taking into account Regulation (EU)
            2016/679 of the European Parliament and of the Council of 27 April
            2016 on the protection of individuals with regard to the processing
            of personal data and on the free movement of such data, and
            repealing Directive 95/46/EC.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#fff]">
            2. What data do we collect, use and share?
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2 text-[#fff]">
                Personally identifiable information:
              </h3>
              <ul className="list-disc pl-5 text-[#fff]">
                <li>Name and nickname</li>
                <li>Mailing address</li>
                <li>Email address</li>
                <li>Telephone number</li>
                <li>Online ID and account name</li>
                <li>Education and place of employment</li>
                <li>Financial information</li>
                <li>Account login information</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2 text-[#fff]">
                Protected classification characteristics:
              </h3>
              <ul className="list-disc pl-5 text-[#fff]">
                <li>Age and race</li>
                <li>Ancestry and nationality</li>
                <li>Citizenship</li>
                <li>Marital status</li>
                <li>Gender</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#fff]">
            3. User&apos;s consent to the processing of personal data
          </h2>
          <div className="space-y-4 text-[#fff]">
            <p>
              The User accepts the terms of the Policy and gives consent to data
              processing when:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#fff]">
              <li>Registering on the Site</li>
              <li>Authorizing using personal data</li>
              <li>Communicating with the Contractor via mobile or email</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#fff]">
            4. Use of cookies
          </h2>
          <div className="space-y-4 text-[#fff]">
            <p>We use the following categories of cookies:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium text-[#fff]">
                  Strictly necessary cookies
                </span>{" "}
                - Required for basic site functionality
              </li>
              <li>
                <span className="font-medium text-[#fff]">
                  Performance cookies
                </span>{" "}
                - Collect usage statistics
              </li>
              <li>
                <span className="font-medium text-[#fff]">
                  Functional cookies
                </span>{" "}
                - Remember user preferences
              </li>
              <li>
                <span className="font-medium text-[#fff]">Target cookies</span>{" "}
                - Used for personalized content
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#fff]">
            5. Processing of personal data
          </h2>
          <p className="mb-4 text-[#fff]">
            Personal data is processed using automated systems, except when
            non-automated processing is necessary for legal compliance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#fff]">
            6. Protection of personal data
          </h2>
          <p className="mb-4 text-[#fff]">
            The Contractor takes necessary legal, organizational and technical
            measures to protect user information from unauthorized access,
            destruction, modification, or distribution.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#fff]">
            7. User Rights
          </h2>
          <div className="space-y-4 text-[#fff]">
            <p>Users have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#fff]">
              <li>Access and modify their personal data</li>
              <li>Request deletion of their data</li>
              <li>Withdraw consent to data processing</li>
              <li>File complaints regarding data handling</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#fff]">
            8. Policy Changes
          </h2>
          <p className="mb-4 text-[#fff]">
            The Contractor reserves the right to modify this policy. Users will
            be notified of any changes through the website.
          </p>
        </section>

        <footer className="mt-8 pt-4 border-t border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#fff]">
            How can you contact us
          </h2>
          <p className="text-[#fff]">Email: info@alexgonzales.com</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
