// import React from "react";
import main from "../assets/main-photo-.png";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Timer, ArrowRight, DollarSign, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
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

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
      </div>

      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>

      {/* Main content container */}
      <div className="  px-4 py-12 md:py-24 relative z-10 mx-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left column - Main text and features */}
          <div className="flex-1 space-y-8 max-w-3xl">
            {/* Top banner */}
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 space-x-4">
              <span className="text-sm font-medium">ONLY TODAY</span>
              <button className="bg-blue-500 hover:bg-blue-600 transition px-4 py-1 rounded-full text-sm">
                JOIN OUR TEAM
              </button>
              <span className="text-sm">FORMAT: TRADING COMMUNITY</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              JOIN MY TEAM AND START EARNING FROM TRADING{" "}
              <span className="text-blue-500">
                EVEN IF YOU HAVE NO EXPERIENCE IN TRADING.
              </span>
            </h1>

            {/* Feature grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  {/* Outer circle */}
                  <div className="absolute inset-0 border-2 border-[#fff] rounded-full"></div>
                  {/* Inner circle */}
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-2 border-blue-400/50">
                    <Timer className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-lg">From scratch</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-[#fff] rounded-full"></div>
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-2 border-blue-400/50">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-lg">After 7 days</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  {/* Outer circle */}
                  <div className="absolute inset-0 border-2 border-[#fff] rounded-full"></div>
                  {/* Inner circle */}
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-2 border-blue-400/50">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-lg">
                  {" "}
                  Minimum investment is only 250 EURO
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-[#fff] rounded-full"></div>
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-2 border-blue-400/50">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-lg">
                  {" "}
                  Start making profits in the first week
                </span>
              </div>
            </div>
          </div>

          {/* Right column - Registration card with background image */}
          <div className="flex-1 max-w-md w-full relative">
            <div className="relative lg:h-[700px] flex items-center justify-center">
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={main}
                  alt="Trader"
                  className="w-full h-full lg:object-cover mix-blend-screen"
                  style={{
                    // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    filter: "contrast(1.1) brightness(1.1)",
                  }}
                />
              </div>

              {/* Registration card */}
              <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 space-y-6 w-[90%] lg:w-[80%] relative z-10 top-36">
                <h2 className="text-3xl font-bold">
                  <span className="text-blue-500">REGISTER</span>{" "}
                  <span className="text-white">NOW</span>
                </h2>
                <p className="text-gray-300 text-lg">
                  and get discover the world of making money in trading.
                </p>
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white rounded-full p-2 shrink-0">
                      <span className="block w-6 h-6"></span>
                    </div>
                    <p className="text-sm lg:text-base">
                      Get advice and step-by-step action plan of action to earn
                      up to 500 EURO per week, even if you are a complete zero
                      in trading
                    </p>
                  </div>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 transition py-4 rounded-xl font-bold text-lg uppercase">
                  Register Right Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center pb-8">
        <p className="text-sm uppercase tracking-wider">MAXIMIZE THE VALUE</p>
      </div>
    </div>
  );
};

export default HeroSection;
