import React from 'react'
import { Image } from "../assets/index";
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from './button';
const Testimonial3 = () => {
    const navigate = useNavigate();
  const imageCards = [
    { id: 1, imageUrl: Image.Ellipse4, name: 'Modern Villa', designation: '8 Properties' },  
      { id: 1, imageUrl: Image.Ellipse4, name: 'Modern Villa', designation: '8 Properties' },
      { id: 1, imageUrl: Image.Ellipse4, name: 'Modern Villa', designation: '8 Properties' },
      { id: 1, imageUrl: Image.Ellipse4, name: 'Modern Villa', designation: '8 Properties' },
      { id: 1, imageUrl: Image.Ellipse4, name: 'Modern Villa', designation: '8 Properties' },

  ];
  return (
    <div className='bg-[#1F4B43] mx-auto lg:px-36 lg:py-16 md:px-24 md:py-16 px-[10px] py-[50px] grid  lg:gap-24 gap-14 ' id="services">
      <div className=" flex lg:flex-row flex-col items-center w-full ">

        <div className=" lg:mt-4 md:mt-4 mt-8 lg:w-[60%] w-full">
          <div className=" inline-block text-[#fff] text-lg lg:text-left text-center font-[400px] lg:leading-[90px] md:leading-[42px] sm:leading-[32px]">
          Become Agent
          </div><br/>
          <div className=" inline-block text-[#fff] text-[16px] lg:text-left text-center font-[400px] lg:leading-[90px] md:leading-[42px] sm:leading-[32px]">
          We only work with the best companiestt around the globe
          </div>
        </div>
        <div className=" lg:mt-4 md:mt-4 mt-8 w-[40%]  ">
        <PrimaryButton label="Sign in or create an account" onClick={() => navigate('/')} className="rounded-[8px] border-none text-black !bg-[#E7C873]"/>
        </div>
      </div>
     

    </div>

  )
}

export default Testimonial3;