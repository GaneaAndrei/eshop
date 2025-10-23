import ProductsCard from "./ProductsCard"
import Img1 from "../assets/headphones1.jpg";
import Img2 from "../assets/headphones2.jpg";
import Img3 from "../assets/headphones3.jpg";
import Img4 from "../assets/headphones4.jpg";
import Img5 from "../assets/headphones5.jpg";
import Img6 from "../assets/headphones6.jpg";
import Img7 from "../assets/headphones7.jpg";
import Img8 from "../assets/watch1.jpg";

const ProductsData=[
    {
        id:1,
        img:Img1,
        title:"Boat Headphone",
        price:"120",
        aosDelay:"200"
    },
    {
        id:2,
        img:Img2,
        title:"Rocky Mountain",
        price:"420",
        aosDelay:"400"
    },
    {
        id:3,
        img:Img3,
        title:"Goggles",
        price:"320",
        aosDelay:"400"
    },
    {
        id:4,
        img:Img4,
        title:"Printed",
        price:"220",
        aosDelay:"600"
    }

]

const ProductsData2=[
    {
        id:1,
        img:Img5,
        title:"Boat Headphone",
        price:"120",
        aosDelay:"200"
    },
    {
        id:2,
        img:Img6,
        title:"Rocky Mountain",
        price:"420",
        aosDelay:"400"
    },
    {
        id:3,
        img:Img7,
        title:"Goggles",
        price:"320",
        aosDelay:"400"
    },
    {
        id:4,
        img:Img8,
        title:"Printed",
        price:"220",
        aosDelay:"600"
    }

]

const Products=()=>{
    return(
        <div className="container">
            <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
                <h1 className="text-3xl font-bold lg:text-4xl">Our Products</h1>
                <p className="text-xs text-gray-400">Explore Our Products</p>
            </div>
            <ProductsCard data={ProductsData}/>
            <ProductsCard data={ProductsData2}/>

        </div>
    )
}
export default Products