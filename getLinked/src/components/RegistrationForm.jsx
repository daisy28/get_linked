import Illustration from "../assets/3d-graphic-designer-showing-thumbs-up-png 1.svg";
import Boy from "../assets/1f6b6-2640.svg";
import Girl from "../assets/image_processing20200511-10310-13mnlsx.svg";
import style from "./style.module.css";
import { useState, useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Modal from "./Modal";
import Flare from "../assets/Purple-Lens-Flare-PNG (1).svg";
import Star from "../assets/star pu.svg";
import Star2 from "../assets/star (1).svg";
import Star3 from "../assets/star.svg";
import { useInView } from "framer-motion";


const Register = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [teamName, setTeamName] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [projectTopic, setProjectTopic] = useState("");
  const [category, setCategory] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [registered, setRegistered] = useState(false);
  const error = (message) => toast.error(message);
  const success = (message) => toast.success(message);
  const formRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      error("email is required!");
    } else if (phoneNumber === "") {
      error("Phone number is required!");
    } else if (teamName === "") {
      error("Team name is required!");
    } else if (groupSize < 1) {
      error("Select group size");
    } else if (projectTopic === "") {
      error("Enter your project topic");
    } else if (!category) {
      error("Select a category");
    } else if (privacyPolicy === false) {
      error("Accept privacy policy");
    } else {
      axios
        .post(`https://backend.getlinked.ai/hackathon/registration`, {
          email: email,
          phone_number: phoneNumber,
          team_name: teamName,
          group_size: groupSize,
          project_topic: projectTopic,
          category: category,
          privacy_policy_accepted: privacyPolicy,
        })
        .then((res) => {
          console.log(res);
          success("Registration successful");
          setRegistered(true);
          formRef.current.value = "";
        })
        .catch((err) => {
          console.log(err);
          error(err.message);
        });
    }
  };

  useEffect(() => {
    axios
      .get(`https://backend.getlinked.ai/hackathon/categories-list`).then((res) => {
           setCategory(res.data);
      }).catch((err) => {
        console.log(err);
     //    error(err.message);
      });
  }, []);

  return (
    <section className={`relative py-[4rem] px-6 bg-[#140D27] lg:p-[6rem] md:flex items-center`}>
      <div className={`absolute top-0 right-0 left-0 bottom-0 bg-[#140D27] h-[100vh] z-[-10]`}></div>
      {registered ? <Modal /> : null}
      <div className={`relative md:flex justify-between items-start mb-[4rem]`}>
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
        <h1 className={`md:hidden text-[#D434FE] font-[600] text-[18px] mb-4 relative z-[30]`}>
          Register
        </h1>
        <div>
          <img src={Illustration} alt="Illustration" />
        </div>
        <div
          className={`md:px-[2rem] md:pt-[3rem] rounded-[8px] md:bg-[rgba(255,255,255,0.03)] mx-auto`}
          ref={ref}
      style={{
        transform: inView ? `none` : `translatex(40px)`,
        opacity: inView ? 1 : 0,
       transition: `all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 300ms`}}
        >
          <h1
            className={`hidden md:block font-face-cd text-[#D434FE] leading-[39.36px] font-[600] text-[32px] mb-4 relative z-[0]`}
          >
            Register
          </h1>
          <div className={`flex gap-4 items-end mb-4`}>
            <h1 className={`font-[Montserrat] text-[#fff] text-[12px] md:text-[14px] md:leading-[17.07px] leading-[14.63px] font-[400] text-center`}>
              Be part of this movement
            </h1>
            <div
              className={`border-b-2 border-[#D434FE] border-dashed flex justify-center items-center w-[80px]`}
            >
              <img src={Boy} alt="A boy walking" />
              <img src={Girl} alt="A girl walking" />
            </div>
          </div>
          <div>
            <h1 className={`text-[20px] leading-[24.38px] uppercase text-[#fff] font-[400] md:text-[24px] font-[Montserrat] md:leading-[29.26px]`}>
              Create your account
            </h1>

            <form action="" className={`my-6`} onSubmit={handleSubmit}>
              <div className={`md:flex gap-4 items-start`}>
                <div className={`mb-6 md:w-[50%]`}>
                  <label
                    htmlFor="Team Name"
                    className={`mb-4 font-[Montserrat]  text-[13px] md:text-[14px] md:leading-[17.07px] leading-[15.85px] text-[#fff] font-[400]`}
                  >
                    Team&apos;s Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the name of your group"
                    className={`border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] w-full outline-none mt-2`}
                    id="Team Name"
                    onChange={(e) => setTeamName(e.target.value)}
                    ref={formRef}
                  />
                </div>
                <div className={`mb-6 md:w-[50%]`}>
                  <label
                    htmlFor="Phone"
                    className={`mb-4 font-[Montserrat]  text-[13px] md:text-[14px] md:leading-[17.07px] leading-[15.85px] text-[#fff] font-[400]`}
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className={`border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] w-full outline-none mt-2`}
                    id="Phone"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    ref={formRef}
                  />
                </div>
              </div>

              <div className={`md:flex gap-4 items-start`}>
                <div className={`mb-6 md:w-[50%]`}>
                  <label
                    htmlFor="Email"
                    className={`mb-4 font-[Montserrat]  text-[13px] md:text-[14px] md:leading-[17.07px] leading-[15.85px] text-[#fff] font-[400]`}
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className={`border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] w-full outline-none mt-2`}
                    id="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    ref={formRef}
                  />
                </div>
                <div className={`mb-6 md:w-[50%]`}>
                  <label
                    htmlFor="Project projectTopic"
                    className={`mb-4 font-[Montserrat]  text-[13px] md:text-[14px] md:leading-[17.07px] leading-[15.85px] text-[#fff] font-[400]`}
                  >
                    Project Topic
                  </label>
                  <input
                    type="text"
                    placeholder="What is your group project projectTopic"
                    className={`border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] w-full outline-none mt-2`}
                    id="Project projectTopic"
                    onChange={(e) => setProjectTopic(e.target.value)}
                    ref={formRef}
                  />
                </div>
              </div>

              <div className={`flex gap-4 items-start mb-6`}>
                <div className={`md:w-[50%]`}>
                  <label
                    htmlFor="Category"
                    className={`mb-4 font-[Montserrat]  text-[13px] md:text-[14px] md:leading-[17.07px] leading-[15.85px] text-[#fff] font-[400]`}
                  >
                    Category
                  </label>
                  <select
                    name=""
                    id="Category"
                    className={`border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] w-full outline-none mt-2`}
                    required
                    onChange={(e) => setCategory(e.target.value)}
                    ref={formRef}
                  >
                    <option
                      value="category"
                      disabled
                      selected
                      className={`text-[#D434FE] font-[600] text-[16px] `}
                    >
                      Select your category
                    </option>
                    <option
                      id="1"
                      value={1}
                      className={`text-[#D434FE] font-[400] text-[12px]`}
                    >
                      MOBILE
                    </option>
                    <option
                      id="2"
                      value={2}
                      className={`text-[#D434FE] font-[400] text-[12px]`}
                    >
                      WEB
                    </option>
                    <option
                      id="3"
                      value={3}
                      className={`text-[#D434FE] font-[400] text-[12px]`}
                    >
                      UI/UX
                    </option>
                  </select>
                </div>

                <div className={`w-[60%] md:w-[50%]`}>
                  <label
                    htmlFor="Category"
                    className={`text-[14px] text-[#fff] font-[400] block`}
                  >
                    Group Size
                  </label>
                  <select
                    name=""
                    id="Group Size"
                    className={`border border-[#fff] p-4 rounded-[4px] text-[#fff] bg-[rgba(255,255,255,0.03)] w-[100%] outline-none mt-2`}
                    required
                    onChange={(e) => setGroupSize(e.target.value)}
                    ref={formRef}
                  >
                    <option
                      value="Group Size"
                      disabled
                      selected
                      className={`text-[#D434FE] font-[600] text-[16px] `}
                    >
                      Select your Group Size
                    </option>
                    <option
                      value="10"
                      className={`text-[#D434FE] font-[400] text-[12px]`}
                    >
                      10
                    </option>
                    <option
                      value="20"
                      className={`text-[#D434FE] font-[400] text-[12px]`}
                    >
                      20
                    </option>
                    <option
                      value="30"
                      className={`text-[#D434FE] font-[400] text-[12px]`}
                    >
                      30
                    </option>
                    <option
                      value="40"
                      className={`text-[#D434FE] font-[400] text-[12px]`}
                    >
                      40
                    </option>
                    <option
                      value="50"
                      className={`text-[#D534FE] font-[400] text-[12px]`}
                    >
                      50
                    </option>
                  </select>
                </div>
              </div>

              <p
                className={`font-[Montserrat] text-[9px] text-[#FF26B9] text-center italic font-[400] leading-[10.97px] md:text-[12px] md:leading-[14.63px] mb-4 md:text-left`}
              >
                Please review your registration before submitting
              </p>
              <div className={`flex gap-4 items-start`}>
                <input
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  className={`bg-transparent border border-[#fff]`}
                  onChange={(e) => setPrivacyPolicy(e.target.value)}
                  ref={formRef}
                />
                <label
                  htmlFor="agreement"
                  className={`font-[Montserrat] text-[#fff] text-[12px] font-[400] leading-[14.63px]`}
                >
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>
              <div className={`flex justify-center items-center`}>
                <button
                  className={`${style._btn_style} ${style._btn_style_hover} w-[150px] md:w-[100%] h-[53px] rounded-[4px] leading-[19.5px]  text-[#fff] font-[500] text-[16px] font-[Montserrat] my-4 mx-auto`}
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Register;
