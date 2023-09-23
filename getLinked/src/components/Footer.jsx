import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Instagram from "../assets/mdi_instagram.svg";
import Facebook from "../assets/Vector 6(1).svg";
import Twitter from "../assets/Vector5.svg";
import Linkedin from "../assets/ri_linkedin-fill.svg";
import Phone from "../assets/Group.svg";
import Location from "../assets/Vector (2).svg";
import Star from "../assets/star pu.svg";
import Star2 from "../assets/star.svg";
import Star3 from "../assets/star (1).svg";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
     const ref = useRef(null);
     const inView = useInView(ref, { once: true });
     
     return (
          <section
               className={`p-8 bg-[#100B20] lg:px-[3rem]`}
          ref={ref}
    style={{
        transform: inView ? `none` : `translateY(40px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}>
               <div className={`md:flex justify-between items-start gap-8 relative`}>
                    <img
            src={Star}
            alt="Stars"
            className={`absolute left-[80px] bottom-[-10px] w-[10px] animate-ping delay-300 duration-100 ease-in md:bottom-[-20px] md:left-[380px]`}
          />
                    <img
            src={Star2}
            alt="Stars"
            className={`absolute left-[-20px] top-[80px] w-[8px] animate-ping delay-300 duration-100 ease-in md:top-[80px] md:left-[-20px]`}
          />
                    <img
            src={Star2}
            alt="Stars"
            className={`absolute right-[60px] bottom-[180px] w-[5px] animate-ping delay-300 duration-100 ease-in md:bottom-[180px] md:right-[60px]`}
          />
                    <img
            src={Star3}
            alt="Stars"
            className={`absolute right-[150px] bottom-[300px] w-[8px] animate-ping delay-300 duration-100 ease-in md:bottom-[150px] md:right-[250px]`}
          />
                    <div className={`mb-[3rem] md:w-[245px] mx-auto md:mb-0`}>
                         <Link
          to="/"
          className={`font-face-cd text-[#fff] font-[700] leading-[24.6px] text-[20px] mb-[3rem] md:text-[30px] md:leading-[36.9px]`}
        >
          get<span className={`text-[#D434FE]`}>linked</span>
                         </Link>
                         <p className={`my-4 font-[Montserrat] text-[12px] font-[400] text-[#fff] leading-[20.69px] mb-4`}>Getlinked Tech Hackathon is a technology innovation program established by a group of organization with the aim of showcasing young and talented individuals in the field of technology.</p>
                         <div className={`font-[Montserrat] text-[12px] font-[400] text-[#fff] leading-[20.96px] flex gap-2 my-6`}>
                              <AnchorLink href="#Privacy">Terms of Use</AnchorLink>
                              <a href="#" className={`text-[#D434FE] font-[600]`}>|</a>
                              <AnchorLink href="#Privacy">Privacy Policy</AnchorLink>
                         </div>
                    </div>
                    <div className={`mb-[3rem] md:w-[280px] mx-auto md:mb-0`}>
                         <h1 className={`font-[Montserrat] text-[#D434FE] font-[600] text-[14px] leading-[24.14px] mb-2`}>Useful Links</h1>
                         <div className={`flex flex-col gap-4 text-[12px] font-[Montserrat] font-[400] text-[#fff] leading-[20.69px] mb-4`}>
                              <AnchorLink href="#Hero">Overview</AnchorLink>
                <AnchorLink href="#Timeline">Timeline</AnchorLink>
                <AnchorLink href="#Faqs">FAQs</AnchorLink>
                              <Link to="/register">Register</Link>
                              <div className={`flex items-center gap-4`}>
                                   <p className={`text-[#D434FE] font-[500] text-[12px] leading-[14.63px] font-[Montserrat]`}>Follow us</p>
                                   <a href="#"><img src={Instagram} alt="Instagram" /></a>
                                   <a href="#"><img src={Twitter} alt="Twitter" /></a>
                                   <a href="#"><img src={Facebook} alt="Facebook" /></a>
                                   <a href="#"><img src={Linkedin} alt="Linkedin" /></a>
                              </div>
                         </div>
                    </div>

                    <div className={`flex flex-col gap-4  md:w-[150px]`}>
                         <h1 className={`text-[#D434FE] font-[600] text-[14px] leading-[24.14px] font-[Montserrat]`}>Contact Us</h1>
                         <div className={`flex flex-col gap-4 text-[12px] font-[400] text-[#fff] leading-[14.63px] mb-2 font-[Montserrat]`}>
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
                    <p className={`text-center text-[12px] font-[400] text-[#fff] leading-[14.63px] font-[Montserrat] mb-2`}>All rights reserved. &copy; getlinked Ltd.</p>
               </div>
               
          </section>
     )
}

export default Footer;