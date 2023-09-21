import { Link } from "react-router-dom";
import Illustration from "../assets/8046554 1.svg";
import Flare from "../assets/Purple-Lens-Flare-PNG (1).svg";
import Star from "../assets/star pu.svg";
import Star2 from "../assets/star (1).svg";
import Star3 from "../assets/star.svg";
import Flare2 from "../assets/Purple-Lens-Flare-PNG.svg";
import Ellipse from "../assets/Ellipse 2.svg";
import style from "./style.module.css";

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
  return (
    <section
      className={`p-6 py-[4rem] bg-[#140D27] border-b border-[rgba(129,128,128,0.24)] lg:px-[3rem]`}
    >
      <div className={`md:flex justify-center items-center xl:gap-0`}>
        <div className={`relative md:w-[60%]`}>
          <img
            src={Illustration}
            alt="Illustration"
            className={`z-20 relative`}
          />
          <img
            src={Ellipse}
            alt="Ellipse"
            className={`hidden md:block absolute w-[100px] top-[-30px] left-[30px] lg:left-[60px] xl:left-[90px]`}
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
        <div className={`relative text-center md:text-left md:w-[50%]`}>
          <img
            src={Flare2}
            alt="flare"
            className={`absolute right-[-23px] bottom-[-100px] w-[50%] md:bottom-[-280px] md:right-[-22px] lg:right-[-47px]`}
          />
          <h1
            className={`text-[24px] font-[600] lading-[32px] text-[#fff] mb-4`}
          >
            Judging Criteria{" "}
            <span className={`text-[#D434FE]`}>Key attributes</span>
          </h1>
          <div>
            {data.map((item) => {
              return (
                <p
                  key={item.title}
                  className={`text-[16px] font-[400] text-[#fff] leading-[30px] mb-4`}
                >
                  <span className={`text-[#FF26B9] font-[600]`}>
                    {item.title}
                  </span>
                  &nbsp;{item.desc}
                </p>
              );
            })}
            <button
              className={`${style._btn_style} w-[150px] h-[53px] rounded-[4px] text-[#fff] font-[400] text-[16px] my-4`}
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
