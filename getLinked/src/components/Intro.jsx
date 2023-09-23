import Idea from "../assets/The big idea.svg";
import Arrow from "../assets/arrow.svg";
import Star from "../assets/star pu.svg";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Intro = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      className={`p-6 py-[4rem] bg-[#140D27] border-b border-[rgba(129,128,128,0.24)] lg:px-[3rem]`} id="Intro"
      
    >
      <div className={`md:flex justify-center gap-6 items-center xl:gap-0`}>
        <div className={`mb-[4rem] md:mb-0 relative md:w-[50%]`}
        ref={ref}
      style={{
        transform: inView ? `none` : `translateX(40px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}>
          <img src={Idea} alt="ideas" />
          <img
            src={Arrow}
            alt="curly arrow"
            className={`absolute w-[30px] left-[45%] bottom-[-30px] md:bottom-[10px] md:left-[320px] lg:left-[390px] xl:left-[430px]`}
          />
          <img
            src={Star}
            alt="star"
            className={`absolute left-[10px] top-[108px] w-[12px] animate-ping delay-300 duration-100 ease-in md:top-[140px] md:left-0`}
          />
        </div>
        <div className={`my-4 text-center md:text-left relative md:w-[50%]`}
        ref={ref}
      style={{
        transform: inView ? `none` : `translateX(-40px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}>
          <img
            src={Star}
            alt="star"
            className={`absolute right-0 top-[40px] w-[8px] animate-ping delay-300 duration-100 ease-in md:top-[20px] md:right-[60px]`}
          />
          <h1
            className={`text-[20px] font-[700] leading-[26.6px] font-face-cd text-[#fff] mb-4 md:text-[32px] md:leading-[42.56px]`}
          >
            Introduction to getlinked{" "}
            <span className={`text-[#D434FE]`}>techHackathon 1.0</span>
          </h1>
          <p className={`font-[Montserrat] text-[13px] font-[400] text-[#fff] leading-[27.5px] md:text-[14px] md:leading-[27.5px]`}>
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

export default Intro;
