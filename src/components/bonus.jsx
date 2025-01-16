

const BonusSection = () => {
  return (
    <section className="w-full bg-[#4D96FF] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Text Content */}
        <div className="text-center mb-16">
          <h3 className="text-white text-sm md:text-base lg:text-lg font-semibold mb-4">
            BONUS ON CALL
          </h3>

          <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-extrabold leading-tight max-w-5xl mx-auto">
            AFTER SIGNING UP, YOU WILL RECEIVE A CALL FROM A MANAGER WHO WILL
            HELP SET UP YOUR TRADING ACCOUNT TO GET YOU STARTED AND YOU WILL
            GET:
          </h2>
        </div>

        {/* Device and Bonus Content */}
        <div className="max-w-4xl mx-auto relative">
          {/* Device Frame */}
          <div className="relative w-full aspect-[16/9] mb-8">
            <div className="absolute inset-0">
              <div className="w-full h-full border-[3px] border-black rounded-2xl transform -rotate-6"></div>
            </div>

            {/* Gift Icon Circle */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
              <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M20 12v10H4V12M22 7H2v5h20V7ZM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7ZM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z"
                      stroke="#4D96FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bonus Text */}
          <div className="text-center text-white">
            <p className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl mx-auto">
              The opportunity to discover the world of trading thanks to
              experienced mentors and improve your financial situation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
