import { assets, serviceData, workData } from "@/assets/assets";
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex flex-col justify-center items-center text-center ">
        <h4 className="text-lg font-Ovo">My portfolio</h4>
        <h2 className="text-5xl font-Ovo mt-2 mb-4">My latest work</h2>
        <p className="mx-auto mt-5 mb-12 max-w-2xl font-Ovo">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </p>
      </div>

      <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 my-10">
        {workData.map(({ title, description, bgImage }, index) => (
          <li
            key={index}
            style={{ backgroundImage: `url(${bgImage})` }}
            className="bg-cover p-10 rounded-lg text-white aspect-square relative cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-between px-5 py-3 duration-500 group-hover:bottom-7">
              <div>
                <h3 className="text-lg my-4 font-semibold text-gray-700">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-5">{description}</p>
              </div>
              <div className="border rounded-full border-black w-10 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} className="w-5" alt="send_icon" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
      >
        Show More
        <Image
          src={assets.right_arrow_bold}
          alt="right arrow"
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Work;
