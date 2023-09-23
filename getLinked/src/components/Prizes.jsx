import Flare from "../assets/Purple-Lens-Flare-PNG (1).svg";
import Star from "../assets/star pu.svg";
import Star2 from "../assets/star (1).svg";
import Star3 from "../assets/star.svg";
import Flare2 from "../assets/Purple-Lens-Flare-PNG.svg";
import Reward from "../assets/9486889 1.svg";
import style from "./style.module.css";
import SilverMedal from "../assets/silver_medal 1.svg";
import GoldMedal from "../assets/gold_medal 1.svg";
import BronzeMedal from "../assets/bronze_medal 1.svg";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Prizes = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      className={`p-6 py-[4rem] bg-[#100B20] border-0 lg:px-[3rem] pb-[8rem]`}
      ref={ref}
    style={{
        transform: inView ? `none` : `translateY(40px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}
    >
      <div className={`flex flex-col gap-6 lg:gap-0`}>
        <div
          className={`relative text-center md:text-left md:w-[50%] lg:w-[45%] md:ml-auto`}
        >
          <h1
            className={`font-face-cd text-[20px] font-[700] leading-[24.6px] text-[#fff] mb-4 md:text-[32px] md:leading-[39.36px]`}
          >
            Prizes and<span className={`text-[#D434FE]`}> Rewards</span>
          </h1>
          <p className={`font-[Montserrat] text-[12px] font-[400] text-[#fff] leading-[20.51px] mb-10 md:text-[16px] md:leading-[27.34px]`}>
            {" "}
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className={`md:flex items-end relative`}>
          <img
            src={Flare}
            alt="Flare"
            className={`absolute left-[-50px] top-[-100px] md:top-[-90px] md:w-[50%] md:left-[70px]`}
          />
          <img
            src={Flare2}
            alt="flare"
            className={`absolute right-[-23px] bottom-[-100px] w-[50%] md:bottom-[-380px] md:right-[-22px] lg:right-[-47px] lg:bottom-[-510px] xl:bottom-[-810px]`}
          />
          <img
            src={Star}
            alt="Star"
            className={`absolute left-[20px] top-[-180px] w-[10px] animate-ping delay-300 duration-100 ease-in md:top-[-40px] md:left-[90px]`}
          />
          <img
            src={Star}
            alt="Star"
            className={`absolute right-[10px] top-[-110px] w-[10px] animate-ping delay-300 duration-100 ease-in md:top-[-80px] md:right-[90px]`}
          />
          <img
            src={Star2}
            alt="Star"
            className={`absolute left-[190px] bottom-[-40px] w-[10px] animate-ping delay-300 duration-100 ease-in md:bottom-[-35px] md:left-[200px] lg:bottom-[180px] lg:left-[250px] xl:bottom-[250px] xl:left-[350px]`}
          />
          <img
            src={Star3}
            alt="star"
            className={`absolute right-[20px] bottom-[220px] w-[10px] animate-ping delay-300 duration-100 ease-in md:bottom-[20px] md:right-[40px]`}
          />
          <img
            src={Star3}
            alt="star"
            className={`absolute left-[20px] bottom-[250px] w-[10px] animate-ping delay-300 duration-100 ease-in md:bottom-[90px] md:right-[140px]`}
          />
          <div className={`my-4 md:my-0`}>
            <img src={Reward} alt="Reward" className={`relative z-[40]`} />
          </div>

          <div
            className={`flex gap-2 items-center justify-center mt-[9rem] md:w-[60%] md:mt-0 md:gap-4 relative z-[40] lg:w-[70%]`}
          >
            <div
              className={`relative border-2 border-[#D434FE] bg-[rgba(214,52,254,0.08)] rounded-[12px] flex justify-center items-end ${style._rewards_div} h-[132px] md:h-[162px] md:p-4 lg:p-6 lg:py-8`}
            >
              <img
                src={SilverMedal}
                alt="Silver Medal"
                className={`absolute top-[-52%] md:top-[-60%] lg:top-[-73%] xl:top-[-104%]`}
              />
              <div>
                <div className={`flex flex-col`}>
                  <h1
                    className={`text-[#fff] text-[14px] xl:leading-[32.56px] md:text-[22px] md:leading-[40px] font-[Montserrat] text-center leading-[24px] font-[700] xl:text-[28px]`}
                  >
                    2nd
                  </h1>
                  <p
                    className={`text-[10px] text-[#fff] xl:text-[22px] text-center leading-[24px] font-[600] md:text-[16px] md:leading-[32px] xl:leading-[31.94px] font-[Montserrat]`}
                  >
                    Runner
                  </p>
                </div>
                <p
                  className={`text-[#D434FE]  text-[14px] xl:text-[26px] md:text-[18px] md:leading-[32px] xl:leading-[42px] text-center leading-[32px] font-[700] font-[Montserrat]`}
                >
                  N300,000
                </p>
              </div>
            </div>

            <div
              className={`relative border-2 border-[#903AFF] bg-[rgba(143,58,255,0.08)] rounded-[12px] flex justify-center items-end ${style._rewards_div} h-[162px] md:h-[182px] md:p-4 lg:p-6 lg:py-8`}
            >
              <img
                src={GoldMedal}
                alt="Silver Medal"
                className={`absolute top-[-36%] md:top-[-58%] scale-150 lg:top-[-82%] xl:top-[-107%]`}
              />
              <div>
                <div className={`flex flex-col`}>
                  <h1
                    className={`text-[#fff] text-[14px] xl:leading-[32.56px] md:text-[22px] md:leading-[40px] font-[Montserrat] text-center leading-[24px] font-[700] xl:text-[28px]`}
                  >
                    1st
                  </h1>
                  <p
                    className={`text-[10px] text-[#fff] xl:text-[22px] text-center leading-[24px] font-[600] md:text-[16px] md:leading-[32px] xl:leading-[31.94px] font-[Montserrat]`}
                  >
                    Runner
                  </p>
                </div>

                <p
                  className={`text-[#903AFF]  text-[14px] xl:text-[26px] md:text-[18px] md:leading-[32px] xl:leading-[42px] text-center leading-[32px] font-[700] font-[Montserrat]`}
                >
                  N400,000
                </p>
              </div>
            </div>

            <div
              className={`relative border-2 border-[#D434FE] bg-[rgba(214,52,254,0.08)] rounded-[12px] flex justify-center items-end ${style._rewards_div} h-[132px] md:h-[162px] md:p-4 lg:p-6 lg:py-8`}
            >
              <img
                src={BronzeMedal}
                alt="Silver Medal"
                className={`absolute top-[-52%] md:top-[-53%] lg:top-[-69%] xl:top-[-97%]`}
              />
              <div>
                <div className={`flex flex-col`}>
                  <h1
                    className={`text-[#fff] text-[14px] xl:leading-[32.56px] md:text-[22px] md:leading-[40px] font-[Montserrat] text-center leading-[24px] font-[700] xl:text-[28px]`}
                  >
                    3rd
                  </h1>
                  <p
                    className={`text-[10px] text-[#fff] xl:text-[22px] text-center leading-[24px] font-[600] md:text-[16px] md:leading-[32px] xl:leading-[31.94px] font-[Montserrat]`}
                  >
                    Runner
                  </p>
                </div>
                <p
                  className={`text-[#D434FE] text-[14px] xl:text-[26px] md:text-[18px] md:leading-[32px] xl:leading-[42px] text-center leading-[32px] font-[700] font-[Montserrat]`}
                >
                  N150,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
