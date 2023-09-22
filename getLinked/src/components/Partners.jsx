import Liberty1 from "../assets/Liberty company logo white colour.svg";
import Liberty2 from "../assets/Liberty company logo white colour.svg";
import Winwise from "../assets/Winwise logo White colour 1.svg";
import Whisper from "../assets/wisper logo white.svg";
import Paybox from "../assets/Paybox.svg";
import Vizual from "../assets/Vizual Plus.svg";
import Star from "../assets/star pu.svg";
import Star2 from "../assets/star.svg";
import Flare from "../assets/Purple-Lens-Flare-PNG (1).svg";


const Partners = () => {
     return(
          <section
      className={`p-6 py-[4rem] bg-[#140D27] border-b border-[rgba(129,128,128,0.24)] lg:px-[3rem]`}>
               <div>
                    <div
          className={`relative text-center md:text-left md:w-[50%] lg:w-[45%] md:ml-auto mb-8`}
        >
          <h1
            className={`text-[24px] font-[600] leading-[32px] text-[#fff] mb-4`}
          >
            Partners and Sponsors
          </h1>
          <p className={`text-[13px] font-[400] text-[#fff] leading-[30px]`}>
            {" "}
            Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors.
          </p>
                    </div>
                    <div className={`border border-[#D434FE] p-4 py-8 flex justify-center items-center`}>
                         <div className={`grid grid-cols-3 grid-rows-2 gap-4 relative`}>
                              <div className={`border-r-4 border-[#D434FE] p-4 relative`
                              }>
                                   <img src={Liberty1} alt="" />
                                   <div className={`w-[60px] h-[3px] bg-[#D434FE] bottom-[-10px] left-[5px]  absolute`}></div>
                              </div>
                              <div className={`border-r-4 border-[#D434FE] p-4 relative`
                              }>
                                   <img src={Liberty2} alt="" />
                                   <div className={`w-[60px] h-[4px] bg-[#D434FE] bottom-[-10px] left-[5px]  absolute`}></div>
                              </div>
                              <div className={`p-4 relative`
                              }>
                                   <img src={Winwise} alt="" />
                                   <div className={`w-[60px] h-[4px] bg-[#D434FE] bottom-[-10px] left-[5px]  absolute`}></div>
                              </div>
                              <div className={`border-r-4  border-[#D434FE] p-4`
                              }>
                                   <img src={Whisper} alt="" />
                              </div>
                              <div className={`border-r-4  border-[#D434FE] p-4`
                              }>
                                   <img src={Paybox} alt="" />
                              </div>
                              <div className={`p-4`
                              }>
                                   <img src={Vizual} alt="" />
                              </div>

                         </div>

                    </div>
               </div>
          </section>
     )
}

export default Partners;