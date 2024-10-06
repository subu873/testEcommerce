import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import HeroSection from "../components/HeroSection/HeroSection";
import Benefits from "../components/Benefits/Benefits";
import axios from "axios";

const LandingPage = () => {
  const [productsData, setProductsData] = useState([]);

  const handleGetAllProducts = () => {
    const apiPath = "https://dummyjson.com/products";
    axios
      .get(apiPath)
      ?.then((res) => {
        if (res?.status === 200) {
          setProductsData(res?.data?.products);
        }
      })
      ?.catch((err) => {
        console.error("Failed to get data");
      });
  };

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  return (
    <div className="">
      <HeroSection />
      <Benefits />
      <div className="container">
        <h4 className="product__main_heading">Featured Products</h4>
        <div className="products__grid">
          {!!productsData &&
            productsData.length > 0 &&
            productsData?.slice(0, 9)?.map((item, index) => {
              return <ProductCard data={item} key={item?.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
