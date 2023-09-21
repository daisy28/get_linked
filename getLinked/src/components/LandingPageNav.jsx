import { useState } from "react";
import { Link } from "react-router-dom";
import Toggle from "../assets/Vector (1).svg";
import { MdClose } from "react-icons/md";
import style from "./style.module.css";

const LandingPageNav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`pt-6 pb-2 px-6 bg-[#140D27] border-b border-[rgba(129,128,128,0.24)] lg:px-[3rem]`}>
      <div className={`flex justify-between items-center`}>
        <Link
          to="/"
          className={`font-face-cd text-[#fff] font-[600] leading-[32px] text-[1.2rem] `}
        >
          get<span className={`text-[#D434FE]`}>linked</span>
        </Link>

        <div
          className={`cursor-pointer md:hidden`}
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        >
          <img src={Toggle} alt="Menu toggle" />
        </div>

        <div
          className={`absolute bottom-0 bg-[#140d2768] top-[0px] left-0 right-[0]  delay-300 transition ease-in duration-1000  ${
            toggle ? `block` : `hidden`
          }`}
        >
            <div
              className={`bg-[#140D27] w-[70%] relative right-0 ml-auto p-6 px-8 flex flex-col rounded-[8px] shadow-lg z-10 gap-8`}
            >
              <div>
                <MdClose
                  className={`cursor-pointer text-[#fff] ml-auto mb-4`}
                  onClick={() => setToggle((prevToggle) => !prevToggle)}
                />
              </div>
              <div
                className={`flex flex-col gap-4 text-[#fff] text-[1.1rem] font-[400] leading-[24px]`}
              >
                <Link to="">Timeline</Link>
                <Link to="">Overview</Link>
                <Link to="">FAQs</Link>
                <Link to="/contact">Contact</Link>
                <button
                  className={`${style._btn_style} w-[172px] h-[53px] rounded-[4px] text-[#fff] font-[400] text-[16px] my-4`}
                >
                  <Link to="/register">Register</Link>
                </button>
              </div>
            </div>
        </div>
        <div className={`hidden md:block`}>
          <div
                className={`flex items-center gap-4 text-[#fff] text-[1.1rem] font-[400] leading-[24px]`}
              >
            <div className={`mr-8 flex items-center gap-6`}>
              <Link to="">Timeline</Link>
              <Link to="">Overview</Link>
              <Link to="">FAQs</Link>
              <Link to="/contact">Contact</Link>
            </div>
                
            <button
              className={`${style._btn_style} w-[150px] h-[53px] rounded-[4px]  text-[#fff] font-[400] text-[16px] my-4`}
            >
              <Link to="/register">Register</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingPageNav;
