import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import HeroSection from "../components/HeroSection/HeroSection";
import Benefits from "../components/Benefits/Benefits";
import axios from "axios";
import { SAMPLE_PRODUCTS } from "../utils/sampleProducts";

const LandingPage = () => {
  const [productsData, setProductsData] = useState(SAMPLE_PRODUCTS);

  const handleGetAllProducts = () => {
    const apiPath =
      "https://www.nykaafashion.com/rest/appapi/V2/categories/products?PageSize=36&filter_format=v2&apiVersion=5&currency=INR&country_code=IN&deviceType=WEBSITE&sort=popularity&device_os=desktop&categoryId=10&currentPage=1&brand_filter=4315";
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
    // handleGetAllProducts();
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
            productsData?.slice(0, 20)?.map((item, index) => {
              return <ProductCard data={item} key={item?.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
