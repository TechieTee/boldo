import { Image } from "../assets/index";
import { PrimaryButton, SecondaryButton } from "./button";
import { useNavigate } from "react-router-dom";

const NewView = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-[40px]  lg:px-36 lg:pb-16 md:px-24 md:pb-16 px-[20px] py-[20px]  grid md:items-center md:justify-center bg-[#FFFFFF] w-full lg:text-left md:text-center text-center" >
      <div className=" mx-auto grid xl:grid-cols-2 grid-cols-1 md:gap-16 gap-2" >
        <div className="z-60 col-span-1 flex flex-col lg:items-left items-center justify-center gap-4">

          <h2 className=" text-[#000000] text-lg lg:text-left font-[400px] lg:leading-[82px] md:leading-[52px] sm:leading-[32px]">
          Why You Should Work
          With Us
          </h2>
          <h4 className=" mt-4 mb-8 md:mb-12 leading-loose text-[#777777] text-[22px] font-sans font-[400px] leading-[28px] ">
          Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut
morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac
dictum ut mauris non.
            </h4>
          <div className="lg:flex lg:justify-start md:justify-center  flex-row gap-4 justify-center w-full">
            <div className="mb-2">
              <PrimaryButton label="Learn More" onClick={() => navigate('/')} className="text-black !bg-[#E7C873]"/>
            </div>
          
          </div>

        </div>

        <div className="z-60 col-span-1 flex items-center justify-end w-full lg:pl-24">
          <img src={Image.sun} alt="logo" className='mx-auto w-full ' />

        </div>
      </div>
    </div>
  );
};
export default NewView;
