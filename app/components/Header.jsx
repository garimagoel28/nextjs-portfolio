import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-3xl w-11/12 gap-4 mx-auto h-screen">
      {/* <div> */}
        <Image
          src={assets.profile_img}
          alt="profile_img"
          className="rounded-full w-32"
        />
      {/* </div> */}
      <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm William Mark{" "}
        <Image src={assets.hand_icon} alt="profile_img" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        frontend web developer based in London.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact" className="flex items-center gap-2 px-10 py-3 border border-white bg-black rounded-full text-white">
          Contact Me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="flex items-center gap-2 px-10 py-3 border rounded-full border-gray-500"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
