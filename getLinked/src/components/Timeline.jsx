import style from "./style.module.css";
import Star from "../assets/star pu.svg";
import Star2 from "../assets/star (1).svg";
import Star3 from "../assets/star.svg";

const Timeline = () => {
  return (
    <section
      className={`p-6 py-[4rem] bg-[#140D27] border-0 lg:px-[3rem]`} id="Timeline"
    >
      <div className={``}>
        <div className={`text-center mb-10`}>
          <h1
            className={`text-[24px] font-[600] leading-[32px] text-[#fff] mb-3`}
          >
            Timeline
          </h1>
          <p
            className={`text-[13px] font-[400] text-[#fff] leading-[30px] max-w-[280px] mx-auto`}
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
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                Hackathon Announcement
              </h1>
              <p
                className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}
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
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex flex-col gap-1 items-start`}>
            <div className={`border-l-2 border-[#D434FE] pl-4`}>
              <h1
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                Team Registration begins
              </h1>
              <p
                className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}
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
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex flex-col gap-1 items-start`}>
            <div className={`border-l-2 border-[#D434FE] pl-4`}>
              <h1
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                Team Registration ends
              </h1>
              <p
                className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}
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
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex flex-col gap-1 items-start`}>
            <div className={`border-l-2 border-[#D434FE] pl-4`}>
              <h1
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                {" "}
                Announcement of the accepted teams and ideas
              </h1>
              <p
                className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}
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
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex flex-col gap-1 items-start`}>
            <div className={`border-l-2 border-[#D434FE] pl-4`}>
              <h1
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                Getlinked Hackathon 1.0 Officially Begins
              </h1>
              <p
                className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}
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
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex flex-col gap-1 items-start`}>
            <div className={`border-l-2 border-[#D434FE] pl-4`}>
              <h1
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                Demo Day
              </h1>
              <p
                className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}
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
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>
        </div>
        <div
          className={`hidden relative w-[80%] mx-auto md:flex flex-col gap-10 justify-center`}
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
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                Hackathon Announcement
              </h1>
              <p
                className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}
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
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex items-end`}>
            <div className={`w-[50%]`}>
              <p
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] text-right pr-[1.5rem]`}
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
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                Team Registration begins
              </h1>
              <p
                className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}
              >
                Interested Participant are no longer allowed to register
              </p>
            </div>
          </div>

          <div className={`flex items-end`}>
            <div className={`w-[50%] text-right pr-[1.5rem]`}>
              <h1
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                Team Registration ends
              </h1>
              <p
                className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}
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
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex items-end`}>
            <div className={`w-[50%] text-right pr-[1.5rem]`}>
              <p
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
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
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                Announcement of the accepted teams and ideas
              </h1>
              <p
                className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}
              >
                All teams whom ideas has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced.
              </p>
            </div>
          </div>

          <div className={`flex items-end`}>
            <div className={`w-[50%] text-right pr-[1.5rem]`}>
              <h1
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                Getlinked Hackathon 1.0 Officially Begins
              </h1>
              <p
                className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}
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
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                November 18, 2023
              </p>
            </div>
          </div>

          <div className={`flex items-end`}>
            <div className={`w-[50%] text-right pr-[1.5rem]`}>
              <p
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
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
                className={`text-[#D434FE] text-[16px] font-[600] leading-[24px] `}
              >
                Demo Day
              </h1>
              <p
                className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}
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
