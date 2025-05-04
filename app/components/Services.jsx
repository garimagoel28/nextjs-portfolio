import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex flex-col justify-center items-center text-center ">
        <h4 className="text-lg font-Ovo">What i offer</h4>
        <h2 className="text-5xl font-Ovo mt-2 mb-4">My services</h2>
        <p className=" max-w-2xl font-Ovo">
          I am a frontend developer from California, USA with 10 years of
          experience in multiple companies like Microsoft, Tesla and Apple.
        </p>
      </div>
      
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
          {serviceData.map(({ icon, title, description,link }, index) => (
            <li
              className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer flex flex-col items-center text-center hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black justify-between"
              key={index}
            >
              <Image src={icon} alt={title} className="w-10 aspect-square" />
              <h3 className="text-lg my-4 font-semibold text-gray-700">{title}</h3>
              <p className="text-sm text-gray-600 leading-5">{description}</p>
              <a href={link} className="text-sm flex items-center gap-2 mt-5">Read More <Image alt="" src={assets.right_arrow} className="w-4"/> </a>
            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default Services;
