import {
  AiFillInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

const FooterDiv = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-start justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-black pb-[1.5rem]">
            <strong className="text-blue-600">Job</strong>Portal
          </h1>
        </div>
        <p className="text-black pb-[13px] opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>

      <div className="grid ">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-black">
          Resources
        </span>
        <div className="grid gap-3">
          <li className="text-black opacity-[.7] hover:opacity-[1]">Account</li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">Support</li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">
            Feedback
          </li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">
            Contact Us
          </li>
        </div>
      </div>

      <div className="grid ">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-black">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-black opacity-[.7] hover:opacity-[1]">Events</li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">Promo</li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">
            Req Demo
          </li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">Careers</li>
        </div>
      </div>

      <div className="grid ">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-black">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-black opacity-[.7] hover:opacity-[1]">
            About Us
          </li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">
            Features
          </li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">News</li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">FAQ</li>
        </div>
      </div>

      <div className="grid ">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-black">
          Contact Info
        </span>
        <div>
          <small className="text-[14px] text-black mb-2">
            exapmles@hotmail.com
          </small>
          <small className="text-[14px] text-black"> +971 9800000125</small>
          <div className="icons flex gap-4 py-[1rem]">
            <AiFillInstagram
              className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blue-600"
              href="instagram.com/SunnyLeone"
              target="_black"
            />
            <AiOutlineGithub
              className=" bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blue-600"
              href="github.com/Ramos"
              target="_black"
            />
            <AiOutlineTwitter
              className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blue-600"
              href="twitter.com/JohnDoe"
              target="_black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDiv;
