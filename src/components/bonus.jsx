import frame from "../assets/frame.png";

const BonusSection = () => {
  return (
    <section className="w-full bg-[linear-gradient(90deg,#4D9FFF_0%,#77B6FF_0%,#4D9FFF_100%)] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Text Content */}
        <div className="text-center my-9 md:my-28">
          <h3 className="text-[#fff] text-sm md:text-base lg:text-lg font-semibold mb-4">
            BONUS ON CALL
          </h3>

          <h2 className="text-[#fff] text-3xl md:text-7xl font-extrabold leading-tight mx-auto font-sofia hidden md:block">
            AFTER SIGNING UP, YOU WILL RECEIVE A CALL <br /> FROM A MANAGER WHO
            WILL HELP SET UP YOUR <br /> TRADING ACCOUNT TO GET YOU STARTED AND{" "}
            <br /> YOU WILL GET:
          </h2>
          <h2 className="text-[#fff] text-3xl md:text-7xl font-extrabold leading-tight mx-auto font-sofia">
            AFTER SIGNING UP, YOU WILL RECEIVE A CALL FROM A MANAGER WHO WILL
            HELP SET UP YOUR TRADING ACCOUNT TO GET YOU STARTED AND YOU WILL
            GET:
          </h2>
        </div>

        {/* Rest of the component remains the same */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative flex flex-col md:flex-row w-full mb-8 items-center gap-12">
            <div>
              <div className="relative aspect-[16/9] ">
                <div className=" rotate-12">
                  <img
                    src={frame}
                    alt="frame"
                    className="h-52 md:h-[350px] w-52 md:w-[700px] "
                  />
                </div>
                <div className="absolute top-0 -right-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="120"
                    viewBox="0 0 143 142"
                    fill="none"
                  >
                    <div
                      xmlns=""
                      id="in-page-channel-node-id"
                      data-channel-name="in_page_channel_cnOoNU"
                    />
                    <g filter="url(#filter0_d_63_488)">
                      <ellipse
                        cx="71.2865"
                        cy="68.0952"
                        rx="67.7137"
                        ry="67.3548"
                        fill="white"
                      />
                      <path
                        d="M134.5 68.0952C134.5 102.786 106.221 130.95 71.2865 130.95C36.3519 130.95 8.07275 102.786 8.07275 68.0952C8.07275 33.404 36.3519 5.24048 71.2865 5.24048C106.221 5.24048 134.5 33.404 134.5 68.0952Z"
                        stroke="black"
                        strokeOpacity="0.13"
                        strokeWidth="9"
                      />
                    </g>
                    <path
                      d="M69.0236 70.1308C64.7326 70.1308 52.1037 70.1308 52.1037 70.1308C50.763 70.1308 49.666 71.2218 49.666 72.5553V90.7539C49.666 92.0874 50.763 93.1784 52.1037 93.1784C52.1037 93.1784 64.9969 93.1784 69.3081 93.1784C69.8815 93.1784 69.8815 92.5656 69.8815 92.5656V70.9547C69.8815 70.9547 69.8814 70.1308 69.0236 70.1308Z"
                      fill="#3C3C3C"
                    />
                    <path
                      d="M91.7765 70.1307C91.7765 70.1307 79.0992 70.1307 74.8738 70.1307C73.8443 70.1307 73.9984 71.1972 73.9984 71.1972V92.5854C73.9984 92.5854 73.9901 93.1779 74.6093 93.1779C78.901 93.1779 91.7761 93.1779 91.7761 93.1779C93.1168 93.1779 94.2138 92.0869 94.2138 90.7533V72.5553C94.2141 71.2217 93.1171 70.1307 91.7765 70.1307Z"
                      fill="#3C3C3C"
                    />
                    <path
                      d="M69.8587 55.812C69.8587 55.812 69.8587 54.9904 69.0424 54.9904C64.1549 54.9904 49.3283 54.9904 49.3283 54.9904C47.9876 54.9904 46.8906 56.0816 46.8906 57.415V64.9836C46.8906 66.3171 47.9876 67.4081 49.3283 67.4081C49.3283 67.4081 64.2213 67.4081 69.1092 67.4081C69.8587 67.4081 69.8587 66.7616 69.8587 66.7616V55.812Z"
                      fill="#3C3C3C"
                    />
                    <path
                      d="M94.5068 54.9904C94.5068 54.9904 79.6741 54.9904 74.7297 54.9904C73.9766 54.9904 73.9766 55.7043 73.9766 55.7043V66.7766C73.9766 66.7766 73.9766 67.4081 74.8922 67.4081C79.7957 67.4081 94.5068 67.4081 94.5068 67.4081C95.8474 67.4081 96.9444 66.3171 96.9444 64.9836V57.4149C96.9444 56.0816 95.8474 54.9904 94.5068 54.9904Z"
                      fill="#3C3C3C"
                    />
                    <path
                      d="M61.5692 53.1965C60.4539 53.1965 59.4352 53.1085 58.5419 52.9349C56.273 52.494 54.7136 51.6358 53.7745 50.3116C52.933 49.1249 52.6755 47.6619 53.0089 45.963C53.5928 42.9907 55.5996 41.3538 58.6592 41.3538C59.3067 41.3538 60.0177 41.4282 60.7729 41.575C62.6937 41.9483 65.1505 43.0439 67.345 44.5056C71.0683 46.986 71.2524 48.528 71.067 49.4722C70.7944 50.8596 69.4907 51.851 67.0813 52.5032C65.4535 52.9437 63.4444 53.1965 61.5692 53.1965ZM58.6593 45.24C57.4744 45.24 57.0672 45.5693 56.8436 46.7081C56.6607 47.6393 56.8914 47.9645 56.9671 48.0713C57.2839 48.5183 58.1092 48.891 59.291 49.1205C59.9288 49.2445 60.7167 49.31 61.569 49.31C63.4431 49.31 65.0942 49.0276 66.1898 48.7186C66.2695 48.6962 66.3933 48.6024 66.2607 48.5237C64.8284 47.3632 62.208 45.8134 60.0238 45.3889C59.515 45.2903 59.0557 45.24 58.6593 45.24Z"
                      fill="#3C3C3C"
                    />
                    <path
                      d="M82.3431 53.1963C82.3431 53.1963 82.3431 53.1963 82.3428 53.1963C80.4676 53.1963 78.4586 52.9436 76.8308 52.503C74.4212 51.851 73.1177 50.8594 72.8451 49.4722C72.6599 48.528 72.8437 46.986 76.5673 44.5056C78.7614 43.0439 81.2182 41.9483 83.1394 41.575C83.8946 41.4282 84.6056 41.3538 85.2526 41.3538C88.3129 41.3538 90.3195 42.9909 90.9029 45.9632C91.2366 47.6619 90.9793 49.1249 90.1376 50.3116C89.1985 51.636 87.6393 52.494 85.3698 52.9349C84.4769 53.1082 83.4582 53.1963 82.3431 53.1963ZM77.6827 48.4995C77.5558 48.5729 77.6172 48.6886 77.6831 48.7075C78.7781 49.0207 80.4466 49.31 82.3428 49.31C83.1954 49.31 83.983 49.2445 84.6209 49.1205C85.8026 48.8908 86.6282 48.5183 86.9449 48.0713C87.0209 47.9645 87.2518 47.6393 87.0683 46.7081C86.8449 45.5693 86.4375 45.24 85.2524 45.24C84.8562 45.24 84.3973 45.2902 83.8882 45.3891C81.7038 45.8134 79.115 47.3388 77.6827 48.4995Z"
                      fill="#3C3C3C"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed  hidden md:block text-[#fff]">
                The opportunity to discover the world of trading thanks <br />{" "}
                to experienced mentors and improve your financial situation
              </p>
              <p className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed   text-[#fff] block md:hidden">
                The opportunity to discover the world of trading thanks
                to experienced mentors and improve your financial situation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
