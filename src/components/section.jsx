import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import eth from "../assets/eth.png";
import eth2 from "../assets/r-eth.png";
import PropTypes from "prop-types";

const LandingPage = ({ onCTAClick }) => {
  const benefits = [
    {
      text: "5 simple options for earning up to €2000 in crypto with a starting investment of 250 EURO",
      left: true,
    },
    {
      text: "A step-by-step strategy to quickly get from €300 to €1500-2000 in a month",
      left: true,
      bold: true,
    },
    {
      text: "Get a personalised financial advisor for better results",
      left: true,
    },
    {
      text: "How to choose a promising cryptocurrency that can increase in value by 1,5-5 times.— Invest €200 and sell it for €400",
      right: true,
      boldEnd: "Invest €200 and sell it for €400",
    },
    {
      text: "Financial safety: The 5 most common mistakes that lead to the loss of funds. You will learn how to prevent this and save your money",
      right: true,
      boldMiddle: "The 5 most common mistakes that lead to the loss of funds.",
    },
  ];
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
        <div className="absolute top-[100px] left-0 md:block hidden  rounded-full ">
          <img src={eth} alt="eth" />
        </div>
        <div className="absolute bottom-[240px] md:block hidden  right-0 z-0 ">
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
          <div className="text-center mb-10 md:mb-24">
            <h1 className="text-[#0085FF] text-8xl font-bold mb-6 font-sofia">
              IN 1 CALL
            </h1>
            <h2 className="text-white text-8xl font-bold font-sofia">
              YOU WILL KNOW:
            </h2>
          </div>

          {/* Left side content */}
          <div className="mb-10">
            {/* Mobile view */}
            <div className="md:hidden space-y-8 px-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-[#4D9FFF] text-xl font-bold">
                    {(index + 1).toString().padStart(2, "0")}.
                  </span>
                  <p className="text-xl">
                    {benefit.bold ? (
                      <span className="font-bold">{benefit.text}</span>
                    ) : benefit.boldEnd ? (
                      <>
                        {benefit.text.replace(benefit.boldEnd, "")}
                        <span className="font-bold">{benefit.boldEnd}</span>
                      </>
                    ) : benefit.boldMiddle ? (
                      <>
                        Financial safety:{" "}
                        <span className="font-bold">{benefit.boldMiddle}</span>
                        {
                          " You will learn how to prevent this and save your money"
                        }
                      </>
                    ) : (
                      benefit.text
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop view */}
            <div className="hidden md:grid grid-cols-12 gap-4 mb-16">
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
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button onClick={onCTAClick} className="bg-[#0085FF] hover:bg-blue-500 text-white text-4xl font-semibold px-20 py-8 rounded-xl transform transition-transform hover:-translate-y-1">
              TAKE PART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
LandingPage.propTypes = {
  onCTAClick: PropTypes.func.isRequired,
};
export default LandingPage;
