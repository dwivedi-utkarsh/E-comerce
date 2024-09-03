import React from "react";
import { useParams } from "react-router-dom";

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

const Details = () => {
  const { id } = useParams();
  const product = Productsdata.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container  my-5">
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 col-lg-6">
      <div className="card h-100 text-center my-5">
        <img 
          src={product.imgUrl} 
          alt={product.title} 
          className="card-img-top img-fluid items-center" 
          style={{ maxHeight: '400px', objectFit: 'contain' }} 
        />
        <div className="card-body ">
          <h5 className="card-title">
            {product.title} - {product.price}
          </h5>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default Details;
