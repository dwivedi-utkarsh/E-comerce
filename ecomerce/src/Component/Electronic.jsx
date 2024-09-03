import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch,useSelector } from 'react-redux';
import { AddToCart } from "../Component/Redux/CartSlice";

import airdop from '../../src/assets/emages/airdop.png';
import boat from '../../src/assets/emages/boat.png';
import boat1 from '../../src/assets/emages/boat1.png';
import boat4 from '../../src/assets/emages/boat4.png';
import sony3 from '../../src/assets/emages/sony3.png';


const Productsdata = [
  {
    imgUrl: airdop,
    title: "Airpod",
    price: "$50000",
    cate: "Electronics",
    id: 33,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: boat,
    title: "Boat",
    price: "$5000",
    cate: "Electronics",
    id: 34,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: boat1,
    title: "Boat Rokerz",
    price: "$5000",
    cate: "Electronics",
    id: 35,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: boat4,
    title: "Boat Rokerz Pro",
    price: "$6000",
    cate: "Electronics",
    id: 36,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: sony3,
    title: "Sony",
    price: "$8000",
    cate: "Electronics",
    id: 37,
    button: "Add to cart",
    button1: "View",
  },
];

const Electronic = () => {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/details/${id}`);
  };

  const ProductsData = useSelector((state) => state.allCart.ProductsData);

  const dispatch = useDispatch();

  return (
    <div className="container mt-5 pt-5"> 
      <div className="row our-products">
        {Productsdata.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 text-center">
              <img
                src={product.imgUrl}
                alt={product.title}
                className="card-img-top img-fluid"
                style={{ maxHeight: "200px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  {product.title} - {product.price}
                </h5>
                <div className="mt-auto">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-between">
                    <button className="btn btn-primary w-100 mb-2 mb-md-0"  onClick={() => dispatch(AddToCart(product))}>
                      {product.button}
                    </button>
                    <button
                      className="btn btn-secondary w-100"
                      onClick={() => handleView(product.id)}
                    >
                      {product.button1}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Electronic;