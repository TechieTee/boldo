import { Image } from "../assets/index";

const FAQ = () => {
  return (
    <div className="lg:px-36 lg:py-24 mb-14 md:px-24 md:py-16 px-[20px] py-[20px] block bg-[#FFFFFF] w-full lg:text-left  sm:text-center" id="products">
      <div className="grid gap-12">
        <img src={Image.Customers} alt="logo" className="h-full w-full object-cover" />
        <div className=" grid items-center justify-center lg:grid-cols-2 lg:gap-8 md:grid-cols-1 gap-12 sm:grid-cols-1">
        <h2 className="lg:text-left text-center text-[#000000] text-[40px]  font-[400px] leading-[56px] w-full">
            We connect our customers <br />with the best, and help them<br /> keep up-and stay open.
          </h2>
          <div className="text-[#595959] text-[18px] lg:text-[18px] font-normal  mb-2 leading-loose  flex items-center lg:justify-end justify-center gap-x-2">
            <ul className="flex items-center justify-right flex-col gap-6 list-none mt-4  lg:mb-0 md:mb-0 md:mb-8 mb-8 text-[#000000] text-[22px] font-sans font-[400px] leading-[42px]">
              <li className="w-fit border-b-2 pb-4 flex items-center flex items-center justify-between gap-x-16 cursor-pointer "> <span >We connect our customers with the best? </span> <img src={Image.Group2101} alt="logo" className="" /> </li>
              <li className="w-fit border-b-2 pb-4 flex items-center  flex items-center justify-between  gap-x-16 cursor-pointer"> <span >Android research & development rockstar?  </span>  <img src={Image.Group2101} alt="logo" className="" /> </li>

            </ul>

          </div>

        </div>

      </div>
    </div>

  );
};

export default FAQ;
