import React from 'react'
import Footer from './Footer';
import { useNavigate } from 'react-router';
import '../Component/Faishon.css'
import { useDispatch,useSelector } from 'react-redux';
import { AddToCart } from "../Component/Redux/CartSlice";

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






const Faishon = () => {


  const navigate = useNavigate()

  const handleView = (id) => {
    navigate(`/FaishonDetails/${id}`)
  }

  const ProductsData = useSelector((state) => state.allCart.ProductsData);

  const dispatch = useDispatch();
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {Productsdata.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img 
                src={product.imgUrl} 
                alt={product.title} 
                className="card-img-top img-fluid" 
                style={{ height: 'auto', maxHeight: '200px', objectFit: 'contain' }} 
              />
              <div className="card-body">
                <h5 className="card-title">{product.title} {product.price}</h5>
                <div> 
                <button className='btn btn-primary'  onClick={() => dispatch(AddToCart(product))}>{product.button}</button>
                <div>
                  <button className='btn btn-secondary' onClick={() => handleView(product.id)}>{product.button1}</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Faishon;
