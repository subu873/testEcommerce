import "./productCard.css";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ data }) => {
  return (
    <div className="product__wrapper">
      <figure>
        <a href="/">
          <img
            src={data?.thumbnail}
            width="280"
            height="280"
            alt={data?.title}
          />
        </a>
        <div className="product_label_group">
          <div className="product_label label_sale">
            -{data?.discountPercentage}%
          </div>
        </div>
      </figure>

      <div className="product_details">
        <h3 className="product-title">
          <a href="/">{data?.title}</a>
        </h3>

        <div className="price-box">
          <span className="old-price">${data.price}</span>
          <span className="product-price">
            ${((data.price * (100 - data.discountPercentage)) / 100).toFixed(2)}
          </span>
        </div>
        <div className="product-action">
          <a href="#" className="btn-icon btn-add-cart product-type-simple">
            ADD TO CART
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
