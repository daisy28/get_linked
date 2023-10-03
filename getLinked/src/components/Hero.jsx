import { useNavigate } from "react-router-dom";
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
import { useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className={`bg-[#150E28] pt-8 lg:px-[3rem]  border-b border-[rgba(129,128,128,0.24)]`} id="Hero"
    >
      
      <div className={`${style._header_div} relative mb-6 mx-auto flex flex-col md:p-4 md:ml-auto md:mx-0`}
      ref={ref}
      style={{
        transform: inView ? `none` : `translateY(-40px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 200ms`}}>
        <h1
          className={`${style._hero_text} font-[Montserrat] italic leading-[19.5px] text-[#fff] font-[700] text-center md:text-[36px] md:leading-[43.88px]`}
        >
          Igniting a Revolution in HR Innovation
        </h1>
        <img
          src={Stroke}
          alt="stroke"
          className={`${style._stroke} block ml-auto absolute right-[15px] bottom-[-8px] w-[115px] md:right-[60px] md:w-[280px] md:bottom-[-2px]`}
        />
      </div>

      <div className={`mx-auto flex flex-col md:flex-row items-end`}>
        <div className={`${style._hero_div} mx-auto relative z-[40] md:pl-4 md:w-[100%] md:max-w-[410px] lg:max-w[560px] xl:w-[100%] xl:max-w-[580px]`}
        ref={ref}
      style={{
        transform: inView ? `none` : `translateY(40px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 200ms`}}>
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
            className={`absolute left-[-80px] top-[-20px] md:top-[-80px] md:left-[40px] w-[100%]`}
          />
          <div
            className={`${style._hackathon} flex justify-center items-end text-center font-[600] leading-[42px] text-[#fff] relative mt-[3rem] mb-[.5rem] md:text-left`}
          >
            <h1 className={`font-face-cd font-[700] leading-[39.36px] text-[32px] text-center md:text-[50px] md:leading-[58.4px] md:text-left xl:text-[80px] xl:leading-[98.4px]`}>
              getlinked Tech Hackathon&nbsp;
              <span className={`text-[#D434FE]`}>1.0</span>
            </h1>
            <span className={`flex relative top-[-7px] right-[18px] md:right-[10px] md:hidden`}>
              <img src={Chain} alt="Chain" className={`w-[25px] md:w-[100%] md:h-[100%]`} />
              <img src={Spark} alt="Spark" className={`w-[25px] md:w-[100%] md:h-[100%]`} />
            </span>
            <div className={`hidden md:flex absolute top-[70px] md:right-[-3px] xl:top-[130px] xl:right-[-24px]`}>
              <img src={Chain} alt="Chain" className={`md:w-[35px]`} />
              <img src={Spark} alt="Spark" className={`md:w-[35px]`} />
            </div>
            <img
              src={Light}
              alt="light bulb"
              className={`absolute top-[-28px] right-[52px] w-[30px] md:right-[68px] xl:top-[-12px]`}
            />
          </div>
          <div
            className={`relative z-[40] font-[Montserrat] text-[13px] font-[400] mx-auto leading-[21.58px] text-[#fff] text-center md:text-left md:text-[20px] md:leading-[32.2px] md:w-full md:mx-0`}
          >
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize.
            </p>
          </div>
          <div className={`flex justify-center mt-4`}>
            <button
              className={`${style._btn_style} ${style._btn_style_hover} w-[152px] h-[46.84px] rounded-[4px] text-[#fff] font-[400] text-[14px] leading-[17.07px] font-[Montserrat] my-4 mx-auto md:mx-0 md:mr-auto`} onClick={() => navigate("/register")}
            >Register
            </button>
          </div>
          <div className={`flex gap-4 items-center my-4 justify-center md:justify-start md:mt-8`}>
            <p
              className={`text-[48px] font-face-uo text-[#fff] font-[400] leading-[63.84px]`}
            >
              00
              <span
                className={`uppercase font-[Montserrat] text-[14px] text-[#fff] font-[400] leading-[18.62px]`}
              >
                H
              </span>
            </p>
            <p
              className={`text-[48px] font-face-uo text-[#fff] font-[400] leading-[63.84px]`}
            >
              00
              <span
                className={`uppercase font-[Montserrat] text-[14px] text-[#fff] font-[400] leading-[18.62px]`}
              >
                M
              </span>
            </p>
            <p
              className={`text-[48px] font-face-uo text-[#fff] font-[400] leading-[63.84px]`}
            >
              00
              <span
                className={`uppercase font-[Montserrat] text-[14px] text-[#fff] font-[400] leading-[18.62px]`}
              >
                S
              </span>
            </p>
          </div>
        </div>

        <div className={`relative mt-[1.5rem] md:w-[50%] lg:w-[65%]`}
        ref={ref}
      style={{
        transform: inView ? `none` : `translateY(-40px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 200ms`}}>
          <img src={SmartGlass} alt="Smart Glass" className={`relative`} />
          <img src={Screen} alt="Screen" className={`absolute top-[-30px] md:right-[30px]`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
