import { Fragment, useEffect, useState } from "react"
import "../assets/css/productDetails.css"
import { LuShoppingCart } from "react-icons/lu";
import axios from "axios";
import ProductCard from "../components/ProductCard/ProductCard";

const ProductDetailModal = () => {

    const [productsData, setProductsData] = useState([])

    const handleGetAllProducts = () => {
        const apiPath = "https://dummyjson.com/products"
        axios.get(apiPath)?.then((res) => {
            if (res?.status === 200) {
                setProductsData(res?.data?.products)
            }
        })?.catch((err) => {
            console.error("Failed to get data")
        })
    }

    useEffect(() => {
        handleGetAllProducts()
    }, [])


    return (
        <Fragment>
            <div className="container mt-5 pt-5">
                <div className="card bg-white">
                    <div class="product-single-container product-single-default mt-4">
                        <div class="row">
                            <div class="col-lg-5 col-md-6 product-single-gallery">
                                <div class="product-slider-container">
                                    <div class="label-group">
                                        <div class="product-label label-hot">HOT</div>
                                        <div class="product-label label-sale">
                                            -16%
                                        </div>
                                    </div>
                                    <div class="product-single">
                                        <div class="product-item">
                                            <img class="product-single-image"
                                                src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-2-big.jpg"
                                                width="468" height="468"
                                                alt="product" />
                                        </div>
                                        <div className="produt-thumb">
                                            <div className="thumb-image-block active">
                                                <img class="product-single-image"
                                                    src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-2-big.jpg"
                                                    width="110" height="110"
                                                    alt="product" />
                                            </div>
                                            <div className="thumb-image-block">
                                                <img class="product-single-image"
                                                    src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-2-big.jpg"
                                                    width="110" height="110"
                                                    alt="product" />
                                            </div>
                                            <div className="thumb-image-block">
                                                <img class="product-single-image"
                                                    src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-2-big.jpg"
                                                    width="110" height="110"
                                                    alt="product" />
                                            </div>
                                            <div className="thumb-image-block">
                                                <img class="product-single-image"
                                                    src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-2-big.jpg"
                                                    width="110" height="110"
                                                    alt="product" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-7 col-md-6 product-single-details">
                                <h1 class="product-title">Men Black Sports Shoes</h1>

                                <hr class="short-divider" />

                                <div class="price-box">
                                    <span class="old-price">$1,999.00</span>
                                    <span class="new-price">$1,699.00</span>
                                </div>


                                <div class="product-desc">
                                    <p>
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada
                                        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
                                        ultricies eget, tempor sit amet, ante. Donec eu libero
                                        sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
                                        placerat eleifend leo.
                                    </p>
                                </div>

                                <div class="product-action">
                                    <div className="product-count-block">
                                        <div class="input-group">
                                            <button class="btn-decrement count-btn">-</button>
                                            <input type="number" class="horizontal-quantity form-control quantity-input" value="1" min="1" max="10" />
                                            <button class="btn-increment count-btn">+</button>
                                        </div>
                                    </div>

                                    <button className="btn btn-primary">
                                        <LuShoppingCart size={25} />    Add to Cart
                                    </button>

                                </div>
                                <hr class="divider" />
                            </div>



                        </div>
                    </div>

                    <div className="related-products">
                        <h4 className="product__main_heading">Related Products</h4>
                        <div className="products__grid">
                            {!!productsData && productsData.length > 0 && productsData?.slice(0, 9)?.map((item, index) => {
                                return (
                                    <ProductCard data={item} key={item?.id} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default ProductDetailModal