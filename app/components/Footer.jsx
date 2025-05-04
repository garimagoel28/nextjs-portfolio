import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="mail" className="w-6" />
          <p>garima.kkr1@gmail.com</p>
        </div>
      </div>

      <div className="sm:flex items-center justify-between border-t-2 border-gray-400 mx-[10%] mt-12 py-6 text-center">
        <p>© 2025 Garima Goel. All rights reserved.</p>
        <ul className="flex gap-10 items-center justify-center mt-4 sm:mt-0">
            <li className="cursor-pointer"><a target="_blank" href="">Github</a></li>
            <li className="cursor-pointer"><a target="_blank" href=""></a>LinkedIn</li>
            <li className="cursor-pointer"><a target="_blank" href="">Leetcode</a></li>
            
        </ul>
      </div>
    </div>
  );
};

export default Footer;
