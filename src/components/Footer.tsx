import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black px-20 py-10">
      <div className="flex justify-between items-center">
        <h3 className="text-yellow-200 text-3xl font-extrabold font-mono italic">
          Algo Escrow
        </h3>
        <div className="flex gap-3">
          <FaFacebook color="#FBFFF4" size={24} />
          <FaTwitter color="#FBFFF4" size={24} />
          <FaInstagram color="#FBFFF4" size={24} />
          <FaEnvelope color="#FBFFF4" size={24} />
        </div>
      </div>

      <hr className="bg-red-300 text-red-300 my-8" />

      <div className="flex justify-center ">
        <p className="text-accent">
          &copy; Algo Escrow 2023, All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
