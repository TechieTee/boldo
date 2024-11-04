import { useNavigate } from "react-router-dom";
import { Image } from "../assets/index";
import { PrimaryButton } from "./button";
const ImageCard = () => {
  const navigate = useNavigate();
  return (

    <div className="lg:px-36 flex flex-col gap-36 lg:py-16 md:px-24 md:py-16 px-[20px] py-[20px] bg-[#F5F8FF] w-full" id="about">
      <div className="flex  flex-col items-center  justify-between md:justify-center  sm:justify-center lg:grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full">
        <div className="flex justify-start sm:px-[20px] w-full">
          <img src={Image.Group216} alt="logo" className="lg:w-[80%] w-full" />

        </div>
        <div className="flex  items-center lg:justify-end justify-center w-full">
          <div className="flex flex-col gap-8">
            <h2 className="lg:text-left text-center text-[#000000] text-lg  font-[400px] leading-[56px]">
              We connect our customers <br />with the best, and help them <br />keep up-and stay open.
            </h2>

            <ul className=" flex flex-col gap-4 list-none mt-4  lg:mb-0 md:mb-0 md:mb-8 mb-8 text-[#000000] text-[22px] font-sans font-[400px] leading-[42px]">
              <li className=" flex items-center lg:justify-start justify-center  gap-x-4 cursor-pointer"> <img src={Image.Good} alt="logo" className="" /><span >We connect our customers with the best. </span> </li>
              <li className=" flex items-center gap-x-4  lg:justify-start md:justify-center  sm:justify-center cursor-pointer"> <img src={Image.Good} alt="logo" className="" /><span >Advisor success customer launch party. </span> </li>
              <li className="flex items-center gap-x-4 lg:justify-start md:justify-center  sm:justify-center   cursor-pointer"> <img src={Image.Good} alt="logo" className="" /><span >Business-to-consumer long tail. </span> </li>
            </ul>
            <div className=" flex items-center lg:justify-start md:justify-center  sm:justify-center ">
              <PrimaryButton label="Start Now" onClick={() => navigate('/')} />
            </div>
          </div>
        </div>

      </div>

      <div className="flex gap-24 flex-col items-center  justify-between lg:grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full">

        <div className="w-fit flex gap-6 flex-col items-left justify-between">
          <h2 className="lg:text-left text-center text-[#000000] text-lg  font-[400px] leading-[56px]">
            We connect our customers <br />with the best, and help them<br /> keep up-and stay open.
          </h2>

          <ul className="flex flex-col gap-4 list-none mt-4  lg:mb-0 md:mb-0 md:mb-8 mb-8 text-[#000000] text-[22px] font-sans font-[400px] leading-[42px]">
            <li className=" flex items-center gap-x-4 p-3 lg:justify-start md:justify-center  sm:justify-center   hover:bg-[#0A2640] hover:text-[#fff] text-[#000] cursor-pointer group"> <img src={Image.star2} alt="logo" className="group-hover:filter group-hover:invert" /><span >We connect our customers with the best. </span> </li>
            <li className=" flex items-center gap-x-4 p-3 lg:justify-start md:justify-center  sm:justify-center  hover:bg-[#0A2640] hover:text-[#fff] text-[#000] cursor-pointer group"> <img src={Image.star1} alt="logo" className="group-hover:filter group-hover:invert" /><span >Advisor success customer launch party. </span> </li>
            <li className=" flex items-center gap-x-4 p-3 lg:justify-start md:justify-center  sm:justify-center  hover:bg-[#0A2640] hover:text-[#fff] text-[#000] cursor-pointer group"> <img src={Image.sun} alt="logo" className="group-hover:filter group-hover:invert" /><span >Business-to-consumer long tail. </span> </li>
          </ul>
        </div>
        <div className="flex justify-end sm:px-[20px] w-full">
          <img src={Image.Group210} alt="logo" className="lg:w-[80%] w-full" />

        </div>

      </div>



    </div>
  );
};

export default ImageCard;
