import React from 'react';
import './Mobile.css'; 
import { useParams } from 'react-router-dom';


import iphone16 from '../../src/assets/emages/apple/iphone16.png';
import iphone6 from '../../src/assets/emages/apple/iphone6.png';
import iphone11 from '../../src/assets/emages/apple/iphone11.png';
import iphone13 from '../../src/assets/emages/apple/iphone13.png';
import iphone14 from '../../src/assets/emages/apple/iphone14.png';
import googlePixel from '../../src/assets/emages/google pixel/googlepixel.png';
import googlePixel41 from '../../src/assets/emages/google pixel/googlepixel41.png';
import nothing from '../../src/assets/emages/nothing/nothing.png';
import nothing2 from '../../src/assets/emages/nothing/nothing2.png';
import realmeC33 from '../../src/assets/emages/realme/realmec33.png';
import realme6 from '../../src/assets/emages/realme/realme6.png';
import realme8 from '../../src/assets/emages/realme/realme8.png';
import realme10Pro from '../../src/assets/emages/realme/realme10pro.png';
import samsungGalaxy from '../../src/assets/emages/samsung/samsunggalexy.png';
import vivoS21 from '../../src/assets/emages/Vivo/vivos21.png';
import vivoV20 from '../../src/assets/emages/Vivo/vivov20.png';
import vivoS1Pro from '../../src/assets/emages/Vivo/vivos1pro.png';
import vivoS1 from '../../src/assets/emages/Vivo/vivos1.png';

const Productsdata = [
  {
    id: 1,
    imgUrl: iphone16,
    Brand: "Apple 16",
    price: 150000,
    cate: "apple",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 2,
    imgUrl: iphone6,
    Brand: "Apple 6",
    price: 15000,
    cate: "apple",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 3,
    imgUrl: iphone11,
    Brand: "Apple 11",
    price: 15000,
    cate: "apple",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 4,
    imgUrl: iphone13,
    Brand: "Apple 13",
    price: 150000,
    cate: "apple",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 5,
    imgUrl: iphone14,
    Brand: "Apple 14",
    price: 150000,
    cate: "apple",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 6,
    imgUrl: googlePixel,
    Brand: "Google Pixel",
    price: 150000,
    cate: "Google Pixel",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 7,
    imgUrl: googlePixel41,
    Brand: "Google Pixel 4",
    price: 150000,
    cate: "Google Pixel",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 8,
    imgUrl: nothing,
    Brand: "Nothing",
    price: 150000,
    cate: "Nothing",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 9,
    imgUrl: nothing2,
    Brand: "Nothing 2",
    price: 150000,
    cate: "Nothing",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 10,
    imgUrl: realmeC33,
    Brand: "Realme C33",
    price: 150000,
    cate: "Realme",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 11,
    imgUrl: realme6,
    Brand: "Realme 6",
    price: 150000,
    cate: "Realme",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 12,
    imgUrl: realme8,
    Brand: "Realme 8",
    price: 150000,
    cate: "Realme",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 13,
    imgUrl: realme10Pro,
    Brand: "Realme 10 Pro",
    price: 150000,
    cate: "Realme",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 14,
    imgUrl: samsungGalaxy,
    Brand: "Samsung Galaxy",
    price: 150000,
    cate: "Samsung",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 15,
    imgUrl: vivoS21,
    Brand: "Vivo S21",
    price: 150000,
    cate: "Vivo",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 16,
    imgUrl: vivoV20,
    Brand: "Vivo V20",
    price: 150000,
    cate: "Vivo",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 17,
    imgUrl: vivoS1Pro,
    Brand: "Vivo S1 Pro",
    price: 150000,
    cate: "Vivo",
    button: "View",
    button1: "Add to cart"
  },
  {
    id: 18,
    imgUrl: vivoS1,
    Brand: "Vivo S1",
    price: 150000,
    cate: "Vivo",
    button: "View",
    button1: "Add to cart"
  },
];

const MobileDetails = () => {


    const {id} = useParams()
    const product = Productsdata.find((items) => items.id === parseInt(id))

    if(!product) {
        return <div>product not found</div>
        
    }
  return (
    <div className="container mt-5 pt-5">
     
     
            <div className="card h-100">
              <img 
                src={product.imgUrl} 
                className="card-img-top img-fluid" 
                alt={product.Brand} 
                style={{ maxHeight: '200px', objectFit: 'contain' }} 
              />
              <div className="card-body">
                <h5 className="card-title">{product.Brand}</h5>
                <p className="card-text">price: ₹{product.price}</p>
                
              </div>
            </div>
          
    
    
    
    </div>
  );
};

export default MobileDetails;

