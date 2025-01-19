import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css";
import btc from "../assets/btc.png";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "template_r4ldlyg", // Replace with your EmailJS template ID
        {
          to_email: "your-email@example.com", // Replace with your email
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: `New registration from ${formData.firstName} ${formData.lastName}`,
        },
        "dvqQxy7cPoE0j2HNJY" // Replace with your EmailJS public key
      );

      alert("Registration successful!");
      setFormData({ firstName: "", lastName: "", email: "", phone: "" });
    } catch (error) {
      alert("Failed to submit form. Please try again.", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="relative min-h-screen w-full bg-[linear-gradient(90deg,#4D9FFF_0%,#77B6FF_0%,#4D9FFF_100%)]  overflow-hidden flex flex-col">
        {/* Main content section */}
        <div className="flex-grow">
          {/* Main Content Container */}
          <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-16 py-12">
              {/* Left Column */}
              <div className="lg:w-1/2 text-center  text-white">
                <p className="md:text-base uppercase tracking-[10px] font-mono font-bold text-sm">
                  REGISTER FOR A CALL
                </p>
                <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none font-sofia mt-5">
                  REGISTER
                  <br />
                  RIGHT NOW:
                </h1>
                <p className="text-2xl md:text-3xl font-semi-bold leading-relaxed text-center md:block hidden">
                  And start earning from{" "}
                  <span className="font-bold">1000 EURO</span>
                  <br />
                  per month on cryptocurrency using
                  <br />
                  proven strategies!
                </p>
                <p className="text-xl md:text-3xl font-semi-bold leading-relaxed text-center md:hidden block">
                  And start earning from{" "}
                  <span className="font-bold">1000 EURO</span>{" "}

                  per month on cryptocurrency using

                  proven strategies!
                </p>
              </div>

              {/* Right Column - Form */}
              <div className="w-full md:w-[520px]">
                <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8 leading-tight ">
                  THE MINIMUM AMOUNT TO
                  <br />
                  START TRADING IS 250 EURO
                </h2>
                <div className="bg-[#1E3C6B]/80 backdrop-blur-sm rounded-2xl p-4">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-white mb-2 text-lg">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full h-12 px-4 rounded-lg bg-white placeholder:text-sm"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2 text-lg">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full h-12 px-4 rounded-lg bg-white placeholder:text-sm"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2 text-lg">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full h-12 px-4 rounded-lg bg-white placeholder:text-sm"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2 text-lg">
                        Phone
                      </label>
                      <PhoneInput
                        country={"auto"}
                        enableSearch={true}
                        value={formData.phone}
                        inputStyle={{
                          width: "100%",
                          height: "48px",
                          fontSize: "16px",
                          borderRadius: "8px",
                          backgroundColor: "white",
                        }}
                        containerStyle={{
                          width: "100%",
                        }}
                        buttonStyle={{
                          borderRadius: "8px 0 0 8px",
                          backgroundColor: "white",
                        }}
                        onChange={(phone) =>
                          setFormData({ ...formData, phone: phone })
                        }
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-[#3394FE] text-white font-bold rounded-lg text-lg hover:bg-[#3b7ee6] transition-colors mt-3 disabled:opacity-70 "
                      >
                        {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full bg-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img
                src={btc} // You'll need to add this image to your public folder
                alt="Bitcoin Logo"
                className="w-32 h-32"
              />
              <div className="text-7xl font-bold font-sofia">
                <span className="text-black">ALEX</span>{" "}
                <span className="text-[#4592FF]">GONZALES</span>
              </div>
            </div>
            <div className="flex gap-8">
              <a
                href="/privacy-policy"
                className="text-black hover:underline font-medium text-lg"
              >
                Privacy policy
              </a>
              <a
                href="/offer-agreement"
                className="text-black hover:underline font-medium text-lg"
              >
                Offer agreement
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
