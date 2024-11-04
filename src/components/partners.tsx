import { Image } from "../assets/index";
const Partners = () => {
  return (
    
    <div className="lg:grid w-full item-center justify-center grid-cols-6 gap-24 px-36 py-24 bg-[#fff]">
           
        <div className="col-span-1 flex item-center justify-center w-full sm:mb-10">
        <img src={Image.Logo2}  alt="logo"  className="lg:w-full w-1/2"/> 
        </div>
        <div className="col-span-1 flex item-center justify-center w-full sm:mb-10">
        <img src={Image.Logo3}  alt="logo"  className="lg:w-full w-1/2"/> 
        </div>
        <div className="col-span-1 flex item-center justify-center w-full sm:mb-10">
        <img src={Image.Logo2}  alt="logo"   className="lg:w-full w-1/2"/> 
        </div>
        <div className="col-span-1 flex item-center justify-center w-full sm:mb-10">
        <img src={Image.Logo3}  alt="logo"  className="lg:w-full w-1/2"/> 
        </div>
        <div className="col-span-1 flex item-center justify-center w-full sm:mb-10">
        <img src={Image.Logo2}  alt="logo"   className="lg:w-full w-1/2"/> 
        </div>
        <div className="col-span-1 flex item-center justify-center w-full sm:mb-10">
        <img src={Image.Logo3}  alt="logo"   className="lg:w-full w-1/2"/> 
        </div>
        </div>

  );
};

export default Partners;
