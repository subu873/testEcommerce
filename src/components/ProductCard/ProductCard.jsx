import "./productCard.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ data }) => {
  return (
    <div className="product__wrapper">
      <div className="product_image_wrapper">
        <a href="/">
          <img
            src={data?.thumbnail}
            width="280"
            height="280"
            alt={data?.title}
          />
        </a>
      </div>

      <div className="product_details">
        <h3 className="product-title">
          <a href="/">{data?.title}</a>
        </h3>

        <div className="price-box">
          <span className="product-price">
            ${((data.price * (100 - data.discountPercentage)) / 100).toFixed(2)}
          </span>
          <span className="old-price">${data.price}</span>
          <div className="product_label_group">
            <div className="product_label label_sale">
              {data?.discountPercentage}% OFF
            </div>
          </div>
        </div>
        <div className="ratings-container">
          <p className="ratings">
            <FaStar size={15} /> {data.rating.toFixed(1)}
            <span>({data?.minimumOrderQuantity})</span>
          </p>
        </div>
        <div className="product-action">
          <a href="#" className="btn-icon btn-add-cart product-type-simple">
            <MdOutlineShoppingBag size={15} /> Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
