import { Fragment, useEffect, useState } from "react";
import "../assets/css/productDetails.css";
import { LuShoppingCart } from "react-icons/lu";
import axios from "axios";
import ProductCard from "../components/ProductCard/ProductCard";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SAMPLE_PRODUCTS } from "../utils/sampleProducts";

export const INCREMENT_CART_ITEMS = "INCREMENT_CART_ITEMS";
export const DECREMENT_CART_ITEMS = "DECREMENT_CART_ITEMS";

const ProductDetailModal = ({ data }) => {
  const [cartCount, setCartCount] = useState(1);
  const [productsData, setProductsData] = useState(SAMPLE_PRODUCTS);

  const handleGetAllProducts = () => {
    const apiPath = "https://dummyjson.com/products?limit=3";
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

  const handleChangeCart = (value) => {
    console.log("value", value);
    if (value === INCREMENT_CART_ITEMS) {
      setCartCount((prev) => prev + 1);
    } else if (value === DECREMENT_CART_ITEMS) {
      if (cartCount === 1) return;
      setCartCount((prev) => prev - 1);
    } else {
      setCartCount(value);
    }
  };

  const handleAddToCart = () => {
    let targetData = {
      cartItemCount: cartCount,
      ...data,
    };
    localStorage.setItem("cart_items", JSON.stringify(targetData));
  };

  useEffect(() => {
    // handleGetAllProducts();
  }, []);

  return (
    <Fragment>
      <div className="container mt-5 pt-5">
        <div className="card bg-white">
          <div class="product-single-container product-single-default">
            <div class="row">
              <div class="col-lg-5 col-md-6 product-single-gallery">
                <div class="product-slider-container">
                  <div class="label-group">
                    <div class="product-label label-hot">HOT</div>
                    <div class="product-label label-sale">-16%</div>
                  </div>
                  <div class="product-single">
                    <div class="product-item">
                      <img
                        class="product-single-image"
                        src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-2-big.jpg"
                        width="468"
                        height="468"
                        alt="product"
                      />
                    </div>
                    <div className="produt-thumb">
                      <div className="thumb-image-block active">
                        <img
                          class="product-single-image"
                          src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-2-big.jpg"
                          width="110"
                          height="110"
                          alt="product"
                        />
                      </div>
                      <div className="thumb-image-block">
                        <img
                          class="product-single-image"
                          src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-2-big.jpg"
                          width="110"
                          height="110"
                          alt="product"
                        />
                      </div>
                      <div className="thumb-image-block">
                        <img
                          class="product-single-image"
                          src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-2-big.jpg"
                          width="110"
                          height="110"
                          alt="product"
                        />
                      </div>
                      <div className="thumb-image-block">
                        <img
                          class="product-single-image"
                          src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-2-big.jpg"
                          width="110"
                          height="110"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-7 col-md-6 product-single-details">
                <h1 class="product-title">Men Black Sports Shoes</h1>
                {/* <hr class="short-divider" /> */}
                <div className="ratings-container">
                  <p className="ratings">
                    <FaStar size={15} /> 4.5
                    <span>(26)</span>
                  </p>
                </div>
                <div class="price-box mb-4">
                  <span class="new-price">$1,699.00</span>
                  <span class="old-price">$1,999.00</span>
                </div>

                <div class="product-desc">
                  <h3>Product Highlights:</h3>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. Aenean ultricies mi
                    vitae est. Mauris placerat eleifend leo.
                  </p>
                </div>
                <div className="d-flex gap-3">
                  <button className="w-100 buy-now-btn">
                    <MdOutlineShoppingBag size={25} /> Add to Cart
                  </button>
                  <button className="w-100 buy-now-btn">Buy Now</button>
                  {/* <button className=" buy-now-btn">
                    <FaRegHeart size={15} />
                  </button> */}
                </div>

                {/* <div class="product-action">
                  <div className="product-count-block">
                    <div class="input-group">
                      <button
                        class="btn-decrement count-btn"
                        onClick={() => handleChangeCart(DECREMENT_CART_ITEMS)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        class="horizontal-quantity form-control quantity-input"
                        value={cartCount}
                        min="1"
                        onChange={(e) => handleChangeCart(e?.target?.value)}
                      />
                      <button
                        class="btn-increment count-btn"
                        onClick={() => handleChangeCart(INCREMENT_CART_ITEMS)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button className="btn btn-primary" onClick={handleAddToCart}>
                    <LuShoppingCart size={25} />
                    Add to Cart
                  </button>
                </div> */}
                <hr class="divider" />
              </div>
            </div>
          </div>

          <div className="related-products">
            <h4 className="product__main_heading">Related Products</h4>
            <div className="products__grid">
              {!!productsData &&
                productsData.length > 0 &&
                productsData?.slice(0, 9)?.map((item, index) => {
                  return <ProductCard data={item} key={item?.id} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetailModal;
