import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import Star from "../assets/star pu.svg";
import Star2 from "../assets/star (1).svg";
import Star3 from "../assets/star.svg";
import ImgMobile from "../assets/Image1.svg";

const Faqs = () => {
  const [show, setShow] = useState(false);
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [showFive, setShowFive] = useState(false);
  return (
    <section
      className={`p-6 py-[4rem] bg-[#140D27] border-b border-[rgba(129,128,128,0.24)] lg:px-[3rem]`} id="Faqs"
    >
      <div className={`md:flex justify-center items-center xl:gap-0`}>
        <div className={`relative text-center md:text-left md:w-[50%]`}>
          <img
            src={Star}
            alt="Star"
            className={`absolute left-[-20px] top-[-12px] w-[15px] animate-ping delay-300 duration-100 ease-in md:top-[-25px] md:left-[-10px]`}
          />
          <h1
            className={`font-face-cd text-[20px] font-[700] leading-[26.6px] text-[#fff] mb-4 md:text-[32px] md:leading-[42.56px]`}
          >
            Frequently Ask<span className={`text-[#D434FE]`}> Question</span>
          </h1>
          <p className={`font-[Montserrat] text-[12px] font-[400] text-[#fff] leading-[27.5px] md:text-[14px] md:leading-[27.5px]`}>
            {" "}
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <div className={`my-4 mt-8`}>
            <div
              className={` border-b border-[#D434FE] pb-2 flex justify-between items-end mb-4`}
            >
              <div>
                <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19px] md:text-[14px] md:leading-[27.5px] text-[#fff] text-left`}
              >
                {" "}
                Can I work on a project I started before the hackathon?
              </p>
              <p id="one" className={`${show ? `block` : `hidden`} text-left text-[10px] font-[400] text-[#fff] leading-[22px]`}>Yes, you can typically work on a project you started before the hackathon. However, it&apos;s important to check the specific rules and guidelines of the hackathon you&apos;re participating in, as some events may have restrictions or requirements regarding pre-existing projects.</p>
              </div>
              <div onClick={() => setShow(prevState => !prevState)}>
                {show ? <p className={`text-[20px] cursor-pointer text-[#D434FE]`}>-</p> :<BsPlus className={`cursor-pointer text-[#D434FE] text-[20px]`} />}
              </div>
              
            </div>
            <div
              className={` border-b border-[#D434FE] pb-2 flex justify-between items-end mb-4`}
            >
               <div>
                <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19px] md:text-[14px] md:leading-[27.5px] text-[#fff] text-left`}
              >
                {" "}
                What happens if I need help during the Hackathon?
              </p>
              <p id="one" className={`${showOne ? `block` : `hidden`} text-left text-[10px] font-[400] text-[#fff] leading-[22px]`}>During the hackathon, you can seek help from mentors, organizers, or fellow psrticipants. There are often designated channels or support systems, such as mentorship sessions or online forums, where you can ask questions and get assistance with technical or project-related issues.</p>
              </div>
              <div onClick={() => setShowOne(prevState => !prevState)}>
                {showOne ?<p className={`text-[20px] cursor-pointer text-[#D434FE]`}>-</p> :<BsPlus className={`cursor-pointer text-[#D434FE] text-[20px]`} />}
              </div>
            </div>
            <div
              className={` border-b border-[#D434FE] pb-2 flex justify-between items-end mb-4`}
            >
               <div>
                <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19px] md:text-[14px] md:leading-[27.5px] text-[#fff] text-left`}
              >
                {" "}
                What happens if I don&apos;t have an idea for a project?
              </p>
              <p id="one" className={`${showTwo ? `block` : `hidden`} text-left text-[10px] font-[400] text-[#fff] leading-[22px]`}>If you don&apos;t have an idea for a project, you can often join a team that has an idea you&apos;re interested in, or you can brainstorm and collaborate with other participants to come up with a project concept. Many hackathons encourage teamwork and creativity, so don&apos;t hesitate to reach out to others for collaboration.</p>
              </div>
              <div onClick={() => setShowTwo(prevState => !prevState)}>
                {showTwo ?<p className={`text-[20px] cursor-pointer text-[#D434FE]`}>-</p> :<BsPlus className={`cursor-pointer text-[#D434FE] text-[20px]`} />}
              </div>
            </div>
            <div
              className={` border-b border-[#D434FE] pb-2 flex justify-between items-end mb-4`}
            >
               <div>
                <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19px] md:text-[14px] md:leading-[27.5px] text-[#fff] text-left`}
              >
                {" "}
                Can I join a team or do I have to come up with one?
              </p>
              <p id="one" className={`${showThree ? `block` : `hidden`} text-left text-[10px] font-[400] text-[#fff] leading-[22px]`}>Most hackathons allow both individuals and teams to participate. You can typically join a team at the hackathon itself, and organizers may help match participants who are looking for team members. Some hackathons also have specific team size size limits, so be sure to check the event&apos;s guidelines.</p>
              </div>
              <div onClick={() => setShowThree(prevState => !prevState)}>
                {showThree ?<p className={`text-[20px] cursor-pointer text-[#D434FE]`}>-</p> :<BsPlus className={`cursor-pointer text-[#D434FE] text-[20px]`} />}
              </div>
            </div>
            <div
              className={` border-b border-[#D434FE] pb-2 flex justify-between items-end mb-4`}
            >
               <div>
                <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19px] md:text-[14px] md:leading-[27.5px] text-[#fff] text-left`}
              >
                {" "}
                What happens after the hackathon ends?
              </p>
              <p id="one" className={`${showFour ? `block` : `hidden`} text-left text-[10px] font-[400] text-[#fff] leading-[22px]`}>After the hackathon concludes, there will be the following: project presentation, networking sessions, continued project development and community engagement.</p>
              </div>
              <div onClick={() => setShowFour(prevState => !prevState)}>
                {showFour ?<p className={`text-[20px] cursor-pointer text-[#D434FE]`}>-</p> :<BsPlus className={`cursor-pointer text-[#D434FE] text-[20px]`} />}
              </div>
            </div>
            <div
              className={` border-b border-[#D434FE] pb-2 flex justify-between items-end mb-4`}
            >
               <div>
                <p
                className={`font-[Montserrat] font-[400] text-[12px] leading-[19px] md:text-[14px] md:leading-[27.5px] text-[#fff] text-left`}
              >
                {" "}
                Can I work on a project I started before the hackathon?
              </p>
              <p id="one" className={`${showFive ? `block` : `hidden`} text-left text-[10px] font-[400] text-[#fff] leading-[22px]`}>Yes, you can typically work on a project you started before the hackathon. However, it&apos;s important to check the specific rules and guidelines of the hackathon you&apos;re participating in, as some events may have restrictions or requirements regarding pre-existing projects.</p>
              </div>
              <div onClick={() => setShowFive(prevState => !prevState)}>
                {showFive ?<p className={`text-[20px] cursor-pointer text-[#D434FE]`}>-</p> :<BsPlus className={`cursor-pointer text-[#D434FE] text-[20px]`} />}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`relative my-8 mt-[6rem] md:my-0 md:mt-[4rem] md:w-[50%]`}
        >
          <img src={ImgMobile} alt="Illustration" className={``} />
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
          
        </div>
      </div>
    </section>
  );
};

export default Faqs;
