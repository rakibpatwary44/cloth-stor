import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "../Loader";

const Product = () => {
    
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);
  const fetchData = async () => {
    setLoader(true);
    const res = await axios("https://fakestoreapi.com/products");
    setProduct(res.data);
    setLoader(false);
  };
  console.log(product);
  useEffect(() => {
    fetchData();
  }, []);

  if (loader) return <Loader className={"p-20"} />;

  return (
    <div
      className="grid grid-cols-5 gap-5 p-5 max-[1200px]
    :grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[300px]:grid-cols-1 max-[600px]:p-2"
    >
      {product.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </div>
  );
};

export default Product;
