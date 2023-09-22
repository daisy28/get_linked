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

const Prizes = () => {
  return (
    <section
      className={`p-6 py-[4rem] bg-[#140D27] border-b border-[rgba(129,128,128,0.24)] lg:px-[3rem]`}
    >
      <div className={`flex flex-col gap-6`}>
        <div
          className={`relative text-center md:text-left md:w-[50%] lg:w-[45%] md:ml-auto`}
        >
          <h1
            className={`text-[24px] font-[600] leading-[32px] text-[#fff] mb-4`}
          >
            Prizes and<span className={`text-[#D434FE]`}> Rewards</span>
          </h1>
          <p className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}>
            {" "}
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className={`md:flex items-end relative`}>
          <img
            src={Flare}
            alt="Flare"
            className={`absolute left-[-50px] top-[-100px] md:top-[-290px] md:left-[-100px]`}
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
            className={`flex gap-2 items-center justify-center mt-[6rem] md:w-[60%] md:mt-0 md:gap-4 relative z-[40]`}
          >
            <div
              className={`relative border-2 border-[#D434FE] bg-[rgba(214,52,254,0.08)] rounded-[12px] flex justify-center items-end ${style._rewards_div} h-[132px] md:p-4`}
            >
              <img
                src={SilverMedal}
                alt="Silver Medal"
                className={`absolute top-[-52%] md:top-[-80%]`}
              />
              <div>
                <div className={`flex flex-col`}>
                  <h1
                    className={`text-[#fff] text-[14px] md:text-[24px] text-center leading-[24px] font-[700]`}
                  >
                    2nd
                  </h1>
                  <p
                    className={`text-[10px] text-[#fff] md:text-[16px] text-center leading-[24px] font-[600]`}
                  >
                    Runner
                  </p>
                </div>
                <p
                  className={`text-[#D434FE] text-[14px] md:text-[18px] text-center leading-[32px] font-[700]`}
                >
                  N300,000
                </p>
              </div>
            </div>

            <div
              className={`relative border-2 border-[#903AFF] bg-[rgba(143,58,255,0.08)] rounded-[12px] flex justify-center items-end ${style._rewards_div} h-[162px] md:p-4`}
            >
              <img
                src={GoldMedal}
                alt="Silver Medal"
                className={`absolute top-[-36%] md:top-[-72%] scale-150`}
              />
              <div>
                <div className={`flex flex-col`}>
                  <h1
                    className={`text-[#fff] text-[14px] md:text-[24px] text-center leading-[24px] font-[700]`}
                  >
                    1st
                  </h1>
                  <p
                    className={`text-[10px] text-[#fff] md:text-[16px] text-center leading-[24px] font-[600]`}
                  >
                    Runner
                  </p>
                </div>

                <p
                  className={`text-[#903AFF] text-[14px] md:text-[18px] text-center leading-[32px] font-[700]`}
                >
                  N400,000
                </p>
              </div>
            </div>

            <div
              className={`relative border-2 border-[#D434FE] bg-[rgba(214,52,254,0.08)] rounded-[12px] flex justify-center items-end ${style._rewards_div} h-[132px] md:p-4`}
            >
              <img
                src={BronzeMedal}
                alt="Silver Medal"
                className={`absolute top-[-52%] md:top-[-73%]`}
              />
              <div>
                <div className={`flex flex-col`}>
                  <h1
                    className={`text-[#fff] text-[14px] md:text-[24px] text-center leading-[24px] font-[700]`}
                  >
                    3rd
                  </h1>
                  <p
                    className={`text-[10px] text-[#fff] md:text-[16px] text-center leading-[24px] font-[600]`}
                  >
                    Runner
                  </p>
                </div>
                <p
                  className={`text-[#D434FE] text-[14px] md:text-[18px] text-center leading-[32px] font-[700]`}
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
