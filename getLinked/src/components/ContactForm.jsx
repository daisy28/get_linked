import { Link } from "react-router-dom";
import Circle from "../assets/Group 1.svg";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import style from "./style.module.css";
import Instagram from "../assets/mdi_instagram.svg";
import Facebook from "../assets/Vector 6(1).svg";
import Twitter from "../assets/Vector5.svg";
import Linkedin from "../assets/ri_linkedin-fill.svg";

const ContactForm = () => {
     return (
          <section className={`py-[4rem] px-6 bg-[#140D27] lg:p-[6rem]`}>
               <div className={`md:flex justify-between items-start mb-[4rem]`}>
                    <div className={`hidden md:block relative mt-[2rem]`}>
                         <h1 className={`text-[24px] font-[700] leading-[36px] text-[#D434FE] mb-6`}>Get in touch</h1>
                         <div className={`w-[200px]`}>
                              <p className={`text-[15px] font-[400] text-[#fff] leading-[30px] mb-4`}>Contact Information</p>
                              <p className={`text-[15px] font-[400] text-[#fff] leading-[30px] mb-4`}>27, Alara Street Yaba 100012 Lagos State</p>
                              <p className={`text-[15px] font-[400] text-[#fff] leading-[30px] mb-4`}>Call Us: 07067981819</p>
                              <p className={`text-[15px] font-[400] text-[#fff] leading-[30px] mb-4`}>We are open from Monday-Friday 08:00M - 05:00PM</p>
                              <div className={`mt-6 text-left`}>
                                   <h1 className={`text-[18px] text-[#D434FE] font-[500] leading-[32px] mb-4`}>Share on</h1>
                                   <div className={`flex items-center gap-4 justify-start`}>
                                   <a href="#"><img src={Instagram} alt="Instagram" /></a>
                                   <a href="#"><img src={Twitter} alt="Twitter" /></a>
                                   <a href="#"><img src={Facebook} alt="Facebook" /></a>
                                   <a href="#"><img src={Linkedin} alt="Linkedin" /></a>
                              </div>
                              </div>
                              </div>
                    </div>

                    <div className={`md:w-[50%] md:px-[3rem] md:pt-[3rem] rounded-[12px] md:bg-[rgba(255,255,255,0.03)]`}>
                         <div className={`relative mb-6 md:hidden`}>
                              <Link to="/">
                                   <img src={Circle} alt="" className={`relative `} />
                              <MdOutlineKeyboardArrowLeft className={`absolute top-[3px] left-[3px] text-[#fff] font-[600]`} />
                              </Link>
                         </div>
                         <div>
                              <h1 className={`text-[24px] font-[700] leading-[36px] text-[#D434FE] mb-6`}>Questions or need assistance? Let us Know about it!</h1>
                              <p className={`text-[15px] font-[400] text-[#fff] leading-[30px] md:hidden`}>Email us below to any question related to our event.</p>
                         </div>
                         <div className={`my-8`}>
                              <form action="">
                                   <input type="text" placeholder="First Name" className={`hidden md:block border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] w-full outline-none mb-6`} />
                                   <input type="text" placeholder="Mail" className={`hidden md:block border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] w-full outline-none mb-6`} />

                                   <input type="text" placeholder="Team's Name" className={`md:hidden border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] w-full outline-none mb-6`} />

                                   <input type="text" placeholder="Topic" className={`md:hidden border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] w-full outline-none mb-6`} />

                                   <input type="text" placeholder="Email" className={`md:hidden border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] w-full outline-none mb-6`} />

                                   <textarea name="" id="" cols="30" rows="10" placeholder="Message" className={`border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] w-full outline-none mb-6`}></textarea>

                                   <div className={`flex justify-center items-center`}>
                                        <button className={`${style._btn_style} w-[150px] h-[53px] rounded-[4px]  text-[#fff] font-[500] text-[16px] my-4 mx-auto`}>Submit</button>
                                   </div>
                              </form>

                              <div className={`md:hidden mt-6 text-center`}>
                                   <h1 className={`text-[18px] text-[#D434FE] font-[500] leading-[32px] mb-4`}>Share on</h1>
                                   <div className={`flex items-center gap-4 justify-center`}>
                                   <a href="#"><img src={Instagram} alt="Instagram" /></a>
                                   <a href="#"><img src={Twitter} alt="Twitter" /></a>
                                   <a href="#"><img src={Facebook} alt="Facebook" /></a>
                                   <a href="#"><img src={Linkedin} alt="Linkedin" /></a>
                              </div>
                              </div>
                         </div>
                    </div>
                    
               </div>
          </section>
     )
}

export default ContactForm;