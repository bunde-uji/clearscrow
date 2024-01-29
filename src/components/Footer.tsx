import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="bg-black px-5 sm:px-10 md:px-14 lg:px-20 py-5 md:py-7 lg:py-10">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="flex gap-3">
          <FaFacebook color="#FBFFF4" size={24} />
          <FaTwitter color="#FBFFF4" size={24} />
          <FaInstagram color="#FBFFF4" size={24} />
          <FaEnvelope color="#FBFFF4" size={24} />
        </div>
      </div>

      <hr className="bg-red-300 text-red-300 my-4 md:my-6 lg:my-8" />

      <div className="flex justify-center">
        <p className="text-sm md:text-base text-accent">
          &copy; Clearscrow 2024, All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
