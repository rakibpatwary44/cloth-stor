import React from "react";
import { useNavigate } from "react-router";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const { title, price, image, rating, category } = item;
  console.log(item);
  return (
    <div
      onClick={() => navigate(`/product/${item.id}`)}
      className="group bg-gray-600 rounded-lg :"
    >
      <img
        className="aspect-square object-contain p-4  group-hover:scale-90 transition-all duration-200"
        src={image}
        alt=""
      />
      <div className="p-5 ">
        <h1 className="text-2xl line-clamp-2 group-hover:text-gray-500">{title}</h1>
        <h2 className="text-xl text-amber-500">{category}</h2>
        <p className="text-xl font-medium text-white/70">{price}$</p>
        <div className="flex gap-5 items-center justify-between ">
          <p className="bg-green-500 w-fit px-4 py-1 rounded-xl">
            {" "}
            🌟 {rating.rate}
          </p>
          <p className="bg-lime-600 py-1 px-4 rounded-xl w-fit">
            {rating.count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
