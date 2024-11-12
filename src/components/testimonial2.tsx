import React from 'react'
import { Image } from "../assets/index";
const Testimonial2 = () => {
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
          Featured Categories
          </div><br/>
          <div className=" inline-block text-[#fff] text-[16px] lg:text-left text-center font-[400px] lg:leading-[90px] md:leading-[42px] sm:leading-[32px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className=" lg:mt-4 md:mt-4 mt-8 w-[40%]  ">
          <div className="text-[#fff] text-[18px] lg:text-[18px] font-normal  mb-2 leading-loose  flex !items-center lg:justify-end justify-center gap-x-6 cursor-pointer"><span>View All Categories</span><span > <img src={Image.Group232} alt="logo" className="" /> </span> </div>

        </div>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 items-center justify-between gap-8">
        {imageCards.map(card => (
          <div className=" font-sans  text-left  grid gap-6 items-center h-full shadow-sm p-[15px] border bg-[#fff] rounded-[12px]">
           
            <div className='flex gap-6 flex-col justify-center  items-center'>
           <div className=' rounded-[12px]'> 
             <img src={card.imageUrl} alt={card.name} className='rounded-[12px] ' /></div> 
              <div className='text-primary '>
                <h3 className=' text-[16px] font-semibold '>{card.name}</h3>
                <p className='font-[400px] text-[14px] text-center'>{card.designation}</p>
              </div>
            </div>
          </div>))}

      </div>

    </div>

  )
}

export default Testimonial2;