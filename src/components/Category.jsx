import Image1 from "../assets/earphone.png";
import Image2 from "../assets/gadget.png";
import Image3 from "../assets/macbook.png";
import Image4 from "../assets/ps5.png";
import Image5 from "../assets/virtual.png";
import Image6 from "../assets/speaker.png";
import Button from "./Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
                <div>
                    <div className="mb-4">
                        <p className="mb-[2px] text-gray-400">Enjoy</p>
                        <p className="text-2xl font-semibold mb-[2px] ">With</p>
                        <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Earphone</p>
                        <Button text="Browse" bgColor="bg-red-600" textColor="text-white"/>
                    </div>
                </div>
                <img src={Image1} alt="" className="w-[320px] absolute bottom-0" />
            </div>
            <div className="py-10 pl-5 bg-gradient-to-br from-red-600/90 to-red-600/70 text-white rounded-3xl relative h-[320px] flex items-end">
                <div>
                    <div className="mb-4">
                        <p className="mb-[2px] text-white">Enjoy</p>
                        <p className="text-2xl font-semibold mb-[2px] ">With</p>
                        <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Gadget</p>
                        <Button text="Browse" bgColor="bg-white" textColor="text-yellow-400"/>
                    </div>
                </div>
                <img src={Image2} alt="" className="w-[320px] absolute -right-4 lg:top-[40px]" />
            </div>
            <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-yellow-400/90 to-yellow-400/70 text-white rounded-3xl relative h-[320px] flex items-end">
                <div >
                    <div className="mb-4">
                        <p className=" text-white">Enjoy</p>
                        <p className="text-2xl font-semibold mb-[2px] ">With</p>
                        <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Laptop</p>
                        <Button text="Browse" bgColor="bg-white" textColor="text-yellow-600"/>
                    </div>
                </div>
                <img src={Image3} alt="" className="w-[320px] absolute top-1/2 -translate-y-1/2 -right-0" />
            </div>
        </div>
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="py-10 pl-5 sm:col-span-2 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
                <div>
                    <div className="mb-4">
                        <p className="mb-[2px] text-gray-400">Enjoy</p>
                        <p className="text-2xl font-semibold mb-[2px] ">With</p>
                        <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Earphone</p>
                        <Button text="Browse" bgColor="bg-red-600" textColor="text-white"/>
                    </div>
                </div>
                <img src={Image4} alt="" className="w-[320px] absolute bottom-0" />
            </div>
            <div className="py-10 pl-5 bg-gradient-to-br from-green-600/90 to-green-600/70 text-white rounded-3xl relative h-[320px] flex items-start">
                <div>
                    <div className="mb-4">
                        <p className="mb-[2px] text-white">Enjoy</p>
                        <p className="text-2xl font-semibold mb-[2px] ">With</p>
                        <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Gadget</p>
                        <Button text="Browse" bgColor="bg-white" textColor="text-green-600"/>
                    </div>
                </div>
                <img src={Image5} alt="" className="w-[320px] absolute -right-4 lg:top-[40px]" />
            </div>
            <div className=" py-10 pl-5 bg-gradient-to-br from-blue-600/90 to-blue-600/70 text-white rounded-3xl relative h-[320px] flex items-start">
                <div >
                    <div className="mb-4">
                        <p className=" text-white">Enjoy</p>
                        <p className="text-2xl font-semibold mb-[2px] ">With</p>
                        <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Laptop</p>
                        <Button text="Browse" bgColor="bg-white" textColor="text-blue-600"/>
                    </div>
                </div>
                <img src={Image6} alt="" className="w-[320px] absolute bottom-0 right-0" />
            </div>
        </div>
      </div>
    </div>
  );
};
export default Category