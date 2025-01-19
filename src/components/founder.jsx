import img1 from "../assets/picture-a1.jpg";
import img2 from "../assets/picture-.jpg";
import img3 from "../assets/picture-a-4.jpg";
import img5 from "../assets/picture-a-5.jpg";
import img6 from "../assets/picture-a-6.jpg";
import img from "../assets/picture.jpg";
import { Check } from "lucide-react";

const FounderSection = () => {
  return (
    <>
      <section className=" bg-black pb-16">
        {/* Top Wave */}
        {/* <div className="absolute top-0 left-0 right-0 overflow-hidden">
          <div className="w-full h-14 bg-[#76B6FF] transform -skew-y-6 origin-top-left translate-y-[-50%]" />
        </div>
        <div className="absolute top-0 left-0 right-0 overflow-hidden">
          <div className="w-full h-14 bg-[#4FA0FF] transform skew-y-6 origin-top-right translate-y-[-50%]" />
        </div> */}

        <div className="mx-0 md:mx-40 px-4 lg:px-8 py-10 md::py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-wide">
                  FOUNDER
                </h3>
                <div>
                  <h2 className="text-6xl md:text-8xl  font-extrabold tracking-tight font-sofia">
                    ALEX
                  </h2>
                  <h2 className="text-6xl md:text-8xl  font-extrabold tracking-tight text-[#4D96FF] font-sofia">
                    GONZALES
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-xl md:text-xl ml-2 md:ml-10">
                {[
                  "6 years of active experience in cryptocurrencies",
                  "Earned >1.000.000€ for his career in crypto",
                  "At the age of 23 bought apartment in Dubai,\n visited 30 countries",
                  "Spoke at >30 events, dedicated to cryptocurrencies\n around the world",
                  "In my team 2000+ people make money with my team",
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check
                      className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 mt-1 text-[#4D9FFF]"
                      strokeWidth={3}
                    />
                    <p className="leading-relaxed font-bold text-xl md:text-3xl font-sofia">
                      {text.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < text.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[700px]">
                {/* Top Row */}
                <div className="col-span-6 row-span-2 overflow-hidden rounded-md">
                  <img
                    src={img1}
                    alt="Speaking event"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-6 row-span-3 overflow-hidden rounded-md">
                  <img
                    src={img2}
                    alt="City view"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Middle & Bottom */}
                <div className="col-span-6 row-span-4 overflow-hidden rounded-md">
                  <img
                    src={img}
                    alt="Dubai building"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Row */}
                <div className="col-span-6 row-span-2 overflow-hidden rounded-md">
                  <img
                    src={img6}
                    alt="Red sports car"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-3 row-span-1 overflow-hidden rounded-md">
                  <img
                    src={img5}
                    alt="Private jet view"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-3 row-span-1 overflow-hidden rounded-md">
                  <img
                    src={img3}
                    alt="Luxury cars"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* CTA Button */}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-[#0085FF] hover:bg-blue-500 text-white text-4xl font-semibold px-20 py-8 rounded-xl transform transition-transform hover:-translate-y-1">
            REGISTER
          </button>
        </div>
      </section>
      {/* <div className="relative w-full">
        <div className="absolute bottom-0 left-0 w-[50%] h-32 bg-black transform skew-y-6 origin-bottom-left"></div>
        <div className="absolute bottom-0 right-0 w-[50%] h-32 bg-black transform -skew-y-6 origin-bottom-right"></div>
      </div> */}
    </>
  );
};

export default FounderSection;
