import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
// import { emages } from '../Controller/emages';
import "../Component/Home.css";
import { useNavigate } from "react-router";
// import CartItems from "../Component/cart/CartItems";

import { useSelector, useDispatch } from "react-redux";
import { AddToCart } from "../Component/Redux/CartSlice";



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
import iphone from '../../src/assets/emages/iphone.png';
import iphone1 from '../../src/assets/emages/iphone1.png';
import iphone2 from '../../src/assets/emages/iphone2.png';
import iphone3 from '../../src/assets/emages/iphone3.png';
import iphone4 from '../../src/assets/emages/iphone4.png';
import iphone5 from '../../src/assets/emages/iphone5.png';
import hp from '../../src/assets/emages/hp.png';
import hp1 from '../../src/assets/emages/hp1.png';
import hp2 from '../../src/assets/emages/hp2.png';
import hp3 from '../../src/assets/emages/hp3.png';
import hp4 from '../../src/assets/emages/hp4.png';
import faishon from '../../src/assets/emages/faishon.png';
import faishon1 from '../../src/assets/emages/faishon1.png';
import faishon2 from '../../src/assets/emages/faishon2.png';
import faishon3 from '../../src/assets/emages/faishon3.png';
import faishon4 from '../../src/assets/emages/faishon4.png';
import shoes from '../../src/assets/emages/shoes.png';
import shoes1 from '../../src/assets/emages/shoes1.png';
import shoes2 from '../../src/assets/emages/shoes2.png';
import shoes3 from '../../src/assets/emages/shoes3.png';
import airdop from '../../src/assets/emages/airdop.png';
import boat from '../../src/assets/emages/boat.png';
import boat1 from '../../src/assets/emages/boat1.png';
import boat4 from '../../src/assets/emages/boat4.png';
import sony3 from '../../src/assets/emages/sony3.png';

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
    imgUrl: iphone,
    title: "Dell",
    cate: "Mobiles",
    price: 50000,
    id: 13,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: iphone1,
    title: "iPhone 13 Pro",
    cate: "Mobiles",
    price: 50000,
    id: 14,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: iphone2,
    title: "iPhone 11",
    cate: "Mobiles",
    price: 50000,
    id: 15,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: iphone3,
    title: "iPhone 5S",
    cate: "Mobiles",
    price: 50000,
    id: 16,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: iphone4,
    title: "iPhone 12",
    cate: "Mobiles",
    price: 50000,
    id: 17,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: iphone5,
    title: "Apple 6",
    cate: "Mobiles",
    price: 50000,
    id: 18,
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
  {
    imgUrl:  shoes1,
    title: "Addidas",
    cate: "Shoes",
    price: "$ 500",
    id: 29,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl:  shoes2,
    title: "Nike Zoom",
    cate: "Shoes",
    price: "$ 5000",
    id: 30,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: shoes3,
    title: "Nike",
    cate: "Shoes",
    price: "$ 4000",
    id: 31,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: airdop,
    title: "Shoes",
    cate: "Electronics",
    price: "$ 3000",
    id: 32,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: boat,
    title: "Airpod",
    cate: "Electronics",
    price: "$ 50000",
    id: 33,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: boat1,
    title: "Boat rokerz",
    cate: "Electronics",
    price: "$ 5000",
    id: 34,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: boat4,
    title: "Boat pro",
    cate: "Electronics",
    price: "$ 4000",
    id: 35,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: sony3,
    title: "Boat",
    cate: "Electronics",
    price: "$ 3000",
    id: 36,
    button: "Add to cart",
    button1: "View",
  },
  {
    imgUrl: shoes,
    title: "Shoes",
    cate: "Shoes",
    price: "$ 2000",
    id: 37,
    button: "Add to cart",
    button1: "View",
  },
];

const Home = () => {
  const [scroll, setScroll] = useState(false);
  const [items, setItems] = useState(Productsdata);
  // const dispatch = useDispatch();
  const navigate = useNavigate();


  const ProductsData = useSelector((state) => state.allCart.ProductsData);

  const dispatch = useDispatch();


  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY >= 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filterItems = (cateitem) => {
    if (cateitem === "All") {
      setItems(Productsdata);
    } else {
      const updateItems = Productsdata.filter(
        (curElem) => curElem.cate === cateitem
      );
      setItems(updateItems);
    }
  };

  const handleView = (id) => {
    navigate(`/HomeDetails/${id}`);
  };


  // const handleAddToCart = (product) => {
  //   dispatch(AddToCart(product));  // Corrected to `addToCart`
  // };

  return (
    <div className="container home-container mt-5 pt-5 ">
      <div className="text-center my-4">
        {/* <img src="/path/to/your/image.png" alt="Main" className="img-fluid" /> */}
      </div>

      <div className="category-products text-center">
        <h1>Our Products</h1>
        <ul className="list-unstyled d-flex justify-content-center flex-wrap">
          <li onClick={() => filterItems("All")} className="mx-2">
            All
          </li>
          <li onClick={() => filterItems("Mobiles")} className="mx-2">
            Mobiles
          </li>
          <li onClick={() => filterItems("Laptop")} className="mx-2">
            Laptop
          </li>
          <li onClick={() => filterItems("Shoes")} className="mx-2">
            Shoes
          </li>
          <li onClick={() => filterItems("Fashion")} className="mx-2">
            Fashion
          </li>
          <li onClick={() => filterItems("Electronics")} className="mx-2">
            Electronics
          </li>
        </ul>
      </div>

      <div className="container mt-4">
        <div className="row our-products">
          {items.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
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
                      <button className="btn btn-primary w-100 mb-2 mb-md-0 " onClick={() => dispatch(AddToCart(product))}>
                  


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
      </div>

      <Footer />
      <div>{/* <CartItems product={product} /> */}</div>
    </div>
  );
};

export default Home;
