import Img1 from "../assets/congratulation.svg";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import Wink from "../assets/1531010992wink-emoji-woman-png 1.svg";


const Modal = () => {
     const navigate = useNavigate();

     return (
          <section className={`fixed top-0 right-0 left-0 bottom-0 bg-[#140d27ed] h-[100vh] flex justify-center items-center overflow-hidden z-[40] $`}>
               <div className={`relative z-[40] border border-[#d434fe] rounded-[4px] p-6 mx-auto w-[80%]`}>
                    <div className={`mb-6`}>
                         <img src={Img1} alt="Congratulations" className={`mx-auto`} />
                    </div>

                    <div className={`mb-6 text-[16px] font-[500] text-[#fff] leading-[24px] text-center max-w-[250px] mx-auto`}>
                         <p>Congratulations you have successfully Registered!</p>
                    </div>

                    <div className={`mb-6 text-[12px] font-[400] text-[#fff] leading-[24px] text-center flex items-end max-w-[250px] mx-auto`}>
                         <p>Yes, it was easy and you did it! check your mail box for next step.</p>
                          <span className={`relative left-[-30px] top-[-5px]`}>
                              <img src={Wink} alt="wink" />
                              </span>
                    </div>
                    <div className={`flex justify-center items-center`}>
                         <button
              className={`${style._btn_style} rounded-[4px] w-[150px] h-[53px]  text-[#fff] font-[400] text-[16px] my-4 ${style._btn_style_hover}`} onClick={() => navigate("/")}
            >Back
            </button>
                    </div>
                    
                    </div>
          </section>
     )
}

export default Modal;