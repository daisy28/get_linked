import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Toggle from "../assets/Vector (1).svg";
import { MdClose } from "react-icons/md";
import style from "./style.module.css";
import Circle from "../assets/Group 1.svg";


const LandingPageNav = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const splitLocation = location.pathname;
  const navigate = useNavigate();

  return (
    <nav className={`p-6 pt-8 bg-[#140D27] border-b border-[rgba(129,128,128,0.24)] lg:px-[3rem]`}>
      <div
          className={`fixed h-[100vh] md:hidden overflow-y-hidden bottom-0 bg-[#140d27dc] blur-md z-[60] top-[0px] left-0 right-[0] delay-300 transition ease-in duration-1000  ${
            toggle ? `block` : `hidden`
          }`} onClick={() => setToggle(prevState => !prevState)}
        >
        </div>
      <div className={`flex justify-between items-center`}>
        <Link
          to="/"
          className={`relative z-[40] font-face-cd text-[#fff] font-[700] leading-[18.45px] text-[15px] `}
        >
          get<span className={`text-[#D434FE]`}>linked</span>
        </Link>

        <div
          className={`cursor-pointer md:hidden`}
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        >
          <img src={Toggle} alt="Menu toggle" />
        </div>

        
        <div className={`relative  ${toggle ? `md:hidden block` : `hidden`}`}>
          <div
              className={`bg-[#140D27] max-w-[348px] h-[432px] z-[90] absolute right-[-24px] top-[-38px] ml-auto p-6 px-8 flex flex-col rounded-[8px] shadow-2xl gap-12`}
            >
              <div className={`relative mt-4`}>
                <img src={Circle} alt="" className={`relative ml-auto`} />
                <MdClose
                  className={`absolute top-[3px] right-[3px] cursor-pointer text-[#fff]`}
                  onClick={() => setToggle((prevToggle) => !prevToggle)}
                />
                
              </div>
              <div
                className={`flex flex-col font-face-in gap-6 text-[#fff] text-[18px] font-[500] leading-[21.78px] spacing-[-1]`}
            >
                <AnchorLink href="#Timeline" className={`${style._text_style_hover}`}>Timeline</AnchorLink>
                <AnchorLink href="#Intro" className={`${style._text_style_hover}`}>Intro</AnchorLink>
                <AnchorLink href="#Faqs" className={`${style._text_style_hover}`}>FAQs</AnchorLink>
                <Link to="/contact" className={`${style._text_style_hover} ${splitLocation === "/contact" ? `${style._text_style}` : `text-[#fff]`}`}>Contact</Link>
                <button
                  className={`${style._btn_style} w-[172px] h-[53px] text-[#fff] font-[400] font-[Montserrat] text-[16px] leading-[19.5px] my-4 ${style._btn_style_hover}`} onClick={() => navigate("/register")}
                >Register
                </button>
              </div>
            </div>
        </div>
        
        <div className={`hidden md:block relative z-[40]`}>
          <div
                className={`flex items-center gap-4 text-[#fff] text-[1.1rem] font-[400] leading-[24px]`}
              >
            <div className={`mr-8 flex items-center gap-6 font-face-in text-[#fff] text-[18px] font-[500] leading-[21.78px] spacing-[-1]`}>
              <AnchorLink href="#Timeline" className={`${style._text_style_hover}`}>Timeline</AnchorLink>
              <AnchorLink href="#Intro" className={`${style._text_style_hover}`} >Intro</AnchorLink>
              <AnchorLink href="#Faqs" className={`${style._text_style_hover}`}>FAQs</AnchorLink>
              <Link to="/contact" className={`${style._text_style_hover} ${splitLocation === "/contact" ? `${style._text_style}` : `text-[#fff]`}`}>Contact</Link>
            </div>
                
            <button
              className={`${style._btn_style} font-[Montserrat] rounded-[4px] w-[172px] h-[53px] leading-[19.5px]  text-[#fff] font-[400] text-[16px] my-4 ${style._btn_style_hover}`} onClick={() => navigate("/register")}
            >Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingPageNav;
