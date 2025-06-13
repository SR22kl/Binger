import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from "@/components/ContentWrapper";

const Footer = () => {
  return (
    <footer className="bg-[#131d48] py-[50px] border-t-[1px] border-t-gray-900 mt-[40px] text-white relative">
      <ContentWrapper className="flex flex-col items-center">
        <ul className="flex list-none items-center justify-center gap-[15px] mb-[20px] md:mb-[30px] md:gap-[30px]">
          <li className="transition duration-300 ease-in-out cursor-pointer text-[12px] md:text-[16px] hover:text-red-400">
            Terms Of Use
          </li>
          <li className="transition duration-300 ease-in-out cursor-pointer text-[12px] md:text-[16px] hover:text-red-400">
            Privacy-Policy
          </li>
          <li className="transition duration-300 ease-in-out cursor-pointer text-[12px] md:text-[16px] hover:text-red-400">
            About
          </li>
          <li className="transition duration-300 ease-in-out cursor-pointer text-[12px] md:text-[16px] hover:text-red-400">
            Blog
          </li>
          <li className="transition duration-300 ease-in-out cursor-pointer text-[12px] md:text-[16px] hover:text-red-400">
            FAQ
          </li>
        </ul>
        <div className="flex md:ml-[150px] text-sm text-center justify-center items-center max-w-[800px] mb-[20px] md:text-[16px] md:mb-[30px] opacity-50">
          Your favorite Movies and TV-Shows all in one place With Nerdflix,Early
          Access to new movies, before digital subscription, find shows and
          movies all in one place. Join Nerdflix to watch the latest movies, TV
          shows and award-winning content so start your free trial today.
        </div>
        <div className="flex items-center justify-center gap-[15px]">
          <span className="flex items-center justify-center cursor-pointer transition duration-300 ease-in-out w-[50px] h-[50px] rounded-[50%] bg-blue-900 hover:shadow-[0_0_0.625em_red-500] hover:scale-150 hover:text-red-500 hover:shadow-violet-500/50">
            <FaFacebookF />
          </span>
          <span className="flex items-center justify-center cursor-pointer transition duration-300 ease-in-out w-[50px] h-[50px] rounded-[50%] bg-blue-900 hover:shadow-[0_0_0.625em_red-500] hover:scale-150 hover:text-red-500 hover:shadow-violet-500/50">
            <FaInstagram />
          </span>
          <span className="flex items-center justify-center cursor-pointer transition duration-300 ease-in-out w-[50px] h-[50px] rounded-[50%] bg-blue-900 hover:shadow-[0_0_0.625em_red-500] hover:scale-150 hover:text-red-500 hover:shadow-violet-500/50">
            <FaTwitter />
          </span>
          <span className="flex items-center justify-center cursor-pointer transition duration-300 ease-in-out w-[50px] h-[50px] rounded-[50%] bg-blue-900 hover:shadow-[0_0_0.625em_red-500] hover:scale-150 hover:text-red-500 hover:shadow-violet-500/50">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
