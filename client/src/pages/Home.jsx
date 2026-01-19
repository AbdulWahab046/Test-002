import React from "react";
import Carousel from "../components/Carousel";
import ShopBy from "../components/ShopBy";
import GenInfo, { Brands } from "../components/GenInfo";

const data = [
  {
    img: "/GenInfo/adidas.jpg",
    name: "Adidas",
    to: "/search/adidas",
    sellPrice: 100,
    discount: 10,
  },
  {
    img: "/GenInfo/nike.png",
    name: "Nike",
    to: "/search/nike",
    sellPrice: 100,
    discount: 10,
  },
  {
    img: "/GenInfo/skechers.jpg",
    name: "Skechers",
    to: "/search/skechers",
    sellPrice: 100,
    discount: 10,
  },
  {
    img: "/GenInfo/puma.jpg",
    name: "Puma",
    to: "/search/puma",
    sellPrice: 100,
    discount: 10,
  },
];

const Home = () => {
  return (
    <div className="max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full mx-auto ">
      <Carousel />
      <GenInfo />
      <Brands />
      <div className="md:w-full md:max-w-full xs:mx-2  sm:mx-auto ">
        <div className="prose prose-2xl">
          <ShopBy
            title="Best Sellers"
            filter="bestSellers"
            bestProducts={data}
          />
        </div>
        <div className="prose prose-2xl">
          <ShopBy title="Top Rated" filter="topRated" />
        </div>
      </div>
    </div>
  );
};

export default Home;
