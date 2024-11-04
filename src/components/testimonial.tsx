import React from 'react'
import { Image } from "../assets/index";
const Testimonial = () => {
  const imageCards = [
    { id: 1, imageUrl: Image.Ellipse4, text: ' “Buyer buzz partner network disruptive non-disclosure agreement business”', name: 'Albus Dumbledore', designation: 'Manager @ Howarts' },
    { id: 1, imageUrl: Image.Ellipse41, text: '  “Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”', name: 'Severus Snape', designation: 'Manager @ Slytherin' },
    { id: 1, imageUrl: Image.Ellipse42, text: '“Release facebook responsive web design business model canvas seed money monetization.”', name: 'Harry Potter', designation: 'Team Leader @ Gryffindor' },

  ];
  return (
    <div className='bg-[#0A2640] mx-auto lg:px-36 lg:py-16 md:px-24 md:py-16 px-[10px] py-[50px] grid  lg:gap-24 gap-14 ' id="services">
      <div className=" flex lg:flex-row flex-col items-center w-full ">

        <div className=" lg:mt-4 md:mt-4 mt-8 lg:w-[60%] w-full">
          <div className=" inline-block text-[#fff] text-[52px] lg:text-left text-center font-[400px] leading-[92px]">
            An enterprise template to ramp up your company website
          </div>
        </div>
        <div className=" lg:mt-4 md:mt-4 mt-8 w-[40%]  ">
          <div className="text-[#595959] text-[18px] lg:text-[18px] font-normal  mb-2 leading-loose  flex items-center lg:justify-end justify-center gap-x-6 cursor-pointer"> <img src={Image.Group233} alt="logo" className="" /><span > <img src={Image.Group232} alt="logo" className="" /> </span> </div>

        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 items-center justify-between gap-16 mt-10">
        {imageCards.map(card => (
          <div className=" font-sans  text-left  grid gap-12 items-center h-full shadow-sm p-[40px] bg-[#fff] rounded-[12px]">
            <div className="text-[#000] font-[400px] text-[26px] text-left leading-[36px]" >
              {card.text}
            </div>
            <div className='flex gap-3  mb-5 items-start'>
              <img src={card.imageUrl} alt={card.text} />
              <div className='text-primary leading-[32px]'>
                <h3 className=' text-[18px] font-semibold '>{card.name}</h3>
                <p className='font-[400px] text-[16px] '>{card.designation}</p>
              </div>
            </div>
          </div>))}

      </div>

    </div>

  )
}

export default Testimonial;