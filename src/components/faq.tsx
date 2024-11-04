import { useState } from "react";
import { Image } from "../assets/index";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track active FAQ item
  const faqs = [
    {
      title: "We connect our customers with the best?",
      description: `We connect our customers with the best, and help them keep up-and stay open.`,
    },
    {
      title: "Android research & development rockstar?",
      description: `We connect our customers with the best, and help them keep up-and stay open.`,
    },
  ];

  const toggleFaq = (index:any) => {

    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="lg:px-36 lg:py-24 mb-14 md:px-24 md:py-16 px-[20px] py-[20px] block bg-[#FFFFFF] w-full lg:text-left sm:text-center"
      id="products"
    >
      <div className="grid gap-12">
        <img src={Image.Customers} alt="logo" className="h-full w-full object-cover" />
        <div className="grid items-center justify-center lg:grid-cols-2 lg:gap-8 md:grid-cols-1 gap-12 sm:grid-cols-1">
          <h2 className="lg:text-left text-center text-[#000000] text-[36px] font-[400px] leading-[56px] w-full">
            We connect our customers <br />with the best, and help them<br /> keep up-and stay open.
          </h2>
          <div className="text-[#595959] text-[18px] lg:text-[18px] font-normal mb-2 leading-loose flex items-center lg:justify-end justify-center gap-x-2">
            <div className="flex items-center justify-right flex-col gap-6 list-none mt-4 lg:mb-0 md:mb-0 mb-8 text-[#000000] text-[22px] font-sans font-[400px] leading-[42px]">
              {faqs.map((faq, index) => (
                <div key={index} className="w-fit">
                  <p
                    onClick={() => toggleFaq(index)}
                    className="w-fit border-b-2 pb-4 flex items-center justify-between gap-x-16 cursor-pointer"
                  >
                    <span>{faq.title}</span>
                    <img src={Image.Group2101} alt="logo" />
                  </p>
                  {activeIndex === index && (
                    <p className="text-[14px] leading-[25px] w-[70%] text-[#6C7275] mt-3">
                      {faq.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
