import React, { useState } from "react";
import Input from "./input";
import { PrimaryButton } from "./button";
import { useNavigate } from "react-router-dom";

import '../index.css'

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
     <div className=" bg-cover bg-center flex flex-col gap-8 items-center justify-center  lg:grid-cols-1 w-full md:grid-cols-1 sm:grid-cols-1 lg:px-36 md:px-24  py-[20px] block w-full" id="contact">
          <div className="bg-contact bg-primary w-full  lg:py-24  py-16 px-[20px] rounded-[12px]" >
        
      <h4 className="text-white text-center text-[#000000] text-lg font-[400px] lg:leading-[82px] md:leading-[52px] sm:leading-[32px]">
        An enterprise template to ramp <br />up your company website
      </h4>
      <form className="flex gap-6 mt-12 items-center justify-center w-full"
      // onSubmit={handleSubmit(onSubmit)}
 >

<div className="lg:flex lg:justify-center md:justify-center  flex-row gap-4 justify-center w-full">
<div className="mb-2">



<Input
            required
            label=""
            name="Email"
            type="text"
            placeholder="Your Email Address"
     
          />
</div>
<div className="mb-2 flex justify-center">
<PrimaryButton label="Start now" className="!bg-[#65E4A3] !border-[#65E4A3]  hover:!border-[#65E4A3]  !text-[#000]  "  onClick={() => navigate('/')}/>
 
</div>
</div>

         </form>
      </div>


      

    </div>
    
    </>
   
  );
};

export default Contact;