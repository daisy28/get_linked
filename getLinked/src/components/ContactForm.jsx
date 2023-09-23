import { Link } from "react-router-dom";
import Circle from "../assets/Group 1.svg";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import style from "./style.module.css";
import Instagram from "../assets/mdi_instagram.svg";
import Facebook from "../assets/Vector 6(1).svg";
import Twitter from "../assets/Vector5.svg";
import Linkedin from "../assets/ri_linkedin-fill.svg";
import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Flare from "../assets/Purple-Lens-Flare-PNG (1).svg";
import Flare2 from "../assets/Purple-Lens-Flare-PNG.svg";
import Star from "../assets/star pu.svg";
import Star2 from "../assets/star (1).svg";
import Star3 from "../assets/star.svg";
import { useInView } from "framer-motion";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");
  const [teamName, setTeamName] = useState("");
  const [topic, setTopic] = useState("");
  const error = (message) => toast.error(message);
  const success = (message) => toast.success(message);
  const formRef = useRef(null);
  console.log(teamName, topic);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      error("email is required!");
    } else if (phoneNumber === "") {
      error("Phone number is required!");
    } else if (firstName === "") {
      error("Name is required!");
    } else if (message === "") {
      error("Please enter your message!");
    } else {
      axios
        .post(`https://backend.getlinked.ai/hackathon/contact-form`, {
          email: email,
          phone_number: phoneNumber,
          first_name: firstName,
          message: message,
        })
        .then((res) => {
          console.log(res);
          success("Mesaage sent successfully!");
          formRef.current.value = "";
        })
        .catch((err) => {
          console.log(err);
          error(err.message);
        });
    }
  };

  return (
    <section className={`relative py-[4rem] px-6 bg-[#140D27] lg:p-[6rem] md:flex items-center`}>
      <div className={`absolute top-0 right-0 left-0 bottom-0 bg-[#140D27] h-[100vh] z-[-10]`}></div>
      <div className={`relative md:flex justify-between gap-6 items-start mb-[8rem]`}>
        <img
            src={Star}
            alt="Star"
            className={`absolute left-[140px] top-[-12px] w-[10px] animate-ping delay-300 duration-100 ease-in md:top-[-20px] md:left-[150px]`}
          />
        <img
            src={Star}
            alt="Star"
            className={`absolute left-[10px] bottom-[92px] w-[10px] animate-ping delay-300 duration-100 ease-in md:bottom-[-92px] md:left-[10px]`}
          />
        <img
            src={Star3}
            alt="Star"
            className={`absolute right-[30px] top-[42px] w-[14px] animate-ping delay-300 duration-100 ease-in md:top-[42px] md:right-[30px]`}
          />
        <img
            src={Star2}
            alt="Star"
            className={`absolute right-[-18px] bottom-[202px] w-[14px] animate-ping delay-300 duration-100 ease-in md:bottom-[202px] md:right-[30px]`}
          />
        <img
            src={Flare}
            alt="Star"
            className={`absolute left-[-58px] top-[2px]  md:top-[-200px] md:left-[-390px]`}
          />
        
        <img
            src={Flare}
            alt="Star"
            className={`w-[20%] absolute left-[-18px] top-[2px]  animate-ping delay-300 duration-100 ease-in md:top-[-80px] md:left-[90px]`}
          />
        <div className={`hidden md:block relative mt-[2rem] md:w-[40%]`}
        ref={ref}
      style={{
        transform: inView ? `none` : `translateY(40px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}>
          <div className={`w-[250px] ml-auto relative z-[40]`}>
            <h1
              className={`font-face-cd text-[32px] font-[600] leading-[39.36px] text-[#D434FE] mb-6`}
            >
              Get in touch
            </h1>
            <p
              className={`font-[Montserrat] text-[16px] leading-[19.5px]text-[16px] font-[400] text-[#fff] leading-[19.5px] mb-4`}
            >
              Contact Information
            </p>
            <p
              className={`font-[Montserrat] text-[15px] font-[400] text-[#fff] leading-[19.5px] mb-4`}
            >
              27, Alara Street Yaba 100012 Lagos State
            </p>
            <p
              className={`font-[Montserrat] text-[15px] font-[400] text-[#fff] leading-[19.5px] mb-4`}
            >
              Call Us: 07067981819
            </p>
            <p
              className={`text-[15px] font-[400] text-[#fff] leading-[30px] mb-4`}
            >
              We are open from Monday-Friday 08:00M - 05:00PM
            </p>
            <div className={`mt-6 text-left`}>
              <h1
                className={`font-[Montserrat] text-[16px] text-[#D434FE] font-[400] leading-[19.5px] mb-4`}
              >
                Share on
              </h1>
              <div className={`flex items-center gap-4 justify-start`}>
                <a href="#">
                  <img src={Instagram} alt="Instagram" />
                </a>
                <a href="#">
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a href="#">
                  <img src={Facebook} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={Linkedin} alt="Linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`relative z-[40] md:w-[60%] md:px-[3rem] md:pt-[3rem] rounded-[12px] md:bg-[rgba(255,255,255,0.03)] md:max-w[617px]`}
          ref={ref}
      style={{
        transform: inView ? `none` : `translateY(-40px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}
        >
          <img
            src={Flare2}
            alt="Flare"
            className={`w-[50%] h-[50%] z-[10] absolute hidden md:block md:bottom-[-100px] md:right-[-22px]`}
          />
          <div className={`relative mb-6 md:hidden`}>
            <Link to="/">
              <img src={Circle} alt="" className={`relative `} />
              <MdOutlineKeyboardArrowLeft
                className={`absolute top-[3px] left-[3px] text-[#fff] font-[600]`}
              />
            </Link>
          </div>
          <div className={`relative z-[40]`}>
            <h1
              className={`font-face-cd text-[20px] font-[700] leading-[24.6px] text-[#D434FE] mb-6`}
            >
              Questions or need assistance? Let us Know about it!
            </h1>
            <p
              className={` font-[Montserrat] text-[12px] font-[400] text-[#fff] leading-[14.63px] md:hidden`}
            >
              Email us below to any question related to our event.
            </p>
          </div>
          <div className={`my-8 relative`}>
            
            <form action="" onSubmit={handleSubmit} ref={formRef}>
              <input
                type="text"
                placeholder="First Name"
                className={`border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] font-[Montserrat] font-[400] text-[16px] leading-[19.5px] w-full outline-none mb-6`}
                onChange={(e) => setFirstName(e.target.value)}
                ref={formRef}
              />
              <input
                type="text"
                placeholder="Email"
                className={`border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] font-[Montserrat] font-[400] text-[16px] leading-[19.5px] w-full outline-none mb-6`}
                onChange={(e) => setEmail(e.target.value)}
                ref={formRef}
              />
              <input
                type="text"
                placeholder="Phone number"
                className={`border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] w-full outline-none mb-6`}
                onChange={(e) => setPhoneNumber(e.target.value)}
                ref={formRef}
              />
              <input
                type="text"
                placeholder="Team's Name"
                className={`border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] font-[Montserrat] font-[400] text-[16px] leading-[19.5px] w-full outline-none mb-6`}
                onChange={(e) => setTeamName(e.target.value)}
                ref={formRef}
              />

              <input
                type="text"
                placeholder="Topic"
                className={`border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] font-[Montserrat] font-[400] text-[16px] leading-[19.5px] w-full outline-none mb-6`}
                onChange={(e) => setTopic(e.target.value)}
                ref={formRef}
              />
              <textarea
                name=""
                id=""
                placeholder="Message"
                className={`border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] font-[Montserrat] font-[400] text-[16px] leading-[19.5px] w-full outline-none mb-6 h-[160px]`}
                ref={formRef}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <div className={`flex justify-center items-center`}>
                <button
                  className={`${style._btn_style} ${style._btn_style_hover} w-[172px] h-[53px] rounded-[4px]  text-[#fff]  text-[16px] my-4 mx-auto font-[Montserrat] font-[400] leading-[19.5px]`}
                >
                  Submit
                </button>
              </div>
            </form>

            <div className={`md:hidden mt-6 text-center`}>
              <h1
                className={`text-[12px] text-[#D434FE] font-[400] leading-[14.63px] font-[Montserrat] mb-4`}
              >
                Share on
              </h1>
              <div className={`flex items-center gap-4 justify-center`}>
                <a href="#">
                  <img src={Instagram} alt="Instagram" />
                </a>
                <a href="#">
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a href="#">
                  <img src={Facebook} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={Linkedin} alt="Linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default ContactForm;
