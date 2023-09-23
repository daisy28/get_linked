import PartnersImg from "../assets/Partner and sponsors section.svg";
import Star from "../assets/star pu.svg";
import Star2 from "../assets/star.svg";
import Flare from "../assets/Purple-Lens-Flare-PNG (1).svg";
import Flare2 from "../assets/Purple-Lens-Flare-PNG.svg";
import { useInView } from "framer-motion";
import { useRef } from "react";



const Partners = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

     return(
          <section
      className={`p-6 py-[4rem] bg-[#140D27] border-b border-[rgba(129,128,128,0.24)] lg:px-[3rem]`}
      >
               <div className={`relative`}>
                    <img
            src={Flare}
            alt="Flare"
            className={`absolute left-[-100px] top-[-150px] md:top-[-290px] md:left-[-280px]`}
          />
          <img
            src={Flare2}
            alt="flare"
            className={`absolute right-[-23px] bottom-[-230px] z-[20] w-[50%] md:bottom-[-380px] md:right-[-22px] lg:right-[-47px] lg:bottom-[-510px] xl:bottom-[-810px]`}
          />
          <img
            src={Star}
            alt="Star"
            className={`absolute left-[20px] top-[180px] w-[10px] animate-ping delay-300 duration-100 ease-in md:top-[-40px] md:left-[90px]`}
          />
          <img
            src={Star}
            alt="Star"
            className={`absolute right-[50px] bottom-[10px] w-[10px] animate-ping delay-300 duration-100 ease-in md:top-[-80px] md:right-[90px]`}
          />
          <img
            src={Star2}
            alt="Star"
            className={`absolute left-[190px] bottom-[-40px] w-[10px] animate-ping delay-300 duration-100 ease-in md:bottom-[-35px] md:left-[200px] lg:bottom-[180px] lg:left-[250px] xl:bottom-[250px] xl:left-[350px]`}
          />
                    <div
             className={`relative z-[40] text-center md:w-[50%] mx-auto mb-8`}
             ref={ref}
      style={{
        transform: inView ? `none` : `translateX(40px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}
        >
          <h1
            className={`font-face-cd text-[20px] font-[700] leading-[27.5px] text-[#fff] mb-4 md:text-[32px] md:leading-[27.5px]`}
          >
            Partners and Sponsors
          </h1>
          <p className={`font-[Montserrat] text-[12px] font-[400] text-[#fff] leading-[20.5px] md:text-[14px] md:leading-[27.5px]`}>
            {" "}
            Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors.
          </p>
          </div>
          
           <div className={`border border-[#D434FE] relative z-[40]`}
           ref={ref}
      style={{
        transform: inView ? `none` : `translateX(-40px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}>
               <img src={PartnersImg} alt="Partners and sponsors" />
          </div>
               </div>
          </section>
     )
}

export default Partners;