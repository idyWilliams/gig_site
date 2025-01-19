
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import eth from "../assets/eth.png"
import eth2 from "../assets/r-eth.png"

const LandingPage = () => {
        const particlesInit = useCallback(async (engine) => {
          await loadSlim(engine);
        }, []);
    return (
      <>
        {/* Particles Background */}
        <Particles
          className="absolute inset-0"
          init={particlesInit}
          options={{
            background: { opacity: 0 },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
              },
              modes: {
                grab: {
                  distance: 140,
                  links: { opacity: 0.5 },
                },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                color: "#3b82f6",
                distance: 150,
                enable: true,
                opacity: 0.15,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: { value: 0.15 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
          {/* Blue orbs in corners */}
          <div className="absolute top-[100px] left-0   rounded-full ">
            <img src={eth} alt="eth" />
          </div>
          <div className="absolute bottom-[240px] right-0 z-0 ">
            <img src={eth2} alt="eth" />
          </div>

          <div className=" px-4 py-16 ">
            {/* Bottom text */}
            <div className="text-center pb-8">
              <p className="text-base uppercase tracking-[10px] font-mono font-bold">
                MAXIMIZE THE VALUE
              </p>
            </div>
            {/* Header */}
            <div className="text-center mb-24">
              <h1 className="text-[#0085FF] text-8xl font-bold mb-6 font-sofia">
                IN 1 CALL
              </h1>
              <h2 className="text-white text-8xl font-bold font-sofia">
                YOU WILL KNOW:
              </h2>
            </div>

            {/* Left side content */}
            <div className="grid grid-cols-12 gap-4 mb-16">
              <div className="col-start-1 col-span-5">
                <div className="text-right mb-20">
                  <p className="text-xl font-light">
                    5 simple options <br /> for earning up to €2000 in <br />
                    <span className="font-bold">crypto</span> with a starting
                    <br />
                    investment of 250 EURO
                  </p>
                </div>

                <div className="text-right mb-20">
                  <p className="text-xl font-bold">
                    A step-by-step strategy <br /> to quickly get from <br />{" "}
                    €300 to €1500-2000 in <br /> a month
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xl">
                    Get a personalised <br /> financial advisor for <br />{" "}
                    better results
                  </p>
                </div>
              </div>

              {/* Right side content */}
              <div className="col-start-8 col-span-5">
                <div className="text-left mb-20">
                  <p className="text-xl">
                    How to choose <br />a promising
                    <br /> cryptocurrency that can <br />
                    increase in value by 1,5-5 times.— <br />
                    <span className="font-bold">
                      Invest €200 and sell it <br /> for €400
                    </span>
                  </p>
                </div>

                <div className="text-left">
                  <p className="text-xl">
                    Financial safety: <br />
                    <span className="font-bold">
                      The 5 most common <br /> mistakes that lead to
                      <br /> the loss of funds.
                      <br />
                    </span>{" "}
                    You will learn how to prevent <br /> this and save your
                    <br /> money
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button className="bg-[#0085FF] hover:bg-blue-500 text-white text-4xl font-semibold px-20 py-8 rounded-xl transform transition-transform hover:-translate-y-1">
                TAKE PART
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default LandingPage;