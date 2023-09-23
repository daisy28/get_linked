import Star from "../assets/star pu.svg";
import Star2 from "../assets/star.svg";
import Flare from "../assets/Purple-Lens-Flare-PNG (1).svg";
import Flare2 from "../assets/Purple-Lens-Flare-PNG.svg";
import Img1 from "../assets/7450159 1.svg";
import ImgMobile from "../assets/Image3.svg";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Rules = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      className={`p-6 py-[4rem] bg-[#140D27] border-b border-[rgba(129,128,128,0.24)] lg:px-[3rem]`}
      ref={ref}
      style={{
        transform: inView ? `none` : `translateY(40px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}
    >
      <div className={`md:flex justify-center gap-6 items-center xl:gap-0`}>
        <div className={`relative md:w-[50%] md:order-4`}>
          <img src={Img1} alt="ideas" className={`md:hidden relative z-[40]`} />
          <img src={ImgMobile} alt="ideas" className={`hidden md:block relative z-[40]`} />
          <img
            src={Flare}
            alt="star"
            className={`absolute z-[10] right-[70px] top-[-90px] w-full md:top-[20px] md:right-[60px] md:hidden`}
          />
          <img
            src={Flare2}
            alt="star"
            className={`absolute z-[10] right-[-23px] top-[-150px] w-[50%] md:top-[120px] md:right-[-22px] lg:right-[-45px] hidden md:block`}
          />
          <img
            src={Star2}
            alt="star"
            className={`absolute left-[0px] top-[130px] w-[10px] animate-ping delay-300 duration-100 ease-in md:top-[20px] md:left-[200px]`}
          />
        </div>
        <div className={`my-4 text-center md:text-left relative md:w-[50%]`}>
          <img
            src={Star}
            alt="star"
            className={`absolute right-0 top-[40px] w-[8px] animate-ping delay-300 duration-100 ease-in md:top-[20px] md:right-[60px]`}
          />
          <img
            src={Star2}
            alt="star"
            className={`absolute left-[60px] bottom-[-30px] w-[10px] animate-ping delay-300 duration-100 ease-in md:left-[350px]`}
          />
          <img
            src={Flare2}
            alt="flare"
            className={`absolute right-[-23px] top-[-150px] w-[50%] md:top-[20px] md:right-[60px] md:hidden`}
          />
          <img
            src={Flare}
            alt="flare"
            className={`absolute right-[70px] top-[60px] w-full md:top-[-100px] md:right-[20px] hidden md:block`}
          />
          <h1
            className={`font-face-cd relative text-[20px] font-[700] leading-[26.6px] text-[#fff] mb-4 z-[40] md:text-[32px] md:leading-[42.56px]`}
          >
            Rules and <span className={`text-[#D434FE]`}>Guidlines</span>
          </h1>
          <p className={`font-[Montserrat] relative text-[13px] font-[400] text-[#fff] leading-[27.5px] z-[40] md:text-[14px] md:leading-[27.5px]`}>
            Our tech hackathon is a melting point pot of visionaries, and its
            purpose is as clear as day; to shape the future. Whether you&apos;re
            a coding genuis, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solution that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rules;
