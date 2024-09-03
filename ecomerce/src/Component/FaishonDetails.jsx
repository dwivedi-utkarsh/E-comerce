import React from 'react';
import { useParams } from 'react-router-dom';

import faishon from '../../src/assets/emages/faishon.png';
import faishon1 from '../../src/assets/emages/faishon1.png';
import faishon2 from '../../src/assets/emages/faishon2.png';
import faishon3 from '../../src/assets/emages/faishon3.png';
import faishon4 from '../../src/assets/emages/faishon4.png';


const Productsdata = [
  {
    imgUrl: faishon,
    title: "Full Combo",
    cate: "Fashion",
    price: 50000,
    id: 24,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: faishon1,
    title: "Three-Piece Suit",
    cate: "Fashion",
    price: 5000,
    id: 25,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: faishon2,
    title: "Kid's T-Shirt",
    cate: "Fashion",
    price: 500,
    id: 26,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: faishon3,
    title: "Kid's Shirt",
    cate: "Fashion",
    price: 400,
    id: 27,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: faishon4,
    title: "Jockey Pants",
    cate: "Fashion",
    price: 40000,
    id: 28,
    button: "Add to cart",
    button1: "View",
  },
]

const FaishonDetails = () => {
  const { id } = useParams();
  const product = Productsdata.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card h-100 text-center">
            <img 
              src={product.imgUrl} 
              alt={product.title} 
              className="card-img-top img-fluid" 
              style={{ maxHeight: '400px', objectFit: 'contain' }} 
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.cate}</p>
              <p className="card-text">{product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaishonDetails;
