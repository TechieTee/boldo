
import { Image } from "../assets/index";
const Partners = () => {

interface IconData {
  id: number;
  icon: any;
 
}

const brandIcons: IconData[] = [
  { id: 1, icon:   Image.Logo2 },
  { id: 2, icon:   Image.Logo3 },
  { id: 3, icon:   Image.Logo2 },
  { id: 4, icon:   Image.Logo3 },
  { id: 5, icon:   Image.Logo2 },
  { id: 6, icon:   Image.Logo3 },
];
  return (
    
    <div className="px-24 py-24  p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {brandIcons.map((brand) => (
          <div key={brand.id} className="flex flex-col items-center">
            <img src={brand.icon} className="" />
           
          </div>
        ))}
      </div>
    </div>

  );
};

export default Partners;
