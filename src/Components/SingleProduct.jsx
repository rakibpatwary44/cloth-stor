import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "./Loader";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);
  const fetchData = async () => {
    setLoader(true);
    const res = await axios(`https://fakestoreapi.com/products/${id}`);
    setProduct(res.data);
    setLoader(false);
  };
  console.log(product);
  useEffect(() => {
    fetchData();
  }, []);

  if (loader) return <Loader className={"p-20"} />;

  return (
    <div className="group rounded-lg flex flex-col justify-center items-center ">
      <img
        className="aspect-square object-contain p-4 "
        src={product?.image}
        alt=""
      />
      <div className="p-5 flex flex-col items-center max-w-240 ">
        <h1 className="text-3xl ">{product?.title}</h1>
        <h2 className="text-xl text-amber-500 mt-2">{product?.category}</h2>
        <p className="text-xl font-medium text-white/70 mt-4">
          {product?.price}$
        </p>
        <div className="flex gap-5 items-center mt-4 ">
          <p className="bg-green-500 w-fit px-4 py-1  rounded-xl">
            {" "}
            🌟 {product?.rating?.rate}
          </p>
          <p className="bg-lime-600 py-1 px-4 rounded-xl w-fit">
            {product?.rating?.count}
          </p>
        </div>
        <p className="mt-4">{product?.description}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
