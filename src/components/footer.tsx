
import { Link } from "react-router-dom";
import { Image } from "../assets/index";

const Footer = () => {
  return (
    <>
      <div className="bg-[#fff] lg:px-36 lg:py-36 md:px-24 py-16 px-[20px] py-[20px] w-full">
        <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          <div className="grid gap-8 lg:grid-cols-1 ">
            <Link to="/"> <img src={Image.Logo} width={170} alt="logo" /> </Link>


            <p className="text-[#777777] text-[16px] font-[400px]   lg:w-2/5 leading-[28px]">
              Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
            </p>
            <p className="text-[#777777] text-[16px] font-[400px]  mt-6 lg:w-3/5 leading-[28px]">
              All rights reserved.
            </p>

          </div>
          <div className="grid gap-6 lg:grid-cols-3 ">


            <div className="grid-cols-1">

              <div className="col-span-1 p-2 md: ">
                <h2 className="font-sans font-bold text-[#000] text-[16px] leading-[32px]">
                  Landings
                </h2>

                <div className="mt-6 flex flex-col gap-6 text-[#777777] text-[16px] font-[400px] leading-[28px]">

                  <p className=" ">
                    <Link to="/">Home</Link>
                  </p>

                  <p className="">
                    <Link to="/">Products</Link>
                  </p>


                  <p className="">
                    <a href="/">Services</a>
                  </p>

                </div>
              </div>

            </div>

            <div className="grid-cols-1">
              <div className="col-span-1 p-2 md: ">
                <h2 className="font-sans font-bold text-[#000] text-[16px] leading-[32px]">
                  Company
                </h2>

                <div className="mt-6 flex flex-col gap-6 text-[#777777] text-[16px] font-[400px] leading-[28px]">
                  <p className="">
                    <Link to="/">About</Link>
                  </p>
                  <div className=" leading-5 text-left  flex items-center">
                    <p className="mr-2">
                      <Link to="/">Careers</Link>
                    </p>
                    <button className=" bg-[#65E4A3] font-bold text-nowrap text-primary py-1 px-2 md:px-3 text-[12px] rounded-2xl">
                      Hiring!
                    </button>
                  </div>
                  <p className="">
                    <Link to="/">Products</Link>
                  </p>

                </div>
              </div>
            </div>
            <div className="grid-cols-1">

              <div className="col-span-1 p-2 md: ">
                <h2 className="font-sans font-bold text-[#000] text-[16px] leading-[32px]">
                  Resources
                </h2>

                <div className="mt-6 flex flex-col gap-6 text-[#777777] text-[16px] font-[400px] leading-[28px]">
                  <p className=" ">
                    <Link to="/">Blog</Link>
                  </p>

                  <p className="">
                    <Link to="/">Products</Link>
                  </p>


                  <p className=" ">
                    <a href="/">Services</a>
                  </p>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>







    </>
  );
};

export default Footer;
