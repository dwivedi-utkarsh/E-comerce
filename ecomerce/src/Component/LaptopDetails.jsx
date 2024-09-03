import React from 'react';
import { useParams } from 'react-router-dom';
import '../Component/LaptopDetails.css'

import apple from '../../src/assets/emages/apple.png';
import apple1 from '../../src/assets/emages/apple1.png';
import apple2 from '../../src/assets/emages/apple2.png';
import apple3 from '../../src/assets/emages/apple3.png';
import apple4 from '../../src/assets/emages/apple4.png';
import apple5 from '../../src/assets/emages/apple5.png';
import dell from '../../src/assets/emages/dell.png';
import dell1 from '../../src/assets/emages/dell1.png';
import dell3 from '../../src/assets/emages/dell3.png';
import dell4 from '../../src/assets/emages/dell4.png';
import dell5 from '../../src/assets/emages/dell5.png';
import hp from '../../src/assets/emages/hp.png';
import hp1 from '../../src/assets/emages/hp1.png';
import hp2 from '../../src/assets/emages/hp2.png';
import hp3 from '../../src/assets/emages/hp3.png';
import hp4 from '../../src/assets/emages/hp4.png';


const Productsdata = [
  {
    imgUrl: apple,
    title: "Macbook Pro",
    cate: "Laptop",
    price: 150000,
    id: 1,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: apple1,
    title: "Macbook Pro",
    cate: "Laptop",
    price: 150000,
    id: 2,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: apple2,
    title: "Macbook Air",
    cate: "Laptop",
    price: 150000,
    id: 3,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: apple3,
    title: "Macbook Pro",
    cate: "Laptop",
    price: 150000,
    id: 4,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: apple4,
    title: "Macbook Pro",
    cate: "Laptop",
    price: 150000,
    id: 5,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: apple5,
    title: "Macbook Pro",
    cate: "Laptop",
    price: 150000,
    id: 6,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: dell,
    title: "Dell Inspiron",
    cate: "Laptop",
    price: 50000,
    id: 7,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: dell1,
    title: "Dell Inspiron 5430",
    cate: "Laptop",
    price: 50000,
    id: 8,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: dell3,
    title: "Dell Inspiron 15300",
    cate: "Laptop",
    price: 50000,
    id: 10,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: dell4,
    title: "Dell",
    cate: "Laptop",
    price: 50000,
    id: 11,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: dell5,
    title: "Macbook Pro",
    cate: "Laptop",
    price: 50000,
    id: 12,
    button: "Add to cart",
    button1: "View",
  },



 
 
  
  
 
 
  {
    imgUrl: hp,
    title: "HP",
    cate: "Laptop",
    price: 50000,
    id: 19,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: hp1,
    title: "HP Gaming",
    cate: "Laptop",
    price: 50000,
    id: 20,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: hp2,
    title: "HP Pavilion DV-7",
    cate: "Laptop",
    price: 50000,
    id: 21,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: hp3,
    title: "HP",
    cate: "Laptop",
    price: 50000,
    id: 22,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: hp4,
    title: "HP Pavilion",
    cate: "Laptop",
    price: 50000,
    id: 23,
    button: "Add to cart",
    button1: "View",
  },
]

const LaptopDetails = () => {
  const { id } = useParams();

  const product = Productsdata.find((item) => item.id === parseInt(id));
  return (
    <div className="container mt-5 pt-5">
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 col-lg-6">
      <div key={product.id} className="card h-100 text-center">
        <div 
          className="d-flex justify-content-center align-items-center"
          style={{ height: '400px' }}  // Ensures the image container has a fixed height
        >
          <img 
            src={product.imgUrl} 
            className="card-img-top img-fluid" 
            style={{ maxHeight: '100%', objectFit: 'contain' }} 
            alt={product.title} 
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.price}</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default LaptopDetails;
