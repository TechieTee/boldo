import { useNavigate } from "react-router-dom";
import { Image } from "../assets/index";
import { SecondaryButton } from "./button";

type CardProps = {
  title?: string;
  description?: string;
  services?: boolean;
  blogs?: boolean;
  className?: string;

};
const Card: React.FC<CardProps> = ({ className, services, blogs, title, description }) => {
  const navigate = useNavigate();
  const imageCards = [
    { id: 1, imageUrl: Image.Rectangle1270, text: 'Cool feature title', link: '#' },
    { id: 2, imageUrl: Image.Rectangle12701, text: 'Even cooler feature', link: '#' },
    { id: 3, imageUrl: Image.Rectangle12702, text: 'Cool feature title', link: '#' },

  ];

  const imageCards2 = [
    { id: 1, imageUrl: Image.Rectangle12704, icon: Image.Ellipse10, text: 'Pitch termsheet backing validation focus release.', name: 'Chandler Bing', category: 'Category', date: 'November 22, 2021' },
    { id: 2, imageUrl: Image.Rectangle12705, icon: Image.Ellipse101, text: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.', name: 'Rachel Green', category: 'Category', date: 'November 22, 2021' },
    { id: 3, imageUrl: Image.Rectangle12708, icon: Image.Ellipse102, text: 'Beta prototype sales iPad gen-z marketing network effects value proposition', name: 'Monica Geller', category: 'Category', date: 'November 22, 2021' },

  ];
  return (

    <div className={`lg:px-36 lg:py-16 md:px-8 md:py-16 px-[20px] py-[20px] bg-primary grid gap-8 w-full ${className}`} >
      <h2 className="text-center text-[#777777] text-[24px] font-sans font-[400px] leading-[10px]">
        {title}
      </h2>
      <h4 className={`text-white text-center text-[#000000] text-[65px] md:text-[45px] sm:text-[32px]  px-6 font-[400px] leading-[84px] ${className}`}>
        {description}
      </h4>
      {
        services &&
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 items-center lg:justify-between justify-center gap-4 mt-10">
          {imageCards.map(card => (
            <div className="grid items-center  h-full w-full shadow-sm p-12 text-[#fff]">
              <div key={card.id} className="">
                <div className="h-full w-full">
                  <img src={card.imageUrl} alt={card.text} className="h-full w-full" />
                </div>

                <p className="px-4 py-10 text-[24px]   font-sans font-[400px] leading-[28px]">{card.text}</p>
                <a href={card.link} rel="noopener noreferrer" className="w-fit border-b-2 pb-2 flex items-center gap-x-2 mx-4 text-[20px] font-sans font-[700px] leading-[28px]" >Explore Page <img src={Image.ArrowRight} alt={card.text} />

                </a>
              </div> </div>
          ))}



        </div>
      }


      {blogs &&
        <>
          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 items-center lg:justify-between justify-center gap-4 mt-10">

            {imageCards2.map(card => (

              <div key={card.id} className="w-full flex flex-col gap-6 p-6 image-card w-[400px]">

                <div className="h-full w-full">
                  <img src={card.imageUrl} alt={card.text} className="h-full w-full" />
                </div>
                <div className='flex gap-3 px-4  items-start'>
                  <div className=" font-sans font-bold leading-[28px] text-[18px] text-primary ">{card.category}</div>
                  <p className=' font-sans font-[400px] leading-[28px] text-[18px] text-[#777777] '>{card.date}</p>


                </div>
                <p className="px-4  text-[22px] text-[#000] font-sans font-[400px] leading-[28px]">{card.text}</p>


                <div className='flex gap-3 px-4 mb-5 items-start'>
                  <img src={card.icon} alt={card.text} />

                  <p className=' font-sans font-[400px] leading-[28px] text-[18px] text-black '>{card.name}</p>


                </div>


              </div>
            ))}



          </div>
          <div className=" flex items-center justify-center lg:mt-12 mt-6">
            <SecondaryButton label="Load more" onClick={() => navigate('/')} />
          </div>
        </>
      }




    </div>

  );
};

export default Card;
