import { useCallback } from "react";
import image1 from "../assets/picture-u-1.jpg";
import image2 from "../assets/picture-u-2.jpg";
import image3 from "../assets/picture-u-3.jpg";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { ChevronsDown } from "lucide-react";
import PropTypes from "prop-types";

const MidSection = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const cards = [
    {
      image: image1,
      altText: "Red sports car",
      title:
        "You want to find additional income and start earning on cryptocurrencies with a starting investment of 250 EURO:",
      description:
        "With my experience and knowledge, I can teach you how to generate income from cryptocurrencies without a large investment. I will share with you 5 easy ways to earn your first €1000 on crypto with a starting investment of 250 EURO",
    },
    {
      image: image2,
      altText: "Ferrari interior",
      title:
        "You want to understand how to invest in crypto and grow your savings:",
      description:
        "I will show you how to choose a promising digital currency that can grow in value by 3-30 times. You will learn about the 10 most frequent mistakes that lead to loss of funds and how to avoid them",
    },
    {
      image: image3,
      altText: "Person in city",
      title:
        "You dream of changing your career and fully immersing yourself in the world of cryptocurrencies:",
      description:
        "In 6 years, I managed to earn over €1,000,000 and travel to 30 countries. I will share with you a step-by-step strategy on how to quickly go from €300 to €1500-2000 in a month and you will be able to work from anywhere in the world.",
    },
  ];

  return (
    <>
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
      <div className="bg-black ">
        <div className="container mx-auto px-4 pt-8 md:pt-16 pb-12 md:pb-24 text-center">
          <h1 className="text-4xl md:text-8xl font-bold leading-tight text-white font-sofia">
            THIS CALL WILL BE USEFUL
            <br />
            FOR YOU:
          </h1>
        </div>

        <div className="mx-0 md:mx-40 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32  md:pb-48">
          {cards.map((card, index) => (
            <div
              key={index}
              className=" overflow-hidden h-full flex flex-col bg-gradient-to-b from-gray-900 to-black shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300 border border-blue-500/20 rounded-xl"
            >
              <div className="relative w-full pt-[56.25%]">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src={card.image}
                    alt={card.altText}
                    className="w-full h-full object-fill transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <div className=" flex flex-col flex-grow bg-[#061525]">
                <div className="flex items-center gap-4  bg-gradient-to-br from-[#0E87FF] to-[#0E87FF] p-4 rounded-md">
                  <div className="">
                    <ChevronsDown size={53} color="#fff" />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {card.title}
                  </h3>
                </div>
                <div className=" rounded-xl p-6 backdrop-blur-sm">
                  <p className="text-base text-blue-100 flex-grow leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-full  ">
          <div className="absolute bottom-0 left-0 w-[50%] h-32 bg-black transform skew-y-6 origin-bottom-left"></div>
          <div className="absolute bottom-0 right-0 w-[50%] h-32 bg-black transform -skew-y-6 origin-bottom-right"></div>
        </div>
      </div>
    </>
  );
};

MidSection.propTypes = {
  onCTAClick: PropTypes.func.isRequired,
};

export default MidSection;
