import { Link } from "react-router-dom";
import Illustration from "../assets/8046554 1.svg";
import Flare from "../assets/Purple-Lens-Flare-PNG (1).svg";
import Star from "../assets/star pu.svg";
import Star2 from "../assets/star (1).svg";
import Star3 from "../assets/star.svg";
import Flare2 from "../assets/Purple-Lens-Flare-PNG.svg";
import style from "./style.module.css";
import ImgMobile from "../assets/Image2.svg";
import { useInView } from "framer-motion";
import { useRef } from "react";

const KeyAttributes = () => {
  const data = [
    {
      title: `Innovation and Creativity:`,
      desc: `Evaluate  the uniqueness and creativity of the solution. Consider whether it addresses a real world problem in a novel way or introduces innovative features.`,
    },
    {
      title: `Functionality:`,
      desc: `Assesses how well the solution works. Does it perform it intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.`,
    },
    {
      title: `Impact and Relevance:`,
      desc: `Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would access the potential social, econmic, or environmental benefits.`,
    },
    {
      title: `Technical Complexities:`,
      desc: `Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.`,
    },
    {
      title: `Adherence to Hackathon Rules:`,
      desc: `Judges will ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.`,
    },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      className={`p-6 py-[4rem] bg-[#140D27] border-b border-[rgba(129,128,128,0.24)] lg:px-[3rem]`}
    >
      <div className={`md:flex justify-center items-center xl:gap-0`}>
        <div className={`relative md:w-[60%]`}
          ref={ref}
      style={{
        transform: inView ? `none` : `translateY(-60px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}>
          <img
            src={Illustration}
            alt="Illustration"
            className={`z-[40] relative md:hidden`}
          />
          <img
            src={ImgMobile}
            alt="Illustration"
            className={`z-[40] relative hidden md:block`}
          />
          <img
            src={Flare}
            alt="Flare"
            className={`absolute left-[-50px] bottom-[-70px] md:bottom-[-90px] md:left-[-40px]`}
          />
          <img
            src={Star}
            alt="Star"
            className={`absolute left-[140px] top-[-12px] w-[10px] animate-ping delay-300 duration-100 ease-in md:top-[-80px] md:left-[90px]`}
          />
          <img
            src={Star2}
            alt="Star"
            className={`absolute left-[170px] bottom-[112px] w-[10px] animate-ping delay-300 duration-100 ease-in md:bottom-[135px] md:left-[200px] lg:bottom-[180px] lg:left-[250px] xl:bottom-[250px] xl:left-[350px]`}
          />
        </div>
        <div className={`relative text-center md:text-left md:w-[50%]`}
        ref={ref}
      style={{
        transform: inView ? `none` : `translateY(60px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}>
          <img
            src={Flare2}
            alt="flare"
            className={`absolute right-[-23px] bottom-[-100px] w-[50%] md:bottom-[-280px] md:right-[-22px] lg:right-[-47px]`}
          />
          <h1
            className={`font-face-cd  text-[20px] font-[700] leading-[26.6px] text-[#fff] mb-4 md:text-[32px] md:leading-[42.56px]`}
          >
            Judging Criteria{" "}
            <span className={`text-[#D434FE]`}>Key attributes</span>
          </h1>
          <div className={`relative z-[40]`}>
            {data.map((item) => {
              return (
                <p
                  key={item.title}
                  className={`font-[Montserrat] text-[12px] font-[400] text-[#fff] leading-[20.82px] mb-4  md:text-[16px] md:leading-[27.76px]`}
                  ref={ref}
      style={{
        transform: inView ? `none` : `translateY(60px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}
                >
                  <span className={`text-[#FF26B9] font-[700] text-[13px] leading-[22.55px] md:text-[14px] md:leading-[24.29px]`}>
                    {item.title}
                  </span>
                  &nbsp;{item.desc}
                </p>
              );
            })}
            <button
              className={`${style._btn_style} ${style._btn_style_hover} w-[96.35px] h-[31.35px] md:w-[172px] md:h-[53px] rounded-[4px] text-[#fff] text-[12px] leading-[14.63px] font-[400] md:text-[16px] md:leading-[19.5px] my-4`}
            >
              <Link to="/">Read More</Link>
            </button>
            <img
              src={Star3}
              alt="star"
              className={`absolute right-[0px] bottom-[50px] w-[10px] animate-ping delay-300 duration-100 ease-in md:bottom-[20px] md:left-[-40px]`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyAttributes;
