import Illustration from "../assets/08 1.svg";
import Shield from "../assets/Vector.svg";
import Checker from "../assets/list terms.svg";
import style from "./style.module.css";
import Star from "../assets/star pu.svg";
import Star2 from "../assets/star.svg";
import Star3 from "../assets/star (1).svg";
import Flare from "../assets/Purple-Lens-Flare-PNG (1).svg";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PrivacyPolicy = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className={`p-6 py-[4rem] bg-[#140D27] lg:px-[3rem]`} id="Privacy"
      
    >
      <div className={`md:flex justify-center gap-6 items-start lg:gap-10`}>
        <div className={`md:w-[50%] relative z-[40]`}
        ref={ref}
    style={{
        transform: inView ? `none` : `translateY(-60px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}>
          <img
            src={Star}
            alt="Stars"
            className={`absolute right-0 top-[-20px] w-[8px] animate-ping delay-300 duration-100 ease-in md:top-[700px] md:right-[60px]`}
          />

          <img
            src={Star}
            alt="Stars"
            className={`absolute right-[10px] top-[300px] w-[12px] animate-ping delay-300 duration-100 ease-in md:bottom-[160px] md:left-[-30px]`}
          />

          <img
            src={Star}
            alt="Stars"
            className={`absolute left-[10px] bottom-[30px] w-[12px] animate-ping delay-300 duration-100 ease-in md:bottom-[20px] md:right-[60px]`}
          />

          <img
            src={Flare}
            alt="Flare"
            className={`absolute left-[-100px] bottom-[-80px] md:bottom-[-120px] md:left-[-60px] lg:left-[-120px]`}
          />
          <h1
            className={`font-face-cd md:text-[32px] md:leading-[39.36px] text-[20px] font-[700] leading-[24.6px] text-[#fff] mb-4 text-center md:text-left`}
          >
            Privacy Policy and <span className={`text-[#D434FE]`}>Terms</span>
          </h1>
          <p
            className={`text-[12px] font-[400] text-[#fff] leading-[27.5px] mb-4  text-center md:text-left md:text-[14px] md:leading-[27.5px] font-[Montserrat]`}
          >
            Last updated on September 12, 2023
          </p>
          <p
            className={`font-[Montserrat] text-[12px] font-[400] text-[#fff] leading-[22.61px] mb-8  text-center md:text-left md:text-[14px] md:leading-[26.38px]`}
          >
            Below are our privacy & policy, which outline a lot of goodies.
            It&apos;s our aim to always take of our particpant.
          </p>
          <div
            className={`border border-[#D434FE] rounded-[6px] p-4 mb-[3rem] md:mb-0 md:p-6 md:py-8`}
          >
            <p
              className={`font-[Monserrat] text-[12px] font-[400] text-[#fff] leading-[25.97px] mb-8 text-center md:text-left md:text-[14px] md:leading-[30.3px]`}
            >
              At getlinked tech hackathon 1.0, we value your privacy policy and
              are committed to to protecting your personal information. This
              privacy Policy outlines how we collect, use, disclose, and
              safeguard your data when you participate in our tech hackathon
              event, you consent to the practices dscribed in this policy.
            </p>
            <div className={`pt-6`}>
              <h1
                className={`text-[13px] font-[Montserrat] leading-[28.13px] md:text-[16px] font-[700] md:leading-[34.62px] text-[#D434FE]`}
              >
                Licensing Policy
              </h1>
              <p
                className={`font-[Montserrat] text-[12px] font-[700] text-[#fff] leading-[25.97px] mb-6 md:text-[14px] md:leading-[30.3px]`}
              >
                Here are terms of our Standard License:
              </p>
              <div className={`relative z-[40]`}>
                <div className={`flex items-start gap-4 mb-8`}>
                  <img src={Checker} alt="Checker" className={`mt-2`} />
                  <p
                    className={`font-[Montserrat] text-[12px] font-[400] text-[#fff] leading-[21.11px] mb-6 md:text-[14px] md:leading-[30.3px]`}
                  >
                    The standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
                <div className={`flex items-start gap-4 `}>
                  <img src={Checker} alt="Checker" className={`mt-2`} />
                  <p
                    className={`font-[Montserrat] text-[12px] font-[400] text-[#fff] leading-[21.95px] mb-6 md:text-[14px] md:leading-[30.3px]`}
                  >
                    You are licensed to use the item available at any free
                    source sites, for your project development
                  </p>
                </div>
                <div className={`flex justify-center items-center`}>
                  <button
                    className={`${style._btn_style} ${style._btn_style_hover}  w-[96.35px] h-[31.35px] md:w-[172px] md:h-[53px] rounded-[4px] text-[#fff] text-[12px] leading-[14.63px] font-[400] md:text-[16px] md:leading-[19.5px] my-4`}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`relative md:w-[50%] z-[40]`}
        ref={ref}
    style={{
        transform: inView ? `none` : `translateY(60px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}>
          <img
            src={Star}
            alt="Stars"
            className={`absolute left-[-10px] top-[90px] w-[15px] animate-ping delay-300 duration-100 ease-in md:top-[20px] md:right-[60px]`}
          />
          <img
            src={Star2}
            alt="Stars"
            className={`absolute right-[50px] top-[120px] w-[8px] animate-ping delay-300 duration-100 ease-in md:bottom-[20px] md:right-[60px]`}
          />
          <img
            src={Star2}
            alt="Stars"
            className={`absolute left-[50px] bottom-[20px] w-[8px] animate-ping delay-300 duration-100 ease-in md:bottom-[-90px] md:right-[80px]`}
          />
          <img
            src={Star3}
            alt="Stars"
            className={`absolute right-[0px] bottom-[90px] w-[5px] animate-ping delay-300 duration-100 ease-in md:top-[500px] md:right-[20px]`}
          />
          <img
            src={Illustration}
            alt="Illustration"
            className={`relative z-[40]`}
          />
          <img src={Shield} alt="Shield" className={`absolute top-0 z-[30]`} />
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
