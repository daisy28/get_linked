import Illustration from "../assets/08 1.svg";
import Shield from "../assets/Vector.svg";
import Checker from "../assets/list terms.svg";
import style from "./style.module.css";

const PrivacyPolicy = () => {
     return (
          <section
      className={`p-6 py-[4rem] bg-[#140D27] lg:px-[3rem]`} id="Privacy">
               <div className={`md:flex justify-center gap-6 items-start xl:gap-4`}>
                    <div className={`md:w-[50%] relative z-[40]`}>
                         <h1
            className={`text-[24px] font-[600] lading-[32px] text-[#fff] mb-4 text-center md:text-left`}
          >
            Privacy Policy and{" "}
            <span className={`text-[#D434FE]`}>Terms</span>
          </h1>
          <p className={`text-[13px] font-[400] text-[#fff] leading-[30px] mb-4  text-center md:text-left`}>
            Last updated on September 12, 2023
          </p>
          <p className={`text-[13px] font-[400] text-[#fff] leading-[30px] mb-8  text-center md:text-left`}>
            Below are our privacy & policy, which outline a lot of goodies. It&apos;s our aim to always take of our particpant.
                         </p>
                         <div className={`border border-[#D434FE] rounded-[6px] p-4 mb-[3rem] md:mb-0 md:p-6 md:py-8`}>
                              <p className={`text-[13px] font-[400] text-[#fff] leading-[30px] mb-8 text-center md:text-left`}>At getlinked tech hackathon 1.0, we value your privacy policy and are committed to to protecting your personal information. This privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event, you consent to the practices dscribed in this policy.</p>
                              <div className={`pt-6`}>
                                   <h1 className={`text-[16px] font-[600] leading-[32px] text-[#D434FE]`}>Licensing Policy</h1>
                                   <p className={`text-[13px] font-[500] text-[#fff] leading-[30px] mb-6`}>Here are terms of our Standard License:</p>
                                   <div>
                                        <div className={`flex items-start gap-4 mb-8`}>
                                             <img src={Checker} alt="Checker" className={`mt-2`} />
                                             <p className={`text-[13px] font-[400] text-[#fff] leading-[30px] mb-6`}>The standard License grants you a non-exclusive right to navigate and register for our event</p>
                                        </div>
                                        <div className={`flex items-start gap-4 `}>
                                             <img src={Checker} alt="Checker" className={`mt-2`} />
                                             <p className={`text-[13px] font-[400] text-[#fff] leading-[30px] mb-6`}>You are licensed to use the item available at any free source sites, for your project development</p>
                                        </div>
                                        <div className={`flex justify-center items-center`}>
                                             <button className={`${style._btn_style} w-[150px] h-[53px] rounded-[4px]  text-[#fff] font-[400] text-[16px] my-4 mx-auto`}>Read More</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className={`relative md:w-[50%]  z-[40]`}>
                         <img src={Illustration} alt="Illustration" className={`relative z-[40]`} />
                         <img src={Shield} alt="Shield" className={`absolute top-0 z-[30]`} />
                    </div>
               </div>
          </section>
     )
}

export default PrivacyPolicy;