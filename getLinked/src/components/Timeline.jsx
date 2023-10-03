import style from "./style.module.css";
import Star from "../assets/star pu.svg";
import Star2 from "../assets/star (1).svg";
import Star3 from "../assets/star.svg";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Timeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      className={`p-6 py-[4rem] bg-[#140D27] border-0 lg:px-[3rem]`} id="Timeline"
    >
      <div className={``}>
        <div className={`text-center mb-10`}>
          <h1
            className={`font-face-cd marker: md:text-[32px] md:leading-[42.56px] text-[20px] font-[700] leading-[26.6px] text-[#fff] mb-3`}
          >
            Timeline
          </h1>
          <p
            className={`font-[Montserrat] text-[14px] font-[400] text-[#fff] leading-[24.14px] max-w-[280px] mx-auto`}
          >
            {" "}
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>

        <div className={`md:hidden flex flex-col gap-6 relative`}>
          <img
            src={Star}
            alt="Star"
            className={`absolute left-[20px] top-[-35px] w-[12px] animate-ping delay-300 duration-100 ease-in md:top-[-25px] md:left-[-10px]`}
          />
          <img
            src={Star2}
            alt="Star"
            className={`absolute left-[-10px] bottom-[-35px] w-[12px] animate-ping delay-300 duration-100 ease-in md:top-[-25px] md:left-[-10px]`}
          />
          <img
            src={Star3}
            alt="Star"
            className={`absolute right-[50px] top-[420px] w-[10px] animate-ping delay-300 duration-100 ease-in md:top-[-25px] md:left-[-10px]`}
          />

          <div className={`flex flex-col gap-1 items-start`}>
            <div className={`border-l-2 border-[#D434FE] pl-4`}>
              <h1
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                Hackathon Announcement
              </h1>
              <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19.19px] text-[#fff] md:text-[14px] md:leading-[23.93px]`}
              >
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register.
              </p>
            </div>
            <div className={`flex gap-2 items-center relative left-[-8px]`}>
              <div
                className={`${style._btn_style} w-[20px] h-[20px] p-2 flex justify-center items-center text-[#fff] rounded-full`}
              >
                <p className={`text-center text-[10px] font-[600]`}>1</p>
              </div>
              <p
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex flex-col gap-1 items-start`}>
            <div className={`border-l-2 border-[#D434FE] pl-4`}>
              <h1
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                Team Registration begins
              </h1>
              <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19.19px] text-[#fff] md:text-[14px] md:leading-[23.93px]`}
              >
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register.
              </p>
            </div>
            <div className={`flex gap-2 items-center relative left-[-8px]`}>
              <div
                className={`${style._btn_style} w-[20px] h-[20px] p-2 flex justify-center items-center text-[#fff] rounded-full`}
              >
                <p className={`text-center text-[10px] font-[600]`}>2</p>
              </div>
              <p
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex flex-col gap-1 items-start`}>
            <div className={`border-l-2 border-[#D434FE] pl-4`}>
              <h1
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                Team Registration ends
              </h1>
              <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19.19px] text-[#fff] md:text-[14px] md:leading-[23.93px]`}
              >
                Interested Participant are no longer allowed to register.
              </p>
            </div>
            <div className={`flex gap-2 items-center relative left-[-8px]`}>
              <div
                className={`${style._btn_style} w-[20px] h-[20px] p-2 flex justify-center items-center text-[#fff] rounded-full`}
              >
                <p className={`text-center text-[10px] font-[600]`}>3</p>
              </div>
              <p
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex flex-col gap-1 items-start`}>
            <div className={`border-l-2 border-[#D434FE] pl-4`}>
              <h1
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                {" "}
                Announcement of the accepted teams and ideas
              </h1>
              <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19.19px] text-[#fff] md:text-[14px] md:leading-[23.93px]`}
              >
                All teams whom ideas has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced.
              </p>
            </div>
            <div className={`flex gap-2 items-center relative left-[-8px]`}>
              <div
                className={`${style._btn_style} w-[20px] h-[20px] p-2 flex justify-center items-center text-[#fff] rounded-full`}
              >
                <p className={`text-center text-[10px] font-[600]`}>4</p>
              </div>
              <p
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex flex-col gap-1 items-start`}>
            <div className={`border-l-2 border-[#D434FE] pl-4`}>
              <h1
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                Getlinked Hackathon 1.0 Officially Begins
              </h1>
              <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19.19px] text-[#fff] md:text-[14px] md:leading-[23.93px]`}
              >
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions.
              </p>
            </div>
            <div className={`flex gap-2 items-center relative left-[-8px]`}>
              <div
                className={`${style._btn_style} w-[20px] h-[20px] p-2 flex justify-center items-center text-[#fff] rounded-full`}
              >
                <p className={`text-center text-[10px] font-[600]`}>5</p>
              </div>
              <p
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex flex-col gap-1 items-start`}>
            <div className={`border-l-2 border-[#D434FE] pl-4`}>
              <h1
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                Demo Day
              </h1>
              <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19.19px] text-[#fff] md:text-[14px] md:leading-[23.93px]`}
              >
                Teams get the the opportunity to pitch their projects to judges.
                The winner of the hackathon will also be announced on this day.
              </p>
            </div>
            <div className={`flex gap-2 items-center relative left-[-8px]`}>
              <div
                className={`${style._btn_style} w-[20px] h-[20px] p-2 flex justify-center items-center text-[#fff] rounded-full`}
              >
                <p className={`text-center text-[10px] font-[600]`}>6</p>
              </div>
              <p
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>
        </div>
        <div
          className={`hidden relative w-[80%] mx-auto md:flex flex-col gap-10 justify-center`}
          ref={ref}
      style={{
        transform: inView ? `none` : `translateY(-40px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 200ms`}}
        >
          <img
            src={Star}
            alt="Star"
            className={`absolute left-[20px] top-[-35px] w-[12px] animate-ping delay-300 duration-100 ease-in md:top-[-35px] md:left-[40px]`}
          />
          <img
            src={Star2}
            alt="Star"
            className={`absolute left-[-10px] bottom-[-35px] w-[12px] animate-ping delay-300 duration-100 ease-in md:bottom-[-35px] md:left-[-10px]`}
          />
          <img
            src={Star3}
            alt="Star"
            className={`absolute right-[50px] top-[420px] w-[10px] animate-ping delay-300 duration-100 ease-in md:top-[420px] md:right-[50px]`}
          />
          <div className={`flex items-end`}>
            <div className={`w-[50%] text-right pr-[1.5rem]`}>
              <h1
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                Hackathon Announcement
              </h1>
              <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19.19px] text-[#fff] md:text-[14px] md:leading-[23.93px]`}
              >
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register.
              </p>
            </div>
            <div className={`flex flex-col gap-2 justify-center w-[20px]`}>
              <div className={`h-[80px] w-[2px] bg-[#D434FE]`}></div>
              <div
                className={`${style._btn_style} w-[20px] h-[20px] p-2 flex justify-center items-center text-[#fff] rounded-full relative left-[-8px]`}
              >
                <p className={`text-center text-[10px] font-[600]`}>1</p>
              </div>
            </div>

            <div className={`w-[50%] pl-[.6rem]`}>
              <p
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex items-end`}>
            <div className={`w-[50%]`}>
              <p
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] text-right pr-[1.5rem]`}
              >
                November 18, 2023
              </p>
            </div>

            <div className={`flex flex-col gap-2 justify-center w-[20px]`}>
              <div className={`h-[80px] w-[2px] bg-[#D434FE]`}></div>
              <div
                className={`${style._btn_style} w-[20px] h-[20px] p-2 flex justify-center items-center text-[#fff] rounded-full relative left-[-8px]`}
              >
                <p className={`text-center text-[10px] font-[600]`}>2</p>
              </div>
            </div>

            <div className={`w-[50%] pl-[.6rem]`}>
              <h1
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                Team Registration begins
              </h1>
              <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19.19px] text-[#fff] md:text-[14px] md:leading-[23.93px]`}
              >
                Interested Participant are no longer allowed to register
              </p>
            </div>
          </div>

          <div className={`flex items-end`}>
            <div className={`w-[50%] text-right pr-[1.5rem]`}>
              <h1
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                Team Registration ends
              </h1>
              <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19.19px] text-[#fff] md:text-[14px] md:leading-[23.93px]`}
              >
                Interested Participant are no longer allowed to register.
              </p>
            </div>
            <div className={`flex flex-col gap-2 justify-center w-[20px]`}>
              <div className={`h-[80px] w-[2px] bg-[#D434FE]`}></div>
              <div
                className={`${style._btn_style} w-[20px] h-[20px] p-2 flex justify-center items-center text-[#fff] rounded-full relative left-[-8px]`}
              >
                <p className={`text-center text-[10px] font-[600]`}>3</p>
              </div>
            </div>

            <div className={`w-[50%] pl-[.6rem]`}>
              <p
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex items-end`}>
            <div className={`w-[50%] text-right pr-[1.5rem]`}>
              <p
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                November 18, 2023
              </p>
            </div>

            <div className={`flex flex-col gap-2 justify-center w-[20px]`}>
              <div className={`h-[80px] w-[2px] bg-[#D434FE]`}></div>
              <div
                className={`${style._btn_style} w-[20px] h-[20px] p-2 flex justify-center items-center text-[#fff] rounded-full relative left-[-8px]`}
              >
                <p className={`text-center text-[10px] font-[600]`}>4</p>
              </div>
            </div>

            <div className={`w-[50%] pl-[.6rem]`}>
              <h1
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                Announcement of the accepted teams and ideas
              </h1>
              <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19.19px] text-[#fff] md:text-[14px] md:leading-[23.93px]`}
              >
                All teams whom ideas has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced.
              </p>
            </div>
          </div>

          <div className={`flex items-end`}>
            <div className={`w-[50%] text-right pr-[1.5rem]`}>
              <h1
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                Getlinked Hackathon 1.0 Officially Begins
              </h1>
              <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19.19px] text-[#fff] md:text-[14px] md:leading-[23.93px]`}
              >
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions.
              </p>
            </div>
            <div className={`flex flex-col gap-2 justify-center w-[20px]`}>
              <div className={`h-[80px] w-[2px] bg-[#D434FE]`}></div>
              <div
                className={`${style._btn_style} w-[20px] h-[20px] p-2 flex justify-center items-center text-[#fff] rounded-full relative left-[-8px]`}
              >
                <p className={`text-center text-[10px] font-[600]`}>5</p>
              </div>
            </div>

            <div className={`w-[50%] pl-[.6rem]`}>
              <p
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex items-end`}>
            <div className={`w-[50%] text-right pr-[1.5rem]`}>
              <p
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                November 18, 2023
              </p>
            </div>

            <div className={`flex flex-col gap-2 justify-center w-[20px]`}>
              <div className={`h-[80px] w-[2px] bg-[#D434FE]`}></div>
              <div
                className={`${style._btn_style} w-[20px] h-[20px] p-2 flex justify-center items-center text-[#fff] rounded-full relative left-[-8px]`}
              >
                <p className={`text-center text-[10px] font-[600]`}>6</p>
              </div>
            </div>

            <div className={`w-[50%] pl-[.6rem]`}>
              <h1
                className={`font-[Montserrat] font-[700] text-[12px] leading-[14.63px] text-[#D434FE] md:text-[24px] md:leading-[29.26px] `}
              >
                Demo Day
              </h1>
              <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19.19px] text-[#fff] md:text-[14px] md:leading-[23.93px]`}
              >
                Teams get the the opportunity to pitch their projects to judges.
                The winner of the hackathon will also be announced on this day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
