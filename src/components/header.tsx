import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "../assets/index";


const Header = () => {
  const navItems = [
    { name: "Product", link: "/#products" },
    { name: "Services", link: "/#services" },
    { name: "About", link: "/#about" },

  
  ];
  
  const [isOpen, setisOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        selectedIndex !== -1 &&
        dropdownRefs.current[selectedIndex] &&
        !dropdownRefs.current[selectedIndex]?.contains(event.target)
      ) {
        setSelectedIndex(-1);
      }
    };
  
    window.addEventListener("click", handleClickOutside);
  
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [selectedIndex]);
  
  const handleItemClick = (index: number, link: string) => {
    setSelectedIndex(index);
    navigate(link);
     // Scroll to section if the link contains a hash (#)
  if (link.includes("#")) {
    const sectionId = link.split("#")[1];
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }
  };






  const toggleDropdown = () => {
    setisOpen(!isOpen);
  };

  return (
    <nav className="py-[30px] lg:px-[150px] md:px-[80px] px-[30px] flex items-center justify-between bg-[#fff] z-50  w-full">
                 <div className=" w-[750px] h-[700px] absolute top-0 right-0 hidden lg:block"><img src={Image.bgnav} alt="logo"  className='h-full w-full '/> </div> 
                 
         <img src={Image.Logo4}  alt="logo"   className="lg:w-[200px] md:w-[100px] w-[80px] mr-4 cursor-pointer" onClick={() => navigate('/')}/> 
    

      <div className="hidden md:flex items-center gap-[50px]">
        {navItems.map((item, index) => (
          <div
            className="text-primary hover:text-[#000] font-semibold text-[20px] font-sans relative cursor-pointer "
            key={index}
            onClick={() => handleItemClick(index, item.link)}
            id={`navItem-${index}`}
            ref={(ref) => (dropdownRefs.current[index] = ref)}
          >
            <p>{item.name}</p>
          </div>
        ))}
     
                
                <button
   
    
      onClick={() => navigate('/')}
      className={`z-50 px-12 py-3 rounded-full bg-[#fff]  text-primary text-[20px] font-sans font-bold border-[2px] border-primary hover:text-[#fff] hover:bg-primary disabled:opacity-50`}
    >
   Log In
    </button>
      </div>

      <button className="md:hidden" onClick={toggleDropdown}>
        <div className="relative w-5">
          <span
            className={`absolute h-0.5 w-5 bg-black transition-transform ${
              isOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-black transition-all ${
              isOpen ? "w-0" : "w-5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-5 bg-black transition-transform ${
              isOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>

      <div
        className={`absolute w-full top-[-150px] transition-transform px-[8%] py-[20px] z-50 grid !bg-[#fff] ${
          isOpen ? "translate-y-full  " : "translate-y-[-100vh]  "
        }`}
      >
        {navItems.map((item, index) => (
          <div
             className="my-4 text-primary hover:text-[#000] font-semibold text-[14px] font-sans relative cursor-pointer "
          key={index} onClick={() => handleItemClick(index, item.link)}>
            <p>{item.name}</p>
          </div>
        ))}
      
      <button
   
    
   onClick={() => navigate('/')}
   className={`z-50 px-12 py-3 rounded-full w-[50%] bg-[#fff]  text-primary text-[12px] font-sans font-bold border-[2px] border-primary hover:text-[#fff] hover:bg-primary disabled:opacity-50`}
 >
Log In
 </button>
      </div>
    </nav>
  );
};

export default Header;
