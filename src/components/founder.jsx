import img1 from "../assets/picture-a1.jpg"
import img2 from "../assets/picture-.jpg"
import img3 from "../assets/picture-a-4.jpg"
// import img4 from "../assets/picture-.jpg"
import img5 from "../assets/picture-a-5.jpg"
import img6 from "../assets/picture-a-6.jpg"
import img from "../assets/picture.jpg"

const FounderSection = () => {
  return (
    <section className="relative bg-black">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <div className="w-full h-32 bg-[#4D96FF] transform -skew-y-6 origin-top-left translate-y-[-50%]" />
      </div>

      <div className="mx-40 px-4 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl lg:text-2xl font-bold tracking-wide">
                FOUNDER
              </h3>
              <div>
                <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tight">
                  ALEX
                </h2>
                <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-[#4D96FF]">
                  GONZALES
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-lg lg:text-xl">
              <p className="leading-relaxed">
                6 years of active experience in cryptocurrencies
              </p>
              <p className="leading-relaxed">
                Earned {">"}1.000.000€ for his career in crypto
              </p>
              <p className="leading-relaxed">
                At the age of 23 bought apartment in Dubai, visited 30 countries
              </p>
              <p className="leading-relaxed">
                Spoke at {">"}30 events, dedicated to cryptocurrencies around
                the world
              </p>
              <p className="leading-relaxed">
                In my team 2000+ people make money with my team
              </p>
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
      </div>
    </section>
  );
};

export default FounderSection;
