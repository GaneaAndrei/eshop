import Image1 from "../assets/headphone.png";

const Banner=()=>{
    return(
        <div className="min-h-[550px] flex justify-center items-center py-12">
            <div className="container">
                <div className="bg-red-600 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
                    <div className="p-6 sm:p-8">
                        <p data-aos="slide-right"  className="text-sm">30% OFF</p>
                        <h1 data-aos="zoom-out" className="uppercase text-4xl lg:text-7xl font-bold">Fine Smile</h1>
                        <p data-aos="fade-up" className="text-sm">10 Jan to 28 Jan</p>
                    </div>
                    <div data-aos="zoom-in"  className="h-full flex items-center">
                        <img src={Image1} alt="" className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover" />
                    </div>
                    <div  className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                        <p data-aos="slide-right" className="font-bold text-xl">Air Solo Bass</p>
                        <p data-aos="fade-up" className="text-3xl sm:text-5xl font-bold">Winter Salte </p>
                        <p data-aos="fade-up" className="text-sm tracking-wide leading-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Eaque reiciendis</p>
                        <div data-aos="fade-up" data-aos-offset="0">
                            <button className="text-red-600 bg-white py-2 px-4 rounded-full">Shop Now </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner

