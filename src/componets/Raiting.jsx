import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

export default function Raiting({ rating, add }) {
  return (
    <div>
      {[...Array(5)].map((_, i) => {
        return (
          <span
            key={i}
            onClick={() => {
              add(i);
            }}
          >
            {rating >= i ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        );
      })}
    </div>
  );
}
