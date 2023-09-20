import { Link } from "react-router-dom";
import Stroke from "../assets/Vector 4.svg";
import style from "./style.module.css";
import Flare from "../assets/Purple-Lens-Flare-PNG (1).svg";
import Light from "../assets/Creative 1.svg";
import Chain from "../assets/chain-9365116-7621444.svg";
import Spark from "../assets/1f4a5.svg";
import SmartGlass from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.svg";
import Screen from "../assets/Image 1.svg";
import Star from "../assets/star.svg";
import Star2 from "../assets/star (1).svg";

const Hero = () => {
  return (
    <section className={`bg-[#150E28] pt-8 lg:px-[3rem] px-6 border-b border-[rgba(129,128,128,0.24)]`}>
      <div className={`${style._header_div} relative mb-6 mx-auto flex flex-col md:ml-auto md:mx-0`}>
        <h1
          className={`${style._hero_text} italic leading-[32px] text-[#fff] font-[600] text-center md:text-[16px]`}
        >
          Igniting a Revolution in HR Innovation
        </h1>
        <img
          src={Stroke}
          alt="stroke"
          className={`block ml-auto relative w-[100px]`}
        />
      </div>

      <div className={`${style._hero_div} mx-auto flex flex-col md:flex-row`}>
        <div className={`relative md:w-[360px]`}>
          <img
            src={Star}
            alt="star"
            className={`${style._stars} absolute left-[60px] top-[18px] w-[15px] animate-ping delay-300 duration-100 ease-in md:top-[-25px] md:left-[30px]`}
          />
          <img
            src={Star2}
            alt="star"
            className={`${style._stars} absolute right-[25px] top-0 w-[10px] animate-ping`}
          />
          <img
            src={Star2}
            alt="star"
            className={`${style._stars} absolute right-[20px] bottom-[110px] w-[10px] animate-ping`}
          />
          <img
            src={Flare}
            alt="flare"
            className={`absolute left-[-80px] top-[-20px] md:top-[-80px] md:left-[40px]`}
          />
          <div
            className={`${style._hackathon} flex justify-center items-end text-center font-[600] leading-[42px] text-[#fff] relative mt-[3rem] mb-[.5rem] md:text-left`}
          >
            <h1 className={`md:text-[36px] md:leading-[49px]`}>
              getlinkedTech Hackathon
              <span className={`text-[#D434FE]`}>1.0</span>
            </h1>
            <span className={`flex relative top-[-7px] right-[26px]`}>
              <img src={Chain} alt="Chain" className={`w-[25px]`} />
              <img src={Spark} alt="Spark" className={`w-[25px]`} />
            </span>
            <img
              src={Light}
              alt="light bulb"
              className={`absolute top-[-28px] right-[62px] w-[30px]`}
            />
          </div>
          <div
            className={`text-[13px] font-[400] w-[240px] mx-auto leading-[28px] text-[#fff] text-center md:text-left md:text-[15px] md:w-full md:mx-0`}
          >
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize.
            </p>
          </div>
          <div className={`flex justify-center mt-4`}>
            <button
              className={`w-[172px] h-[53px] rounded-[4px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] text-[#fff] font-[400] text-[16px] my-4 mx-auto md:mx-0 md:mr-auto`}
            >
              <Link to="/register">Register</Link>
            </button>
          </div>
          <div className={`flex gap-4 items-center my-4 justify-center md:justify-start md:mt-8`}>
            <p
              className={`text-[48px] text-[#fff] font-[400] leading-[32px] space-[16px]`}
            >
              00
              <span
                className={`uppercase text-[14px] text-[#fff] font-[400] leading-[20px]`}
              >
                H
              </span>
            </p>
            <p
              className={`text-[48px] text-[#fff] font-[400] leading-[32px] space-[16px]`}
            >
              00
              <span
                className={`uppercase text-[14px] text-[#fff] font-[400] leading-[20px]`}
              >
                M
              </span>
            </p>
            <p
              className={`text-[48px] text-[#fff] font-[400] leading-[32px] space-[16px]`}
            >
              00
              <span
                className={`uppercase text-[14px] text-[#fff] font-[400] leading-[20px]`}
              >
                S
              </span>
            </p>
          </div>
        </div>

        <div className={`${style._smart_glass} relative mt-[1.5rem] md:w-[542px] md:right-[-23px]`}>
          <img src={SmartGlass} alt="Smart Glass" className={``} />
          <img src={Screen} alt="Screen" className={`absolute top-[-10px] md:right-[30px]`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
