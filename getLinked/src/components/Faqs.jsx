import { BsPlus } from "react-icons/bs";
import Star from "../assets/star pu.svg";
import Star2 from "../assets/star (1).svg";
import Star3 from "../assets/star.svg";
import Illustration from "../assets/cwok_casual_21 1.svg";
import Question from "../assets/_ (1).svg";

const Faqs = () => {
  return (
    <section
      className={`p-6 py-[4rem] bg-[#140D27] border-b border-[rgba(129,128,128,0.24)] lg:px-[3rem]`}
    >
      <div className={`md:flex justify-center items-center xl:gap-0`}>
        <div className={`relative text-center md:text-left md:w-[50%]`}>
          <img
            src={Star}
            alt="Star"
            className={`absolute left-[-20px] top-[-12px] w-[15px] animate-ping delay-300 duration-100 ease-in md:top-[-25px] md:left-[-10px]`}
          />
          <h1
            className={`text-[24px] font-[600] leading-[32px] text-[#fff] mb-4`}
          >
            Frequently Ask<span className={`text-[#D434FE]`}> Question</span>
          </h1>
          <p className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}>
            {" "}
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <div className={`my-4 mt-8`}>
            <div
              className={` border-b border-[#D434FE] pb-2 flex justify-between items-end mb-4`}
            >
              <p
                className={`text-left text-[13px] font-[400] text-[#fff] leading-[30px]`}
              >
                {" "}
                Can I work on a project I started before the hackathon?
              </p>
              <BsPlus className={`cursor-pointer text-[#D434FE] text-[20px]`} />
            </div>
            <div
              className={` border-b border-[#D434FE] pb-2 flex justify-between items-end mb-4`}
            >
              <p
                className={`text-left text-[13px] font-[400] text-[#fff] leading-[30px]`}
              >
                {" "}
                What happens if I need help during the hackathon?
              </p>
              <BsPlus className={`cursor-pointer text-[#D434FE] text-[20px]`} />
            </div>
            <div
              className={` border-b border-[#D434FE] pb-2 flex justify-between items-end mb-4`}
            >
              <p
                className={`text-left text-[13px] font-[400] text-[#fff] leading-[30px]`}
              >
                {" "}
                What happens if I dont have an idea for a project?
              </p>
              <BsPlus className={`cursor-pointer text-[#D434FE] text-[20px]`} />
            </div>
            <div
              className={` border-b border-[#D434FE] pb-2 flex justify-between items-end mb-4`}
            >
              <p
                className={`text-left text-[13px] font-[400] text-[#fff] leading-[30px]`}
              >
                {" "}
                Can I join a team or do I have to come with one?
              </p>
              <BsPlus className={`cursor-pointer text-[#D434FE] text-[20px]`} />
            </div>
            <div
              className={` border-b border-[#D434FE] pb-2 flex justify-between items-end mb-4`}
            >
              <p
                className={`text-left text-[13px] font-[400] text-[#fff] leading-[30px]`}
              >
                {" "}
                What happens after the hackathon
              </p>
              <BsPlus className={`cursor-pointer text-[#D434FE] text-[20px]`} />
            </div>
            <div
              className={` border-b border-[#D434FE] pb-2 flex justify-between items-end mb-4`}
            >
              <p
                className={`text-left text-[13px] font-[400] text-[#fff] leading-[30px]`}
              >
                {" "}
                Can I work on project I started before the hackathon?
              </p>
              <BsPlus className={`cursor-pointer text-[#D434FE] text-[20px]`} />
            </div>
          </div>
        </div>
        <div
          className={`relative my-8 mt-[6rem] md:my-0 md:mt-[4rem] md:w-[50%]`}
        >
          <img src={Illustration} alt="Illustration" />
          <img
            src={Star}
            alt="Star"
            className={`absolute left-[160px] top-[-20px] w-[15px] animate-ping delay-300 duration-100 ease-in md:top-[-30px] md:left-[170px]`}
          />
          <img
            src={Star}
            alt="Star"
            className={`absolute left-[50px] top-[90px] w-[10px] animate-ping delay-300 duration-100 ease-in md:top-[80px] md:left-[60px]`}
          />
          <img
            src={Star2}
            alt="Star"
            className={`absolute left-[10px] top-[140px] w-[12px] animate-ping delay-300 duration-100 ease-in md:top-[120px] md:left-[10px]`}
          />
          <img
            src={Star3}
            alt="Star"
            className={`absolute right-[50px] bottom-[-40px] w-[18px] animate-ping delay-300 duration-100 ease-in md:bottom-[-20px] md:right-[90px]`}
          />
          <img
            src={Question}
            alt="Star"
            className={`absolute left-[10px] top-[-40px] w-[30px] md:top-[-10px] md:left-[40px]`}
          />
          <img
            src={Question}
            alt="Star"
            className={`absolute left-[90px] top-[-60px] w-[40px] md:top-[-80px] md:left-[110px]`}
          />
          <img
            src={Question}
            alt="Star"
            className={`absolute left-[200px] top-[-40px] w-[30px] md:top-[-10px] md:left-[180px]`}
          />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
