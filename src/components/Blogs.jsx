import Img1 from "../assets/blog1.jpg";
import Img2 from "../assets/blog2.jpg";
import Img3 from "../assets/blog3.jpg";

const BlogsData=[
    {
        title:"How to choose the perfect smartwatch",
        subtitle:"minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium.Porro?",
        published:"Feb 20, 2025 by Hector",
        image:Img1,
        aosDelay:"0"
    },
    {
        title:"How to choose the perfect headphones",
        subtitle:"minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium.Porro?",
        published:"Feb 20, 2025 by Trevor",
        image:Img2,
        aosDelay:"200"
    },
    {
        title:"How to choose the perfect tv",
        subtitle:"minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium.Porro?",
        published:"Feb 20, 2025 by Dexter",
        image:Img3,
        aosDelay:"400"
    }
]

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
          <h1 className="text-3xl font-bold lg:text-4xl">Our Products</h1>
          <p className="text-xs text-gray-400">Explore Our Products</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
            {
                BlogsData.map((data)=>(
                    <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.title} className="bg-white dark:bg-gray-900">
                        <div className="overflow-hidden rounded-2xl mb-2">
                            <img src={data.image} alt="" className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-xs text-gray-500 ">{data.published}</p>
                            <p className="font-bold line-clamp-1">{data.title}</p>
                            <p className="text-sm line-clamp-2 text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};
export default Blogs;
