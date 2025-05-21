import React from "react";
import {
  LiaStar,
  LiaStarHalf,
  LiaStarHalfAltSolid,
  LiaStarHalfSolid,
  LiaStarSolid,
} from "react-icons/lia";

const maxRating = 5;
export const Star = ({ averageRating, totalReviews }) => {
  if (averageRating < 0 || averageRating > 5) {
    return "";
  }

  const halfStar = !Number.isInteger(averageRating);
  const fullStar = Math.floor(averageRating);
  const emptyStar = maxRating - fullStar - (halfStar ? 1 : 0);
  const showStars = [];

  for (let i = 0; i < fullStar; i++) {
    showStars.push(<LiaStarSolid className="text-warning" />);
  }
  if (halfStar) {
    showStars.push(<LiaStarHalfAltSolid className="text-warning" />);
  }

  for (let i = 0; i < emptyStar; i++) {
    showStars.push(<LiaStar />);
  }
  console.log(halfStar, fullStar, emptyStar);
  return (
    <>
      {showStars}
      {"   "}
      {totalReviews && totalReviews + " Reviews"}
    </>
  );
};
