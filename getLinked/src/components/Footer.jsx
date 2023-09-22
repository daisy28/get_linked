import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Instagram from "../assets/mdi_instagram.svg";
import Facebook from "../assets/Vector 6(1).svg";
import Twitter from "../assets/Vector5.svg";
import Linkedin from "../assets/ri_linkedin-fill.svg";
import Phone from "../assets/Group.svg";
import Location from "../assets/Vector (2).svg";

const Footer = () => {
     return (
          <section
      className={`p-8 bg-[#100B20] lg:px-[3rem]`}>
               <div className={`md:flex justify-between items-start gap-8`}>
                    <div className={`mb-[3rem] md:w-[300px] md:mb-0`}>
                         <Link
          to="/"
          className={`font-face-cd text-[#fff] font-[600] leading-[42px] text-[1.2rem] mb-8`}
        >
          get<span className={`text-[#D434FE]`}>linked</span>
                         </Link>
                         <p className={`text-[13px] font-[400] text-[#fff] leading-[24px] mb-4`}>Getlinked Tech Hackathon is a technology innovation program established by a group of organization with the aim of showcasing young and talented individuals in the field of technology.</p>
                         <div className={`text-[13px] font-[400] text-[#fff] leading-[30px] flex gap-2 my-6`}>
                              <AnchorLink href="#Privacy">Terms of Use</AnchorLink>
                              <a href="#" className={`text-[#D434FE] font-[600]`}>|</a>
                              <AnchorLink href="#Privacy">Privacy Policy</AnchorLink>
                         </div>
                    </div>
                    <div className={`mb-[3rem] md:w-[35%] md:mb-0`}>
                         <h1 className={`text-[#D434FE] font-[600] text-[16px] leading-[36px] mb-2`}>Useful Links</h1>
                         <div className={`flex flex-col gap-4 text-[13px] font-[400] text-[#fff] leading-[24px] mb-4`}>
                              <AnchorLink href="#Hero">Overview</AnchorLink>
                <AnchorLink href="#Timeline">Timeline</AnchorLink>
                <AnchorLink href="#Faqs">FAQs</AnchorLink>
                              <Link to="/contact">Register</Link>
                              <div className={`flex items-center gap-4`}>
                                   <p className={`text-[#D434FE] font-[500] text-[16px] leading-[36px]`}>Follow us</p>
                                   <a href="#"><img src={Instagram} alt="Instagram" /></a>
                                   <a href="#"><img src={Twitter} alt="Twitter" /></a>
                                   <a href="#"><img src={Facebook} alt="Facebook" /></a>
                                   <a href="#"><img src={Linkedin} alt="Linkedin" /></a>
                              </div>
                         </div>
                    </div>

                    <div className={`flex flex-col gap-4  md:w-[20%]`}>
                         <h1 className={`text-[#D434FE] font-[600] text-[16px] leading-[36px]`}>Contact Us</h1>
                         <div className={`flex flex-col gap-4 text-[13px] font-[400] text-[#fff] leading-[24px] mb-2`}>
                              <div className={`flex items-center gap-4`}>
                                   <img src={Phone} alt="Phone" />
                                   <p>+234 6707653444</p>
                              </div>

                              <div className={`flex items-center gap-4`}>
                                   <img src={Location} alt="Location" />
                                   <p>27, Alara Street Yaba 100012 Lagos State</p>
                              </div>
                         </div>
                    </div>
               </div>

               <div className={`mt-8`}>
                    <p className={`text-center text-[13px] font-[400] text-[#fff] leading-[24px] mb-2`}>All rights reserved. &copy; getlinked Ltd.</p>
               </div>
               
          </section>
     )
}

export default Footer;