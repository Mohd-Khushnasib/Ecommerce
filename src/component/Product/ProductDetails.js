import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { data } from "../ProductData/data.js";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [quantity, setquantity] = useState(1);
  const [product, setproduct] = useState([]);
  
  // params here
  const { id } = useParams();
  // console.log("params: ", id);
  useEffect(() => {
    const productdata = data?.find((item) => item.id == id);
    // console.log(productdata);
    setproduct(productdata);
  }, [id,product]);

  const Increase = () => {
    setquantity(quantity + 1);
  };
  const Decrease = () => {
    setquantity(quantity - 1);
  };

  return (
    <>
      <div className="container">
        <div className="heading-section">
          <h2>Product Details</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div id="thumb" className="owl-carousel product-thumb">
              <div className="item">
                <img src={product.img}/>
              </div>
              <div className="item">
                <img src={product.img}/>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="reviews-counter">
                  <div className="rate">
                    <input
                      type="radio"
                      id="star5"
                      name="rate"
                      defaultValue={5}
                      defaultChecked=""
                    />
                    <label htmlFor="star5" title="text">
                      5 stars
                    </label>
                    <input
                      type="radio"
                      id="star4"
                      name="rate"
                      defaultValue={4}
                      defaultChecked=""
                    />
                    <label htmlFor="star4" title="text">
                      4 stars
                    </label>
                    <input
                      type="radio"
                      id="star3"
                      name="rate"
                      defaultValue={3}
                      defaultChecked=""
                    />
                    <label htmlFor="star3" title="text">
                      3 stars
                    </label>
                    <input
                      type="radio"
                      id="star2"
                      name="rate"
                      defaultValue={2}
                    />
                    <label htmlFor="star2" title="text">
                      2 stars
                    </label>
                    <input
                      type="radio"
                      id="star1"
                      name="rate"
                      defaultValue={1}
                    />
                    <label htmlFor="star1" title="text">
                      1 star
                    </label>
                  </div>
                  <span>3 Reviews</span>
                </div>
                <div className="product-price-discount">
                  <img src={product.img}/>
                  <span>${product.price}</span>
                  <span className="line-through">$29.00</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="product-count">
                <label htmlFor="size">Quantity</label>

                <button className="btn" onClick={Decrease}>
                  -
                </button>
                {quantity}
                <button className="btn" onClick={Increase}>
                  +
                </button>

                <a href="#" className="round-black-btn">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
