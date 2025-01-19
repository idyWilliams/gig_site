
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

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
          <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>

          <div className=" px-4 py-16 mx-40">
            {/* Bottom text */}
            <div className="text-center pb-8">
        <p className="text-sm uppercase tracking-wider">MAXIMIZE THE VALUE</p>
      </div>
            {/* Header */}
            <div className="text-center mb-24">
              <h1 className="text-blue-400 text-7xl font-bold mb-6">
                IN 1 CALL
              </h1>
              <h2 className="text-white text-6xl font-bold">YOU WILL KNOW:</h2>
            </div>

            {/* Left side content */}
            <div className="grid grid-cols-12 gap-4 mb-16">
              <div className="col-start-1 col-span-5">
                <div className="text-right mb-20">
                  <p className="text-xl font-light">
                    5 simple options for earning up to €2000 in{" "}
                    <span className="font-bold">crypto</span> with a starting
                    investment of 250 EURO
                  </p>
                </div>

                <div className="text-right mb-20">
                  <p className="text-xl font-bold">
                    A step-by-step strategy to quickly get from €300 to
                    €1500-2000 in a month
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xl">
                    Get a personalised financial advisor for better results
                  </p>
                </div>
              </div>

              {/* Right side content */}
              <div className="col-start-8 col-span-5">
                <div className="text-right mb-20">
                  <p className="text-xl">
                    How to choose a promising cryptocurrency that can increase
                    in value by 1,5-5 times.—{" "}
                    <span className="font-bold">
                      Invest €200 and sell it for €400
                    </span>
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xl">
                    Financial safety:{" "}
                    <span className="font-bold">
                      The 5 most common mistakes that lead to the loss of funds.
                    </span>{" "}
                    You will learn how to prevent this and save your money
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-2xl font-semibold px-20 py-4 rounded-xl transform transition-transform hover:-translate-y-1">
                TAKE PART
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default LandingPage;